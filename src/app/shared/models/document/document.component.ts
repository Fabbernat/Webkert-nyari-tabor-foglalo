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
export class Document {
  

  constructor(
    public id: string,
    public tulajdonos: User,
    public fileName: string,
    public type: DocumentType,
    public url: string,
    public uploadedAt: Date,
    public status: DocumentStatus;
  ) {}
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