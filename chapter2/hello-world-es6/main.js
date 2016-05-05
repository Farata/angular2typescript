import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: '<h1>Hello {{name}}!</h1>'
})
class HelloWorldComponent {
  constructor() {
    this.name = 'Angular 2';
  }
}

bootstrap(HelloWorldComponent);
