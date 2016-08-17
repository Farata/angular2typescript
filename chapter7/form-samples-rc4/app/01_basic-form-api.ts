import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

@Component({
  selector: 'app',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
      <div>Username:         <input type="text"     name="username" ngModel></div>
      <div>SSN:              <input type="text"     name="ssn"      ngModel></div>
      <div>Password:         <input type="password" name="password" ngModel></div>
      <div>Confirm password: <input type="password" name="pconfirm" ngModel></div>
      <button type="submit">Register</button>
    </form>
  `
})
class AppComponent {
  onSubmit(formData) {
    console.log(formData);
  }
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
