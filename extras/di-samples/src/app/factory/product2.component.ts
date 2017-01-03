import {Component} from '@angular/core';
import {MockProductService} from "./mock.product.service";
import {Product} from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: 'product2',

  providers:[{
    provide: ProductService,
    useFactory: (isDev) => {
      if (isDev){
        return new MockProductService();
      } else{
        return new ProductService();
      }
    }, deps: ["IS_DEV_ENVIRONMENT"]}],

  template: '{{product.title}}'
})
export class Product2Component {
  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }
}
