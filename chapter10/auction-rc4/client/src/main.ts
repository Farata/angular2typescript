import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {FORM_PROVIDERS} from '@angular/common';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {provideRouter} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

import {ONLINE_AUCTION_SERVICES} from './app/services/services';
import ApplicationComponent from './app/components/application/application';
import HomeComponent from './app/components/home/home';
import ProductDetailComponent from './app/components/product-detail/product-detail';

if (webpack.ENV === 'production') {
  enableProdMode();
}

bootstrap(ApplicationComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,

  provideRouter([
    {path: '',                    component: HomeComponent},
    {path: 'products/:productId', component: ProductDetailComponent}
  ]),

  {provide: LocationStrategy, useClass: HashLocationStrategy},

  disableDeprecatedForms(),
  provideForms(),

  ONLINE_AUCTION_SERVICES
]);