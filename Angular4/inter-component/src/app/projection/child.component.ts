import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'child',
 styles: ['.wrapper {background: lightgreen;}'],
  template: `
    <div class="wrapper">
     <h2>Child</h2>
      <ng-content select=".header" ></ng-content><p>
      <div>This content is defined in child</div><p>
      <ng-content select=".footer"></ng-content>
    </div>
  `,
  encapsulation:ViewEncapsulation.Native
})
export class ChildComponent {}
