// src/app/core/services/auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError, from } from 'rxjs';
import { catchError, map, tap, switchMap, take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import UserType, { OrganizerType, User, UserRole } from '../../shared/models/user/user.component';
import { environment } from '../../../environments/environment.prod';

interface AuthResponse {
  token: string;
  user: User;
}


@Injectable({
  providedIn: 'root'
})  
export class AuthService {
  
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private readonly TOKEN_KEY = 'auth_token';
  currentUserValue: any;
  
  constructor(
    private http: HttpClient, 
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.initializeAuthState();
  }

  private initializeAuthState(): void {
    this.afAuth.authState.pipe(
      switchMap(firebaseUser => {
        if (firebaseUser) {
          return this.getUserProfile(firebaseUser.uid);
        } else {
          this.currentUserSubject.next(null);
          return of(null);
        }
      })
    ).subscribe();
  }
  
  private loadUserFromStorage(): void {
    this.afAuth.authState.pipe(
      take(1),
      switchMap(user => {
        if (user) {
          return this.getUserProfile(user.uid);
        }
        return of(null);
      })
    ).subscribe(user => {
      if (user) {
        this.currentUserSubject.next(user);
      }
    });
  }
  
  isLoggedIn(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => !!user)
    );
  }

  login(email: string, password: string): Observable<User> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      switchMap(userCredential => {
        if (userCredential.user) {
          return this.getUserProfile(userCredential.user.uid);
        }
        return throwError(() => new Error('No user returned from authentication'));
      }),
      catchError(this.handleError)
    );
  }

  register(userData: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthDate: Date;
    userType: UserType;
    organizerType?: string;
  }): Observable<User> {
    return from(this.afAuth.createUserWithEmailAndPassword(userData.email, userData.password)).pipe(
      switchMap(userCredential => {
        if (userCredential.user) {
          const today = new Date();

          const newUser: User = {
            id: userCredential.user.uid,
            birthDate: userData.birthDate,
            email: userData.email,
            nev: userData.username,
            userType: userData.userType,
            userRole: UserRole.SZULO,
            organizerType: OrganizerType.CAMP_ANIMATOR, // Default role
            telefonszam: "06621234567",
            regisztracioIdopontja: new Date(),
            aktivitas: true
          };
          return this.http.post<User>(`${environment.apiUrl}/users`, newUser);
        }
        return throwError(() => new Error('Registration failed'));
      }),
      tap(user => this.currentUserSubject.next(user)),
      catchError(this.handleError)
    );
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut()).pipe(
      tap(() => {
        this.currentUserSubject.next(null);
        this.router.navigate(['/']);
      })
    );
  }

  // Firebase specific methods
  sendPasswordResetEmail(email: string): Observable<void> {
    return from(this.afAuth.sendPasswordResetEmail(email));
  }

  getCurrentFirebaseUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  // methods not directly using firebase
  getUserProfile(uid: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${uid}`).pipe(
      tap(user => this.currentUserSubject.next(user)),
      catchError(error => {
        this.logout();
        return this.handleError(error);
      })
    );
  }

  updateUserProfile(userData: Partial<User>): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users/me`, userData)
      .pipe(
        tap(user => this.currentUserSubject.next(user)),
        catchError(this.handleError)
      );
  }

  deleteAccount(): Observable<boolean> {
    return this.http.delete<void>(`${environment.apiUrl}/users/me`)
      .pipe(
        tap(() => this.logout()),
        map(() => true),
        catchError(this.handleError)
      );
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  hasUserType(userType: UserType): boolean {
    const user = this.currentUserSubject.value;
    return !!user && user.userType === userType;
  }

  isAdmin(): boolean {
    return this.hasUserType(UserType.ADMIN);
  }

  isMinor(): boolean {
    const user = this.currentUserSubject.value;
    if (!user) return false;
    
    const birthDate = new Date(user.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age < 18;
  }

  uploadParentConsentForm(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('consentForm', file);

    return this.http.post<{ fileUrl: string }>(`${environment.apiUrl}/users/consent-form`, formData)
      .pipe(
        map(response => response.fileUrl),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ismeretlen hiba történt';
    
    if (error.error instanceof ErrorEvent) {
      // Kliens oldali hiba
      errorMessage = `Hiba: ${error.error.message}`;
    } else {
      // Backend hiba
      errorMessage = `${error.status}: ${error.error?.message || 'Szerver hiba történt'}`;
    }
    
    return throwError(() => new Error(errorMessage));
  }













  public get getCurrentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  hasRole(role: UserRole): boolean {
    return this.currentUserValue?.szerepkor === role;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  updateProfile(user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/profile`, user)
      .pipe(
        tap(updatedUser => {
          const currentUser = this.currentUserValue;
          if (currentUser) {
            const mergedUser = { ...currentUser, ...updatedUser };
            localStorage.setItem('currentUser', JSON.stringify(mergedUser));
            this.currentUserSubject.next(mergedUser);
          }
        })
      );
  }

  refreshToken(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/refresh-token`, {})
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
        }),
        catchError(error => {
          this.logout();
          return of(error);
        })
      );
  }
}