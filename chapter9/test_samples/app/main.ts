import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HashLocationStrategy, LocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './components/app';
import {WEATHER_URL_BASE, WEATHER_URL_SUFFIX, WeatherService} from './services/weather.service';

bootstrap(AppComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provide(WEATHER_URL_BASE, {useValue: 'http://api.openweathermap.org/data/2.5/find?q='}),
  provide(WEATHER_URL_SUFFIX, {useValue: '&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73'}),
  WeatherService
]);
