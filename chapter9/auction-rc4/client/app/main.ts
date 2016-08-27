import {bootstrap} from '@angular/platform-browser-dynamic';
import {FORM_PROVIDERS} from '@angular/common';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {provideRouter} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

import {ONLINE_AUCTION_SERVICES} from './services/services';
import ApplicationComponent from './components/application/application';
import HomeComponent from './components/home/home';
import ProductDetailComponent from './components/product-detail/product-detail';

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
