import { Component } from '@angular/core';
import { Child, TeacherGroup, User } from '../user/user.component';
import { Camp } from '../camp/camp.component';

@Component({
  selector: 'app-application',
  imports: [],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class ApplicationComponent {

}

// Jelentkezés modell
export interface Application {
  id?: string;
  tabor: Camp;
  jelentkezo: User;
  jelentkezesIdopontja: Date;
  statusz: ApplicationStatus;
  fizetesStatusz: PaymentStatus;
  fizetendoOsszeg: number;
  gyermekek?: Child[];
  csoportAdatok?: TeacherGroup;
  megjegyzes?: string;
  dokumentumok?: Document[];
}

// Jelentkezés státusz
export enum ApplicationStatus {
  FELDOLGOZAS_ALATT = 'Feldolgozás alatt',
  ELFOGADVA = 'Elfogadva',
  ELUTASITVA = 'Elutasítva',
  VAROLISTARA_HELYEZVE = 'Várólistára helyezve'
}

// Fizetés státusz
export enum PaymentStatus {
  FIZETESRE_VAR = 'Fizetésre vár',
  FIZETVE = 'Fizetve',
  VISSZATERITES_FOLYAMATBAN = 'Visszatérítés folyamatban',
  VISSZATERITVE = 'Visszatérítve'
}