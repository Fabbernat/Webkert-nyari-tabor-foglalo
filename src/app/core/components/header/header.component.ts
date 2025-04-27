// src/app/core/components/header/header.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../../../features/auth/components/login/login.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,MatToolbarModule, MatButtonModule, MatIconModule, RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isLoggedIn = LoginComponent._isLoggedIn;

}
