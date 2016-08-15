import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './components/home';
import {ProductDetailComponentParam} from './components/product-param';

@Component({
    selector: 'basic-routing',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <a [routerLink]="['./']">Home</a>
        <a [routerLink]="['./product', 1234]">Product Details</a>
        <router-outlet></router-outlet>
    `
})
class RootComponent {}

bootstrap(RootComponent, [
    provideRouter([
        {path: '',            component: HomeComponent},
        {path: 'product/:id', component: ProductDetailComponentParam}
    ]),
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
