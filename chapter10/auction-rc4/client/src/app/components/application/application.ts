import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import FooterComponent from '../footer/footer';
import NavbarComponent from '../navbar/navbar';
import SearchComponent from '../search/search';

@Component({
  selector: 'auction-application',
  template: require('./application.html'),
  directives: [
    ROUTER_DIRECTIVES,
    FooterComponent,
    NavbarComponent,
    SearchComponent
  ]
})
export default class ApplicationComponent {}