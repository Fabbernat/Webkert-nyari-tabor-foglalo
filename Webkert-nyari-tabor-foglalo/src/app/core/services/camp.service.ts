import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CampType, Camp } from '../../shared/models/camp/camp.component';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CampService {
  private apiUrl = `${environment.apiUrl}/camps`;

  constructor(private http: HttpClient) { }

  getCamps(
    tipus?: CampType,
    kezdoDatum?: Date,
    zaroDatum?: Date,
    korhatarMin?: number,
    korhatarMax?: number,
    page: number = 1,
    limit: number = 10
  ): Observable<{ camps: Camp[], total: number }> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    if (tipus) params = params.set('tipus', tipus);
    if (kezdoDatum) params = params.set('kezdoDatum', kezdoDatum.toISOString());
    if (zaroDatum) params = params.set('zaroDatum', zaroDatum.toISOString());
    if (korhatarMin) params = params.set('korhatarMin', korhatarMin.toString());
    if (korhatarMax) params = params.set('korhatarMax', korhatarMax.toString());

    return this.http.get<{ camps: Camp[], total: number }>(this.apiUrl, { params });
  }

  getCampById(id: string): Observable<Camp> {
    return this.http.get<Camp>(`${this.apiUrl}/${id}`);
  }

  createCamp(camp: Camp): Observable<Camp> {
    return this.http.post<Camp>(this.apiUrl, camp);
  }

  updateCamp(id: string, camp: Partial<Camp>): Observable<Camp> {
    return this.http.put<Camp>(`${this.apiUrl}/${id}`, camp);
  }

  deleteCamp(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadCampImage(id: string, image: File): Observable<{ imageUrl: string }> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<{ imageUrl: string }>(`${this.apiUrl}/${id}/images`, formData);
  }

  getRecommendedCamps(): Observable<Camp[]> {
    return this.http.get<Camp[]>(`${this.apiUrl}/recommended`);
  }

  getPopularCamps(): Observable<Camp[]> {
    return this.http.get<Camp[]>(`${this.apiUrl}/popular`);
  }

  getUpcomingCamps(): Observable<Camp[]> {
    return this.http.get<Camp[]>(`${this.apiUrl}/upcoming`);
  }
}