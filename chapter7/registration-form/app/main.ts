import 'reflect-metadata';
import 'zone.js'

import {Component, bootstrap} from 'angular2/angular2';
import PlainHtmlForm from './plain-html-form';
import TemplateDrivenForm from './template-driven-form';
import DataDrivenForm from './data-driven-form';
import GrowableItemsForm from './growable-items-form';
import ImperativeTests from './imperative-tests';
import CustomValidators from './custom-validators';
import DependentFields from './dependent-fields';

@Component({
  selector: 'app-root',
  directives: [
    PlainHtmlForm,
    TemplateDrivenForm,
    DataDrivenForm,
    GrowableItemsForm,
    ImperativeTests,
    CustomValidators,
    DependentFields
  ],
  template: `
    <app-plain-html-form></app-plain-html-form>
    <hr/>
    <app-template-driven-form></app-template-driven-form>
    <hr/>
    <app-data-driven-form></app-data-driven-form>
    <hr/>
    <app-growable-items-form></app-growable-items-form>
    <hr/>
    <app-imperative-tests></app-imperative-tests>
    <hr/>
    <custom-validators></custom-validators>
    <hr/>
    <dependent-fields></dependent-fields>
  `
})
class RootComponent {}

bootstrap(RootComponent);
