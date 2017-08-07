import {Component} from "@angular/core";
@Component({
  selector: 'app-root',
  template:`
      <h1>{{name}}</h1>
      
      <button (click)="changeName()">Change name</button>
    `
})
export class AppComponent{
  name:string = "Mary Smith";

  changeName(){
    this.name="Bill Smart";
  }
}
