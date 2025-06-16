// src/app/features/auth/components/user-type-selection/user-type-selection.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserType from '../../shared/models/CampUser';

@Component({
  selector: 'app-user-type-selection',
  templateUrl: './user-type-selection.component.html',
  styleUrls: ['./user-type-selection.component.scss']
})
export class UserTypeSelectionComponent implements OnInit {
  userTypes = [
    { type: UserType.PARENT, name: 'Szülő', description: 'Táborokba jelentkeztetheti gyermekét', icon: 'people' },
    { type: UserType.PEDAGOGUE, name: 'Pedagógus', description: 'Iskolák képviselőjeként jelentkeztethet gyermekeket táborokba', icon: 'school' },
    { type: UserType.CHILD, name: 'Kiskorú', description: '16 év felettiek számára szülői engedéllyel', icon: 'person' },
    { type: UserType.CAMP_ORGANIZER, name: 'Tábori szervező/animátor', description: 'Tábori operatív feladatok lebonyolításában segédkezők', icon: 'sports' },
    { type: UserType.ADMIN, name: 'Adminisztrátor', description: 'Táborok és helyszínek kezelése', icon: 'admin_panel_settings' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  selectUserType(userType: UserType): void {
    localStorage.setItem('selectedUserType', userType);
    this.router.navigate(['/auth/register']);
  }

  goToBrowseCamps(): void {
    this.router.navigate(['/camps']);
  }
}