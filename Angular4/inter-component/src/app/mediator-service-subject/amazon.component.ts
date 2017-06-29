import {Component} from '@angular/core';
import {StateService} from './state.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'amazon',
  template: `<div class="amz">
                <h2 >Amazon component</h2>
               Search criteria: {{searchFor}}
               </div>`,
  styles: ['.amz {background: pink}']
})
export class AmazonComponent {

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
