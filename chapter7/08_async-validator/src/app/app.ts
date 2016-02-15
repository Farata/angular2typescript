import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import * as Rx from 'rxjs/Rx';

/**
 * Returns an Observable resolved with either a null or an error object.
 */
function asyncSsnValidator(control: Control): Rx.Observable {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return Rx.Observable
      .of(valid ? null : {ssn: true})
      .delay(5000);
}

@Component({
  selector: 'app',
  directives: [FORM_DIRECTIVES],
  template: `
    <form [ngFormModel]="form">
      SSN: <input type="text" ngControl="my-ssn">
           <span>{{form.status}}</span>
    </form>
  `
})
class AppComponent {
  form: ControlGroup;

  constructor() {
    this.form = new ControlGroup({
      'my-ssn': new Control('', null, asyncSsnValidator)
    });
  }
}

bootstrap(AppComponent);
