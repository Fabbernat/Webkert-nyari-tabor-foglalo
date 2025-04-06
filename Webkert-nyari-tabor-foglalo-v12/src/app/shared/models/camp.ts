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
  }