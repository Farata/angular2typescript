import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app',
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
class AppComponent {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      'username': new FormControl(),
      'ssn': new FormControl(),
      'passwordsGroup': new FormGroup({
        'password': new FormControl(),
        'pconfirm': new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
  }
}

@NgModule({
  imports     : [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent ],
  bootstrap   : [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
