// tag::imports[]
import {Component} from 'angular2/core';
import CarouselComponent from 'app/components/carousel/carousel';
import FooterComponent from 'app/components/footer/footer';
import NavbarComponent from 'app/components/navbar/navbar';
import ProductItemComponent from '../product-item/product-item';
import SearchComponent from 'app/components/search/search';
import {Product, ProductService} from 'app/services/product-service';
// end::imports[]

// tag::annotation-component[]
@Component({
  selector: 'auction-application', // <1>
  providers: [
    ProductService // <2>
  ],
  templateUrl: 'app/components/application/application.html', // <3>
  styleUrls: ['app/components/application/application.css'], // <4>
  directives: [ // <5>
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent]
})
// end::annotation-component[]
// tag::class[]
export default class ApplicationComponent {
  products: Array<Product> = []; // <1>

  constructor(private productService: ProductService) { // <2>
    this.products = this.productService.getProducts(); // <3>
  }
}
// end::class[]
