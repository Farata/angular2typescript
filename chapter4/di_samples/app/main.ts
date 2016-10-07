import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

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
class MockProductService implements ProductService {
  getProduct(): Product {
    return new Product('Samsung 7');
  }
}


// The first component gets a common ProductService injected
@Component({
  selector: 'product1',
  template: '{{product.title}}'})
class Product1Component {
  product: Product;

  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
  }
}

// The second components gets a specific MockProductService injected
@Component({
  selector: 'product2',
  template: '{{product.title}}',
  providers: [{provide:ProductService, useClass:MockProductService}]
})
class Product2Component {
  product: Product;

  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
  }
}

// Root component hosts two different product components
@Component({
  selector: 'app',
  template: `
    <h2>A root component hosts two products<br> provided by different services</h2>
    <product1></product1>
    <br>
    <product2></product2>
  `
})
class AppComponent {}

@NgModule({
  imports:      [ BrowserModule],
  providers: [ProductService],
  // providers: [{provide:ProductService, useClass:MockProductService}],
  declarations: [ AppComponent, Product1Component, Product2Component],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);