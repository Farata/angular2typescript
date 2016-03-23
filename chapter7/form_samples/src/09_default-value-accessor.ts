import {bootstrap} from 'angular2/platform/browser';
import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES, Control, DefaultValueAccessor} from 'angular2/common';

@Component({
  selector: 'custom-input',
  template: `<input type="text" [(ngModel)]="value">`
})
class CustomInputComponent {
  @Input() value: string;
}

@Component({
  selector: 'app',
  directives: [FORM_DIRECTIVES, CustomInputComponent, DefaultValueAccessor],
  template: `
    Custom: <custom-input type="text" [ngFormControl]="customInput" ngDefaultControl></custom-input>
    <button (click)="onSubmit()">Submit</button>
  `
})
class AppComponent {
  customInput: Control = new Control();

  onSubmit() {
    console.log(this.customInput.value);
  }
}

bootstrap(AppComponent);
