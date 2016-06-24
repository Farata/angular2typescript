import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {
    Control,
    ControlArray,
    ControlGroup,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
} from '@angular/common';

@Component({
  selector: 'app',
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  template: `
    <form [ngFormModel]="form" (ngSubmit)="register()">
      <div>
        <label for="username">Username</label>
        <input id="username" type="text" ngControl="username">
      </div>
      <div>
        <label>Emails</label>
        <ul ngControlGroup="emails">
          <li *ngFor="let e of emails; let i = index"><input ngControl="{{i}}"></li>
        </ul>
        <button type="button" (click)="addEmail()">Add Email</button>
      </div>
      <button type="submit">Register</button>
    </form>
    <label>Form Value:</label>
    <pre>{{value}}</pre>
  `
})
export default class AppComponent {
  form: ControlGroup;
  emails: Control[];

  constructor() {
    this.emails = [new Control()];

    this.form = new ControlGroup({
      username: new Control(),
      emails: new ControlArray(this.emails)
    });
  }

  get value() {
    return JSON.stringify(this.form.value, null, 4);
  }

  addEmail() {
    const emails = <ControlArray>this.form.controls['emails'];
    emails.push(new Control());
  }

  register() {
    console.log(this.form.value);
  }
}

bootstrap(AppComponent);
