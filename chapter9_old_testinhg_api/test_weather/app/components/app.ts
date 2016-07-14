import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './home';
import {WeatherComponent} from './weather';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Get Weather</h1>
    <div>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/weather']">Weather</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/weather', component: WeatherComponent}
])
export class AppComponent {}
