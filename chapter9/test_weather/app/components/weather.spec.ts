import { TestBed} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather';
import { WeatherService } from '../services/weather.service';

describe('WeatherComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ WeatherComponent],
      providers: [{provide: WeatherService, useValue: {} }]
    })
  });

  it('should display the weather ', () => {
    let fixture = TestBed.createComponent(WeatherComponent);
    let element = fixture.nativeElement;
    let component = fixture.componentInstance;
    component.weather = {place: 'New York', humidity: 44, temperature: 57};

    fixture.detectChanges();

    expect(element.querySelector('h3').innerHTML).toBe('Current weather in New York:');
    expect(element.querySelector('li:nth-of-type(1)').innerHTML).toBe('Temperature: 57F');
    expect(element.querySelector('li:nth-of-type(2)').innerHTML).toBe('Humidity: 44%');
  });
});
