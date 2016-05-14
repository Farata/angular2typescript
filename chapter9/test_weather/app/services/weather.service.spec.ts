import {Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {async, describe, it, inject, beforeEach, beforeEachProviders} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {WeatherService, WEATHER_URL_BASE, WEATHER_URL_SUFFIX} from './weather.service';

describe('WeatherService', () => {
  let mockBackend: MockBackend;
  let service: WeatherService;

  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    WeatherService,
    { provide: WEATHER_URL_BASE, useValue: ''},
    { provide: WEATHER_URL_SUFFIX, useValue: ''},
    { provide: Http,
      useFactory: (backend, options) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions]
    }
  ]);

  beforeEach(inject([MockBackend, WeatherService], (_mockBackend, _service) => {
    mockBackend = _mockBackend;
    service = _service;
  }));

  it('getWeather() should return weather for New York', async(() => {
    let mockResponseData = {
      cod: '200',
      list: [{
        name: 'New York',
        main: {
          temp: 57,
          humidity: 44
        }
      }]
    };

    mockBackend.connections.subscribe((connection: MockConnection) => {
      let responseOpts = new ResponseOptions({body: JSON.stringify(mockResponseData)});
      connection.mockRespond(new Response(responseOpts));
    });

    service.getWeather('New York').subscribe(weather => {
      expect(weather.place).toBe('New York');
      expect(weather.humidity).toBe(44);
      expect(weather.temperature).toBe(57);
    });
  }));
});
