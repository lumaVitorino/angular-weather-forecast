import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WeatherComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const weather = fixture.componentInstance;
    expect(weather).toBeTruthy();
  });

  it(`should render the query term empty`, () => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const weather = fixture.componentInstance;
    expect(weather.queryTerm).toEqual('');
  });

  it('should be change the input value', waitForAsync(() => {
    let fixture = TestBed.createComponent(WeatherComponent);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;

      expect(el.value).toBe('');

      el.value = 'London';
      el.dispatchEvent(new Event('input'));

      expect(fixture.componentInstance.queryTerm).toBe('London');
    });
  }));

  it('should on Search button', waitForAsync(() => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const weather = fixture.componentInstance;
    
    spyOn(weather, 'onSearch');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(weather.onSearch).toHaveBeenCalled();
    });
  }));

});
