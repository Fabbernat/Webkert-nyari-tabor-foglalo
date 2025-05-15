import { Component } from '@angular/core';

@Component({
  selector: 'app-camp',
  imports: [],
  template: './camp.component.html'
})
export class CampComponent {

}

// Tábor modell
export class Camp {
  available:boolean = true;
  campType!: CampType;
  campFormat!: CampFormat;
  description!: string;
  price!: number;
  capacity!: number;
  registeredCount!: number;
  maxParticipants!: number;
    minAge!: number;
    maxAge!: number;
    organizerId!: string; // A tábort létrehozó személy ID-ja
    dailyProgram!: {
    date: Date;
    lead: string;
    estimatedChildren: number;
    estimatedAdults: number;
    programs: string[];
    meals: string[];
  }[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  imageUrls!: string[];
  headCounts!: DailyHeadCounts[];
  applicationDeadline!: Date;
  necessaryTools?: string[];
  groups?: string[];
  numberOfPedagogues?: number;
  dueDate: any;
  completed: unknown;

  constructor(
    public id: string,
    public name: string,
    public location: string,
    public startDate: Date,
    public endDate: Date
  ) {}
}

// Tábor típusok
export enum CampType {
  CSERKESZTABOR = 'cserkésztábor',
  ERDEI_VANDORTABOR = 'erdei vándortábor',
  VITORLAS_TABOR = 'vitorlástábor',
  TANCTABOR = 'tánctábor',
  ZENETABOR = 'zenetábor',
  ANGOL_TABOR = 'angoltábor',
  NEMET_TABOR = 'némettábor',
  SZINJATSZO_TABOR = 'színjátszótábor',
  HITTAN_TABOR = 'hittantábor',
  PROGRAMOZO_TABOR = 'programozó tábor',
  MATEMATIKA_TABOR = 'matek tábor',
  ROBOTIKA_TABOR = 'robotika tábor',
  ERZSEBETTABOR = 'Erzsébet-tábor',
  // ...
}

export enum CampFormat {
  DAY_CAMP = 'napközis',
  OVERNIGHT = 'ottalvós'
}

// Program modell
export interface Program {
  id?: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  necessaryTools?: string[];
  campLeaders?: string[]; // Napostiszt
}

// Napi létszám modell
export interface DailyHeadCounts {
  date: Date;
  adultHeadCount: number;
  childHeadCount: number;
}
