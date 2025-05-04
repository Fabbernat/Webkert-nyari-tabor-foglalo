// src/app/directives/color-highlight.directive.ts

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorHighlight]'
})
export class ColorHighlightDirective {
  @Input() set appColorHighlight(capacity: number) {
    // Ha kevesebb mint 5 hely van, piros háttér és figyelmeztető tooltip
    if (capacity < 5) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffcccc');
      this.renderer.setAttribute(this.el.nativeElement, 'title', 'Figyelem: kevés a szabad hely!');
    }
    // Ha bőven van hely, zöldes háttér és nyugtató tooltip
    else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ccffcc');
      this.renderer.setAttribute(this.el.nativeElement, 'title', 'Még bőven van szabad hely.');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Hozzáférés a DOM elemhez és stílushoz
  }
}
