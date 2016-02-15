import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'child',
  styles: ['.child {background: lightgreen;}'],
  template: `
    <div class="child">
      <ng-content></ng-content>
    </div>
  `
})
class ChildComponent {
  childProperty: string = 'value';
}

@Component({
  selector: 'app',
  styles: ['.app {background: cyan;}'],
  directives: [ChildComponent],
  template: `
    <div class="app">
      <div>Parent's view</div>
      <child>
        <div>Parent's property: {{parentProperty}}</div>
        <div>Child's property: {{childProperty}}</div>
      </child>
    </div>
  `
})
class AppComponent {
  parentProperty: string = 'value';
}

bootstrap(AppComponent);
