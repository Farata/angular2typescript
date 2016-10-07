import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TemperaturePipe} from './temperature-pipe';

@Component({
    selector: 'app',
    template:`<input type='text' value="0"
              placeholder= "Enter temperature" [(ngModel)] = "temp">
              <button (click)="toggleFormat()">Toggle Format</button>
              <br>In {{targetFormat}} this temperature is {{temp | temperature: format | number:'1.1-2'}}`

})
class AppComponent {

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
@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, TemperaturePipe],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);