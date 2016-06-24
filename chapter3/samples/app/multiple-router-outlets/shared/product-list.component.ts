import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {ProductDetailsComponent} from './product-details.component';
import {ProductReviewsComponent} from './product-reviews.component';

@Component({
    selector: 'product-list',
    styles: [`
      .product-list {display: flex;}
      .product-list-items {flex: 2;background-color: yellow;}
      .product-list-aside {flex: 1;background-color: cyan;}
    `],
    template: `
      <h1>Product List</h1>
      <div class="product-list">
        <div class="product-list-items">
          <div *ngFor="let p of products">
            {{p.title}} - <a [routerLink]="['./details', {productId: p.id}]">Details</a>
                          <a [routerLink]="['./reviews', {productId: p.id}]">Reviews</a>
          </div>
        </div>
        <div class="product-list-aside">
          <router-outlet></router-outlet>
        </div>
      </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: 'details', component: ProductDetailsComponent},
  {path: 'reviews', component: ProductReviewsComponent},
])
export class ProductListComponent {
  products: any[] = [
    {id: 1, title: 'Product 1'},
    {id: 2, title: 'Product 2'},
    {id: 3, title: 'Product 3'},
    {id: 4, title: 'Product 4'},
    {id: 5, title: 'Product 5'},
  ];
}
