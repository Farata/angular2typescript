import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template:`<input type='text' placeholder= "Enter first name " [(ngModel)] = "firstName">
               <br><input type='text' placeholder= "Enter last name " [(ngModel)] = "lastName">
              <br>Hello {{firstName}} {{lastName}}`

})
class GreetingComponent {

    firstName: string;
    lastName: string;
}
bootstrap(GreetingComponent);