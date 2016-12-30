import {Component} from "@angular/core";
@Component({
  selector: 'chat',
  template: `<textarea placeholder="Chat with customer service"
                       class="chat"></textarea>`,
  styles: [`.chat {background: #eee; height: 80px;width:30%; font-size: 24px;
                     float:left; display:block; box-sizing:border-box;} `]})
export class ChatComponent {}
