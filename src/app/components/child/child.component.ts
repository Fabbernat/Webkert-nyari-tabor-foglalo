import { Component } from '@angular/core';
import { DietaryLabelPipe } from '../../shared/pipes/dietary-label.pipe';

@Component({
  selector: 'app-child',
  imports: [DietaryLabelPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  child = {
    name: 'Lakatos Brendon',
    dietaryRequirement: 'Laktóz',  // From API
    birthPlace: 'Borsod'

  };
}
