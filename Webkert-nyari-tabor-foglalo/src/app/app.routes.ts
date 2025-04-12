// src\app\app.routes.ts
import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';
import { StatsDashboardComponent } from './features/admin/components/stats-dashboard/stats-dashboard.component';
import { ParentDashboardComponent } from './features/parent/components/parent-dashboard/parent-dashboard.component';
import { TeacherDashboardComponent } from './features/parent/components/teacher-dashboard/teacher-dashboard.component';
import { VolunteerDashboardComponent } from './features/parent/components/volunteer-dashboard/volunteer-dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';


// export const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'homelists', component: CampListComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'profile', component: UserProfileComponent },
//   { path: 'admin', component: AdminModule },
//   { path: 'camp-types', component: CampTypesComponent },
//   { path: 'create-camp', component: CreateCampComponent },
//   { path: 'camp-details', component: CampDetailsComponent },
//   { path: 'edit-profile', component: EditProfileComponent },
//   { path: 'user-manager', component: UserManagerComponent },
//   { path: 'featured-camps', component: FeaturedCampsComponent },
//   { path: 'stats-dashboard', component: StatsDashboardComponent },
//   { path: 'camp-registration', component: CampRegistrationComponent },
//   { path: 'user-type-selection', component: UserTypeSelectionComponent },
//   { path: 'camp-location-manager', component: CampLocationManagerComponent },
//   { path: 'hero', component: HeroComponent },

//   { path: 'bejelentkezes', component: LoginComponent },
//   { path: 'regisztracio', component: RegisterComponent },
//   { path: 'profil', component: UserProfileComponent, canActivate: [AuthGuard] },
//   { path: 'taborok', component: CampListComponent },
//   { path: 'tabor/:id', component: CampDetailsComponent },
//   { path: 'tabor/:id/jelentkezes', component: CampRegistrationComponent, canActivate: [AuthGuard] },
//   { path: 'dokumentum-feltoltes', component: DocumentUploadComponent, canActivate: [AuthGuard] },
//   { path: 'jelentkezesek', component: CampFormManagerComponent, canActivate: [AuthGuard] },
  
//   // Szülői útvonalak
//   { path: 'szulo/dashboard', 
//     component: ParentDashboardComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { roles: ['szulo'] }
//   },
  
//   // Pedagógus útvonalak
//   { path: 'pedagogus/dashboard', 
//     component: TeacherDashboardComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { roles: ['pedagogus'] }
//   },
  
//   // Önkéntes útvonalak
//   { path: 'onkentes/dashboard', 
//     component: VolunteerDashboardComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { roles: ['onkentes'] }
//   },
  
//   // Admin útvonalak
//   { path: 'admin/dashboard', 
//     component: AdminDashboardComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { roles: ['admin'] }
//   },
//   { path: 'admin/taborok', 
//     component: CampLocationManagerComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { roles: ['admin'] }
//   },
//   { path: 'admin/felhasznalok', 
//     component: UserManagerComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { roles: ['admin'] }
//   },
//   { path: 'admin/tabor/uj', 
//     component: CampFormManagerComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { roles: ['admin'] }
//   },
//   { path: 'admin/tabor/:id/szerkesztes', 
//     component: CampFormManagerComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { roles: ['admin'] }
//   },
  
//   {
//     path: 'auth',
//     loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
//   },
//   {
//     path: 'profil',
//     loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule),
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'admin',
//     loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
//     canActivate: [AuthGuard, AdminGuard]
//   },
//   // Fallback útvonal  
//   {
//     path: '**',
//     redirectTo: '/home'
//   }
// ];

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'admindashboard', component: AdminDashboardComponent, canActivate: [AuthGuard, RoleGuard]  },
  { path: 'statsdashboard', component: StatsDashboardComponent, canActivate: [AuthGuard, RoleGuard]  },
  { path: 'parentdashboard', component: ParentDashboardComponent, canActivate: [AuthGuard, RoleGuard]  },
  { path: 'teacherdashboard', component: TeacherDashboardComponent, canActivate: [AuthGuard, RoleGuard]  },
  { path: 'volunteerdashboard', component: VolunteerDashboardComponent, canActivate: [AuthGuard, RoleGuard]  },


  // Fallback
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];