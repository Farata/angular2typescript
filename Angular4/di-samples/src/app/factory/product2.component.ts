import {Component} from '@angular/core';
import {MockProductService} from "./mock.product.service";
import {Product} from "./product";
import {ProductService} from "./product.service";

export function productServiceFactory (isDev:boolean) { 
  if (isDev){ 
    return new MockProductService(); 
  }
  else{ 
    return new ProductService(); 
  } 
};  

@Component({ 
  selector: 'product2',  
  providers:[{ 
    provide: ProductService, 
    useFactory: productServiceFactory, deps: ["IS_DEV_ENVIRONMENT"]}],  
  template: '{{product.title}}' 
})
 export class Product2Component { 
  product: Product;  
  constructor(productService: ProductService) { 
    this.product = productService.getProduct(); 
  } 
}











/*@Component({
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
}*/
