import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {FORM_PROVIDERS} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import ApplicationComponent from "./components/application/application";
import {ONLINE_AUCTION_SERVICES} from './services/services';

bootstrap(ApplicationComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),

  ONLINE_AUCTION_SERVICES
]);
