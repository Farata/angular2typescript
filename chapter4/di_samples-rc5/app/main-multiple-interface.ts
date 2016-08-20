/*
 This version uses an interface and its two implementations
 */
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Component, NgModule, Inject, OpaqueToken} from '@angular/core';

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
    providers: [ProductServiceToken, {useClass:MockProductService}]
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
    selector: 'app',
    template: `
    <h2>A root component hosts two products<br> provided by different services....</h2>
    <product1></product1>
    <br>
    <product2></product2>
  `
})
class AppComponent {}

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, Product1Component, Product2Component],
    providers: [ {ProductServiceToken, useClass:RealProductService}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
