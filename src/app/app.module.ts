// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // egyéb komponensek
  ],
  imports: [
    BrowserModule,
    CommonModule, // ← EZ KELL a *ngSwitch, *ngIf, stb.-hez
  ],
  bootstrap: []
})
export class AppModule { }
