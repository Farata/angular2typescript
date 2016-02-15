import {bootstrap} from 'angular2/platform/browser';
import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'child',
  styles: ['.child {background: lightgreen;}'],
  template: `
    <div class="child">
     <h2>Child</h2>
      <div>This &lt;div&gt; is defined in the child's template</div>
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
class ChildComponent {}

@Component({
  selector: 'app',
  styles: ['.app {background: cyan;}'],
  directives: [ChildComponent],
  template: `
    <div class="app">
     <h2>Parent</h2>
      <div>This &lt;div&gt; is defined in the Parent's template</div>
      <child>
        <div>Parent projects this &lt;div&gt; onto the child </div>
      </child>
    </div>
  `
})
class AppComponent {}

bootstrap(AppComponent);
