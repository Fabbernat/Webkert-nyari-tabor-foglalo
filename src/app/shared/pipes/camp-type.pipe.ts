// shared/pipes/camp-type.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'campType'
})
export class CampTypePipe implements PipeTransform {
  transform(value: string): string {
    const types = {
      'scout': 'Cserkésztábor',
      'forest': 'Erdei vándortábor',
      'sailing': 'Vitorlástábor',
      'dance': 'Tánctábor',
      'theater': 'Színjátszótábor',
      'religion': 'Hittantábor',
      'coding': 'Programozó tábor',
      'math': 'Matematika tábor',
      'robotics': 'Robotika tábor',
      'elizabeth': 'Erzsébet-tábor'
    };
    
    return types[value] || value;
  }
}