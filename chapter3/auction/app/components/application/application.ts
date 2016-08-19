import {Component, ViewEncapsulation} from '@angular/core';
import HomeComponent from '../home/home';
import NavbarComponent from '../navbar/navbar';
import FooterComponent from '../footer/footer';
import SearchComponent from '../search/search';

@Component({
  selector: 'auction-application',
  templateUrl: 'app/components/application/application.html',
  styleUrls: ['app/components/application/application.css'],
  directives: [
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent
  ],
  encapsulation:ViewEncapsulation.None
})
export default class ApplicationComponent {}