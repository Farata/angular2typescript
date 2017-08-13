import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product',
  template: `<h1 class="product">Showing products in {{productCategory}}</h1>`,
  styles: ['.product {background: cyan}']
})
export class ProductDetailQueryParamComponent {
  productCategory: string;

  constructor(route: ActivatedRoute) {

     this.productCategory = route.snapshot.queryParamMap.get('category');

    /* route.queryParamMap
      .subscribe(params => this.productCategory = params.get('category'));*/
  }

}
