import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State, getSearchQuery, getSearchResults} from './ngrx.reducers';

@Component({
  selector: 'amazon',
  template: `<div class="amz">
                <h2>Amazon component</h2>
               Search criteria: {{ searchFor$ | async }}

               <ul>
                <li *ngFor="let p of results$ | async">{{ p }}</li>
               </ul>
               </div>`,
  styles: ['.amz {background: pink}']
})
export class AmazonComponent {
  searchFor$ = this.store.select(getSearchQuery);
  results$ = this.store.select(getSearchResults);

  constructor(private store: Store<State>) {}
}
