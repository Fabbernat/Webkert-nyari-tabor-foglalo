import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampFormComponent } from './camp-form.component';

describe('CampFormComponent', () => {
  let component: CampFormComponent;
  let fixture: ComponentFixture<CampFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
