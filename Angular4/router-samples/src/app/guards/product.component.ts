import {Component, OnDestroy} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'product',
  template: `<h1 class="product">Product Detail Component</h1>
             <input placeholder="Enter your name" type="text" [formControl]="name">`,
  styles: ['.product {background: cyan}']
})
export class ProductDetailComponent{

   name: FormControl = new FormControl();
}
