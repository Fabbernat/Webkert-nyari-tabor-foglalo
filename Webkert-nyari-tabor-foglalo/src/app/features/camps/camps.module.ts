// src/app/features/camps/camps.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCampComponent } from './components/create-camp/create-camp.component';

@NgModule({
  declarations: [],
  imports: [CreateCampComponent, CommonModule],
  exports: [CreateCampComponent] // <-- important if used outside this module
})
export class CampsModule {}
