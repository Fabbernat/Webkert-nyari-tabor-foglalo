import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CampsComponent } from './pages/camps/camps.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ProfileComponent, CampsComponent, MenuComponent NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Nyári tábor foglaló alkalmazás';

  a: any = 0;
  constructor(){
    console.log(this.a);
    
  };

  myFunction(){};
}
