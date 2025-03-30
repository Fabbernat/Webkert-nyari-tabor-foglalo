// services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { User, UserType } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private userTypeSubject = new BehaviorSubject<UserType | null>(null);
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  currentUser$ = this.currentUserSubject.asObservable();
  userType$ = this.userTypeSubject.asObservable();
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.checkAuthStatus();
  }

  checkAuthStatus(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.http.get<User>(`${this.apiUrl}/me`).pipe(
        tap(user => {
          this.currentUserSubject.next(user);
          this.userTypeSubject.next(user.userType);
          this.isLoggedInSubject.next(true);
        }),
        catchError(() => {
          this.logout();
          return of(null);
        })
      ).subscribe();
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<{token: string, user: User}>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.currentUserSubject.next(response.user);
        this.userTypeSubject.next(response.user.userType);
        this.isLoggedInSubject.next(true);
      }),
      map(response => response.user)
    );
  }

  register(userData: any): Observable<User> {
    return this.http.post<{token: string, user: User}>(`${this.apiUrl}/register`, userData).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.currentUserSubject.next(response.user);
        this.userTypeSubject.next(response.user.userType);
        this.isLoggedInSubject.next(true);
      }),
      map(response => response.user)
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.userTypeSubject.next(null);
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/bejelentkezes']);
  }

  getUserTypeLabel(userType: UserType | null = this.userTypeSubject.value): string {
    if (!userType) return '';
    
    const labels = {
      [UserType.SZULO]: 'Szülő',
      [UserType.FIATAL]: 'Fiatal',
      [UserType.PEDAGOGUS]: 'Pedagógus',
      [UserType.ONKENTES]: 'Önkéntes',
      [UserType.ADMIN]: 'Adminisztrátor'
    };
    
    return labels[userType] || '';
  }
}

// services/camp.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Camp, CampRegistration } from '../models/camp.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CampService {
  private apiUrl = 'api/camps';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getCamps(): Observable<Camp[]> {
    return this.http.get<Camp[]>(this.apiUrl);
  }

  getCampById(id: string): Observable<Camp> {
    return this.http.get<Camp>(`${this.apiUrl}/${id}`);
  }

  createCamp(campData: Partial<Camp>): Observable<Camp> {
    return this.http.post<Camp>(this.apiUrl, campData);
  }

  updateCamp(id: string, campData: Partial<Camp>): Observable<Camp> {
    return this.http.put<Camp>(`${this.apiUrl}/${id}`, campData);
  }

  deleteCamp(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  registerToCamp(campId: string, registrationData: any): Observable<CampRegistration> {
    return this.http.post<CampRegistration>(`${this.apiUrl}/${campId}/register`, registrationData);
  }

  getUserRegistrations(userId: string): Observable<CampRegistration[]> {
    return this.http.get<CampRegistration[]>(`${this.apiUrl}/user-registrations/${userId}`);
  }

  getCampRegistrations(campId: string): Observable<CampRegistration[]> {
    return this.http.get<CampRegistration[]>(`${this.apiUrl}/${campId}/registrations`);
  }

  navigateToRegistration(campId: string): void {
    this.router.navigate(['/tabor-jelentkezes', campId]);
  }

  getTaborTipusNev(tipus: string): string {
    const taborTipusok = {
      'cserkesz': 'Cserkésztábor',
      'erdei': 'Erdei vándortábor',
      'vitorlas': 'Vitorlástábor',
      'tanc': 'Tánctábor',
      'szinjatszo': 'Színjátszótábor',
      'hittan': 'Hittantábor',
      'programozo': 'Programozó tábor',
      'matek': 'Matek tábor',
      'robotika': 'Robotika tábor',
      'szentmargit': 'Szent Margit tábor'
    };
    
    return taborTipusok[tipus] || tipus;
  }
}