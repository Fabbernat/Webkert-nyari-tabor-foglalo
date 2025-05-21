// C:\VSCodeProjects\Webkert-nyari-tabor-foglalo3\src\app\core\features\camps\components\camp-card\camp-card.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ColorHighlightDirective } from '../../shared/directives/color-highlight.directive';
import { HighlightDirective } from '../../shared/directives/highlight.directive';
import { Camp } from '../../shared/models/Camp';

@Component({
  selector: 'app-camp-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    HighlightDirective,
    ColorHighlightDirective
  ],
  templateUrl: './camp-card.component.html',
  styleUrl: './camp-card.component.scss'
})
export class CampCardComponent {
  @Input() camp!: Camp;
  @Input() isFavorite = false;
  @Input() isUpcoming = false;
  
  // Output event emitters
  @Output() apply = new EventEmitter<string>(); // Changed from onApply
  @Output() toggleFavorite = new EventEmitter<string>();
  @Output() showDetails = new EventEmitter<string>();
  @Output() bookNow = new EventEmitter<string>(); // Added missing Output

  get availabilityPercentage(): number {
    return ((this.camp.maxParticipants - this.camp.registeredCount) / this.camp.maxParticipants) * 100;
  }

  onApply() {
    this.apply.emit(this.camp.id);
  }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.camp.id);
  }

  onShowDetails() {
    this.showDetails.emit(this.camp.id);
  }

  onBookNow() {
    this.bookNow.emit(this.camp.id);
  }
}
