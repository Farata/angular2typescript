import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product',
  template: `<h1 class="product">Product Detail for Product: {{productID}}</h1>`,
  styles: ['.product {background: cyan}']
})
export class ProductDetailComponentParam {
  productID: string;

  constructor(private route: ActivatedRoute) {
   this.productID = route.snapshot.params['id'];


    // Subscribing for receiving changing params
   /*this.route.params.subscribe(
        params => this.productID = params['id']
    );*/

  }
}