import {
  provide,
  bootstrap,
  Directive,
  Component,
  Control,
  ControlGroup,
  NG_VALIDATORS,
  FORM_DIRECTIVES
} from 'angular2/angular2';

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
 * Wraps existing {@link ssnValidator} function into a directive,
 * so it can be used in a template to validate a form field.
 */
@Directive({
  selector: '[ssn]',
  providers: [provide(NG_VALIDATORS, {useValue: ssnValidator, multi: true})]
})
class SsnValidatorDirective {}

/**
 * Returns `true` if all Controls in the specified ControlGroup have exactly
 * the same value. Otherwise returns `false`.
 */
function equalValidator({value}: ControlGroup): {[key: string]: any} {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return valid ? null : {equal: true};
}

/**
 * Wraps existing {@link equalValidator} function into a directive,
 * so it can be used in a template to validate a form field.
 */
@Directive({
  selector: '[equal]',
  providers: [provide(NG_VALIDATORS, {useValue: equalValidator, multi: true})]
})
class EqualValidatorDirective {}

@Component({
  selector: 'app',
  directives: [
    FORM_DIRECTIVES,
    SsnValidatorDirective,
    EqualValidatorDirective
  ],
  template: `
    <form #f="form" (ng-submit)="onSubmit(f.value, f.valid)" novalidate>
      <div>
        Username:
        <input type="text" ng-control="username" required>
        <span [hidden]="!f.form.hasError('required', 'username')">Username is required</span>
      </div>

      <div>
        SSN:
        <input type="text" ng-control="ssn" ssn>
        <span [hidden]="!f.form.hasError('ssn', 'ssn')">SSN in invalid</span>
      </div>

      <div ng-control-group="passwordsGroup" equal>
        <div>
          Password:
          <input type="password" ng-control="password" minlength="5">
          <span [hidden]="!f.form.hasError('minlength', ['passwordsGroup', 'password'])">Password is too short</span>
        </div>

        <div>
          Confirm password:
          <input type="password" ng-control="pconfirm">
          <span [hidden]="!f.form.hasError('equal', 'passwordsGroup')">Passwords must be the same</span>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  `
})
class AppComponent {
  onSubmit(formValue: any, isFormValid: boolean) {
    if (isFormValid) {
      console.log(formValue);
    }
  }
}

bootstrap(AppComponent);
