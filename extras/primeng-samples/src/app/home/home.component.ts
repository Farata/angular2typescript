import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [ `
        .ui-g div {
            background-color: lightgreen;
            text-align: center;
            border: 2px solid white;
        }
    `]
})
export class HomeComponent {}
