import { Component } from '@angular/core';
import { Camp, CampType, CampFormat } from '../../../../shared/models/camp/camp.component';

@Component({
  selector: 'app-featured-camps',
  standalone: true,
  imports: [],
  templateUrl: './featured-camps.component.html',
  styleUrl: './featured-camps.component.scss'
})
export class FeaturedCampsComponent {
  featuredCamps: Camp[] = [
    {
      name: 'A tábor neve',
      description: 'A tábor leírása',
      campType: CampType.CSERKESZTABOR,
      campFormat: CampFormat.OVERNIGHT,
      location: 'Gödöllő',
      startDate: new Date('2025-06-01'),
      endDate: new Date('2025-06-07'),
      capacity: 30,
      price: 35000,
      registeredParticipants: 20,
      minAge: 12,
      maxAge: 99,
      organizerId: 'bestSzervezo369',
      dailyProgram: [],
      kepek: [],
      napokLebontasa: [],
      jelentkezesiHatarido: new Date
    }
  ];
}