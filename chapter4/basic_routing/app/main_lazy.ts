// These two lines are commented out because we use the dev version of angular from angular2.dev.js
//import 'reflect-metadata';
//import 'zone.js';

import {Component, bootstrap, provide} from 'angular2/angular2';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS, AsyncRoute,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
    selector: 'product',
    template: '<h1 >Product Detail Component</h1>'
})
export class ProductDetailComponent {}

@Component({
    selector: 'home',
    template: '<h1 >Home Component</h1>'
})
export class HomeComponent {}

@Component({
    selector: 'basic-routing',
    template: `<a [router-link]="['/Home']">Home</a>
              <a [router-link]="['/ProductDetail']">Product Details</a>
              <a [router-link]="['/Luxury']">Luxury Items</a>
              <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/product', component: ProductDetailComponent, as: 'ProductDetail'  },
    {path:'/luxury',
                    loader: ()=> System.import('app/components/luxury')
                                        .then(libModule => libModule.LuxuryComponent),
                    as: 'Luxury'
    }
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
