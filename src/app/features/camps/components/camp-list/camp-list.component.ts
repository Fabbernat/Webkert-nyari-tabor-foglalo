// features/camps/components/camp-list/camp-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CampService } from '../../services/camp.service';
import { Camp } from '../../../shared/models/camp.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-camp-list',
  templateUrl: './camp-list.component.html',
  styleUrls: ['./camp-list.component.scss']
})
export class CampListComponent implements OnInit {
  camps$: Observable<Camp[]>;

  constructor(private campService: CampService) {}

  ngOnInit(): void {
    this.camps$ = this.campService.getCamps();
  }
}