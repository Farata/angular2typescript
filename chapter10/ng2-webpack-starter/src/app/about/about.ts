import {Component} from 'angular2/core';

@Component({
  selector: 'my-about',
  styles: [require('./about.css')],
  template: require('./about.html'),
})
export class About {
  constructor() {
    console.log("In About constructor123");
  }
}