import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Camp, CampType } from '../../../shared/models/camp/camp.component';
import { UserRole } from '../../../shared/models/user/user.component';
import { AuthService } from '../../services/auth.service';
import { CampService } from '../../services/camp.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { AdminModule } from '../../../features/admin/admin.module';
import { GalleryComponent } from '../../../shared/gallery/gallery.component';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MenuComponent,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AdminModule,
    MatSidenavModule,
    GalleryComponent,
    MatIcon,
    MatToolbar,
    MatSidenav,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardContent,
    GalleryComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent implements OnInit, OnDestroy {
submitForm() {
throw new Error('Method not implemented.');
}
  isLoggedIn: boolean = false;
  private authSubscription: Subscription | undefined;


  popularCamps: Camp[] = [];
  upcomingCamps: Camp[] = [];
  userRole: UserRole | null = null;
  CampType = CampType;
  loading = true;
  errorMessage = '';
reservationForm: any;
currentYear: any;

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

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
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