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
