import {fakeAsync, beforeEach, beforeEachProviders, describe, inject, it} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

import {WeatherComponent} from './weather';
import {WeatherService} from '../services/weather.service';

class MockWeatherService {
  getWeather() {
    return Observable.empty();
  }
}

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let testComponentBuilder: TestComponentBuilder;

  beforeEachProviders(() => [
    TestComponentBuilder,
    WeatherComponent,
    {provide: WeatherService, useClass: MockWeatherService}
  ]);

  beforeEach(inject([TestComponentBuilder, WeatherComponent], (tcb, cmp) => {
    testComponentBuilder = tcb;
    component = cmp;
  }));

  it('should display the weather ', fakeAsync(() => {
    let fixture = testComponentBuilder.createFakeAsync(WeatherComponent);
    let element = fixture.nativeElement;
    let component = fixture.componentInstance;
    component.weather = {place: 'New York', humidity: 44, temperature: 57};

    fixture.detectChanges();

    expect(element.querySelector('h3').innerHTML).toBe('Current weather in New York:');
    expect(element.querySelector('li:nth-of-type(1)').innerHTML).toBe('Temperature: 57F');
    expect(element.querySelector('li:nth-of-type(2)').innerHTML).toBe('Humidity: 44%');
  }));
});
