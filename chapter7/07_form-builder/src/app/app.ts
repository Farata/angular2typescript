import {bootstrap} from 'angular2/platform/browser';
import {Directive, Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder, FORM_DIRECTIVES} from 'angular2/common';

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
 * Returns `true` if all Controls in the specified ControlGroup have exactly
 * the same value. Otherwise returns `false`.
 */
function equalValidator({value}: ControlGroup): {[key: string]: any} {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return valid ? null : {equal: true};
}

@Component({
  selector: 'app',
  directives: [FORM_DIRECTIVES],
  template: `
    <form [ngFormModel]="formModel" (ngSubmit)="onSubmit()" novalidate>
      <div>
        Username:
        <input type="text" ngControl="username">
        <span [hidden]="!formModel.hasError('required', 'username')">Username is required</span>
      </div>

      <div>
        SSN:
        <input type="text" ngControl="ssn">
        <span [hidden]="!formModel.hasError('ssn', 'ssn')">SSN is invalid</span>
      </div>

      <div ngControlGroup="passwordsGroup">
        <div>
          Password:
          <input type="password" ngControl="password">
          <span [hidden]="!formModel.hasError('minlength', ['passwordsGroup', 'password'])">Password is too short</span>
        </div>

        <div>
          Confirm password:
          <input type="password" ngControl="pconfirm">
          <span [hidden]="!formModel.hasError('equal', 'passwordsGroup')">Passwords must be the same</span>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  `
})
class AppComponent {
  formModel: ControlGroup;

  constructor() {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'username': ['', Validators.required],
      'ssn': ['', ssnValidator],
      'passwordsGroup': fb.group({
        'password': ['', Validators.minLength(5)],
        'pconfirm': ['']
      }, {validator: equalValidator})
    });
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}

bootstrap(AppComponent);
