import {Component, View, bootstrap} from 'angular2/angular2';

@Component({selector: 'hello-world'})
@View({template: `<h1>Hello {{ name }}!</h1>`})
class HelloWorldComponent {

  constructor() {
    this.name = 'Angular 2';
  }
}

bootstrap(HelloWorldComponent);
