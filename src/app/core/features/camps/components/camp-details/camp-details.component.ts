import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Camp } from '../../../../../shared/models/camp/camp.component';
import { CampService } from '../../../../../services copy/camp.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-camp-details',
  imports: [MatToolbar, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions, CommonModule], // , MatpanelTitle, MatExpansionPanel, MatProgressBar
  templateUrl: './camp-details.component.html',
  styleUrl: './camp-details.component.scss'
})
export class CampDetailsComponent implements OnInit {
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

  camps: Camp[] = [];
  selectedCamp: Camp | null = null;
  isLoading = true;

  constructor(
    private campService: CampService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // 🔄 Táborok betöltése Firestore-ból
    this.campService.getCamps().subscribe({
      next: (data) => {
        data;
        this.isLoading = false;
      },
      error: (err) => {
        this.snackBar.open('Hiba történt a táborok betöltésekor.', 'Bezár', {
          duration: 3000
        });
        this.isLoading = false;
      }
    });
  }

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

  // ✅ Tábor kiválasztása
  selectCamp(camp: Camp): void {
    this.selectedCamp = camp;
  }

  // 🗑️ Tábor törlése
  deleteCamp(campId: string): void {
    this.campService.deleteCamp(campId).subscribe({
      next: () => {
        this.snackBar.open('Tábor sikeresen törölve.', 'Bezár', {
          duration: 3000
        });
      },
      error: (err) => {
        this.snackBar.open('Hiba történt a tábor törlésekor.', 'Bezár', {
          duration: 3000
        });
      }
    });
  }
}
