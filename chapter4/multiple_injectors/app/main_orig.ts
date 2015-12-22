/*
 This version of main.ts uses the child injector for
 Product2Component and the parent's injector for Product1Component
 */
// import 'core-js/es6'
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
    return new Product('iPhone 7');
  }
}

// Another service that implements the initial one as interface.
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


// The second components gets a specific MockProductService injected
@Component({
  selector: 'product2',
  providers: [
    provide(ProductService, {useClass:MockProductService}) // <5>
  ],
  template: '{{product.title}}'})
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

bootstrap(RootComponent, [DEFAULT_SERVICE_PROVIDERS]); // <9>
