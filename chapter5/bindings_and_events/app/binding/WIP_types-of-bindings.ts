import {bootstrap} from '../../node_modules/angular2/platform/browser.d';
import {Component} from '../../node_modules/angular2/core.d';
import {NgIf} from '../../node_modules/angular2/common.d';

@Component({
  selector: 'app',
  directives: [NgIf], // Needed for the template-binding example.
  template: `
    <h3>Attribute binding:</h3>
    <input [attr.my-attribute]="greeting">

    <h3>Property binding:</h3>
    <input [value]="greeting">

    <h3>Event binding:</h3>
    <input (input)="onInputEvent($event)">

    <h3>Template binding:</h3>
    <p *ngIf="showError">Error message</p>
  `
})
class App {
  // Used in attribute and property binding
  greeting: string = 'Initial string value';

  // Used in event binding
  onInputEvent(event: Event): void {
    let input = <HTMLInputElement>event.target;
    console.log(input.value);
  }

  showError: boolean = true;
}

bootstrap(App);
