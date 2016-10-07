import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {FORM_DIRECTIVES, Control, ControlGroup} from '@angular/common';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'http-client',
  template: `<h1>Find Product By ID (programmatic form)</h1>
     <form [ngFormModel]="myForm" (ngSubmit) = "getProductByID()" >
       <label for="productID">Enter Product ID</label>
       <input id="productID" type="number" ngControl="productID">
       <button type="submit">Find Product</button>
     </form>

     <h4>{{ productTitle}} {{productPrice}}</h4>

  `})
class AppComponent {

  productTitle: string;
  productPrice: string;

  myForm: ControlGroup;
  constructor(private http: Http) {
    this.myForm = new ControlGroup({
      productID: new Control()
    });
  }

  getProductByID(){
    this.http.get(`/products/${this.myForm.value.productID}`)
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
