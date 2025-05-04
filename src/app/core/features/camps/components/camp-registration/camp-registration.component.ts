import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CampService } from '../../../../core/services/camp.service';

@Component({
  selector: 'app-camp-registration',
  imports: [CommonModule],
  templateUrl: './camp-registration.component.html',
  styleUrl: './camp-registration.component.scss'
})
export class CampRegistrationComponent {
  camps: any;
  
    constructor(private campService: CampService) {}
  
    ngOnInit(): void {
      this.campService.getCamps().subscribe(camps => {
        this.camps = camps;
      });
    }
  
    navigateToBooking(campId: string): void {
      console.log(`Regisztálás erre a táborra: ${campId}`);
      // TODO
    }
}
