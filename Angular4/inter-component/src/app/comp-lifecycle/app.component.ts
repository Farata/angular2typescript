import {Component} from "@angular/core";
@Component({
  selector: 'app-root',
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
export class AppComponent {
  greeting: string = 'Hello';
  user: {name: string} = {name: 'John'};
}
