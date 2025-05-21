import { Component } from '@angular/core';
import { Camp } from './Camp';
import { User } from './User';
import { TeacherGroup, Child } from './CampUser';

@Component({
  selector: 'app-application',
  imports: [],
  template: './application.component.html',
  styles: '{}'
})
export class ApplicationComponent {

}

// Jelentkezés modell
export class Application {
  

  constructor(
    public id: string,
    public user: User,
    public camp: Camp,
    public applicationStatus: 'pending' | 'approved' | 'rejected',
    public paymentStatus: PaymentStatus,
    public paymentDue: number,
    public applicationDate: Date,
    public megjegyzes?: string,
    public dokumentumok?: Document[],
  ) {}
}

export class EtaborApplication extends Application{
  constructor(
    public override id: string,
    public override user: User,
    public override camp: Camp,
    public override applicationStatus: 'pending' | 'approved' | 'rejected',
    public override paymentStatus: PaymentStatus,
    public override paymentDue: number,
    public override applicationDate: Date,
    public groupData?: TeacherGroup,
    public supervisors?: User[],
    public children?: Child[],
    public override megjegyzes?: string,
    public override dokumentumok?: Document[],
  ) {
    super(
      id,
      user,
      camp,
      applicationStatus,
      paymentStatus,
      paymentDue,
      applicationDate,
      megjegyzes,
      dokumentumok
    );
  }
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