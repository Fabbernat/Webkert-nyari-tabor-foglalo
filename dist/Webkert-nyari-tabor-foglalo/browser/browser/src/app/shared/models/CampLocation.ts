import { Component } from '@angular/core';

@Component({
  selector: 'app-camp-location',
  imports: [],
  template: './camp-location.component.html',
})
export class CampLocationComponent {

}

export class CampLocation {
  city!: string;
  zipCode!: string;
  coordinates!: {
    latitude: number;
    longitude: number;
  };
  facilities!: string[];
  images!: string[];
  createdBy!: string; // Admin ID-ja
  createdAt!: Date;

  constructor(
    public id: string,
    public name: string,
    public address: string,
    public capacity: number,
    public description?: string
  ) {}
}