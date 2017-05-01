import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/take';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'auction-home-page',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  products: Observable<Product[]>;
  errorMessage: string;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts()
      .retryWhen(errors => {
        this.errorMessage = `Please start the server. Retrying to connect.`;
        return errors
          .delay(2000) // Retry every 2 seconds
          //.take(3)   // Max number of retries
          .do(() => this.errorMessage += '.'); // Update the UI
      })
      .finally(() => this.errorMessage = null);

    this.productService.searchEvent
      .subscribe(
        params => this.products = this.productService.search(params),
        error => console.error(error),
        () => console.log('DONE')
      );
  }
}

