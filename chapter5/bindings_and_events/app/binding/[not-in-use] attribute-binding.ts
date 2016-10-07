import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>
      When the Angular Component's property is updated the input's value
      <i>property</i> is updated as well, however the input's value
      <i>attribute</i> remain unchanged.
    </p>

    <input #myInput [attr.value]="greeting" (input)="cd.detectChanges()">

    <p>Current state:</p>
    <pre>
      Component property:       {{greeting}}
      DOM element's property:   {{myInput.value}}
      HTML element's attribute: {{myInput.getAttribute('value') | json}}
    </pre>
  `
})
class AppComponent {
  greeting: string = 'Initial greeting';

  constructor(public cd: ChangeDetectorRef) {}
}

bootstrap(AppComponent);
