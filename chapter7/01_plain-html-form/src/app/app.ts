import {bootstrap, Component} from 'angular2/angular2';

@Component({
  selector: 'app',
  template: `
    <form action="/register" method="POST">
      <div>Username:         <input type="text"></div>
      <div>SSN:              <input type="text"></div>
      <div>Password:         <input type="password"></div>
      <div>Confirm password: <input type="password"></div>
      <button type="submit">Register</button>
    </form>
  `
})
class AppComponent {}

bootstrap(AppComponent);
