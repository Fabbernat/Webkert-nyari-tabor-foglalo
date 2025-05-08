import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CampService } from '../../../../../services copy/camp.service';
import { Camp } from '../../../../../shared/models/camp/camp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-camp-form',
  templateUrl: './camp-form.component.html',
  styleUrls: ['./camp-form.component.css'],
  imports: [FormsModule,
    ReactiveFormsModule, MatCard, MatCardTitle, MatCardSubtitle, MatIcon, FormsModule, ReactiveFormsModule] // MatOptions, MatFormField, MatDatePicker, MatDivider,
 // MatOptions, MatFormField, MatDatePicker, MatDivider,
})
export class CampFormComponent implements OnInit {
  @Input() selectedCamp: Camp | null = null;
  campForm!: FormGroup;
  locations: string[] = ['Budapest', 'Debrecen', 'Pécs', 'Szeged'];
  isEditMode = false;
  newLocation = '';
  ngMODEL = NgModel;

  constructor(
    private fb: FormBuilder,
    private campService: CampService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.isEditMode = !!this.selectedCamp;

    this.campForm = this.fb.group({
      name: [this.selectedCamp?.name || '', Validators.required],
      location: [this.selectedCamp?.location || '', Validators.required],
      description: [this.selectedCamp?.description || '', Validators.minLength(10)],
      startDate: [this.selectedCamp?.startDate || '', Validators.required],
      available: [this.selectedCamp?.available ?? true]
    });
  }

  onSubmit(): void {
    if (this.campForm.invalid) return;

    const campData = this.campForm.value;

    if (this.isEditMode && this.selectedCamp?.id) {
      this.campService.updateCamp(this.selectedCamp.id, campData).then(() => {
        this.snackBar.open('Tábor sikeresen frissítve!', 'OK', { duration: 2000 });
      });
    } else {
      this.campService.createCamp(campData).then(() => {
        this.snackBar.open('Tábor hozzáadva!', 'OK', { duration: 2000 });
        this.campForm.reset();
      });
    }
  }

  deleteCamp(): void {
    if (!this.selectedCamp?.id) return;
    this.campService.deleteCamp(this.selectedCamp.id).then(() => {
      this.snackBar.open('Tábor törölve!', 'OK', { duration: 2000 });
    });
  }

  addLocation(): void {
    const loc = this.newLocation.trim();
    if (loc && !this.locations.includes(loc)) {
      this.locations.push(loc);
      this.newLocation = '';
      this.snackBar.open(`Helyszín "${loc}" hozzáadva`, 'OK', { duration: 2000 });
    }
  }

  removeLocation(loc: string): void {
    this.locations = this.locations.filter(l => l !== loc);
    this.snackBar.open(`Helyszín "${loc}" törölve`, 'OK', { duration: 2000 });
  }
}
