import {Component, ElementRef, Renderer2, ViewChild} from "@angular/core";
@Component({
  selector: 'app-root',
  template: `    

    <input type="text" placeholder="Enter  your name">
    <input class="dummy" type="text" placeholder="dummy field" >
    
    <button (click)="setFocusToDummy()">Set focus to the dummy input</button>

  `
})
export class AppComponent {

// @ViewChild('dummy') dummy: ElementRef;  // you'll need to add #dummy to the <input field>

  constructor (private renderer: Renderer2){}

  setFocusToDummy(){
     // this.renderer.selectRootElement(this.dummy.nativeElement).focus();

     this.renderer.selectRootElement('.dummy').focus();
  }
}
