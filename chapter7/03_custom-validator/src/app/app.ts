import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';

/**
 * Returns `true` if Control's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: Control): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

@Component({
  selector: 'app',
  directives: [FORM_DIRECTIVES],
  template: `
    <form [ngFormModel]="form">
      SSN: <input type="text" ngControl="my-ssn">
           <span [hidden]="!form.hasError('ssn', 'my-ssn')">SSN in invalid</span>
    </form>
  `
})
class AppComponent {
  form: ControlGroup;

  constructor() {
    this.form = new ControlGroup({
      'my-ssn': new Control('', ssnValidator)
    });
  }
}

bootstrap(AppComponent);
