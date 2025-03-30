
// home.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CampService } from '../../services/camp.service';
import { UserType } from '../../models/user.model';
import { Camp } from '../../models/camp.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: []
})
export class HomeComponent implements OnInit {
  userType: UserType | null = null;
  isLoggedIn = false;
  camps: Camp[] = [];
  filteredCamps: Camp[] = [];
  selectedFilter: string = 'all';
  
  taborTipusok = [
    { id: 'cserkesz', name: 'Cserkésztábor' },
    { id: 'erdei', name: 'Erdei vándortábor' },
    { id: 'vitorlas', name: 'Vitorlástábor' },
    { id: 'tanc', name: 'Tánctábor' },
    { id: 'szinjatszo', name: 'Színjátszótábor' },
    { id: 'hittan', name: 'Hittantábor' },
    { id: 'programozo', name: 'Programozó tábor' },
    { id: 'matek', name: 'Matek tábor' },
    { id: 'robotika', name: 'Robotika tábor' },
    { id: 'szentmargit', name: 'Szent Margit tábor' }
  ];
  
  onkentesek = [
    { id: 'altaborvezeto', name: 'Altáborvezető' },
    { id: 'animator', name: 'Tábori animátor' },
    { id: 'programlebonyolito', name: 'Program-lebonyolító' },
    { id: 'konyha', name: 'Konyhai kisegítő' },
    { id: 'taborlifecoordinator', name: 'Tábori életkoordinátor' } // Jobb név a logisztikusra
  ];

  constructor(
    private authService: AuthService,
    private campService: CampService
  ) {}

  ngOnInit(): void {
    this.authService.userType$.subscribe(userType => {
      this.userType = userType;
    });
    
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    
    this.loadCamps();
  }

  loadCamps(): void {
    this.campService.getCamps().subscribe(camps => {
      this.camps = camps;
      this.filterCamps();
    });
  }

  filterCamps(): void {
    if (this.selectedFilter === 'all') {
      this.filteredCamps = this.camps;
      return;
    }
    
    if (this.userType === UserType.SZULO || this.userType === UserType.FIATAL) {
      this.filteredCamps = this.camps.filter(camp => 
        camp.tipus !== 'szentmargit' || 
        (this.userType === UserType.FIATAL && camp.minKor >= 16)
      );
    } else if (this.userType === UserType.PEDAGOGUS) {
      this.filteredCamps = this.camps.filter(camp => 
        camp.tipus === 'szentmargit'
      );
    } else if (this.userType === UserType.ONKENTES) {
      this.filteredCamps = this.camps.filter(camp => 
        camp.tipus === 'szentmargit' || camp.tipus === 'cserkesz'
      );
    } else if (this.userType === UserType.ADMIN) {
      this.filteredCamps = this.camps;
    }
    
    if (this.selectedFilter !== 'all') {
      this.filteredCamps = this.filteredCamps.filter(camp => 
        camp.tipus === this.selectedFilter
      );
    }
  }

  onFilterChange(filter: string): void {
    this.selectedFilter = filter;
    this.filterCamps();
  }

  jelentkezesTaborba(camp: Camp): void {
    if (!this.isLoggedIn) {
      alert('Kérjük, jelentkezzen be a táborba való jelentkezéshez!');
      return;
    }
    
    this.campService.navigateToRegistration(camp.id);
  }
}