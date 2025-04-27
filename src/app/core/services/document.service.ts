import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentStatus } from '../../shared/models/document/document.component';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = `${environment.apiUrl}/documents`;

  constructor(private http: HttpClient) { }

  uploadDocument(file: File, data: Partial<Document>): Observable<Document> {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.http.post<Document>(this.apiUrl, formData);
  }

  getUserDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/user`);
  }

  getDocumentById(id: string): Observable<Document> {
    return this.http.get<Document>(`${this.apiUrl}/${id}`);
  }

  deleteDocument(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateDocumentStatus(id: string, status: DocumentStatus): Observable<Document> {
    return this.http.patch<Document>(`${this.apiUrl}/${id}/status`, { status });
  }

  getApplicationDocuments(applicationId: string): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/application/${applicationId}`);
  }
  
  downloadDocument(id: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/download`, { responseType: 'blob' });
  }
}