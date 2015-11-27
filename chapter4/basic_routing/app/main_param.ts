// These two lines are commented out because we use the dev version of angular from angular2.dev.js
// import 'reflect-metadata';
// import 'zone.js';

import {Component, bootstrap, provide} from 'angular2/angular2';
import {HomeComponent} from './components/home';
import {ProductDetailComponentParam} from "./components/product_param";

import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';


@Component({
    selector: 'basic-routing',
    template: `<a [router-link]="['/Home']">Home</a>
              <a [router-link]="['/ProductDetail', {id:1234}]">Product Details</a>
              <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/product/:id', component: ProductDetailComponentParam, as: 'ProductDetail', data:{isProd: true}  }
   // {path: '/product/:id', component: ProductDetailComponentParam, as: 'ProductDetail'  }
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
