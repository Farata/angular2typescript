import {Component} from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {Home} from './home/home';
import {About} from './about/about';

@Component({
  selector: 'my-app',
  styles: [require('./app.css')],
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/',      component: Home},
  { path: '/about', component: About}
])
export class MyApp {}
