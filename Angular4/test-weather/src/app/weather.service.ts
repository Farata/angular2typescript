import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

export const WEATHER_URL_BASE = new InjectionToken('WeatherUrlBase');
export const WEATHER_URL_SUFFIX = new InjectionToken('WeatherUrlSuffix');

export interface WeatherResult {
  place: string;
  temperature: number;
  humidity: number;
}

@Injectable()
export class WeatherService {
  constructor(
      private http: Http,
      @Inject(WEATHER_URL_BASE) private urlBase: string,
      @Inject(WEATHER_URL_SUFFIX) private urlSuffix: string) {
  }

  getWeather(city: string): Observable<WeatherResult> {
    return this.http
        .get(this.urlBase + city + this.urlSuffix)
        .map((response: Response) => response.json())
        .filter(this._hasResult)
        .map(this._parseData)
        .catch( err => {
        if (err.status === 404 ) {
          console.log(`City ${city} not found`) ;
          return Observable.of()}    // empty observable
      });
  }

  private _hasResult(data): boolean {
    console.log(`in _hasResult ${data}`);
    return data['cod'] !== '404' && data.main;
  }

  private _parseData(data): WeatherResult {
    return {
      place: data.name || 'unknown',
      temperature: data.main.temp,
      humidity: data.main.humidity
    };
  }

}
