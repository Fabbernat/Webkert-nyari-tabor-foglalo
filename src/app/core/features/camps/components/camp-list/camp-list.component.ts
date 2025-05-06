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
import { Camp } from '../../../../../shared/models/camp/camp.component';

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
  camps: Camp[] = [];
  available:boolean = true;
  favorites: Set<string> = new Set();
  selectedCamp: Camp | null = null;
  filter: 'all' | 'upcoming' | 'past' = 'all';
  today = new Date();

  constructor(private campService: CampService) {}

  ngOnInit(): void {
    this.campService.getCamps().subscribe(camps => {
      camps;
    });
    this.camps = [
      new Camp('1', 'Balatoni Tábor', 'loc1', new Date('2025-07-01'), new Date('2025-07-07')),
      new Camp('2', 'Erdei Iskola', 'loc2', new Date('2025-05-10'), new Date('2025-05-15')),
      new Camp('3', 'Kézműves Tábor', 'loc3', new Date('2024-08-01'), new Date('2024-08-10')),
      new Camp('4', 'Cserkész Tábor', 'loc4', new Date('2024-08-01'), new Date('2024-08-15')),
    ];
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

  isUpcoming(camp: Camp): boolean {
    return camp.startDate > this.today;
  }

  selectCamp(camp: Camp) {
    this.selectedCamp = camp;
  }

  handleApply(campId: string) {
    console.log(`🔔 Jelentkezés táborra: ${campId}`);
  }

  handleToggleFavorite(campId: string) {
    if (this.favorites.has(campId)) {
      this.favorites.delete(campId);
    } else {
      this.favorites.add(campId);
    }
  }

  handleShowDetails(campId: string) {
    console.log(`ℹ️ Részletek: ${campId}`);
  }
}