import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampTypesComponent } from './camp-types.component';

describe('CampTypesComponent', () => {
  let component: CampTypesComponent;
  let fixture: ComponentFixture<CampTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
