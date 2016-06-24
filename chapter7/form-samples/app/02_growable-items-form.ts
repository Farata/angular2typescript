import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {
    REACTIVE_FORM_DIRECTIVES,
    disableDeprecatedForms,
    provideForms,
    FormArray,
    FormControl,
    FormGroup,
} from '@angular/forms';


/**************************************************************************
 * NOTE: This example doesn't work as of @angular/forms v0.1.0 due to     *
 *       unreleased formArray directive. After the next forms release the *
 *       example should work.                                             *
 **************************************************************************/


@Component({
  selector: 'app',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: `
    <form [formGroup]="form" (ngSubmit)="register()">
      <div>
        <label for="username">Username</label>
        <input id="username" type="text" formControlName="username">
      </div>
      <div>
        <label>Emails</label>
        <ul formArrayName="emails">
          <li *ngFor="let e of emails; let i=index"><input [formControlName]="i"></li>
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
  form: FormGroup;
  emails: FormControl[];

  constructor() {
    this.emails = [new FormControl()];

    this.form = new FormGroup({
      username: new FormControl(),
      emails: new FormArray(this.emails)
    });
  }

  get value() {
    return JSON.stringify(this.form.value, null, 4);
  }

  addEmail() {
    const emails = <FormArray>this.form.controls['emails'];
    emails.push(new FormControl());
  }

  register() {
    console.log(this.form.value);
  }
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
