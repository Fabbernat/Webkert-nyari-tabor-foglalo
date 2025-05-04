// src/app/pages/camp-flow-demo/camp-flow-demo.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-camp-flow-demo',
  templateUrl: './camp-flow-demo.component.html',
})
export class CampFlowDemoComponent {
  // true esetén van hely
  hasSpace = true;

  // Táborlisták – *ngFor-hoz
  camps = [
    { name: 'Mátrai cserkésztábor' },
    { name: 'Tiszai kenutábor' },
    { name: 'Zánkai Erzsébet-tábor' },
    { name: 'Fonyódligeti Erzsébet-tábor' },
  ];

  // Tábor státusz – ngSwitch-hez
  campStatus = 'active';
}
