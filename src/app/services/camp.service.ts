import { Camp } from "../shared/models/camp/camp.component";

export class CampService{
    firestore: any;

addCamp(camp: Camp): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('camps').doc(id).set({ ...camp, id });
  }
  
  updateCamp(id: string, camp: Camp): Promise<void> {
    return this.firestore.collection('camps').doc(id).update(camp);
  }
  
  deleteCamp(id: string): Promise<void> {
    return this.firestore.collection('camps').doc(id).delete();
  }
}