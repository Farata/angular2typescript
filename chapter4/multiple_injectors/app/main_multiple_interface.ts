/*
 This version uses an interface and its two implementations
 */
import {bootstrap} from 'angular2/platform/browser';
import {Component, provide, Inject, OpaqueToken} from 'angular2/core';

class Product {
    constructor(public title: string) {}
}

interface IProductService {
     getProduct(): Product;
}

export const ProductServiceToken  = new OpaqueToken('ProductService');

class RealProductService implements IProductService{
    getProduct(): Product {
        return new Product('iPhone 7');
    }
}

class MockProductService implements IProductService {
    getProduct(): Product {
        return new Product('Samsung 7');
    }
}

@Component({
    selector: 'product1',
    template: '{{product.title}}',
    providers: [provide(ProductServiceToken, {useClass:MockProductService})]
})
class Product1Component {
    product: Product;

    constructor(@Inject(ProductServiceToken) private productService: IProductService) {
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

    constructor(@Inject(ProductServiceToken) private productService: IProductService) {
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
    provide(ProductServiceToken, {useClass:RealProductService})
];

bootstrap(RootComponent, [DEFAULT_SERVICE_PROVIDERS]);