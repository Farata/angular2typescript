import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'auction-navbar',
  template: require('./navbar.html'),
  directives: [ROUTER_DIRECTIVES]
})
export default class NavbarComponent {}
