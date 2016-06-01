import {Component} from '@angular/core';
import {RouteSegment} from '@angular/router';

@Component({
  selector: 'product',
  template: `<h1 class="product">Product Detail for Product: {{productID}}</h1>`,
  styles: ['.product {background: cyan}']
})
export class ProductDetailComponentParam {
  productID: string;

  constructor(params: RouteSegment) {
    this.productID = params.getParam('id');
  }
}
