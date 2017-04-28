import {OnChanges, Input, SimpleChange, Component} from "@angular/core";

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
export class ChildComponent implements OnChanges {
  @Input() greeting: string;
  @Input() user: {name: string};
  message: string = 'Initial message';

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    console.log(JSON.stringify(changes, null, 2));
  }
}
