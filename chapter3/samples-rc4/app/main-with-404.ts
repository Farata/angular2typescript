import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter, ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';

import {HomeComponent} from './components/home';
import {ProductDetailComponent} from './components/product';
import {_404Component} from "./components/404";

@Component({
    selector: 'basic-routing',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Details</a>
        <router-outlet></router-outlet>
    `
})
class RootComponent {}

RouterConfig

bootstrap(RootComponent, [
    provideRouter([
      {path: '',        component: HomeComponent},
      {path: 'product', component: ProductDetailComponent},
      {path: '**', component: _404Component}
    ]),
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
