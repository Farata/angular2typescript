import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home';
import {WeatherComponent} from './weather';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Get Weather</h1>
    <div>
      <a [routerLink]="['/Home']">Home</a>
      <a [routerLink]="['/Weather']">Weather</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
@RouteConfig([
  new Route({path: '/', component: HomeComponent, name: 'Home'}),
  new Route({path: '/weather', component: WeatherComponent, name: 'Weather'})
])
export class AppComponent {}
