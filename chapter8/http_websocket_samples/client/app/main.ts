import {NgFor} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'http-client',
  template: `<h1>All Products</h1>
  <ul>
    <li *ngFor="#product of products">
       {{product.title}}
    </li>

  </ul>
  `})
class AppComponent {

  products: Array<string> = [];

  constructor(private http: Http) {

    this.http.get('/products')
        .map(res => res.json())
        .subscribe(
            data => {
              if (Array.isArray(data)){
                this.products=data;
              } else{
                this.products.push(data);
              }
            },
            err =>
              console.log("Can't get products. Error code: %s, URL: %s ",  err.status, err.url),
            () => console.log('Product(s) are retrieved')
        );
  }
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);