import {bootstrap} from '@angular/platform-browser-dynamic';
import {Directive, Component} from '@angular/core';
import {
  disableDeprecatedForms,
  provideForms,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
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

/**
 * Returns `true` if all FormControls in the specified FormGroup have exactly
 * the same value. Otherwise returns `false`.
 */
function equalValidator({value}: FormGroup): {[key: string]: any} {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return valid ? null : {equal: true};
}

@Component({
  selector: 'app',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: `
    <form [formGroup]="formModel" (ngSubmit)="onSubmit()" novalidate>
      <div>
        Username:
        <input type="text" formControlName="username">
        <span [hidden]="!formModel.hasError('required', 'username')">Username is required</span>
      </div>

      <div>
        SSN:
        <input type="text" formControlName="ssn">
        <span [hidden]="!formModel.hasError('ssn', 'ssn')">SSN is invalid</span>
      </div>

      <div formGroupName="passwordsGroup">
        <div>
          Password:
          <input type="password" formControlName="password">
          <span [hidden]="!formModel.hasError('minlength', ['passwordsGroup', 'password'])">Password is too short</span>
        </div>

        <div>
          Confirm password:
          <input type="password" formControlName="pconfirm">
          <span [hidden]="!formModel.hasError('equal', 'passwordsGroup')">Passwords must be the same</span>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  `
})
class AppComponent {
  formModel: FormGroup;

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

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
