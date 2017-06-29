import {Component, OnDestroy} from '@angular/core';
import {StateService} from "./state.service";
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'product',
  template: `<div class="ebay">
                <h2 >eBay component</h2>
               Search criteria: {{searchFor}}
               </div>`,
  styles: ['.ebay {background: cyan}']
})
export class EbayComponent implements OnDestroy {

  searchFor: string;
  subscription: Subscription;

  constructor(private state: StateService){

    this.subscription = state.getState()
      .subscribe(event => this.searchFor = event);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  // a must
  }
}
