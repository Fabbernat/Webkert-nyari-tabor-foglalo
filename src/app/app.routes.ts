import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { CampComponent } from './shared/models/camp/camp.component';
import { NgModule } from '@angular/core';
import { CampFlowDemoComponent } from './pages/camp-flow-demo/camp-flow-demo.component';
import { CampListComponent } from './core/features/camps/components/camp-list/camp-list.component';
import { CampCardComponent } from './core/features/camps/components/camp-card/camp-card.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
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

  // Fallback route (should be last)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
