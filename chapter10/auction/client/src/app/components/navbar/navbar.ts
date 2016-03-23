import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'auction-navbar',
  template: require('./navbar.html'),
  directives: [RouterLink]
})
export default class NavbarComponent {}
