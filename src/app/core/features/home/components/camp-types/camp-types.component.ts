// C:\VSCodeProjects\Webkert-nyari-tabor-foglalo\Webkert-nyari-tabor-foglalo\src\app\features\home\components\camp-types\camp-types.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-camp-types',
  imports: [
    CommonModule
  ],
  templateUrl: './camp-types.component.html',
  styleUrls: ['./camp-types.component.scss']
})
export class CampTypesComponent {
  campTypes = [
    { name: 'Adventure' },
    { name: 'Sports' },
    { name: 'Technology' },
  ];
}
