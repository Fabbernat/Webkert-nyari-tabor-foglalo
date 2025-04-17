import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Camp } from '../../../../shared/models/camp/camp.component';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-camp-card',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatToolbar
  ],
  templateUrl: './camp-card.component.html',
  styleUrl: './camp-card.component.scss'
})
export class CampCardComponent {
  @Input() camp!: Camp;
  @Output() bookNow = new EventEmitter<string>();

  get availabilityPercentage(): number {
    return ((this.camp.maxParticipants - this.camp.registeredParticipants) / this.camp.maxParticipants) * 100;
  }

  onBookNow(): void {
    this.bookNow.emit(this.camp.id);
  }
}
