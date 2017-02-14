import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject"

@Component({
  selector: "app-root",
  template: `
       <h3>Using Subject for emiting/subscribing to keyup and input events</h3>
      <input type="text" placeholder="Start typing" 
            (input)="mySubject.next($event)" (keyup)="myKeySubject.next($event)">
    `
})
export class AppComponent {

  mySubject: Observable<Event> = new Subject();              // for any events
  myKeySubject: Observable<KeyboardEvent> = new Subject();   // for keyboard events

  constructor(){

    this.myKeySubject.subscribe(({type, key}) => console.log(`Event: ${type} key: ${key}`));

    this.mySubject.subscribe(({type, target}) => console.log(
                   `Event: ${type} value:  ${(<HTMLInputElement>target).value}`));
  }
}
