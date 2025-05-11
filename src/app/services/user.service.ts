import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, collection, query, where, getDocs } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'firebase/auth';
import { Camp } from '../shared/models/camp/camp.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) { }

  getUserProfile(): Observable<{
    user: User | null,
    camps: Camp[],
    stats: {
      total: number,
      completed: number,
      pending: number,
      completionRate: number
    }
  }> {
    return this.authService.currentUser.pipe(
      switchMap(authUser => {
        if (!authUser) {
          return of({
            user: null,
            camps: [],
            stats: { total: 0, completed: 0, pending: 0, completionRate: 0 }
          });
        }

        return from(this.fetchUserWithCamps(authUser.uid));
      })
    );
  }

  private async fetchUserWithCamps(userId: string): Promise<{
    user: User | null,
    camps: Camp[],
    stats: {
      total: number,
      completed: number,
      pending: number,
      completionRate: number
    }
  }> {
    try {
      // Felhasználó adatainak lekérése
      const userDocRef = doc(this.firestore, 'Users', userId);
      const userSnapshot = await getDoc(userDocRef);
      
      if (!userSnapshot.exists()) {
        return {
          user: null,
          camps: [],
          stats: { total: 0, completed: 0, pending: 0, completionRate: 0 }
        };
      }

      const userData = userSnapshot.data() as User;
      const user = { ...userData, id: userId };
      
      if (!user.camps || user.camps.length === 0) {
        return {
          user,
          camps: [],
          stats: { total: 0, completed: 0, pending: 0, completionRate: 0 }
        };
      }

      // Feladatok lekérése a Camps kollekcióból
      const campsCollection = collection(this.firestore, 'Camps');
      const q = query(campsCollection, where('id', 'in', user.camps));
      const campsSnapshot = await getDocs(q);
      
      campsSnapshot.forEach(doc => {
        [].push({ ...doc.data(), id: doc.id } as Camp);
      });

      // Statisztikák kiszámítása
      const total = [].length;
      const completed = [].filter(camp => camp.completed).length;
      const pending = total - completed;
      const completionRate = total > 0 ? (completed / total) * 100 : 0;

      return {
        user,
        camps: [],
        stats: {
          total,
          completed,
          pending,
          completionRate
        }
      };
    } catch (error) {
      console.error('Hiba a felhasználói adatok betöltése során:', error);
      return {
        user: null,
        camps: [],
        stats: { total: 0, completed: 0, pending: 0, completionRate: 0 }
      };
    }
  }
}