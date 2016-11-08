import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'auction-search',
  templateUrl: 'app/components/search/search.html'
})
export default class SearchComponent {
    formModel: FormGroup = new FormGroup({
      'title': new FormControl(),
      'price': new FormControl(),
      'category': new FormControl()
    });
}
