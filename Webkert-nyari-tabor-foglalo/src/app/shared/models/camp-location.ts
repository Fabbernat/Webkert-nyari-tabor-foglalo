export interface CampLocation {
    id?: string;
    name: string;
    address: string;
    city: string;
    zipCode: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    capacity: number;
    facilities: string[];
    images: string[];
    createdBy: string; // Admin ID-ja
    createdAt: Date;
  }