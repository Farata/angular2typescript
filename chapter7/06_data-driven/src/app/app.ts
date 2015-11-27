import {
  bootstrap,
  Directive,
  Component,
  Control,
  ControlGroup,
  Validators,
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
    <form [ng-form-model]="formModel" (ng-submit)="onSubmit()" novalidate>
      <div>
        Username:
        <input type="text" ng-control="username">
        <span [hidden]="!formModel.hasError('required', 'username')">Username is required</span>
      </div>

      <div>
        SSN:
        <input type="text" ng-control="ssn">
        <span [hidden]="!formModel.hasError('ssn', 'ssn')">SSN is invalid</span>
      </div>

      <div ng-control-group="passwordsGroup">
        <div>
          Password:
          <input type="password" ng-control="password">
          <span [hidden]="!formModel.hasError('minlength', ['passwordsGroup', 'password'])">Password is too short</span>
        </div>

        <div>
          Confirm password:
          <input type="password" ng-control="pconfirm">
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
    this.formModel = new ControlGroup({
      'username': new Control('', Validators.required),
      'ssn': new Control('', ssnValidator),
      'passwordsGroup': new ControlGroup({
        'password': new Control('', Validators.minLength(5)),
        'pconfirm': new Control('')
      }, {}, equalValidator)
    });
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}

bootstrap(AppComponent);
