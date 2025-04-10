// src/app/core/services/auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import UserType, { User, UserRole } from '../../shared/models/user/user.component';
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
  
  constructor(private http: HttpClient, private router: Router) {
    this.loadUserFromStorage();
  }
  
  private loadUserFromStorage(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      // Ideális esetben itt token validálás lenne
      // Most egyszerűsítve csak az alapján ellenőrizzük, hogy van-e token
      this.getUserProfile().subscribe();
    }
  }
  
  isLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<{ token: string, user: User }>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap(response => {
          localStorage.setItem(this.TOKEN_KEY, response.token);
          this.currentUserSubject.next(response.user);
        }),
        map(response => response.user),
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
    return this.http.post<{ token: string, user: User }>(`${environment.apiUrl}/auth/register`, userData)
      .pipe(
        tap(response => {
          localStorage.setItem(this.TOKEN_KEY, response.token);
          this.currentUserSubject.next(response.user);
        }),
        map(response => response.user),
        catchError(this.handleError)
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  getUserProfile(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/me`)
      .pipe(
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