import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter} from '@angular/router';
import {ROUTER_CONFIG} from "./router-config";

import {MyApp} from './app/app';

bootstrap(MyApp, [
  ...HTTP_PROVIDERS,
  provideRouter(ROUTER_CONFIG)
]).catch(console.error.bind(console));
