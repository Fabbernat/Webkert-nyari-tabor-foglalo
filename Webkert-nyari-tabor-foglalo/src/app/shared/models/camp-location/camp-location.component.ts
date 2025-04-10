import { Component } from '@angular/core';

@Component({
  selector: 'app-camp-location',
  imports: [],
  templateUrl: './camp-location.component.html',
  styleUrl: './camp-location.component.scss'
})
export class CampLocationComponent {

}

export interface CampLocation {
  id?: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  capacity: number;
  facilities: string[];
  images: string[];
  createdBy: string; // Admin ID-ja
  createdAt: Date;
}