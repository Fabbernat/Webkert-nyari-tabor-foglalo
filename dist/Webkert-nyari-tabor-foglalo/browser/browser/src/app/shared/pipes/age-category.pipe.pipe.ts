// src/app/core/pipes/age-category.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCategory',
  standalone: true
})
export class AgeCategoryPipe implements PipeTransform {
  transform(birthDate: Date): string {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    
    if (age < 6) {
      return 'Óvodás';
    } else if (age < 12) {
      return 'Alsós';
    } else if (age < 19) {
      return 'Felsős';
    } else {
      return 'Felnőtt';
    }
  }
}