import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'auction-product-page',
  template: `
    <div>
      <img src="http://placehold.it/820x320">
      <h4>{{productTitle}}</h4>
    </div>
  `
})
export class ProductDetailComponent {
  productTitle: string;

  constructor(params: RouteParams){
    this.productTitle = params.get('prodTitle');
  }
}
