import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  standalone: true,
})
export class UserProfileComponent {
  user: any = {
    email: 'teszt@example.com',
    name: 'Teszt Elek'
  };
}
