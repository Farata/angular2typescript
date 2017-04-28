import {Component} from '@angular/core';
import {MockProductService} from "./mock.product.service";
import {Product} from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: 'product2',
  template: '{{product.title}}',
  providers: [{provide:ProductService, useClass:MockProductService}]
})
export class Product2Component {
  product: Product;

  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
  }
}
