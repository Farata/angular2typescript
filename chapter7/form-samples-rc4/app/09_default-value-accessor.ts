import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, Input} from '@angular/core';
import {
  disableDeprecatedForms,
  provideForms,
  DefaultValueAccessor
  FormControl,
  REACTIVE_FORM_DIRECTIVES
} from '@angular/forms';

@Component({
  selector: 'custom-input',
  template: `<input type="text" [(ngModel)]="value">`
})
class CustomInputComponent {
  @Input() value: string;
}

@Component({
  selector: 'app',
  directives: [REACTIVE_FORM_DIRECTIVES, CustomInputComponent, DefaultValueAccessor],
  template: `
    Custom: <custom-input type="text" [formControl]="customInput" ngDefaultControl></custom-input>
    <button (click)="onSubmit()">Submit</button>
  `
})
class AppComponent {
  customInput: FormControl = new FormControl();

  onSubmit() {
    console.log(this.customInput.value);
  }
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
