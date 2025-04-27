import { Component } from '@angular/core';

@Component({
  selector: 'app-camp',
  imports: [],
  templateUrl: './camp.component.html',
  styleUrl: './camp.component.scss'
})
export class CampComponent {

}

// Tábor modell
export interface Camp {
  id?: string;
  name: string;
  campType: CampType;
  campFormat: CampFormat;
  location: string; // tábor helyszín ID
  startDate: Date;
  endDate: Date;
  description: string;
  price: number;
  capacity: number;
  registeredParticipants: number;
  maxParticipants: number;
    minAge: number;
    maxAge: number;
    organizerId: string; // A tábort létrehozó személy ID-ja
    dailyProgram: {
      date: Date;
      lead: string;
      estimatedChildren: number;
      estimatedAdults: number;
      programs: string[];
      meals: string[];
    }[];
  koordinatak?: {
    lat: number;
    lng: number;
  };
  imageUrls: string[];
  napokLebontasa: NapiLetszam[];
  jelentkezesiHatarido: Date;
  szuksegesEszkozok?: string[];
  csoportok?: string[];
  kiserokSzama?: number;
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
  ERZSEBETTABOR = 'Erzsébet-tábor'
}

export enum CampFormat {
  DAY_CAMP = 'napközis',
  OVERNIGHT = 'ottalvós'
}

// Program modell
export interface Program {
  id?: string;
  nev: string;
  leiras: string;
  kezdoIdopont: Date;
  vegIdopont: Date;
  helyszin: string;
  szuksegesEszkozok?: string[];
  felelosok?: string[];
}

// Napi létszám modell
export interface NapiLetszam {
  datum: Date;
  felnottLetszam: number;
  gyerekLetszam: number;
}
