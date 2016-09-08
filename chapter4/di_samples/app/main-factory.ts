import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

class Product {
  constructor(public title: string) {}
}

class ProductService { //<1>
  getProduct(): Product {
    // Code making an HTTP request to get actual product details
    // would go here
    return new Product('iPhone 7');
  }
}

class MockProductService implements ProductService {
  getProduct(): Product {
    return new Product('Samsung 7');
  }
}

@Component({
  selector: 'product1',
  template: '{{product.title}}'})
class Product1Component {
  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }
}

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
class Product2Component {
  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }
}

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
  declarations: [ AppComponent, Product1Component, Product2Component],
  providers: [ ProductService,
               {provide: "IS_DEV_ENVIRONMENT", useValue:true}],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);