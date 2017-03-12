import { Component } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";


function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form">
      SSN: <input type="text" formControlName="my-ssn">
           <span [hidden]="!form.hasError('ssn', 'my-ssn')">SSN is invalid</span>
    </form>
  `
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'my-ssn': new FormControl('', ssnValidator)
    });
  }
}
