// shared/models/registration.model.ts
export interface Registration {
    id: string;
    campId: string;
    userId: string;
    children: Child[];
    adults?: number; // for educators
    consentFormUrl?: string; // for children over 16
    status: 'pending' | 'approved' | 'rejected';
    createdAt: Date;
  }