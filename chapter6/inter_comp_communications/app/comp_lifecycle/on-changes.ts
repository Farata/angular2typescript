import {bootstrap} from 'angular2/platform/browser';
import {Component, Input, OnChanges} from 'angular2/core';

@Component({
  selector: 'child',
  styles: ['.child{background:lightgreen}'],
  template: `
    <div class="child">
      <h2>Child</h2>
      <div>Greeting: {{greeting}}</div>
      <div>Username: {{user.name}}</div>
      <div>Message: <input [(ngModel)]="message"></div>
    </div>
  `
})
class ChildComponent implements OnChanges {
  @Input() greeting: string;
  @Input() user: {name: string};
  message: string = 'Initial message';

  ngOnChanges() {
    console.log(`
      In Child
      ------------------------------
      Greeting: ${this.greeting}
      Username: ${this.user.name}
      Message: ${this.message}`);
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
      <div>Username: <input type="text" [value]="user.name" (change)="user.name = $event.target.value"></div>
      <child [greeting]="greeting" [user]="user"></child>
    </div>
  `
})
class AppComponent {
  greeting: string = 'Hello';
  user: {name: string} = {name: 'John'};
}

bootstrap(AppComponent);
