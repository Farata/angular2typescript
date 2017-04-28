import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
      <div>Username:        <input type="text"     name="username" ngModel></div>
      <div>SSN:             <input type="text"     name="ssn"      ngModel></div>
      <div>Password:        <input type="password" name="password" ngModel></div>
      <div>Confirm password: <input type="password" name="pconfirm"  ngModel></div>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  onSubmit(formData) {
    console.log(formData);
  }
}
