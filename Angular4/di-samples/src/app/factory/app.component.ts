import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>A root component hosts two children. <br> Second child uses a factory.</h2>
    <product1></product1>
    <p>
    <product2></product2>
  `
})
export class AppComponent {}
