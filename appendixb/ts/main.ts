import {Component, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'hello-world',
  template: `<h1>Hello from TypeScript and {{ name }}!!!</h1>`
})
class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'Angular 2';
  }
}

bootstrap(HelloWorldComponent);
