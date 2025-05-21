import { Component, OnInit, OnDestroy, Input, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { from, map, Observable, Subscription } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';
import { Task } from '../../shared/models/Task';
import { MatFormField, MatLabel } from '@angular/material/input';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormField,
    MatLabel,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User | null = null;
  tasks: Task[] = [];
  stats = {
    total: 0,
    completed: 0,
    pending: 0,
    completionRate: 0
  };

  @Input() set appHighlight(active: boolean) {
    // Ha az "active" igaz, kiemeljük félkövérrel
    if (active) {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
  }
  isLoading = true;

  documentQuery: string = '';
  applicationQuery: string = '';
  documents$: Observable<any[]> = new Observable();
  applications$: Observable<any[]> = new Observable();

  private subscription: Subscription | null = null;

  constructor(private userService: UserService, private firestore: Firestore, private el: ElementRef,  private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadUserProfile(): void {
    this.isLoading = true;
    this.subscription = this.userService.getUserProfile().subscribe({
      next: (data) => {
        this.user = data.user;
        this.tasks = data.tasks;
        this.stats = data.stats;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Hiba a felhasználói profil betöltésekor:', error);
        this.isLoading = false;
      }
    });
  }

  getUserInitials(): string {
    if (!this.user || !this.user.name) return '?';

    const firstInitial = this.user.name.firstname ? this.user.name.firstname.charAt(0).toUpperCase() : '';
    const lastInitial = this.user.name.lastname ? this.user.name.lastname.charAt(0).toUpperCase() : '';

    return firstInitial + (lastInitial ? lastInitial : '');
  }

  onQueryDocuments() {
    const documentsCollection = collection(this.firestore, 'Documents');
    const documentsQuery = query(documentsCollection, where('type', '==', this.documentQuery));

    this.documents$ = from(getDocs(documentsQuery)).pipe(
      map(querySnapshot => {
        const documents: any[] = [];
        querySnapshot.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        return documents;
      })
    );
  }

  onQueryApplications() {
    const applicationsCollection = collection(this.firestore, 'Applications');
    const applicationsQuery = query(applicationsCollection, where('status', '==', this.applicationQuery));

    this.applications$ = from(getDocs(applicationsQuery)).pipe(
      map(querySnapshot => {
        const applications: any[] = [];
        querySnapshot.forEach(doc => {
          applications.push({ ...doc.data(), id: doc.id });
        });
        return applications;
      })
    );
  }
}