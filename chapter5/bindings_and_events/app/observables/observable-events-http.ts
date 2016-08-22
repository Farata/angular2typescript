import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl,  ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: "app",
    template: `
      <h2>Observable weather</h2>
      <input type="text" placeholder="Enter city" [formControl]="searchInput">
      <h3>{{temperature}}</h3>
    `
})
class AppComponent {
    private baseWeatherURL: string= 'http://api.openweathermap.org/data/2.5/find?q=';
    private urlSuffix: string = "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";

    searchInput: FormControl = new FormControl('');
    temperature: string;

    constructor(private http:Http){

        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(city => this.getWeather(city))
            .subscribe(
                res => {
                    if (res['cod'] === '404') return;
                    if (!res.list[0]) {
                        this.temperature ='City is not found';
                    } else {

                        this.temperature =
                            `Current temperature is  ${res.list[0].main.temp}F, ` +
                            `humidity: ${res.list[0].main.humidity}%`;
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

@NgModule({
    imports:      [ BrowserModule,  ReactiveFormsModule,
                   HttpModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
