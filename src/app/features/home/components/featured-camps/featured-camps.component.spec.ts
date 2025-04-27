import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCampsComponent } from './featured-camps.component';

describe('FeaturedCampsComponent', () => {
  let component: FeaturedCampsComponent;
  let fixture: ComponentFixture<FeaturedCampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCampsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
