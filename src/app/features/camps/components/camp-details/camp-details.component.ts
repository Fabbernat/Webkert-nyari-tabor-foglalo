// features/camps/components/camp-details/camp-details.component.ts
import { Component, OnInit } from '@angular/core';
import { CampService } from '../../services/camp.service';
import { ActivatedRoute } from '@angular/router';
import { Camp } from '../../../shared/models/camp.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.component.html',
  styleUrls: ['./camp-details.component.scss']
})
export class CampDetailsComponent implements OnInit {
  camp$: Observable<Camp>;
  campId: string;

  constructor(
    private campService: CampService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.campId = this.route.snapshot.paramMap.get('id');
    this.camp$ = this.campService.getCampById(this.campId);
  }

  registerForCamp() {
    // Implement registration logic
  }
}