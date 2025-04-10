// src/app/core/services/auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { User, UserType } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private readonly API_URL = 'https://api.nyaritaborfoglalo.com';
  private readonly TOKEN_KEY = 'auth_token';

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

  login(email: string, password: string): Observable<User> {
    return this.http.post<{ token: string, user: User }>(`${this.API_URL}/auth/login`, { email, password })
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
    return this.http.post<{ token: string, user: User }>(`${this.API_URL}/auth/register`, userData)
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
    return this.http.get<User>(`${this.API_URL}/users/me`)
      .pipe(
        tap(user => this.currentUserSubject.next(user)),
        catchError(error => {
          this.logout();
          return this.handleError(error);
        })
      );
  }

  updateUserProfile(userData: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/users/me`, userData)
      .pipe(
        tap(user => this.currentUserSubject.next(user)),
        catchError(this.handleError)
      );
  }

  deleteAccount(): Observable<boolean> {
    return this.http.delete<void>(`${this.API_URL}/users/me`)
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

    return this.http.post<{ fileUrl: string }>(`${this.API_URL}/users/consent-form`, formData)
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
}