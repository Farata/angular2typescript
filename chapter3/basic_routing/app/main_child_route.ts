import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {HomeComponent} from './components/home';
import {ProductDetailComponent} from "./components/product_child_route";

import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';


@Component({
    selector: 'basic-routing',
    template: `<a [routerLink]="['/Home']">Home</a>
              <a [routerLink]="['/ProductDetail', {id:1234}, 'ProductDescription']">Product Details</a>
              <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/product/:id/...', component: ProductDetailComponent, as: 'ProductDetail'  }
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
