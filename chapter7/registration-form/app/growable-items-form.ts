import {
  Component,
  Control,
  ControlGroup,
  ControlArray,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
} from 'angular2/angular2';

@Component({
  selector: 'app-growable-items-form',
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  template: `
    <form [ng-form-model]="form" (ng-submit)="register()">
      <div>
        <label for="username">Username</label>
        <input id="username" type="text" ng-control="username">
      </div>
      <div>
        <label>Emails</label>
        <ul ng-control-group="emails">
          <li *ng-for="#e of emails; #i = index"><input ng-control="{{ i }}"></li>
        </ul>
        <button type="button" (click)="addEmail()">Add Email</button>
      </div>
      <button type="submit">Register</button>
    </form>
    <label>Form Value:</label>
    <pre>{{ value }}</pre>
  `
})
export default class GrowableItemsForm {
  form: ControlGroup;
  emails: Control[];

  constructor() {
    this.emails = [new Control()];

    this.form = new ControlGroup({
      username: new Control(),
      emails: new ControlArray(this.emails)
    });
  }

  addEmail() {
    this.form.controls['emails'].push(new Control());
  }

  register() {
    console.log(this.form.value);
  }

  get value() {
    return JSON.stringify(this.form.value, null, 4);
  }
}
