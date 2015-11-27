import {
  bootstrap,
  Component,
  Control,
  ControlGroup,
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

@Component({
  selector: 'app',
  directives: [FORM_DIRECTIVES],
  template: `
    <form [ng-form-model]="form">
      SSN: <input type="text" ng-control="my-ssn">
           <span [hidden]="!form.hasError('ssn', 'my-ssn')">SSN in invalid</span>
    </form>
  `
})
class AppComponent {
  form: ControlGroup;

  constructor() {
    this.form = new ControlGroup({
      'my-ssn': new Control('', ssnValidator)
    });
  }
}

bootstrap(AppComponent);
