import {ChildComponent} from "./child.component";
import {AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from "@angular/core";
@Component({
  selector: 'app-root',
  template: `
    <h1>Parent</h1>
    <child name= "John" #child1></child>
    
    <child name= "Mary" #child2></child>

    <button (click)="child2.greet()">Invoke greet() on child 2</button>

    <button (click)="greetAllChildren()">Invoke greet() on both chlidren</button>
  `
})
export class AppComponent implements AfterViewInit {
  @ViewChild('child1')
  firstChild: ChildComponent;  // reference to one child

  @ViewChildren(ChildComponent)
  allChildren: QueryList<ChildComponent>; // reference to all instances of ChildComponent

  ngAfterViewInit() {
    this.firstChild.greet();
  }

  greetAllChildren(){
     this.allChildren.forEach(child => child.greet());
  }

}
