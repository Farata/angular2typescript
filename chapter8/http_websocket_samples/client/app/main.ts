import {NgFor} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";

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

    theDataSource: Observable;

    constructor(private http: Http) {

        this.theDataSource = this.http.get('/products')
            .map(res => res.json());
    }

    ngOnInit(){

        // Get the data from the server
        this.theDataSource.subscribe(
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