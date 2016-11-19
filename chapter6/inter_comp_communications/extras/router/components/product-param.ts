import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product',
  template: `<h3 class="product">Details for product id {{productID}}</h3>`,
  styles: ['.product {background: cyan; width: 200px;} ']
})
export class ProductDetailComponentParam {
  productID: number;

  constructor(private route: ActivatedRoute) {
//    this.productID = route.snapshot.params['id'];

    this.route.params.subscribe(
        params => this.productID = params['id']
    );
  }
}