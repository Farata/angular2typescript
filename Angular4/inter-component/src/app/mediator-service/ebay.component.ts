import {Component} from '@angular/core';
import {StateService} from "./state.service";

@Component({
  selector: 'product',
  template: `<div class="ebay">
                <h2 >eBay component</h2>
               Search criteria: {{searchFor}}
               </div>`,
  styles: ['.ebay {background: cyan}']
})
export class EbayComponent {

  searchFor: string;

  constructor(private state: StateService){

    state.stateEvent
      .subscribe(event => this.searchFor = event);

  }

  ngOnInit(){
    this.searchFor = this.state.searchCriteria;
  }
}
