import 'rxjs/add/operator/map';
import {Component} from "@angular/core";

import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  providers: [ ProductService ],
  template: `<h1>Find Product By ID Using ProductService</h1>
     <form #f="ngForm" (ngSubmit) = "getProductByID(f.value)" >
       <label for="productID">Enter Product ID</label>
       <input id="productID" type="number" name="productID" ngModel>
       <button type="submit">Find Product</button>
     </form>

     <h4>{{ productTitle}} {{productPrice}}</h4>

  `})
export class AppComponent {

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
