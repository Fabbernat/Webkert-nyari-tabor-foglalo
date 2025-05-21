import { Component } from '@angular/core';
import { Camp, CampFormat, CampType } from '../../shared/models/Camp';

@Component({
  selector: 'app--camps',
  standalone: true,
  imports: [],
  templateUrl: './camps.component.html',
  styleUrl: './camps.component.scss'
})
export class CampsComponent {
  Camps: Camp[] = [
    
  ];
}