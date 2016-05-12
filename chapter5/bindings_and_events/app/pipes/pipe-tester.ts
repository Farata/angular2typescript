import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {TemperaturePipe} from './temperature-pipe';

@Component({
    selector: 'app',
    pipes:[TemperaturePipe],

    template:`<input type='text' value="0"
              placeholder= "Enter temperature" [(ngModel)] = "temp">
              <button (click)="toggleFormat()">Toggle Format</button>
              <br>In {{targetFormat}} this temperature is {{temp | temperature: format | number:'1.1-2'}}`

})
class GreetingComponent {

    temp: number;
    toCelsius: boolean=true;
    targetFormat: string ='Celsius';
    format: string='FtoC';

    toggleFormat(){

        this.toCelsius = !this.toCelsius;
        this.format = this.toCelsius? 'FtoC': 'CtoF';

        this.targetFormat = this.toCelsius?'Celsius':'Fahrenheit';
    }
}
bootstrap(GreetingComponent);