import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
//import {FORM_DIRECTIVES} from '@angular/common';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'http-client',
  template: `<h1>Find Product By ID</h1>
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

  constructor(private http: Http) {}

  getProductByID(formValue){
    this.http.get(`/products/${formValue.productID}`)
        .map(res => res.json())
        .subscribe(
            data => {this.productTitle= data.title;
                     this.productPrice=`$` + data.price;},
            err => console.log("Can't get product details. Error code: %s, URL: %s ",  err.status, err.url),
            () =>    console.log( 'Done')
        );
  }
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
