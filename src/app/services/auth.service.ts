// core/services/auth.service.ts
import { Injectable } from '@angular/core';
import UserType, { User, UserRole } from '../shared/models/user/user.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap, map, catchError, throwError, of } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  authState,
  User as FirebaseUser,
  UserCredential,
  createUserWithEmailAndPassword
} from '@angular/fire/auth';
import {
  Firestore,
  collection,
  doc,
  setDoc
} from '@angular/fire/firestore';

interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uploadParentConsentForm(file: File): Observable<string> | void {
    const formData = new FormData();
    formData.append('consentForm', file);

    // return this.http.post<{ fileUrl: string }>(`${environment.apiUrl}/users/consent-form`, formData)
    //   .pipe(
    //     map(response => response.fileUrl),
    //     catchError(this.handleError)
    //   );
  }

  currentUser: Observable<FirebaseUser | null>;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {
    this.currentUser = authState(this.auth);
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    localStorage.setItem('isLoggedIn', 'false');
    return signOut(this.auth).then(() => {
      this.router.navigateByUrl('/home');
    });
  }
  userData!: User;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private readonly TOKEN_KEY = 'auth_token';
  currentUserValue: any;

  async signUp(email: string, password: string, userData: Partial<User>): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      await this.createUserData(userCredential.user.uid, {
        ...userData,
        id: userCredential.user.uid,
        email: email,
        createdCamps: [],
      });

      return userCredential;
    } catch (error) {
      console.error('Hiba a regisztráció során:', error);
      throw error;
    }
  }

  isLoggedIn(): Observable<FirebaseUser | null> {
    return this.currentUser;
  }

  updateLoginStatus(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }

  private async createUserData(userId: string, userData: Partial<User>): Promise<void> {
    const userRef = doc(collection(this.firestore, 'Users'), userId);

    return setDoc(userRef, userData);
  }

  /* régi saját methodok */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
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
}