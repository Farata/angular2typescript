import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.wrapper {background: cyan;}'],
  template: `
    <div class="wrapper">
     <h2>Parent</h2>
      <div>This div is defined in the Parent's template</div>
      <child>
        <div class="header" ><i>Child got this header from parent {{todaysDate}}</i></div>
        <div class="footer"><i>Child got this footer from parent</i></div>
      </child>
    </div>
  `,
  encapsulation:ViewEncapsulation.Native
})
export class AppComponent {
  todaysDate: string = new Date().toLocaleDateString();
}
