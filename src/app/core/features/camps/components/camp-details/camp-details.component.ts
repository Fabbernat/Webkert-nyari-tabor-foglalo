import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-camp-details',
  imports: [],
  templateUrl: './camp-details.component.html',
  styleUrl: './camp-details.component.scss'
})
export class CampDetailsComponent {
  // Bemeneti adatok a szülő komponenstől
  @Input() campName!: string;
  @Input() capacity!: number;
  @Input() isAvailable!: boolean;

  // Kimeneti események, amiket a gyermek komponens indít el
  @Output() reserve = new EventEmitter<void>();
  @Output() cancelReservation = new EventEmitter<string>();
  @Output() logView = new EventEmitter<number>();
  camp = {
    name: 'Minta tábor',
    description: 'Ez egy példa leírás a táborról.'
  };

  // Foglalás kezelése
  onReserve() {
    // ⬅️ Esemény kibocsátása a szülő felé
    this.reserve.emit();
  }

  onCancel() {
    // ⬅️ A foglalás törlése a campName alapján
    this.cancelReservation.emit(this.campName);
  }

  onViewed() {
    // ⬅️ Jelzés, hogy a felhasználó megnézte a tábort (kapacitással együtt)
    this.logView.emit(this.capacity);
  }
}
