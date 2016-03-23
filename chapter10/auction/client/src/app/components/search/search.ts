import {Component} from 'angular2/core';
import {
  Control,
  ControlGroup,
  FormBuilder,
  Validators,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FORM_PROVIDERS
} from 'angular2/common';

import {ProductService} from '../../services/product-service';

@Component({
  selector: 'auction-search',
  providers: [FORM_PROVIDERS],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: require('./search.html')
})
export default class SearchComponent {
  formModel: ControlGroup;
  categories: string[];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getAllCategories();

    const fb = new FormBuilder();
    this.formModel = fb.group({
      'title': [null, Validators.minLength(3)],
      'price': [null, positiveNumberValidator],
      'category': ['']
    })
  }

  onSearch() {
    if (this.formModel.valid) {
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }
}

function positiveNumberValidator(control: Control): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null ||
    typeof price === 'number' &&
         price > 0 ? null : {positivenumber: true};
}
