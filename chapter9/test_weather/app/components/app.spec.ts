import {ComponentResolver, Injector} from '@angular/core';
import {addProviders, fakeAsync, inject, tick} from '@angular/core/testing';
import {Location, LocationStrategy} from '@angular/common';
import {SpyLocation} from '@angular/common/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {UrlSerializer, DefaultUrlSerializer, RouterOutletMap, Router, ActivatedRoute} from '@angular/router';

import {ROUTER_CONFIG} from '../router-config';
import {WeatherService} from '../services/weather.service';
import {MockLocationStrategy} from '../testing/mock-location-strategy';
import {AppComponent} from './app';

describe('Router', () => {

  beforeEach(() =>
    addProviders([
      // Normally form providers are registered in bootstrap(), but bootstrap()
      // isn't invoked during the tests, so we need to register them manually:
      disableDeprecatedForms(),
      provideForms(),

      // A helper function defined below in the file returns a list of router
      // providers required for testing environment. Expected to be gone in RC.5
      ...routerProviders(),

      // In this spec file we test navigation to WeatherComponent which in turn
      // injects WeatherService, so we need to register a provider for
      // the service here. However since we do not test the component's behavior
      // here, we can provide a mock object such as an object literal below:
      {provide: WeatherService, useValue: {} }
  ]));


  it('should be able to navigate to home using commands API',
    fakeAsync(inject(
        [Router, Location, TestComponentBuilder],
        (router: Router, location: Location, tcb: TestComponentBuilder) => {
            tcb.createFakeAsync(AppComponent);
            router.navigate(['/']);
            tick();
            expect(location.path()).toBe('/');
    })
  ));

  it('should be able to navigate to weather using commands API',
    fakeAsync(inject(
        [Router, Location, TestComponentBuilder],
        (router: Router, location: Location, tcb: TestComponentBuilder) => {
            tcb.createFakeAsync(AppComponent);
            router.navigate(['/weather']);
            tick();
            expect(location.path()).toBe('/weather');
    })
  ));

  it('should be able to navigate to weather by URL',
    fakeAsync(inject(
        [Router, Location, TestComponentBuilder],
        (router: Router, location: Location, tcb: TestComponentBuilder) => {
            tcb.createFakeAsync(AppComponent);
            router.navigateByUrl('/weather');
            tick();
            expect(location.path()).toEqual('/weather');
    })
  ));
});

/**
 * Returns router providers required for testing environment. Expected to be
 * replaced by RouterTestModule in RC.5
 */
function routerProviders() {
  return [
    RouterOutletMap,
    {provide: UrlSerializer, useClass: DefaultUrlSerializer},
    {provide: Location, useClass: SpyLocation},
    {provide: LocationStrategy, useClass: MockLocationStrategy},
    {provide: ActivatedRoute, useFactory: (r: Router) => r.routerState.root, deps: [Router]},
    {
      provide: Router,
      useFactory: (resolver: ComponentResolver, urlSerializer: UrlSerializer,
                   outletMap: RouterOutletMap, location: Location, injector: Injector) => {
        return new Router(
            AppComponent, resolver, urlSerializer, outletMap, location, injector, ROUTER_CONFIG);
      },
      deps: [ComponentResolver, UrlSerializer, RouterOutletMap, Location, Injector]
    }
  ];
}
