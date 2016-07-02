import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import NavbarComponent from '../navbar/navbar';
import FooterComponent from '../footer/footer';
import SearchComponent from '../search/search';

import HomeComponent from '../home/home';

@Component({
  selector: 'auction-application',
  templateUrl: 'app/components/application/application.html',
  directives: [
    ROUTER_DIRECTIVES,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent
  ]
})

export default class ApplicationComponent {}