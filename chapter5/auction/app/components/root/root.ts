import {Component} from 'angular2/angular2';
import {
  Route,
  RouteConfig,
  RouterOutlet
} from 'angular2/router';
import HomePageComponent from '../home/home';
import ProductPageComponent from '../product/product';
import NavbarComponent from '../navbar/navbar';
import FooterComponent from '../footer/footer';
import SearchComponent from '../search/search';

@Component({
  selector: 'auction-root',
  templateUrl: 'app/components/root/root.html',
  directives: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    HomePageComponent
  ]
})
@RouteConfig([
  new Route({path: '/', component: HomePageComponent, as: 'Home'}),
  new Route({path: '/products/:productId', component: ProductPageComponent, as: 'Product'})
])
export default class RootComponent {}
