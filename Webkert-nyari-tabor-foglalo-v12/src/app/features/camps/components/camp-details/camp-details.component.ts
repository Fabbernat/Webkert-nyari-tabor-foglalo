import { Component } from '@angular/core';

@Component({
  selector: 'app-camp-details',
  imports: [],
  templateUrl: './camp-details.component.html',
  styleUrl: './camp-details.component.scss'
})
export class CampDetailsComponent {
  camp = {
    name: 'Minta tábor',
    description: 'Ez egy példa leírás a táborról.'
  };
}
