import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { NavigationComponent } from '../../core/components/navigation/navigation.component';
import { AdminModule } from '../../features/admin/admin.module';
import { GalleryComponent } from '../../shared/gallery/gallery.component';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AdminModule,
    GalleryComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  reservationForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      campType: ['heti', Validators.required],
      paymentMethod: ['card', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  submitForm(): void {
    if (this.reservationForm.valid) {
      this.loading = true;
      
      // Simulate API call
      setTimeout(() => {
        this.loading = false;
        alert('Sikeres foglalás! Köszönjük!');
        this.reservationForm.reset({
          campType: 'heti',
          paymentMethod: 'card',
          terms: false
        });
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      this.reservationForm.markAllAsTouched();
    }
  }
}