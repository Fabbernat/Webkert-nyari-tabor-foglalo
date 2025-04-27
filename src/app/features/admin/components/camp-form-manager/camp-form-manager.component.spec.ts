import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampFormManagerComponent } from './camp-form-manager.component';

describe('CampFormManagerComponent', () => {
  let component: CampFormManagerComponent;
  let fixture: ComponentFixture<CampFormManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampFormManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampFormManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
