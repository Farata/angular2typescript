/*
 This version uses an abstract class and its two implementations
 */
import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';

class Product {
    constructor(public title: string) {}
}

abstract class ProductService {
    abstract getProduct(): Product;
}

class RealProductService implements ProductService{
    getProduct(): Product {
        return new Product('iPhone 7');
    }
}

class MockProductService implements ProductService {
    getProduct(): Product {
        return new Product('Samsung 7');
    }
}

// The first component gets ProductService injected
@Component({
    selector: 'product1',
    template: '{{product.title}}'})
class Product1Component {
    product: Product;

    constructor(private productService: ProductService) {
        this.product = productService.getProduct();
    }
}

// The second components gets MockProductService injected
@Component({
    selector: 'product2',
    template: '{{product.title}}'}
)
class Product2Component {
    product: Product;

    constructor(private productService: ProductService) {
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
    <h2>A root component hosts two products<br> provided by different services....</h2>
    <product1></product1>
    <br>
    <product2></product2>
  `
})
class RootComponent {}


const DEFAULT_SERVICE_PROVIDERS = [
    provide(ProductService, {useClass:RealProductService})
];

bootstrap(RootComponent, [DEFAULT_SERVICE_PROVIDERS]);