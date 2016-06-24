import {Component} from '@angular/core';
import {OnActivate, RouteSegment} from '@angular/router';

@Component({
    selector: 'product-details',
    template: `
      <h3>Product Details</h3>
      <div>Product ID: {{productId}}</div>
    `
})
export class ProductDetailsComponent implements OnActivate {
  productId: number;

  routerOnActivate(currentSegment: RouteSegment) {
    this.productId = parseInt(currentSegment.getParam('productId'));
  }
}
