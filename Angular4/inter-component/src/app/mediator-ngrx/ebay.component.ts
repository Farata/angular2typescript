import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State, getSearchQuery, getSearchResults} from './ngrx.reducers';

@Component({
  selector: 'product',
  template: `<div class="ebay">
                <h2 >eBay component</h2>
               Search criteria: {{ searchFor$ | async }}

               <ul>
                <li *ngFor="let p of results$ | async">{{ p }}</li>
               </ul>
               </div>`,
  styles: ['.ebay {background: cyan}']
})
export class EbayComponent {
  searchFor$ = this.store.select(getSearchQuery);
  results$ = this.store.select(getSearchResults);

  constructor(private store: Store<State>) {}
}
