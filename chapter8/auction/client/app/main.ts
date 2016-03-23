import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import ApplicationComponent from "./components/application/application";
import {ONLINE_AUCTION_SERVICES} from './services/services';

bootstrap(ApplicationComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),

  ONLINE_AUCTION_SERVICES
]);
