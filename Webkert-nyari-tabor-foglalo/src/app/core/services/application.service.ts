import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application, ApplicationStatus, PaymentStatus } from '../../shared/models/application/application.component';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = `${environment.apiUrl}/applications`;

  constructor(private http: HttpClient) { }

  createApplication(application: Partial<Application>): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, application);
  }

  getUserApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/user`);
  }

  getApplicationById(id: string): Observable<Application> {
    return this.http.get<Application>(`${this.apiUrl}/${id}`);
  }

  updateApplication(id: string, application: Partial<Application>): Observable<Application> {
    return this.http.put<Application>(`${this.apiUrl}/${id}`, application);
  }

  deleteApplication(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getApplicationsByCamp(campId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/camp/${campId}`);
  }

  updateApplicationStatus(id: string, status: ApplicationStatus): Observable<Application> {
    return this.http.patch<Application>(`${this.apiUrl}/${id}/status`, { status });
  }

  updatePaymentStatus(id: string, status: PaymentStatus): Observable<Application> {
    return this.http.patch<Application>(`${this.apiUrl}/${id}/payment`, { status });
  }

  getApplicationStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/statistics`);
  }

  getCampParticipants(campId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/camp/${campId}/participants`);
  }
}
