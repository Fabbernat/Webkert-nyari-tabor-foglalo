// camp-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { CampCardComponent } from '../camp-card/camp-card.component';
import { CampService } from '../../../../../services copy/camp.service';
import { CampDetailsComponent } from '../camp-details/camp-details.component';

@Component({
  selector: 'app-camp-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    CampCardComponent,
    CampDetailsComponent
  ],
  templateUrl: './camp-list.component.html',
  styleUrl: './camp-list.component.scss'
})
export class CampListComponent implements OnInit {
  camps: any;
  selectedCamp = {
    name: 'Kalandtábor',
    capacity: 25,
    available: true
  };

  constructor(private campService: CampService) {}

  ngOnInit(): void {
    this.campService.getCamps().subscribe(camps => {
      this.camps = camps;
    });
  }

  onReserveCamp() {
    // ⬅️ Foglalás logika
    console.log('Foglalás megtörtént!');
  }

  onCancelReservation(campName: string) {
    console.log(`A(z) ${campName} foglalása törölve.`);
  }

  onCampViewed(capacity: number) {
    console.log(`A tábort megtekintették, férőhely: ${capacity}`);
  }

  navigateToBooking(campId: string): void {
    console.log(`Navigálás a tábor jelentkezési felületre: ${campId}`);
    // TODO
  }
}