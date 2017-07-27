import { Action } from '@ngrx/store';

export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: { searchQuery: string }) {}
}

export class SearchSuccessAction implements Action {
  readonly type = SEARCH_SUCCESS;

  constructor(public payload: { searchResults: string[] }) {}
}

export type Actions
  = SearchAction
  | SearchSuccessAction;
