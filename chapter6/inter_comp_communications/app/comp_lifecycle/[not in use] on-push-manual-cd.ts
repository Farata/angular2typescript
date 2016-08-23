import {bootstrap} from '@angular/platform-browser-dynamic';
import { Component, Input, ChangeDetectionStrategy, ApplicationRef} from '@angular/core';

@Component({
    selector: 'grand-child',
    styles: ['.grand-child{background:yellow}'],
    template: `
    <div class="grand-child">
      <h3>Grand Child</h3>
      <div>Got from child: {{grandChildReceived}}</div>
      <input type="button" value="Trigger Change Detection" (click)="triggerCD($event)">
    </div>`
})
class GrandChildComponent {
    @Input() grandChildReceived: string;

    constructor(private appRef: ApplicationRef){}

    triggerCD(){
        this.appRef.tick(); // manually trigger change detection
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
    </div>`,
//  changeDetection: ChangeDetectionStrategy.OnPush
})
class ChildComponent {
    @Input() greeting: string;
    @Input() user: {name: string};
    message: string = 'Initial message';
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
    </div>`
})
class AppComponent {
    greeting: string = 'Hello';
    user: {name: string} = {name: 'John'};
}

bootstrap(AppComponent);