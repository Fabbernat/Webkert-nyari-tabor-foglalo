// features/admin/components/admin-dashboard/admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { CampService } from '../../../features/camps/services/camp.service';
import { User } from '../../../shared/models/user.model';
import { Camp } from '../../../shared/models/camp.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  users$: Observable<User[]>;
  camps$: Observable<Camp[]>;

  constructor(
    private userService: UserService,
    private campService: CampService
  ) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
    this.camps$ = this.campService.getCamps();
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId);
  }

  deleteCamp(campId: string) {
    this.campService.deleteCamp(campId);
  }
}