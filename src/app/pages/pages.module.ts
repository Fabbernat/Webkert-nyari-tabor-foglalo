// src/app/pages/pages.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampFlowDemoComponent } from './camp-flow-demo/camp-flow-demo.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CampFlowDemoComponent,
    CommonModule // ← itt is kell!
  ]
})
export class PagesModule { }
