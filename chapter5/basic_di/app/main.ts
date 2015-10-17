import 'core-js/es6';
import 'reflect-metadata';
import {Component, View,bootstrap} from 'angular2/angular2';


@Component({selector: 'app-root'})
@View({
    template: `
    <h2>An empty page </h2>
  `
})
class RootComponent{}

bootstrap(RootComponent); 
