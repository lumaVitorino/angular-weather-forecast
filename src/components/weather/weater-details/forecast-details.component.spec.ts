import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ForecastDetailsComponent } from './forecast-details.component';

describe('ForecastDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ForecastDetailsComponent
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ForecastDetailsComponent);
    const forecast = fixture.componentInstance;
    expect(forecast).toBeTruthy();
  });

  
  it('should render the date of forecast', () => {
    const fixture = TestBed.createComponent(ForecastDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const forecast = fixture.componentInstance;

    expect(compiled.querySelector('.flex-column .date').textContent).toContain(forecast.forecastDays[0].date);
  });
});
