import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'temperature'})
export class TemperaturePipe implements PipeTransform {

    transform(value: any[], parameters: string[]): any {

        let fromTo: string = parameters[0];

        if ( !fromTo) {
            throw "Temperature pipe requires parameter FtoC or CtoF ";
        }

        return (fromTo == 'FtoC') ?
                  (value - 32) * 5.0/9.0:  // F to C
                   value * 9.0 / 5.0 + 32;  // C to F
    }
}
