import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'http-client',
  template: `<h1>All Products</h1>
  <ul>
    <li *ngFor="let product of products | async">
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
