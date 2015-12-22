import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'hello-world',
  template: `<h1>Hello {{name}}!</h1>`
})
class HelloWorldComponent {
  constructor() {
    this.name = 'Angular 2';
  }
}

bootstrap(HelloWorldComponent);
