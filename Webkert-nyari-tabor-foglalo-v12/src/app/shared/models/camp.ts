export enum CampType {
    SCOUTS = 'cserkésztábor',
    HIKING = 'erdei vándortábor',
    SAILING = 'vitorlástábor',
    DANCE = 'tánctábor',
    MUSIC = 'zenetábor',
    ENGLISH = 'angoltábor',
    GERMAN = 'némettábor',
    ACTING = 'színjátszótábor',
    RELIGION = 'hittantábor',
    PROGRAMMING = 'programozó tábor',
    MATH = 'matematika tábor',
    ROBOTICS = 'robotika tábor'
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
      activities: string[];
      estimatedChildren: number;
      estimatedAdults: number;
    }[];
    isSaintMargit?: boolean; // "Szent Margit" tábor jelölése
  }