import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { SEARCH, SearchAction, SearchSuccessAction } from './ngrx.actions';

@Injectable()
export class ProductService {
  static counter: number = 0;

  generate(searchQuery: string): Observable<string[]> {
    const generator = () => `Product ${searchQuery}${ProductService.counter++}`;
    const results = Array.from({ length: 5 }, generator);
    return Observable.of(results).delay(500);
  }
}

@Injectable()
export class SearchEffects {
  @Effect()
  search$ = this.actions$
    .ofType(SEARCH)
    .map((action: SearchAction) => action.payload)
    .switchMap(({ searchQuery }) => this.generator.generate(searchQuery))
    .map(searchResults => new SearchSuccessAction({ searchResults }));

  constructor(
    private actions$: Actions,
    private generator: ProductService
  ) {}
}
