import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TopbarComponent
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TopbarComponent);
    const topbar = fixture.componentInstance;
    expect(topbar).toBeTruthy();
  });

  it(`should render the icon Weather api`, () => {
    const fixture = TestBed.createComponent(TopbarComponent);
    fixture.detectChanges();
    const topbar = fixture.nativeElement;
    expect(topbar.querySelector('#weatherapi > img').src).toContain('//cdn.weatherapi.com/v4/images/weatherapi_logo.png');
  });

  it(`should render the icon Cleverit`, () => {
    const fixture = TestBed.createComponent(TopbarComponent);
    fixture.detectChanges();
    const topbar = fixture.nativeElement;
    expect(topbar.querySelector('#cleverti > img').src).toContain('https://www.cleverti.com/wp-content/uploads/2020/02/websitelogo-2.png.webp');
  });
});
