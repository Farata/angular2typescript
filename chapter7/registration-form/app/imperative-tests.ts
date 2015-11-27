import {
  Component,
  Control,
  ControlGroup,
  Validators
} from 'angular2/angular2';

@Component({
  selector: 'app-imperative-tests',
  template: ``
})
export default class ImperativeTests {

  constructor() {
    let username = new Control('', Validators.required);
    console.log(username.valid === false);
    console.log(JSON.stringify(username.errors));

    let password = new Control('123',
      Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(1)
      ])
    );
    console.log(password.valid === false);
    console.log(JSON.stringify(password.errors, null, 2));

    let group = new ControlGroup({
      username: new Control('', Validators.required),
      password: new Control('secret', Validators.minLength(10))
    });
    console.log(group.valid);
    console.log(group.errors);
  }
}
