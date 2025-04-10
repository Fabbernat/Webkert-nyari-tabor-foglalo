import { Component } from '@angular/core';
import { User } from '../user/user.component';

@Component({
  selector: 'app-document',
  imports: [],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {

}

// Dokumentum modell
export interface Document {
  id?: string;
  nev: string;
  tipus: DocumentType;
  url: string;
  feltoltesIdopontja: Date;
  lejaratIdopontja?: Date;
  statusz: DocumentStatus;
  tulajdonos: User;
}

// Dokumentum státusz
export enum DocumentStatus {
  FELDOLGOZAS_ALATT = 'Feldolgozás alatt',
  ELFOGADVA = 'Elfogadva',
  ELUTASITVA = 'Elutasítva'
}

// Dokumentum típusok
export enum DocumentType {
  SZULOI_NYILATKOZAT = 'Szülői beleegyező nyilatkozat',
  EGESZSEGUGYI_NYILATKOZAT = 'Egészségügyi nyilatkozat',
  ORVOSI_IGAZOLAS = 'Orvosi igazolás',
  SZAMLAZASI_ADATOK = 'Számlázási adatok',
  EGYEB = 'Egyéb dokumentum'
}