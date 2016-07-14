import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter} from '@angular/router';

import {AppComponent} from './components/app';
import {ROUTER_CONFIG} from './router-config';

import {
  WEATHER_URL_BASE,
  WEATHER_URL_SUFFIX,
  WeatherService
} from './services/weather.service';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provideRouter(ROUTER_CONFIG),

  {provide: LocationStrategy, useClass: HashLocationStrategy},
  {provide: WEATHER_URL_BASE, useValue: 'http://api.openweathermap.org/data/2.5/find?q='},
  {provide: WEATHER_URL_SUFFIX, useValue: '&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73'},

  WeatherService
]);
