import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {
  disableDeprecatedForms,
  provideForms,
  FormControl,
  FormGroup,
  REACTIVE_FORM_DIRECTIVES
} from '@angular/forms';

/**
 * Returns `true` if FormControl's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

@Component({
  selector: 'app',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: `
    <form [formGroup]="form">
      SSN: <input type="text" formControlName="my-ssn">
           <span [hidden]="!form.hasError('ssn', 'my-ssn')">SSN in invalid</span>
    </form>
  `
})
class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'my-ssn': new FormControl('', ssnValidator)
    });
  }
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
