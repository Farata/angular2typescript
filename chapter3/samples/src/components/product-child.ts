import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {SellerInfoComponent} from './seller';
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
@Routes([
    {path: '',            component: ProductDescriptionComponent},
    {path: 'seller/:id',  component: SellerInfoComponent}
])
export class ProductDetailComponent {
  productID: string;

  constructor(params: RouteSegment) {
    this.productID = params.getParam('id');
  }
}
