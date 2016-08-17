import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {provideRouter} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

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
    disableDeprecatedForms(),
    provideForms(),
    ProductService
]);
