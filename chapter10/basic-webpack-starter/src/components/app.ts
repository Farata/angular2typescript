import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './home';
import {About} from './about';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Basic Webpack Starter</h1>
    <div>
      <a [routerLink]="['/Home']">Home</a>
      <a [routerLink]="['/About']">About</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
@RouteConfig([
  new Route({ path: '/',      component: Home,  name: 'Home'}),
  new Route({ path: '/about', component: About, name: 'About'})
])
export class MyApp {}
