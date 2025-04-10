// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { AdminModule } from './features/admin/admin.module';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { CampTypesComponent } from './features/home/components/camp-types/camp-types.component';
import { CreateCampComponent } from './features/camps/components/create-camp/create-camp.component';
import { CampDetailsComponent } from './features/camps/components/camp-details/camp-details.component';
import { EditProfileComponent } from './features/profile/components/edit-profile/edit-profile.component';
import { UserManagerComponent } from './features/admin/components/user-manager/user-manager.component';
import { FeaturedCampsComponent } from './features/home/components/featured-camps/featured-camps.component';
import { StatsDashboardComponent } from './features/admin/components/stats-dashboard/stats-dashboard.component';
import { CampRegistrationComponent } from './features/camps/components/camp-registration/camp-registration.component';
import { UserTypeSelectionComponent } from './features/auth/components/user-type-selection/user-type-selection.component';
import { CampLocationManagerComponent } from './features/admin/components/camp-location-manager/camp-location-manager.component';
import { UserComponent } from './shared/models/user/user.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  standalone: true,

  /* All potential imports:
  [RouterOutlet, HomeComponent, HeroComponent, HeaderComponent, FooterComponent, CampListComponent, RegisterComponent, CampTypesComponent, CreateCampComponent, NavigationComponent, CampDetailsComponent, EditProfileComponent, UserManagerComponent, UserProfileComponent, FeaturedCampsComponent, StatsDashboardComponent, CampRegistrationComponent, UserTypeSelectionComponent, CampLocationManagerComponent],
  */

  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AdminModule,
    HeroComponent,
    CampTypesComponent,
    CreateCampComponent,
    CampDetailsComponent,
    EditProfileComponent,
    UserManagerComponent,
    FeaturedCampsComponent,
    StatsDashboardComponent,
    CampRegistrationComponent,
    UserTypeSelectionComponent,
    CampLocationManagerComponent,
    UserComponent,
    MatSidenavModule,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = "Nyári tábor foglaló"
  isLoggedIn = false;

  
  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void{
   localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
    window.location.href = '/home';
  }

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
}