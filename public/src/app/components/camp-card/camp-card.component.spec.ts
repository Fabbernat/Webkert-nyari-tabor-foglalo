import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampCardComponent } from './camp-card.component';

describe('CampCardComponent', () => {
  let component: CampCardComponent;
  let fixture: ComponentFixture<CampCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
