import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    { 
      path: 'cserkesztabor.jpg', 
      title: 'Cserkésztábor', 
      description: 'Kalandok és természetfelfedezés cserkésztáborunkban' 
    },
    { 
      path: 'group_of_children_lying_in_the_grass_in_a_circle.jpg', 
      title: 'Közösségi programok', 
      description: 'Gyermekeink élményei a táborban' 
    },
    { 
      path: 'island_camp.jpg', 
      title: 'Cserkésztábor sátrazás kép', 
      description: 'Ez egy kép egyedülálló cserkésztábori kalandokról.' 
    },
    { 
      path: 'nyari_tabor_2022.jpg', 
      title: 'Nyári tábor 2022', 
      description: 'A múlt évi nyári tábor legjobb pillanatai' 
    },
    { 
      path: 'szent_margit.jpg', 
      title: 'Szent Margit-sziget', 
      description: 'Táborhelyszínünk a gyönyörű szigeten' 
    }
  ];
}