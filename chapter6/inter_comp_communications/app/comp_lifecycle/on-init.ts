import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, Input, OnInit,  OnChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'child',
  template: '{{greeting}}'
})
class ChildComponent implements OnInit, OnChanges {
  @Input() greeting: string;

  /** greeting isn't initialized yet */
  constructor() {
    console.log(`constructor: ${this.greeting}`);
  }

  /** Invoked every time an @Input() property changes via the data binding */
  ngOnChanges() {
    console.log(`ngOnChanges: ${this.greeting}`);
  }

  /**
   * Invoked after very first ngOnChanges(). It's used if you want to
     use the values from component's properties, which are not available in the constructor.
   */
  ngOnInit() {
    console.log(`ngOnInit: ${this.greeting}`);
  }
}

@Component({
  selector: 'app',
  template: `
    <div>Greeting: <input type="text" [(ngModel)]="greeting"></div>
    <child [greeting]="greeting"></child>
  `
})
class AppComponent {
  greeting: string = 'Hello';
}

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ChildComponent],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
