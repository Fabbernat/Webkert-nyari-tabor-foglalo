// shared/models/camp.model.ts
export interface Camp {
    id: string;
    name: string;
    type: 'scout' | 'forest' | 'sailing' | 'dance' | 'theater' | 'religion' | 'coding' | 'math' | 'robotics' | 'elizabeth';
    startDate: Date;
    endDate: Date;
    location: string;
    description: string;
    meals: string[];
    accommodation: string;
    maxChildren: number;
    maxAdults: number;
    dailySchedule: DailySchedule[];
    currentChildren: number;
    currentVolunteers: number;
  }
  
  export interface DailySchedule {
    date: Date;
    activities: Activity[];
  }
  
  export interface Activity {
    time: string;
    description: string;
  }