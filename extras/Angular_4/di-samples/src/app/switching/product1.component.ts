import {Component} from '@angular/core';

import {ProductService} from "./product.service";
import {Product} from "./product";

@Component({
  selector: 'product1',
  template: '{{product.title}}'})
export class Product1Component {
  product: Product;

  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
  }
}
