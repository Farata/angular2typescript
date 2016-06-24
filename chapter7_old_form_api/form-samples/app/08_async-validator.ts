import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {Control, ControlGroup, FORM_DIRECTIVES} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

/**
 * Returns an Observable resolved with either a null or an error object.
 */
function asyncSsnValidator(control: Control): Observable<any> {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return Observable
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
