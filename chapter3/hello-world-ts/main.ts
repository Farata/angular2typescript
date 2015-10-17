import {Component, bootstrap} from 'angular2/angular2'; // <1>

@Component({
  selector: 'hello-world', // <2>
  template: `<h1>Hello {{ name }}!</h1>`}) // <3>
class HelloWorldComponent { // <4>
  name: string; // <5>
  constructor() {
    this.name = 'Angular 2'; // <6>
  }
}

bootstrap(HelloWorldComponent); // <7>
