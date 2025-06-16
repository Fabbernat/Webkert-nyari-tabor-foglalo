import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dietaryLabel'
})
export class DietaryLabelPipe implements PipeTransform {
  transform(dietaryCode: string): string {
    const translations: { [key: string]: string } = {
      'GLUTEN_FREE': 'Gluténmentes',
      'LACTOSE_FREE': 'Laktózmentes',
      'VEGETARIAN': 'Vegetáriánus',
      'VEGAN': 'Vegán',
      'NUT_FREE': 'Diómentes'
      // Add more as needed
    };
    return translations[dietaryCode] || dietaryCode; // Fallback to English if no translation
  }
}

