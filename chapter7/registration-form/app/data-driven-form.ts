import {
  Component,
  Control,
  ControlGroup,
  FORM_DIRECTIVES
} from 'angular2/angular2';

@Component({
  selector: 'app-data-driven-form',
  directives: [FORM_DIRECTIVES],
  template: `
    <form (ng-submit)="register()" [ng-form-model]="registerForm">
      <div>
        <label for="username">Username</label>
        <input id="username" type="text" ng-control="username">
      </div>
      <div>
        <label for="birthday">Birthday</label>
        <input id="birthday" type="text" ng-control="birthday">
      </div>
      <div>
        <label for="zipcode">Zipcode</label>
        <input id="zipcode" type="text" ng-control="zipcode">
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" ng-control="password">
      </div>
      <div>
        <label for="pconfirm">Confirm password</label>
        <input id="pconfirm" type="password" ng-control="pconfirm">
      </div>
      <button type="submit">Register</button>
    </form>
  `
})
export default class DataDrivenForm {
  registerForm: ControlGroup;

  constructor() {
    this.registerForm = new ControlGroup({
      'username': new Control(),
      'birthday': new Control(),
      'password': new Control(),
      'pconfirm': new Control(),
      'zipcode': new Control()
    });
  }

  register(value) {
    console.log(this.registerForm.value);
  }
}
