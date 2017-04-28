import {Component, Input} from "@angular/core";

@Component({
  selector: 'child',
  template: `<h3>Child {{name}}</h3>`

})
export class ChildComponent {

  @Input() name: string;

  greet() {
    console.log(`Hello from ${this.name}.`);
  }
}
