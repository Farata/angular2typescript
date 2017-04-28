import {Component} from "@angular/core";
@Component({
  selector: 'home',
  template: `<div class="home">Home Component
               <input type="text" placeholder="Type something here"/> </div>`,
  styles: [`.home {background: red; padding: 15px 0 0 30px;  height: 80px; width:70%;
                    font-size: 30px; float:left; box-sizing:border-box;}`]})
export class HomeComponent {}
