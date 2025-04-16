// C:\VSCodeProjects\Webkert-nyari-tabor-foglalo\Webkert-nyari-tabor-foglalo\src\main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// provideHttpClient(); // kell 1 helyre (valszeg ngmodule-ba vagy az applicationconfigba) egy provideHttpClient()