import {Component, Directive, View, bootstrap} from 'angular2/angular2';

@Directive({
  selector: 'input[log-directive]',
  host: {
    '(change)': 'onChange($event)'
  }
})
class LogDirective {
  onChange(event) {
    console.log(event.target.value);
  }
}

@Component({selector: 'directive-example'})
@View({
  template: '<input type="text" log-directive/>',
  directives: [LogDirective]
})
class DirectiveExample {}

bootstrap(DirectiveExample);
