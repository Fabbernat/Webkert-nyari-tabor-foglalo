// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',

  /* All potential imports:
  [RouterOutlet, HomeComponent, HeroComponent, HeaderComponent, FooterComponent, CampListComponent, RegisterComponent, CampTypesComponent, CreateCampComponent, NavigationComponent, CampDetailsComponent, EditProfileComponent, UserManagerComponent, UserProfileComponent, FeaturedCampsComponent, StatsDashboardComponent, CampRegistrationComponent, UserTypeSelectionComponent, CampLocationManagerComponent],
  */
 
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})

export class AppComponent implements OnInit {
  title = "Nyári tábor foglaló"
  signedIn = false;
  
  
  ngOnInit() {
  }
}