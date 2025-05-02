// features/camps/services/camp.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Camp } from '../../shared/models/camp.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampService {
  constructor(private afs: AngularFirestore) {}

  getCamps() {
    return this.afs.collection<Camp>('camps').valueChanges({ idField: 'id' });
  }

  getCampById(id: string) {
    return this.afs.doc<Camp>(`camps/${id}`).valueChanges();
  }

  createCamp(camp: Camp) {
    return this.afs.collection('camps').add(camp);
  }

  updateCamp(id: string, camp: Partial<Camp>) {
    return this.afs.doc(`camps/${id}`).update(camp);
  }

  deleteCamp(id: string) {
    return this.afs.doc(`camps/${id}`).delete();
  }

  getCampsByType(type: string) {
    return this.afs.collection<Camp>('camps', ref => ref.where('type', '==', type))
      .valueChanges({ idField: 'id' });
  }
}