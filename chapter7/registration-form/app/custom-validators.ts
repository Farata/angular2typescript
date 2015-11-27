import {
  Component,
  Control,
  Directive,
  provide,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
} from 'angular2/angular2';

@Component({
  selector: 'custom-validators',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: `
    <style>.has-error{color:red}</style>
    <h1>Custom Validators</h1>
    <form>
      <input type="text" [ng-form-control]="ssnControl">
      <span [class.has-error]="!ssnControl.valid"
            *ng-if="ssnControl.touched">
        {{ssnControl.valid ? 'SSN is valid' : 'SSN is invalid'}}
        {{ssnControl.errors | json}}
      </span>
    </form>
  `
})
export default class CustomValidatorsForm {
  ssnControl: Control;

  constructor() {
    this.ssnControl = new Control('', ssn);
  }
}

function ssn(control: Control): {[key: string]: any} {
  let value: string = control.value;
  return value.match(/\d{9}/) ? null : {ssn: true};
}
