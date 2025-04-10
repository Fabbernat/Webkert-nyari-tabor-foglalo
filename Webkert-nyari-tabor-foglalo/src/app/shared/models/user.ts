export enum UserType {
    PARENT = 'szülő',
    PEDAGOGUE = 'pedagógus',
    CHILD = 'kiskorú',
    CAMP_ORGANIZER = 'tábori szervező/animátor',
    ADMIN = 'adminisztrátor'
  }
  
  export enum OrganizerType {
    SUBCAMP_LEADER = 'Altáborvezető',
    CAMP_ANIMATOR = 'Tábori animátor',
    PROGRAM_COORDINATOR = 'Program-lebonyolító',
    KITCHEN_ASSISTANT = 'Konyhai kisegítő',
    LOGISTICS_MANAGER = 'Tábori logisztikus'
  }
  
  export interface User {
    id?: string;
    username: string;
    email: string;
    birthDate: Date;
    userType: UserType;
    organizerType?: OrganizerType;
    registeredCamps?: string[]; // Tábor ID-k listája
    createdCamps?: string[]; // Létrehozott táborok ID-i
    consentForm?: string; // 16 éves kornál idősebb kiskorúaknál szülői beleegyező nyilatkozat URL-je
  }