import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampFlowDemoComponent } from './camp-flow-demo.component';

describe('CampFlowDemoComponent', () => {
  let component: CampFlowDemoComponent;
  let fixture: ComponentFixture<CampFlowDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampFlowDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampFlowDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
