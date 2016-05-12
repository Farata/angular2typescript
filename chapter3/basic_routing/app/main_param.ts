import {HomeComponent} from './components/home';
import {ProductDetailComponentParam} from "./components/product_param";

import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
    selector: 'basic-routing',
    template: `<a [routerLink]="['/']">Home</a>
              <a [routerLink]="['/product', 1234]">Product Details</a>
              <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/', component: HomeComponent},
    {path: '/product/:id', component: ProductDetailComponentParam }
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
