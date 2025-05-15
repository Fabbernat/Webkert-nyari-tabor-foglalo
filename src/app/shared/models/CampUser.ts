// TODO angolosítani
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: './user.component.html',
  styles: '{}'
})
export class UserComponent {

}

enum OrganizerType {
  SUBCAMP_LEADER = 'Altáborvezető',
  CAMP_ANIMATOR = 'Tábori animátor',
  PROGRAM_COORDINATOR = 'Program-lebonyolító',
  KITCHEN_ASSISTANT = 'Konyhai kisegítő',
  LOGISTICS_MANAGER = 'Tábori logisztikus'
};
export { OrganizerType };

// Felhasználó modell
export class User {
  birthDate!: string | number | Date;
  organizerType?: OrganizerType;


  lakcim?: string;
  szuletesiDatum?: Date;
  regisztracioIdopontja!: Date;
  aktivitas!: boolean;
  dokumentumok?: Document[];
  // Önkéntes/munkavállaló specifikus adatok
  onkentesTipus?: VolunteerType;
  // Pedagógus specifikus adatok
  intezmenyNev?: string;
  intezmenyAzonosito?: string;
  // Szülő specifikus adatok
  gyermekek?: Child[];

  registeredCamps?: string[]; // Tábor ID-k listája
  createdCamps?: string[]; // Létrehozott táborok ID-i
  consentForm?: string; // 16 éves kornál idősebb kiskorúaknál szülői beleegyező nyilatkozat URL-je
  camps: never[] = [];

  constructor(
    public id: string,
    public username: string,
    public displayName: string,
    public email: string,
    public telefonszam: string,
    public userType: UserType,
  ) { }
}

enum UserType {
  PARENT = 'szülő',
  PEDAGOGUE = 'pedagógus',
  CHILD = 'kiskorú',
  CAMP_ORGANIZER = 'tábori szervező/animátor',
  ADMIN = 'adminisztrátor'
}
export default UserType;





// Felhasználó szerepkörök
export enum UserRole {
  SZULO = 'szulo',
  PEDAGOGUS = 'pedagogus',
  ONKENTES = 'onkentes',
  ADMIN = 'admin'
}

// Önkéntes típusok
export enum VolunteerType {
  ALTABORVEZETO = 'Altáborvezető',
  ANIMATOR = 'Tábori animátor',
  PROGRAM = 'Program-lebonyolító',
  KONYHA = 'Konyhai kisegítő',
  LOGISZTIKA = 'Tábori ellátmányfelelős'
}

// Gyermek modell
export interface Child {
  id?: string;
  name: string;
  szuletesiDatum: Date;
  taj: string;
  allergia?: string;
  specialis_igeny?: string;
}

// Pedagógus csoport modell
export interface TeacherGroup {
  gyerekekSzama: number;
  korosztaly: string;
  kiserokSzama: number;
}