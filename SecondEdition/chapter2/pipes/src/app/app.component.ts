import { NgModule, Component }      from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<input type='text' value="0"
                   placeholder= "Enter temperature" [(ngModel)] = "temp">
  <button (click)="toggleFormat()">Toggle Format</button>
  <br>In {{targetFormat}} this temperature is {{temp | temperature: format | number:'1.1-2'}}` // <2>

})
export class AppComponent {

  temp: number;
  toCelsius: boolean=true;
  targetFormat: string ='Celsius';
  format: string='FtoC'; // <3>

  toggleFormat(){ // <4>

    this.toCelsius = !this.toCelsius;
    this.format = this.toCelsius? 'FtoC': 'CtoF';

    this.targetFormat = this.toCelsius?'Celsius':'Fahrenheit';
  }
}