// C:\VSCodeProjects\Webkert-nyari-tabor-foglalo\Webkert-nyari-tabor-foglalo\src\main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/pages/home/home.component';

bootstrapApplication(HomeComponent, appConfig)
  .catch(err => console.error(err)); // hiányzik valahonnan (valszeg ngmodule-ban vagy az applicationconfigban) egy provideHttpClient(