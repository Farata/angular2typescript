import { Component } from '@angular/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {FormControl} from "@angular/forms";
import {Http} from "@angular/http";

@Component({
  selector: "app-root",
  template: `
      <h2>Observable weather</h2>
      <input type="text" placeholder="Enter city" [formControl]="searchInput">
      <h3>{{temperature}}</h3>
    `
})
export class AppComponent {
  private baseWeatherURL: string= 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix: string = "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";

  searchInput: FormControl = new FormControl();
  temperature: string;

  constructor(private http:Http){

    this.searchInput.valueChanges
      .debounceTime(300)
      .switchMap(city => this.getWeather(city))
      .subscribe(
        res => {
          if (res['cod'] === '404') return;
          if (!res['main']) {
            this.temperature ='City is not found';
          } else {

            this.temperature =
              `Current temperature is  ${res['main'].temp}F, ` +
              `humidity: ${res['main'].humidity}%`;
          }
        },
        err => console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url),
        () => console.log(`Weather is retrieved`)
      );
  }

  getWeather(city: string): Observable<Array<string>> {
    return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
      .map(res => {
        console.log(res);
        return res.json()});
  }
}
