// models/user.model.ts
export enum UserType {
    SZULO = 'SZULO',
    FIATAL = 'FIATAL',
    PEDAGOGUS = 'PEDAGOGUS',
    ONKENTES = 'ONKENTES',
    ADMIN = 'ADMIN'
  }
  
  export interface User {
    id: string;
    email: string;
    nev: string;
    userType: UserType;
    telefonszam: string;
    createdAt: Date;
  }
  
  export interface SzuloUser extends User {
    gyermekek: Gyermek[];
  }
  
  export interface FiatalUser extends User {
    szuletesiDatum: Date;
    szuloiBeleegyezes?: string; // Dokumentum URL
  }
  
  export interface PedagogusUser extends User {
    iskolaNeve: string;
    pozicio: string;
  }
  
  export interface OnkentesUser extends User {
    szuletesiDatum: Date;
    onkentesTipus: string;
    tapasztalat: string;
  }
  
  export interface AdminUser extends User {
    jogosultsagok: string[];
  }
  
  export interface Gyermek {
    id: string;
    nev: string;
    szuletesiDatum: Date;
    megjegyzes?: string;
  }
  
  // models/camp.model.ts
  export interface Camp {
    id: string;
    nev: string;
    tipus: string;
    leiras: string;
    helyszin: string;
    kezdoDatum: Date;
    zaroDatum: Date;
    minLetszam: number;
    maxLetszam: number;
    korosztalyMin: number;
    korosztalyMax: number;
    dij: number;
    kepUrl: string;
    programok: CampProgram[];
    napokLeterheltsege: NapiTerheles[];
  }
  
  export interface CampProgram {
    id: string;
    nev: string;
    leiras: string;
    idopont: Date;
    idotartamPerc: number;
  }
  
  export interface NapiTerheles {
    datum: Date;
    gyerekekSzama: number;
    felnottekSzama: number;
  }
  
  export interface CampRegistration {
    id: string;
    campId: string;
    userId: string;
    jelentkezesIdopontja: Date;
    allapot: JelentkezesAllapot;
    fizetesAllapot: FizetesAllapot;
    fizetesiHatarido?: Date;
    resztvevok?: Resztvevo[];
    megjegyzes?: string;
  }
  
  export interface PedagogusRegistration extends CampRegistration {
    gyerekekSzama: number;
    kiserokSzama: number;
    gyerekekKorosztaly: string;
  }
  
  export interface OnkentesRegistration extends CampRegistration {
    onkentesTipus: string;
    idoszak: {
      kezdet: Date;
      veg: Date;
    };
  }
  
  export enum JelentkezesAllapot {
    FOLYAMATBAN = 'FOLYAMATBAN',
    ELFOGADVA = 'ELFOGADVA',
    ELUTASITVA = 'ELUTASITVA',
    LEMONDVA = 'LEMONDVA'
  }
  
  export enum FizetesAllapot {
    FIZETESRE_VAR = 'FIZETESRE_VAR',
    FIZETVE = 'FIZETVE',
    ELOJEGYEZVE = 'ELOJEGYEZVE',
    VISSZAUTALVA = 'VISSZAUTALVA'
  }
  
  export interface Resztvevo {
    id: string;
    nev: string;
    szuletesiDatum: Date;
    tajSzam?: string;
    allergia?: string;
    egyebMegjegyzes?: string;
  }