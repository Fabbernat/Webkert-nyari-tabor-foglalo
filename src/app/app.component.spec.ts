import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getAnalytics } from "firebase/analytics";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // const analytics = getAnalytics(app); // Argument of type 'AppComponent' is not assignable to parameter of type 'FirebaseApp'. Type 'AppComponent' is missing the following properties from type 'FirebaseApp': name, options, automaticDataCollectionEnabled
    expect(app).toBeTruthy();
  });

  it(`should have the 'Webkert-nyari-tabor-foglalo' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // const analytics = getAnalytics(app); // Argument of type 'AppComponent' is not assignable to parameter of type 'FirebaseApp'. Type 'AppComponent' is missing the following properties from type 'FirebaseApp': name, options, automaticDataCollectionEnabled
    expect(app.title).toEqual('Webkert-nyari-tabor-foglalo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Webkert-nyari-tabor-foglalo');
  });
});
