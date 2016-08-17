import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {
  disableDeprecatedForms,
  provideForms,
  FormControl,
  FormGroup,
  REACTIVE_FORM_DIRECTIVES
} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

/**
 * Returns an Observable resolved with either a null or an error object.
 */
function asyncSsnValidator(control: FormControl): Observable<any> {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return Observable
      .of(valid ? null : {ssn: true})
      .delay(5000);
}

@Component({
  selector: 'app',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: `
    <form [formGroup]="form">
      SSN: <input type="text" formControlName="my-ssn">
           <span>{{form.status}}</span>
    </form>
  `
})
class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'my-ssn': new FormControl('', null, asyncSsnValidator)
    });
  }
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
