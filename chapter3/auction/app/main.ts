// Import 3rd-party dependecnies. <1>
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!'; // <2>
import 'core-js/es6'; // <3>
import 'reflect-metadata';

// Import Angular 2 and application modules. <4>
import {bootstrap} from 'angular2/angular2';
import ApplicationComponent from 'app/components/application/application';

bootstrap(ApplicationComponent);
