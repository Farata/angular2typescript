import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

if (webpack.ENV === 'production') {
  enableProdMode();
}

import {MyApp} from './app/app';

bootstrap(MyApp, [
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS
]).catch(console.error.bind(console));
