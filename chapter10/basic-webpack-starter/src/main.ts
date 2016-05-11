import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';

import {MyApp} from './components/app';

bootstrap(MyApp, [
  ...HTTP_PROVIDERS, // using spread operator
  ...ROUTER_PROVIDERS
]).catch((console) => console.error(console));
