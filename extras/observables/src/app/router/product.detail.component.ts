import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/do';

@Component({
  selector: 'product',
  template: `<h3 class="product">Details for product id {{productID}}</h3>`,
  styles: ['.product {background: cyan; width: 200px;} ']
})
export class ProductDetailComponent {

  productID: number;

  constructor(private route: ActivatedRoute) {

    this.route.params
      .do(params => console.log("Route param is " + params['id']))
      .subscribe(params => this.productID = params['id']);
  }
}
