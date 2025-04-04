// app-routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { UserTypeSelectionGuard } from './core/guards/user-type-selection.guard';

import { CampListComponent } from './features/camps/components/camp-list/camp-list.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { UserProfileComponent } from './features/profile/components/user-profile/user-profile.component';


export const routes: Routes = [
    { path: 'camps', component: CampListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: '', redirectTo: '/camps', pathMatch: 'full' },
    {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'taborok',
    loadChildren: () => import('./features/camps/camps.module').then(m => m.CampsModule)
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