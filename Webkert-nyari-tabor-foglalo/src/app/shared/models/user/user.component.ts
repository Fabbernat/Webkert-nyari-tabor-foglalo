import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
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
export interface User {
  birthDate: string | number | Date;
  id?: string;
  email: string;
  nev: string;
  userType: UserType;
  userRole: UserRole;
      organizerType?: OrganizerType;
  
  telefonszam: string;
  lakcim?: string;
  szuletesiDatum?: Date;
  regisztracioIdopontja: Date;
  aktivitas: boolean;
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
  nev: string;
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