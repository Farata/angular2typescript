import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {HomeComponent} from './components/home';
import {ProductDetailComponent} from './components/product';

@Component({
    selector: 'basic-routing',
    directives: [ROUTER_DIRECTIVES],
    template: `
      <ul>
        <li><a [routerLink]="['./']">Home</a></li>
        <li><a [routerLink]="['./products', {category: 'books', title: 'angular'}]">Angular Books</a></li>
      </ul>
      <router-outlet></router-outlet>`
})
@Routes([
    {path: '/',         component: HomeComponent},
    {path: '/products', component: ProductDetailComponent}
])
class RootComponent {}

bootstrap(RootComponent, [
    ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
