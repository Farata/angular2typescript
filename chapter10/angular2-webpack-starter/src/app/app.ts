import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './home/home';
import {About} from './about/about';

@Component({
  selector: 'my-app',
  styles: [require('./app.css')],
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  new Route({ path: '/',      component: Home,  name: 'Home'}),
  new Route({ path: '/about', component: About, name: 'About'})
])
export class MyApp {}
