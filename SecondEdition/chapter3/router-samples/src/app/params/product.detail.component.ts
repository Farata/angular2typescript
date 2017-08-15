import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product',
  template: `<h1 class="product">Product Detail for Product {{productID}}</h1>`,
  styles: ['.product {background: cyan}']
})
export class ProductDetailComponent {
  productID: string;
  page:string;

  constructor(route: ActivatedRoute) {
    this.productID = route.snapshot.paramMap.get('id');

      //An alternative way of receiving params via subscription

/*    route.paramMap.subscribe(
     params => this.productID = params.get('id')
     );*/
  }
}
