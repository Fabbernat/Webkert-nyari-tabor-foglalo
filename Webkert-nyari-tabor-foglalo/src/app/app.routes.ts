// C:\VSCodeProjects\Webkert-nyari-tabor-foglalo\Webkert-nyari-tabor-foglalo\src\app\app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CampComponent } from './shared/models/camp/camp.component';
import { CampDetailsComponent } from './features/camps/components/camp-details/camp-details.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { UserProfileComponent } from './features/profile/components/user-profile/user-profile.component';
import { ApplicationComponent } from './shared/models/application/application.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CampTypesComponent } from './features/home/components/camp-types/camp-types.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';
import { ParentDashboardComponent } from './features/parent/components/parent-dashboard/parent-dashboard.component';
import { TeacherDashboardComponent } from './features/parent/components/teacher-dashboard/teacher-dashboard.component';
import { VolunteerDashboardComponent } from './features/parent/components/volunteer-dashboard/volunteer-dashboard.component';
import { AdminGuard } from './core/guards/admin.guard';
import { DocumentComponent } from './shared/models/document/document.component';
import { AboutComponent } from './pages/info/about/about.component';
import { ContactComponent } from './pages/info/contact/contact.component';
import { PrivacyComponent } from './pages/info/privacy/privacy.component';
import { TermsComponent } from './pages/info/terms/terms.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'camp', component: CampComponent },
  { path: 'camps', component: CampComponent },
  { path: 'camps/detail', component: CampDetailsComponent },
  { path: 'taborok', redirectTo: 'camps', pathMatch: 'full' },
  { path: 'taborok/detail', redirectTo: 'camps/detail', pathMatch: 'full' },
  
  // Auth routes
  { path: 'login', component: LoginComponent },
  { path: 'bejelentkezes', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: RegisterComponent },
  { path: 'regisztracio', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'logout', redirectTo: '', pathMatch: 'full' }, // This should be handled by auth service
  
  // User routes
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'profil', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'my-applications', component: ApplicationComponent, canActivate: [AuthGuard] },
  { path: 'jelentkezesek', redirectTo: 'my-applications', pathMatch: 'full' },
  { path: 'dokumentumok', component: DocumentComponent, canActivate: [AuthGuard] },
  
  // Camp types routes
  { path: 'camp-types', component: CampTypesComponent },
  { path: 'camp-types/sport', component: CampTypesComponent },
  { path: 'camp-types/art', component: CampTypesComponent },
  { path: 'camp-types/science', component: CampTypesComponent },
  
  // Dashboard routes
  { path: 'szulo/dashboard', component: ParentDashboardComponent, canActivate: [AuthGuard] },
  { path: 'pedagogus/dashboard', component: TeacherDashboardComponent, canActivate: [AuthGuard] },
  { path: 'onkentes/dashboard', component: VolunteerDashboardComponent, canActivate: [AuthGuard] },
  
  // Admin routes
  { 
    path: 'admin', 
    canActivate: [AdminGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'taborok', component: AdminDashboardComponent },
      { path: 'users', component: AdminDashboardComponent }
    ]
  },
  
  // Info pages
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'contact', component: ContactComponent },
  

  
  // Fallback route (should be last)
  { path: '**', redirectTo: 'home' }
];
