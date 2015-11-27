import {Component, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'app-template-driven-form',
  directives: [FORM_DIRECTIVES],
  template: `
    <form #f="form" (ng-submit)="register(f.value)">
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
export default class TemplateDrivenForm {
  register(value) {
    console.log(value);
  }
}
