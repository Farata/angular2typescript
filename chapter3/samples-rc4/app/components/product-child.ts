import {Component} from '@angular/core';
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {ProductDescriptionComponent} from './product-description';

@Component({
    selector: 'product',
    styles: ['.product {background: cyan}'],
    directives: [ROUTER_DIRECTIVES],
    template: `
      <div class="product">
        <h1>Product Detail for Product: {{productID}}</h1>
        <router-outlet></router-outlet>
        <p><a [routerLink]="['./seller', 5678]">Seller Info</a></p>
      </div>
    `
})
export class ProductDetailComponent {
  productID: string;

  constructor(route: ActivatedRoute) {
    this.productID = route.snapshot.params['id'];
  }
}
