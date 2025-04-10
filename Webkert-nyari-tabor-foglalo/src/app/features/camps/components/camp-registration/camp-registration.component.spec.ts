import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampRegistrationComponent } from './camp-registration.component';

describe('CampRegistrationComponent', () => {
  let component: CampRegistrationComponent;
  let fixture: ComponentFixture<CampRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
