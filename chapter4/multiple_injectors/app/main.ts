/*
  This version of main.ts uses the parent default injector for both
  Product1Component and Product2 component
  Hence both components will render iPhone7
 */
// import 'core-js/es6'
// import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
import {Component, bind} from 'angular2/core';

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

  constructor(private productService: ProductService) { // <4>
    this.product = productService.getProduct();
  }
}


// The second components gets a specific MockProductService injected
@Component({
  selector: 'product2',
  template: '{{product.title}}'}
)
class Product2Component {
  product: Product;

  constructor(private productService: ProductService) { // <6>
    this.product = productService.getProduct();
  }
}

// Root component hosts tow product components
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