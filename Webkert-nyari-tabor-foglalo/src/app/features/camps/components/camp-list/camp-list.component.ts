import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CampService } from '../../../../core/services/camp.service';
import { Camp } from '../../../../shared/models/camp/camp.component';
import { CampCardComponent } from '../camp-card/camp-card.component';

@Component({
  selector: 'app-camp-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    CampCardComponent
  ],
  templateUrl: './camp-list.component.html',
  styleUrl: './camp-list.component.scss'
})
export class CampListComponent implements OnInit {
  camps: any;

  constructor(private campService: CampService) {}

  ngOnInit(): void {
    this.campService.getCamps().subscribe(camps => {
      this.camps = camps;
    });
  }

  navigateToBooking(campId: string): void {
    console.log(`Navigálás a tábor jelentkezési felületre: ${campId}`);
    // TODO
  }
}