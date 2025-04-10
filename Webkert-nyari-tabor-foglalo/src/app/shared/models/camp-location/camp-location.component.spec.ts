import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampLocationComponent } from './camp-location.component';

describe('CampLocationComponent', () => {
  let component: CampLocationComponent;
  let fixture: ComponentFixture<CampLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
