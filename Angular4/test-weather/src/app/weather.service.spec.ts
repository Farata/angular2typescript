
import {async, getTestBed, TestBed, inject } from '@angular/core/testing';
import {Response, ResponseOptions, HttpModule, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {WeatherService, WEATHER_URL_BASE, WEATHER_URL_SUFFIX} from './weather.service';

describe('WeatherService', () => {
  let mockBackend: MockBackend;
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        { provide: WEATHER_URL_BASE, useValue: '' },
        { provide: WEATHER_URL_SUFFIX, useValue: '' },
        WeatherService
      ]
    });
  });

  beforeEach(inject([WeatherService, XHRBackend], (weatherService, mockbackend) => {
    service = weatherService;
    mockBackend = mockbackend;
  }));

  it('getWeather() should return weather for New York', async(() => {
    const mockResponseData = {
      'cod': '200',
        'name': 'New York',
        'main': {
          'temp': 57,
          'humidity': 44
        }
    };

    mockBackend.connections.subscribe((connection: MockConnection) => {

      connection.mockRespond(new Response(
                                new ResponseOptions({body: mockResponseData})
                             ));
    });

    service.getWeather('New York').subscribe(weather => {
      expect(weather.place).toBe('New York');
      expect(weather.humidity).toBe(44);
      expect(weather.temperature).toBe(57);
    });
  }));
});
