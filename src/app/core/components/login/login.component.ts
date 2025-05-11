import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  public static _isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.signIn(this.username, this.password)
      
  }
}
