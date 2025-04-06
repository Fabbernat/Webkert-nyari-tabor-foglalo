// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';

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
    NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = "Nyári tábor foglaló"
  signedIn = false;
  
  
  ngOnInit() {
  }
}