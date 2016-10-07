import { Component, Directive, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Component
@Component({
  selector: 'hello-world',
  template: `
    <label for="speed">Select a speed</label>
    <select name="speed" id="speed">
      <option>Slower</option>
      <option>Slow</option>
      <option selected="selected">Medium</option>
      <option>Fast</option>
      <option>Faster</option>
    </select>
  `
})
class HelloWorldComponent {
  name: string;

  constructor() {
    this.name = 'Angular';
  }
}

@Directive({
  selector: 'select'
})
class SelectMenuDirective {

  constructor(private hostElement: ElementRef) {}

  ngOnInit() {
    $(this.hostElement.nativeElement).selectmenu();
  }
}

// Module
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HelloWorldComponent, SelectMenuDirective ],
  bootstrap:    [ HelloWorldComponent ]
})
export class AppModule { }

// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
