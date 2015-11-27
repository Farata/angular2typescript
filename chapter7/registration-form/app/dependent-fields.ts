import {
  Component,
  Control,
  ControlGroup,
  Directive,
  provide,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
} from 'angular2/angular2';

@Component({
  selector: 'dependent-fields',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: `
    <form [ng-form-model]="registrationForm">
      <input type="text" ng-control="username">
      <div ng-control-group="passwords">
        <input type="password" ng-control="password">
        <input type="password" ng-control="pconfirm">
      </div>
    </form>
  `
})
export default class DeoendentFields {
  registrationForm: ControlGroup;

  constructor() {
    this.registrationForm = new ControlGroup({
      'username': new Control(),
      'passwords': new ControlGroup({
        'password': new Control(),
        'pconfirm': new Control()
      }, null, equal)
    });
  }
}

function equal(group: ControlGroup): {[key: string]: any} {
  const [first, ...rest] = Object.keys(group.value);
  const valid = rest.every(v => v === first);
  return valid ? null : {equal: true};
}
