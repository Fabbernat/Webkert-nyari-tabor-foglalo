// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,

  /* All potential imports:
  [RouterOutlet, HomeComponent, HeroComponent, HeaderComponent, FooterComponent, CampListComponent, RegisterComponent, CampTypesComponent, CreateCampComponent, NavigationComponent, CampDetailsComponent, EditProfileComponent, UserManagerComponent, UserProfileComponent, FeaturedCampsComponent, StatsDashboardComponent, CampRegistrationComponent, UserTypeSelectionComponent, CampLocationManagerComponent],
  */

  imports: [CommonModule, RouterOutlet, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = "Nyári tábor foglaló"
  signedIn = false;
  
  
  ngOnInit() {
  }
}