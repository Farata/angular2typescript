import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';

import {HomeComponent} from './components/home';
import {ProductDetailComponent} from "./components/product";

import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';

@Component({
    selector: 'basic-routing',
    template: `<a [routerLink]="['/Home']">Home</a>
              <a [routerLink]="['/ProductDetail']">Product Details</a>
              <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/product', component: ProductDetailComponent, as: 'ProductDetail'}
])
class RootComponent{
}

// bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(APP_BASE_HREF,{useValue:'/'}) ]);

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
