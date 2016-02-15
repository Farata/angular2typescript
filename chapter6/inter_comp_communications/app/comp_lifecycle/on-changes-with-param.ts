import {bootstrap} from 'angular2/platform/browser';
import {Component, Input, OnChanges, SimpleChange, enableProdMode} from 'angular2/core';

interface IChanges {[key: string]: SimpleChange};

@Component({
  selector: 'child',
  styles: ['.child{background:lightgreen}'],
  template: `
     <div class="child">
      <h2>Child</h2>
      <div>Greeting: {{greeting}}</div>
      <div>User name: {{user.name}}</div>
      <div>Message: <input [(ngModel)]="message"></div>
    </div>
  `
})
class ChildComponent implements OnChanges {
  @Input() greeting: string;
  @Input() user: {name: string};
  message: string = 'Initial message';

  ngOnChanges(changes: IChanges) {

    console.log(JSON.stringify(changes, null, 2));
  }
}

@Component({
  selector: 'app',
  directives: [ChildComponent],
  styles: ['.parent {background: lightblue}'],
  template: `
     <div class="parent">
       <h2>Parent</h2>
      <div>Greeting: <input type="text" [value]="greeting" (change)="greeting = $event.target.value"></div>
      <div>User name: <input type="text" [value]="user.name" (change)="user.name = $event.target.value"></div>
      <child [greeting]="greeting" [user]="user"></child>
    </div>
  `
})
class AppComponent {
  greeting: string = 'Hello';
  user: {name: string} = {name: 'John'};
}

enableProdMode();
bootstrap(AppComponent);
