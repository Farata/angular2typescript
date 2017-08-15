import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product', productId]">Product Detail1</a> 
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
  productId = 1234; // as if the produc ID was selected from a list of product
}
