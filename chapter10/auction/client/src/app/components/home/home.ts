import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Product, ProductService } from '../../services/product-service';

@Component({
  selector: 'auction-home-page',
  styleUrls: [ 'home.css' ],
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <auction-carousel></auction-carousel>
      </div>
    </div>
    <div class="row">
      <div *ngFor="let product of products | async" class="col-sm-4 col-lg-4 col-md-4">
        <auction-product-item [product]="product"></auction-product-item>
      </div>
    </div>
  `
})
export default class HomeComponent {
  products: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();

    this.productService.searchEvent
      .subscribe(
        params => this.products = this.productService.search(params),
        console.error.bind(console),
        () => console.log('DONE')
      );
  }
}
