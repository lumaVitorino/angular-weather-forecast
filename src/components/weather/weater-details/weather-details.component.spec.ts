import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherDetailsComponent } from './weather-details.component';

describe('WeatherDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WeatherDetailsComponent
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(WeatherDetailsComponent);
    const details = fixture.componentInstance;
    expect(details).toBeTruthy();
  });

  it('should on More button', waitForAsync(() => {
    const fixture = TestBed.createComponent(WeatherDetailsComponent);
    const details = fixture.componentInstance;
    
    spyOn(details, 'moreDetails');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(details.moreDetails).toHaveBeenCalled();
    });
  }));

  it('should render name of location', () => {
    const fixture = TestBed.createComponent(WeatherDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const details = fixture.componentInstance;

    expect(compiled.querySelector('.flex-column h2').textContent).toContain(details.fullWeather.location.name);
  });

  it('should display the next days weather after clicking second tab', waitForAsync(() => {
    const fixture = TestBed.createComponent(WeatherDetailsComponent);
    const details = fixture.nativeElement;
    
    details.querySelectorAll('mat-tab')[1].click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(details.querySelector('app-forecast-details')).toBeTruthy();
    });
});
