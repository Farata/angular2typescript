import {bootstrap} from 'angular2/platform/browser';
import { provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import ApplicationComponent from "./components/application/application";

bootstrap(ApplicationComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
