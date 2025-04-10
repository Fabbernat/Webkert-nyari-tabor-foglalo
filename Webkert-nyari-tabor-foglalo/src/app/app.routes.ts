// app-routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { UserTypeSelectionGuard } from './core/guards/user-type-selection.guard';

import { CampListComponent } from './features/camps/components/camp-list/camp-list.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { UserProfileComponent } from './features/profile/components/user-profile/user-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminModule } from './features/admin/admin.module';
import { CampTypesComponent } from './features/home/components/camp-types/camp-types.component';
import { CreateCampComponent } from './features/camps/components/create-camp/create-camp.component';
import { CampDetailsComponent } from './features/camps/components/camp-details/camp-details.component';
import { EditProfileComponent } from './features/profile/components/edit-profile/edit-profile.component';
import { UserManagerComponent } from './features/admin/components/user-manager/user-manager.component';
import { FeaturedCampsComponent } from './features/home/components/featured-camps/featured-camps.component';
import { StatsDashboardComponent } from './features/admin/components/stats-dashboard/stats-dashboard.component';
import { CampRegistrationComponent } from './features/camps/components/camp-registration/camp-registration.component';
import { UserTypeSelectionComponent } from './features/auth/components/user-type-selection/user-type-selection.component';
import { CampLocationManagerComponent } from './features/admin/components/camp-location-manager/camp-location-manager.component';
import { HeroComponent } from './features/home/components/hero/hero.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'homelists', component: CampListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'admin', component: AdminModule },
  { path: 'camp-types', component: CampTypesComponent },
  { path: 'create-camp', component: CreateCampComponent },
  { path: 'camp-details', component: CampDetailsComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'user-manager', component: UserManagerComponent },
  { path: 'featured-camps', component: FeaturedCampsComponent },
  { path: 'stats-dashboard', component: StatsDashboardComponent },
  { path: 'camp-registration', component: CampRegistrationComponent },
  { path: 'user-type-selection', component: UserTypeSelectionComponent },
  { path: 'camp-location-manager', component: CampLocationManagerComponent },
  { path: 'hero', component: HeroComponent },

  { path: '', component: HomeComponent },
  { path: 'bejelentkezes', component: LoginComponent },
  { path: 'regisztracio', component: RegisterComponent },
  { path: 'profil', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'taborok', component: CampListComponent },
  { path: 'tabor/:id', component: CampDetailsComponent },
  { path: 'tabor/:id/jelentkezes', component: CampRegisterComponent, canActivate: [AuthGuard] },
  { path: 'dokumentum-feltoltes', component: DocumentUploadComponent, canActivate: [AuthGuard] },
  { path: 'jelentkezesek', component: ApplicationsComponent, canActivate: [AuthGuard] },
  
  // Szülői útvonalak
  { path: 'szulo/dashboard', 
    component: ParentDashboardComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { roles: ['szulo'] }
  },
  
  // Pedagógus útvonalak
  { path: 'pedagogus/dashboard', 
    component: TeacherDashboardComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { roles: ['pedagogus'] }
  },
  
  // Önkéntes útvonalak
  { path: 'onkentes/dashboard', 
    component: VolunteerDashboardComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { roles: ['onkentes'] }
  },
  
  // Admin útvonalak
  { path: 'admin/dashboard', 
    component: AdminDashboardComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { roles: ['admin'] }
  },
  { path: 'admin/taborok', 
    component: AdminPanelComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { roles: ['admin'] }
  },
  { path: 'admin/tabor/uj', 
    component: AdminCampFormComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { roles: ['admin'] }
  },
  { path: 'admin/tabor/:id/szerkesztes', 
    component: AdminCampFormComponent, 
    canActivate: [AuthGuard, RoleGuard], 
    data: { roles: ['admin'] }
  },
  
  // Fallback útvonal  
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];