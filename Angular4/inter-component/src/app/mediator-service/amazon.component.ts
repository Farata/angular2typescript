import {Component} from '@angular/core';
import {StateService} from "./state.service";

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

  constructor(private state: StateService){

    state.stateEvent
      .subscribe(event => this.searchFor = event);
  }

  ngOnInit(){
    this.searchFor = this.state.searchCriteria;
  }
}
