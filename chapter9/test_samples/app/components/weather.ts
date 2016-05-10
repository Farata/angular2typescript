import {Component} from '@angular/core';
import {Control} from '@angular/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import {WeatherService, WeatherResult} from '../services/weather.service';

@Component({
  selector: 'my-weather',
  template: `
    <h2>Weather</h2>
    <input type="text" placeholder="Enter city" [ngFormControl]="searchInput">
    <h3>Current weather in {{weather?.place}}:</h3>
    <ul>
      <li>Temperature: {{weather?.temperature}}F</li>
      <li>Humidity: {{weather?.humidity}}%</li>
    </ul>
  `,
})
export class WeatherComponent {
  searchInput: Control;
  weather: WeatherResult;

  constructor(weatherService: WeatherService) {
    this.searchInput = new Control('');
    this.searchInput.valueChanges
        .debounceTime(300)
        .switchMap((place: string) => weatherService.getWeather(place))
        .subscribe(
            (weather: WeatherResult) => this.weather = weather,
            error => console.error(error),
            () => console.log('Weather is retrieved'));
  }
}
