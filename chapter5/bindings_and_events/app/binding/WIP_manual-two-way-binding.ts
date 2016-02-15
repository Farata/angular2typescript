import {bootstrap} from '../../node_modules/angular2/platform/browser.d';
import {Component, ElementRef, ViewChild} from '../../node_modules/angular2/core.d';

@Component({
  selector: 'app',
  template: `
    <h3>Source input:</h3>
    <input (input)="onInputEvent($event)">

    <h3>Target input:</h3>
    <input #target [value]="greeting">
  `
})
class App {
  greeting: string = '';

  @ViewChild('target')
  target: ElementRef;

  onInputEvent(event: Event): void {
    let source = <HTMLInputElement>event.target;
    this.target.nativeElement.value = source.value;
  }
}

bootstrap(App);
