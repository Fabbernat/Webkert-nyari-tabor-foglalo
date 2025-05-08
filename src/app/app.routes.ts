import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { CampComponent } from './shared/models/camp/camp.component';
import { NgModule } from '@angular/core';
import { CampFlowDemoComponent } from './pages/camp-flow-demo/camp-flow-demo.component';
import { CampListComponent } from './core/features/camps/components/camp-list/camp-list.component';
import { CampCardComponent } from './core/features/camps/components/camp-card/camp-card.component';
import { AuthGuard, PublicGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    canActivate: [PublicGuard]
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent),
    canActivate: [PublicGuard]
  },
  { path: 'app', component: AppComponent },
  { path: 'gallery', component: GalleryComponent },

  // Auth routes
  { path: 'signup', component: RegisterComponent },
  { path: 'regisztracio', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bejelentkezes', redirectTo: 'login', pathMatch: 'full' },
  { path: 'camp', component: CampComponent },
  { path: 'camps', component: CampComponent },
  { path: 'camps/create', component: CampComponent },
  { path: 'camp-list', component: CampListComponent },
  { path: 'camp-card', component: CampCardComponent },

  { path: 'control-flow', component: CampFlowDemoComponent },
  { path: 'camp-flow', component: CampFlowDemoComponent },

  { path: 'logout', redirectTo: '', pathMatch: 'full' }, // This should be handled by auth service

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Fallback route (should be last)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
