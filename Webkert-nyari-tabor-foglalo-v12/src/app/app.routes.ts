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


export const routes: Routes = [
  { path: '**', redirectTo: '/home', pathMatch: 'full'  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'homelists', component: CampListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'admin', component: AdminModule },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'camps', component: CampListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'camp-types', component: CampTypesComponent },
  { path: 'create-camp', component: CreateCampComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'camp-details', component: CampDetailsComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'user-manager', component: UserManagerComponent },
  { path: 'featured-camps', component: FeaturedCampsComponent },
  { path: 'stats-dashboard', component: StatsDashboardComponent },
  { path: 'camp-registration', component: CampRegistrationComponent },
  { path: 'user-type-selection', component: UserTypeSelectionComponent },
  { path: 'camp-location-manager', component: CampLocationManagerComponent },
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