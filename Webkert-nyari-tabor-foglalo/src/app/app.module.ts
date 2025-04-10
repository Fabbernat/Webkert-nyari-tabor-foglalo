import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { FooterComponent } from './core/components/footer/footer.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { CampDetailsComponent } from './features/camps/components/camp-details/camp-details.component';
import { CampListComponent } from './features/camps/components/camp-list/camp-list.component';
import { UserProfileComponent } from './features/profile/components/user-profile/user-profile.component';
import { HomeComponent } from './pages/home/home.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     FooterComponent,
//     HomeComponent,
//     LoginComponent,
//     RegisterComponent,
//     UserProfileComponent,
//     CampListComponent,
//     CampDetailsComponent,
//     CampRegisterComponent,
//     AdminPanelComponent,
//     AdminCampFormComponent,
//     ParentDashboardComponent,
//     TeacherDashboardComponent,
//     VolunteerDashboardComponent,
//     AdminDashboardComponent,
//     DocumentUploadComponent,
//     MapComponent,
//     ApplicationsComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     RouterModule.forRoot(appRoutes),
//     // Angular Material imports
//     MatButtonModule,
//     MatCardModule,
//     MatIconModule,
//     MatInputModule,
//     MatFormFieldModule,
//     MatSelectModule,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     MatSnackBarModule,
//     MatProgressSpinnerModule,
//     MatTabsModule,
//     MatTableModule,
//     MatPaginatorModule,
//     MatSortModule,
//     MatDialogModule,
//     MatChipsModule,
//     MatStepperModule,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatListModule,
//     MatExpansionModule,
//     MatBadgeModule,
//     MatCheckboxModule,
//     MatProgressBarModule,
//     MatRadioModule
//   ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
//     AuthGuard,
//     RoleGuard
//   ],
//   bootstrap: [AppComponent]
// })
export class AppModule { }