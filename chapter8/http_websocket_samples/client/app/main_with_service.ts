import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ProductService} from "./product-service";

@Component({
  selector: 'http-client',
  providers: [ ProductService ],
  template: `<h1>Find Product By ID Using ProductService</h1>
     <form #f="ngForm" (ngSubmit) = "getProductByID(f.value)" >
       <label for="productID">Enter Product ID</label>
       <input id="productID" type="number" ngControl="productID">
       <button type="submit">Find Product</button>
     </form>

     <h4>{{ productTitle}} {{productPrice}}</h4>

  `})
class AppComponent {

  productTitle: string;
  productPrice: string;

  constructor(private productService: ProductService) {}

  getProductByID(formValue){
      this.productService.getProductByID(formValue.productID)
        .subscribe(
            data => {
              this.productTitle = data.title;
              this.productPrice =`$` + data.price;
            },
            err => console.log("Can't get product details. Error code: %s, URL: %s ",  err.status, err.url),
            () =>    console.log( 'Done')
        );
  }
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
