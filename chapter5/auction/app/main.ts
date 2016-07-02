import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter} from '@angular/router';

import ApplicationComponent from './components/application/application';
import HomeComponent from './components/home/home';
import ProductDetailComponent from './components/product-detail/product-detail';
import {ProductService} from './services/product-service';

bootstrap(ApplicationComponent, [
    provideRouter([
        {path: '',                    component: HomeComponent},
        {path: 'products/:productId', component: ProductDetailComponent}
    ]),
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ProductService
]);