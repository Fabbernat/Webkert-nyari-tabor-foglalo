// src/app/directives/highlight.directive.ts

import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // ez lesz a direktíva neve sablonban
})
export class HighlightDirective {
  @Input() set appHighlight(active: boolean) {
    // Ha az "active" igaz, kiemeljük félkövérrel
    if (active) {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Az elemhez és a stíluskezelőhöz való hozzáférés
  }
}
