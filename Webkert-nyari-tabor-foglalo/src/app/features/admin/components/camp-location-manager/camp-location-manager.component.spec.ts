import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampLocationManagerComponent } from './camp-location-manager.component';

describe('CampLocationManagerComponent', () => {
  let component: CampLocationManagerComponent;
  let fixture: ComponentFixture<CampLocationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampLocationManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampLocationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
