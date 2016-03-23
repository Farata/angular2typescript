import {bootstrap} from 'angular2/platform/browser';
import {
    Component, Input, OnChanges, SimpleChange, enableProdMode,
    ChangeDetectionStrategy
} from 'angular2/core';

interface IChanges {[key: string]: SimpleChange};

@Component({
  selector: 'grand-child',
  styles: ['.grand-child{background:yellow}'],
  template: `
    <div class="grand-child">
      <h3>Grand Child</h3>
      <div>Got from child: {{grandChildReceived}}</div>
    </div>
  `,
   // changeDetection: ChangeDetectionStrategy.OnPush
})
class GrandChildComponent implements OnChanges {
  @Input() grandChildReceived: string;

  ngOnChanges(){
    console.log('GrandChild: in ngOnChanges');
  }
}

@Component({
  selector: 'child',
  styles: ['.child{background:lightgreen}'],
  directives: [GrandChildComponent],
  template: `
     <div class="child">
      <h2>Child</h2>
      <div>Greeting: {{greeting}}</div>
      <div>User name: {{user.name}}</div>
      <div>Message: <input [(ngModel)]="message"></div>
      <grand-child [grandChildReceived]="message"></grand-child>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class ChildComponent implements OnChanges {
  @Input() greeting: string;
  @Input() user: {name: string};
  message: string = 'Initial message';

  ngOnChanges() {
    console.log("Child: in ngOnChanges");
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

  ngOnChanges() {
    console.log("Parent: in ngOnChanges");
  }
}

// enableProdMode();
bootstrap(AppComponent);
