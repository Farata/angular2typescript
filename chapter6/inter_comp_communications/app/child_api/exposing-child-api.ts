import {bootstrap} from 'angular2/platform/browser';
import {Component, ViewChild, AfterViewInit} from 'angular2/core';

@Component({
    selector: 'child',
    template: `<h3>Child</h3>`

})
class Child {
    greet(name) {
        console.log(`Hello from ${name}.`);
    }
}

@Component({
    selector: 'app',
    directives: [Child],
    template: `
    <h1>Parent</h1>
    <child #child1></child>
    <child #child2></child>

    <button (click)="child2.greet('Child 2')">Invoke greet() on child 2</button>
  `
})
class App implements AfterViewInit {
    @ViewChild('child1')
    firstChild: Child;

    ngAfterViewInit() {
        this.firstChild.greet('Child 1');
    }
}

bootstrap(App);
