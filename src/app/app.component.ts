import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { MatGridList } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './core/components/header/header.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MatSidenavModule, GalleryComponent, MatToolbarModule, MatIconModule, HeaderComponent, NavigationComponent, FooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser.subscribe((user: any) => {
      this.isLoggedIn = !!user;
      localStorage.setItem('isLoggedIn', this.isLoggedIn ? 'true' : 'false');
    });
  }
  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
   logout(): void {
    this.authService.signOut();
  }
  onToggleSidenav(sidenav:any): void{
    throw new Error('Method not implemented.');
  }

  title = 'Webkert-nyari-tabor-foglalo3';
  isLoggedIn = false;
  loginPopupVisible = false;
  private authSubscription?: Subscription;

    constructor(private authService: AuthService) {}

  showLoginPopup() {
    this.loginPopupVisible = true;
    setTimeout(() => {
      this.loginPopupVisible = false;
    }, 2000); // 2 másodperc után eltűnik
  }
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/menu/menu.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSLrSsxpMDFq7_xADx57SK4B5zgkCpmoE",
  authDomain: "webkert-nyari-tabor-foglalo.firebaseapp.com",
  projectId: "webkert-nyari-tabor-foglalo",
  storageBucket: "webkert-nyari-tabor-foglalo.firebasestorage.app",
  messagingSenderId: "595746910150",
  appId: "1:595746910150:web:e8edc2ad6fd49d4b594cc7",
  measurementId: "G-2DV7GR8V8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);