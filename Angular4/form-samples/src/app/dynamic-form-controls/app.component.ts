import { Component } from '@angular/core';
import {FormControl, FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="formModel" (ngSubmit)="onSubmit()">
      <label>Emails</label>
      <button type="button" (click)="addEmail()">Add Email</button>
      <ul formArrayName="emails">
        <li *ngFor="let e of formModel.get('emails').controls; let i=index">
          <input [formControlName]="i">
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
    <hr>
    <label>Form Value:</label>
    <pre>{{ value }}</pre>
  `
})
export class AppComponent {
  formModel: FormGroup = new FormGroup({
    emails: new FormArray([
      new FormControl()
    ])
  });

  get value() {
    return JSON.stringify(this.formModel.value, null, 4); // insert 4 spaces for readability
  }

  addEmail() {
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

  onSubmit() {
    console.log(this.formModel.value);
  }
}
