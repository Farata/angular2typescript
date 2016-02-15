import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Control, NgFormControl} from 'angular2/common';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: "app",
    directives: [NgFormControl],
    template: `
      <h2>Observable weather</h2>
      <input type="text" placeholder="Enter city" [ngFormControl]="searchInput">
      <h3>{{temperature}}</h3>
    `
})
class AppComponent {
    private baseWeatherURL: string= 'http://api.openweathermap.org/data/2.5/find?q=';
    private urlSuffix: string = "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";

    searchInput: Control;
    temperature: string;

    constructor(private http:Http){
        this.searchInput = new Control('');
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(city => this.getWeather(city))
            .subscribe(
                res => {
                    if (res['cod'] === '404') return;
                    this.temperature =
                        `Current temperature is  ${res.list[0].main.temp}F, ` +
                        `humidity: ${res.list[0].main.humidity}%`;
                },
                err => console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url),
                () => console.log(`Weather is retrieved`)
            );
    }

    getWeather(city): Observable<Array> {
      return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
        .map(res => res.json());
    }
}
bootstrap(AppComponent, [...HTTP_PROVIDERS]);




/*
 getWeather(city) {

 this.http.get(this.baseWeatherURL + city + this.urlSuffix)

 .map(res => res.json())
 .subscribe(
 res => {


 this.temperature=`Current temperature in ${city} is
 ${res.list[0].main.temp}F,
 humidity: ${res.list[0].main.humidity}%`;
 } ,

 err =>
 console.log("Can't get weather. Error code: %s, URL: %s ",  err.message, err.url),
 () => console.log(`Weather for ${city} is retrieved`)
 );
 }
 */

