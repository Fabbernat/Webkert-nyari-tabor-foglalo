import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
 
    // other components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    // other modules
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
