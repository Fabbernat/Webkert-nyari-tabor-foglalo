import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camp, CampType } from '../../../shared/models/camp/camp.component';
import { UserRole } from '../../../shared/models/user/user.component';
import { AuthService } from '../../services/auth.service';
import { CampService } from '../../services/camp.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent implements OnInit {
  popularCamps: Camp[] = [];
  upcomingCamps: Camp[] = [];
  isLoggedIn = false;
  userRole: UserRole | null = null;
  CampType = CampType;
  loading = true;
  errorMessage = '';

  constructor(
    private campService: CampService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.currentUserValue?.szerepkor || null;
    
    this.loadPopularCamps();
    this.loadUpcomingCamps();
  }

  loadPopularCamps(): void {
    this.campService.getPopularCamps().subscribe({
      next: (camps) => {
        this.popularCamps = camps;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Hiba történt a népszerű táborok betöltése közben. Kérjük, próbálja újra később.';
        this.loading = false;
        console.error('Error loading popular camps:', error);
      }
    });
  }

  loadUpcomingCamps(): void {
    this.campService.getUpcomingCamps().subscribe({
      next: (camps) => {
        this.upcomingCamps = camps;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Hiba történt a közelgő táborok betöltése közben. Kérjük, próbálja újra később.';
        this.loading = false;
        console.error('Error loading upcoming camps:', error);
      }
    });
  }

  navigateToCampList(): void {
    this.router.navigate(['/taborok']);
  }

  navigateToDashboard(): void {
    switch (this.userRole) {
      case UserRole.SZULO:
        this.router.navigate(['/szulo/dashboard']);
        break;
      case UserRole.PEDAGOGUS:
        this.router.navigate(['/pedagogus/dashboard']);
        break;
      case UserRole.ONKENTES:
        this.router.navigate(['/onkentes/dashboard']);
        break;
      case UserRole.ADMIN:
        this.router.navigate(['/admin/dashboard']);
        break;
      default:
        this.router.navigate(['/bejelentkezes']);
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/regisztracio']);
  }
}