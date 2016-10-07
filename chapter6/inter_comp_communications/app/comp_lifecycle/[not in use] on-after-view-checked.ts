import {bootstrap} from '@angular/platform-browser-dynamic';
import {
    Component, Input, OnChanges, AfterViewChecked, SimpleChange, enableProdMode, ChangeDetectionStrategy} from '@angular/core';

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
class GrandChildComponent implements AfterViewChecked {
  @Input() grandChildReceived: string;

  ngAfterViewChecked(){
    console.log('GrandChild: in ngAfterViewChecked');
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
      <div>Message: <input [(ngModel)]="message"></div>
      <grand-child [grandChildReceived]="message"></grand-child>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class ChildComponent implements AfterViewChecked {
  @Input() greeting: string;
  message: string = 'Initial message';

  ngAfterViewChecked() {
    console.log("Child: in ngAfterViewChecked");
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
      <child [greeting]="greeting"></child>
    </div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
class AppComponent implements AfterViewChecked {
  greeting: string = 'Hello';

  ngAfterViewChecked() {
    console.log("Parent: in ngAfterViewChecked");
  }
}

enableProdMode();
bootstrap(AppComponent);
