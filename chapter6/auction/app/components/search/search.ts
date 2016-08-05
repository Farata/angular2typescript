import {Component} from '@angular/core';
import {FormControl, FormGroup, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

@Component({
  selector: 'auction-search',
  directives: [REACTIVE_FORM_DIRECTIVES],
  templateUrl: 'app/components/search/search.html'
})
export default class SearchComponent {
  formModel: FormGroup = new FormGroup({
    'title': new FormControl(),
    'price': new FormControl(),
    'category': new FormControl()
  });
}
