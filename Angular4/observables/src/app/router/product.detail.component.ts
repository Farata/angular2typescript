import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product',
  template: `<h3 class="product">Details for product id {{productID}}</h3>`,
  styles: ['.product {background: cyan; width: 200px;} ']
})
export class ProductDetailComponent {

  productID: string;

  constructor(private route: ActivatedRoute) {

    this.route.paramMap
      .subscribe(
        params => this.productID = params.get('id'));
  }
}
