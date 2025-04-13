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
GALLERY_IMAGES: any;
  

}

export const GALLERY_IMAGES  = [
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
    title: 'Cserkésztábor Izlandon', 
    description: 'Ez egy egyedülálló kép az izlandi cserkésztáborokról.' 
  },
  { 
    path: 'szinjatszotabor.jpg', 
    title: 'Színjátszó tábor', 
    description: 'A múlt évi nyári tábor legjobb pillanatai' 
  },
  { 
    path: 'nyari_tabor_2022.jpg', 
    title: 'Nyári tábor 2022', 
    description: 'A múlt évi nyári tábor legjobb pillanatai' 
  },
  { 
    path: 'Zankai_Elmenytabor_2019.jpg', 
    title: 'Erzsébet-táborok', 
    description: 'Minden évben egész nyáron várjuk a gyermekeket.' 
  },
  { 
    path: 'drcode.jpg', 
    title: 'Programozás és robotika táborok', 
    description: 'Programozás és robotika tematikájú táborok a Dr. Code szervezésével!' 
  },
  { 
    path: 'forest-summer-camp.jpg', 
    title: 'Erdei vándortábor', 
    description: 'A múlt évi nyári tábor legjobb pillanatai' 
  },
  { 
    path: 'szent_margit.jpg', 
    title: 'Szent Margit', 
    description: 'Táborhelyszínünk a gyönyörű szigeten' 
  }
];