/*
 This version of main.ts illustrates the use of useFactory and useValue
 */
//import 'core-js/es6'
// import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';

class Product {
  constructor(public title: string) {}
}

// Initial service implementation
class ProductService { //<1>
  getProduct(): Product {
    // Code making an HTTP request to get actual product details
    // would go here
    return new Product('iPhone 777');
  }
}

// Another service version implements the initial one as interface.
class MockProductService implements ProductService { // <2>
  getProduct(): Product {
    return new Product('Samsung 7');
  }
}


// The first component gets a common ProductService injected
@Component({
  selector: 'product1',
  template: '{{product.title}}'})
class Product1Component { // <3>
  product: Product;

  constructor(productService: ProductService) { // <4>
    this.product = productService.getProduct();
  }
}


// The second components uses factory to decide which service to inject
@Component({
  selector: 'product2',

  providers: [provide(ProductService,{useFactory:
            (isDev) =>{
                      if (isDev){
                        return new MockProductService();
                      } else{
                        return new ProductService();
                      }
            }, deps:["IS_DEV_ENVIRONMENT"]})],
  template: '{{product.title}}'
 })
class Product2Component {
  product: Product;

  constructor(productService: ProductService) { // <6>
    this.product = productService.getProduct();
  }
}

// Root component hosts two product components
@Component({
  selector: 'app-root',
  directives: [
    Product1Component,
    Product2Component
  ],
  template: `
    <h2>A root component hosts two products<br> provided by different services</h2>
    <product1></product1>
    <br>
    <product2></product2>
  `
})
class RootComponent {} // <7>


const DEFAULT_SERVICE_PROVIDERS = [ // <8>
  ProductService
];

bootstrap(RootComponent, [DEFAULT_SERVICE_PROVIDERS, provide("IS_DEV_ENVIRONMENT",{useValue:true})]); // <9>
