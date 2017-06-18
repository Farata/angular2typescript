import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product</a>
        <a [routerLink]="['/product', 1234]">Product Param</a> 
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}
