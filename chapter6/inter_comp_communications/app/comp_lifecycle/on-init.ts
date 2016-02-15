import {bootstrap} from 'angular2/platform/browser';
import {Component, Input, OnInit} from 'angular2/core';

@Component({
  selector: 'child',
  template: '{{greeting}}'
})
class ChildComponent implements OnInit { // OnInit is optional
  @Input() greeting: string;

  /** greeting isn't initialized yet */
  constructor() {
    console.log(`constructor: ${this.greeting}`);
  }

  /** Invoked every time an @Input() property changes via the data binding */
  ngOnChanges() {
    console.log(`ngOnChanges: ${this.greeting}`);
  }

  /**
   * Invoked after very first ngOnChanges(). Might be useful when you want to
   * initialize the component's state right after the component is get passed
   * with initial @Input() properties values.
   */
  ngOnInit() {
    console.log(`ngOnInit: ${this.greeting}`);
  }
}

@Component({
  selector: 'app',
  directives: [ChildComponent],
  template: `
    <div>Greeting: <input type="text" [(ngModel)]="greeting"></div>
    <child [greeting]="greeting"></child>
  `
})
class AppComponent {
  greeting: string = 'Hello';
}

bootstrap(AppComponent);
