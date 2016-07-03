import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter, ROUTER_DIRECTIVES, Router} from '@angular/router';

import {HomeComponent} from './components/home';
import {ProductDetailComponent} from './components/product';

@Component({
    selector: 'basic-routing',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Details</a>
        <input type="button" value="Product Details" 
               (click)="navigateToProductDetail()" /> 
        <router-outlet></router-outlet>
    `
})
class RootComponent {

    constructor(private _router: Router){}

    navigateToProductDetail(){
        this._router.navigate(["/product"]);
    }
}

bootstrap(RootComponent, [
    provideRouter([
      {path: '',        component: HomeComponent},
      {path: 'product', component: ProductDetailComponent}
    ]),
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
