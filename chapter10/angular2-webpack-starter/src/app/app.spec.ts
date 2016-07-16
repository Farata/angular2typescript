import {ComponentResolver, Injector} from '@angular/core';
import {addProviders, fakeAsync, inject, tick} from '@angular/core/testing';
import {Location, LocationStrategy} from '@angular/common';
import {SpyLocation} from '@angular/common/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {UrlSerializer, DefaultUrlSerializer, RouterOutletMap, Router, ActivatedRoute} from '@angular/router';

import {ROUTER_CONFIG} from '../router-config';
import {MockLocationStrategy} from '../testing/mock-location-strategy';
import {MyApp} from './app';

describe('Router', () => {

    beforeEach(() =>
        addProviders([
            // A helper function defined below returns a list of router
            // providers required for testing environment. Expected to be gone in RC.5
            ...routerProviders()
        ]));

    it('should be able to navigate to home using commands API',
        fakeAsync(inject(
            [Router, Location, TestComponentBuilder],
            (router: Router, location: Location, tcb: TestComponentBuilder) => {
                tcb.createFakeAsync(MyApp);
                router.navigate(['/']);
                tick();
                expect(location.path()).toBe('/');
            })
        ));

    it('should be able to navigate to About using commands API',
        fakeAsync(inject(
            [Router, Location, TestComponentBuilder],
            (router: Router, location: Location, tcb: TestComponentBuilder) => {
                tcb.createFakeAsync(MyApp);
                router.navigate(['/about']);
                tick();
                expect(location.path()).toBe('/about');
            })
        ));

    it('should be able to navigate to About by URL',
        fakeAsync(inject(
            [Router, Location, TestComponentBuilder],
            (router: Router, location: Location, tcb: TestComponentBuilder) => {
                tcb.createFakeAsync(MyApp);
                router.navigateByUrl('/about');
                tick();
                expect(location.path()).toEqual('/about');
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
                    MyApp, resolver, urlSerializer, outletMap, location, injector, ROUTER_CONFIG);
            },
            deps: [ComponentResolver, UrlSerializer, RouterOutletMap, Location, Injector]
        }
    ];
}




/*
import {ComponentResolver} from '@angular/core';
import {Location} from '@angular/common';
import {
  DefaultRouterUrlSerializer,
  Router,
  RouterOutletMap,
  RouterUrlSerializer
} from '@angular/router';
import {
  beforeEachProviders,
  describe,
  expect,
  fakeAsync,
  inject,
  it,
  tick
} from '@angular/core/testing';
import {SpyLocation} from '@angular/common/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {MyApp} from './app';

describe('Router', () => {
  beforeEachProviders(() => [
    RouterOutletMap,
    {provide: Location, useClass: SpyLocation},
    {provide: RouterUrlSerializer, useClass: DefaultRouterUrlSerializer},
    {provide: Router,
     deps: [ComponentResolver, RouterUrlSerializer, RouterOutletMap, Location],
     useFactory: (resolver, urlParser, outletMap, location) =>
          new Router('MyApp', MyApp, resolver, urlParser, outletMap, location),
    }
  ]);

  it('should be able to navigate to Home using commands API',
    fakeAsync(inject([Router, Location, TestComponentBuilder],
      (router: Router, location: Location, tcb: TestComponentBuilder) => {
        tcb.createFakeAsync(MyApp);
        router.navigate(['/']);
        tick();
        expect(location.path()).toBe('');
      })
  ));

  it('should be able to navigate to About using commands API',
    fakeAsync(inject([Router, Location, TestComponentBuilder],
      (router: Router, location: Location, tcb: TestComponentBuilder) => {
        tcb.createFakeAsync(MyApp);
        router.navigate(['/about']);
        tick();
        expect(location.path()).toBe('/about');
      })
  ));

  it('should be able to navigate to About by URL',
    fakeAsync(inject([Router, Location, TestComponentBuilder],
      (router: Router, location: Location, tcb: TestComponentBuilder) => {
        tcb.createFakeAsync(MyApp);
        router.navigateByUrl('/about');
        tick();
        expect(location.path()).toEqual('/about');
      })
  ));
});
*/
