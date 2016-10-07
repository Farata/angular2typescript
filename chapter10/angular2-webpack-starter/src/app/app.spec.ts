import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { provideRoutes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ROUTES } from '../app.routing';
import { MyApp } from './app';
import { About } from './about/about';
import { Home } from './home/home';

describe('Router', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ MyApp, About, Home ],
      providers: [
        // In RC.6 provideRoutes() will be replaced with
        // RouterTestingModule.withRoutes()
        provideRoutes(ROUTES)
      ]
    })
  });

  it('should be able to navigate to home using commands API',
    fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
      TestBed.createComponent(MyApp);
      router.navigate(['/']);
      tick();
      expect(location.path()).toBe('/');
    })
  ));

  it('should be able to navigate to About using commands API',
    fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
      TestBed.createComponent(MyApp);
      router.navigate(['/about']);
      tick();
      expect(location.path()).toBe('/about');
    })
  ));

  it('should be able to navigate to About by URL',
    fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
      TestBed.createComponent(MyApp);
      router.navigateByUrl('/about');
      tick();
      expect(location.path()).toEqual('/about');
    })
  ));

});
