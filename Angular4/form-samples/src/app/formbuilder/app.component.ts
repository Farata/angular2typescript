import { Component } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="formModel" (ngSubmit)="onSubmit()">
      <div>Username: <input type="text" formControlName="username"></div>
      <div>SSN:      <input type="text" formControlName="ssn"></div>

      <div formGroupName="passwordsGroup">
        <div>Password:        <input type="password" formControlName="password"></div>
        <div>Confirm password: <input type="password" formControlName="pconfirm"></div>
      </div>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: [''],
      ssn: [''],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
  }
}
