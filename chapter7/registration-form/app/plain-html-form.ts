import {Component} from 'angular2/angular2';

@Component({
  selector: 'app-plain-html-form',
  template: `
    <form action="/register" method="POST">
      <div>
        <label for="username">Username</label>
        <input id="username" type="text">
      </div>
      <div>
        <label for="birthday">Birthday</label>
        <input id="birthday" type="text">
      </div>
      <div>
        <label for="zipcode">Zip code</label>
        <input id="zipcode" type="text">
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password">
      </div>
      <div>
        <label for="pconfirm">Confirm password</label>
        <input id="pconfirm" type="password">
      </div>
      <button type="submit">Register</button>
    </form>
  `
})
export default class PlainHtmlForm {}
// Validation:
//   - username:
//     * required
//     * starts with a letter
//     * contains only letters and numbers
//   - birthday
//     * should be a valid date in the past
//     * should be submitted in the ISO format
//   - zipcode
//     * length
//     * should be a valid zipcode number
//   - password should be strong
//   - pconfirm should be the same as password
