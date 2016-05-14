import {
    beforeEachProviders,
    describe,
    expect,
    inject,
    it,
    fakeAsync,
    tick
} from '@angular/core/testing';

import {ROUTER_FAKE_PROVIDERS} from '@angular/router/testing';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

describe('Router', () => {

  beforeEachProviders(() => [ROUTER_FAKE_PROVIDERS]);

  it('should be able to navigate to home using commands API',
    fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
      router.navigate(['/']);
      tick();
      expect(location.path()).toBe('');
    })
  ));

  it('should be able to navigate to weather using commands API',
    fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
      router.navigate(['/weather']);
      tick();
      expect(location.path()).toBe('/weather');
    })
  ));

  it('should be able to navigate to weather by URL',
    fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
      router.navigateByUrl('/weather');
      tick();
      expect(location.path()).toEqual('/weather');
    })
  ));
});
