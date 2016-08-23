import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, ViewEncapsulation}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'child',
  styles: ['.wrapper {background: lightgreen;}'],
  template: `
    <div class="wrapper">
     <h2>Child</h2>
      <div>This div is defined in the child's template</div>
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.Native
})
class ChildComponent {}

@Component({
  selector: 'app',
  styles: ['.wrapper {background: cyan;}'],
  template: `
    <div class="wrapper">
     <h2>Parent</h2>
      <div>This div is defined in the Parent's template</div>
      <child>
        <div>Parent projects this div onto the child </div>
      </child>
    </div>
  `,
  encapsulation: ViewEncapsulation.Native
})
class AppComponent {}

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent, ChildComponent],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
