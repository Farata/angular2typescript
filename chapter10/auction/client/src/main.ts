import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';

if (webpack.ENV === 'production') {
  enableProdMode();
}

import ApplicationComponent from './app/components/application/application';
import {ONLINE_AUCTION_SERVICES} from './app/services/services';

bootstrap(ApplicationComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,

  ONLINE_AUCTION_SERVICES
]).catch(console.error.bind(console));
