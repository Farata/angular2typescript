import {Component, Directive} from '@angular/core';
import {NG_VALIDATORS, FormControl} from "@angular/forms";

function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

/**
 * This directive wraps existing ssnValidator function into a directive,
 * so it can be used in a template to validate a form field.
 */
@Directive({
  selector: '[ssn]',
  providers: [{provide: NG_VALIDATORS, useValue: ssnValidator, multi: true}]
})
export class SsnValidatorDirective {}

@Component({
  selector: 'app-root',
  template: `
    <form #f="ngForm">
      SSN: <input type="text" name="my-ssn" ngModel ssn>
           <span [hidden]="!f.form.hasError('ssn', 'my-ssn')">SSN is invalid</span>
    </form>
  `
})
export class AppComponent {}
