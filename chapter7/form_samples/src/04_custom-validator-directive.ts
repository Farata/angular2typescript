import {bootstrap} from 'angular2/platform/browser';
import {Component, Directive, provide} from 'angular2/core';
import {Control, NG_VALIDATORS, FORM_DIRECTIVES} from 'angular2/common';

/**
 * Returns `true` if Control's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: Control): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

/**
 * Wraps existing ssnValidator function into a directive,
 * so it can be used in a template to validate a form field.
 */
@Directive({
  selector: '[ssn]',
  providers: [provide(NG_VALIDATORS, {useValue: ssnValidator, multi: true})]
})
class SsnValidatorDirective {}

@Component({
  selector: 'app',
  directives: [FORM_DIRECTIVES, SsnValidatorDirective],
  template: `
    <form #f="ngForm">
      SSN: <input type="text"
                  ngControl="my-ssn"
                  ssn>
           <span [hidden]="!f.form.hasError('ssn', 'my-ssn')">
             SSN is invalid
           </span>
    </form>
  `
})
class AppComponent {}

bootstrap(AppComponent);
