import { Component, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule, FormControl, DefaultValueAccessor } from '@angular/forms';

@Component({
  selector: 'custom-input',
  template: `<input type="text" [(ngModel)]="value">`
})
class CustomInputComponent {
  @Input() value: string;
}

@Component({
  selector: 'app',
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

@NgModule({
  imports     : [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, CustomInputComponent ],
  bootstrap   : [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
