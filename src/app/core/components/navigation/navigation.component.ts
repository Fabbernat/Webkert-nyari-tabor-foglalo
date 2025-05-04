import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { GalleryComponent } from '../../../shared/gallery/gallery.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Camp } from '../../../shared/models/camp/camp.component';
import { HighlightDirective } from '../../../directives/highlight.directive';


@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLink,
    MatSidenavModule,
    MatSidenav,
    HighlightDirective
],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent implements OnInit, OnDestroy {
  camp!: Camp;
  submitForm() {
    throw new Error('Method not implemented.');
  }
  isLoggedIn: boolean = false;
  private authSubscription: Subscription | undefined;

  loading = true;
  errorMessage = '';
  reservationForm: any;
  currentYear: any;

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {

    this.loadPopularCamps();
    this.loadUpcomingCamps();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  loadPopularCamps(): void {
        this.loading = false;
      
  }
 

  loadUpcomingCamps(): void {
  }

  navigateToCampList(): void {
    this.router.navigate(['/taborok']);
  }

  navigateToDashboard(): void {
    
  }

  navigateToRegister(): void {
    this.router.navigate(['/regisztracio']);
  }
}