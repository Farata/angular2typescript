import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

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
