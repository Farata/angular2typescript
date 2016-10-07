import { Component, Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, FormControl, NG_VALIDATORS } from '@angular/forms';

/**
 * Returns `true` if FormControl's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

/**
 * Wraps existing ssnValidator function into a directive,
 * so it can be used in a template to validate a form field.
 */
@Directive({
  selector: '[ssn]',
  providers: [{provide: NG_VALIDATORS, useValue: ssnValidator, multi: true}]
})
class SsnValidatorDirective {}

@Component({
  selector: 'app',
  template: `
    <form #f="ngForm">
      SSN: <input type="text" name="my-ssn" ngModel ssn>
           <span [hidden]="!f.form.hasError('ssn', 'my-ssn')">SSN is invalid</span>
    </form>
  `
})
class AppComponent {}

@NgModule({
  imports     : [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SsnValidatorDirective ],
  bootstrap   : [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
