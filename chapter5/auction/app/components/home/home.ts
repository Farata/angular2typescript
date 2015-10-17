import {Component,  NgFor} from 'angular2/angular2';
import {Product, ProductService} from 'app/services/product-service';
import CarouselComponent from '../carousel/carousel';
import ProductItemComponent from '../product-item/product-item';

@Component({
  selector: 'auction-home-page',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [
    NgFor,
    CarouselComponent,
    ProductItemComponent
  ]
})
export default class HomePageComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
