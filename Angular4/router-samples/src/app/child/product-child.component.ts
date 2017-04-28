import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'product',
    styles: ['.product {background: cyan}'],
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
    this.productID = route.snapshot.paramMap.get('id');
  }
}
