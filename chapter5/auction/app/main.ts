import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from "./components/application/application";
import {ProductService} from './services/product-service';
bootstrap(ApplicationComponent, [
    ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), ProductService
]);
