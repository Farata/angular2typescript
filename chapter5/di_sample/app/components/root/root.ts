import {Component, View} from 'angular2/angular2';
import ProductComponent from '../product/product';

@Component({selector: 'disample-root'})
@View({
  templateUrl: 'app/components/root/root.html',
  directives: [ProductComponent]
})
export default class RootComponent {}
