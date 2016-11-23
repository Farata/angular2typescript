import {Component} from "@angular/core";
import {DataService} from "./data-service";
@Component({
    selector: 'product',
    template: '<h1 class="stock">Data Component</h1>',
    styles: ['.stock {background: cyan}']
})
export class DataComponent{}

