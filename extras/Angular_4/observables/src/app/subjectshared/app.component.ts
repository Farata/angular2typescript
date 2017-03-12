import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/sample';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/interval'

@Component({
  selector: "app-root",
  template: `
       <h3>Sharing Observable between subscribers to keyup and input events</h3>
      <input type="text" placeholder="Start typing" 
            (input)="mySubject.next($event)" 
            (keyup)="mySubject.next($event)">
            
      <br> Subscriber to input events got {{inputValue}}
      <p>
      <br> Subscriber to input events got {{keyValue}}      
    `
})
export class AppComponent {

  keyValue: string;
  inputValue: string;

  mySubject: Observable<Event> = new Subject().share();

  constructor(){

    // Subscriber 1
    this.mySubject
      .filter(({type}) => type==="keyup")
      .map(e => (<KeyboardEvent>e).key)
      .subscribe((value) => this.keyValue=value);

    // Subscriber 2
    this.mySubject
      .filter(({type}) => type==="input")
      .map(e => (<HTMLInputElement>e.target).value)
      .sample(Observable.interval(3000))   // uncomment to get 3-sec samples
      .subscribe((value) => this.inputValue=value);
  }
}
