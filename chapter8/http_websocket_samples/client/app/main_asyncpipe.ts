import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'http-client',
  template: `<h1>All Products</h1>
  <ul>
    <li *ngFor="#product of products | async">
       {{product.title}}
    </li>

  </ul>
  `})
class AppComponent {

  products: Observable<Array<String>>;

  constructor(private http: Http) {

   this.products = this.http.get('/products')
        .map(res => res.json());
  }
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
