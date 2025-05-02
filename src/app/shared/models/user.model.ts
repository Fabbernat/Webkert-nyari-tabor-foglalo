// shared/models/user.model.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'parent' | 'educator' | 'volunteer' | 'admin';
  children?: Child[];
  school?: string; // for educators
  volunteerType?: 'commander' | 'subleader' | 'guardian' | 'animator' | 'program' | 'kitchen' | 'logistics'; // for volunteers
}

export interface Child {
  name: string;
  birthDate: Date;
  medicalInfo?: string;
}