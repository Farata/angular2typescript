import {Component} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'auction-navbar',
  templateUrl: 'app/components/navbar/navbar.html',
  directives: [RouterLink]
})
export default class NavbarComponent {}
