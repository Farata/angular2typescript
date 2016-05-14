import {Inject, Injectable, OpaqueToken} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export const WEATHER_URL_BASE = new OpaqueToken('WeatherUrlBase');
export const WEATHER_URL_SUFFIX = new OpaqueToken('WeatherUrlSuffix');

export interface WeatherResult {
  place: string;
  temperature: string;
  humidity: string;
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
        .map(this._parseData);
  }

  private _hasResult(data): boolean {
    return data['cod'] !== '404' && data.list.length;
  }

  private _parseData(data): WeatherResult {
    let [first,] = data.list;
    return {
      place: first.name || 'unknown',
      temperature: first.main.temp,
      humidity: first.main.humidity
    };
  }
}
