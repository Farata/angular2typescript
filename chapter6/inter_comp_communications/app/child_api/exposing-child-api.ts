import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, ViewChild, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'child',
    template: `<h3>Child</h3>`

})
class ChildComponent {
    greet(name) {
        console.log(`Hello from ${name}.`);
    }
}

@Component({
    selector: 'app',
    template: `
    <h1>Parent</h1>
    <child #child1></child>
    <child #child2></child>

    <button (click)="child2.greet('Child 2')">Invoke greet() on child 2</button>
  `
})
class AppComponent implements AfterViewInit {
    @ViewChild('child1')
    firstChild: ChildComponent;

    ngAfterViewInit() {
        this.firstChild.greet('Child 1');
    }
}

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, ChildComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);