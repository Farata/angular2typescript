import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  Actions,
  SEARCH,
  SEARCH_SUCCESS,
  SearchAction,
} from './ngrx.actions';

export interface State {
  searchQuery: string;
  searchResults: string[];
}

const initialState: State = {
  searchQuery: '',
  searchResults: []
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    case SEARCH: {
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        searchResults: []
      }
    }

    case SEARCH_SUCCESS: {
      return {
        ...state,
        searchResults: action.payload.searchResults
      }
    }

    default: {
      return state;
    }

  }
}

export const getState = createFeatureSelector('reducer');
export const getSearchQuery = createSelector(getState, (state: State) => state.searchQuery);
export const getSearchResults = createSelector(getState, (state: State) => state.searchResults);

