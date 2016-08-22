import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app',
    template: `
    <button (click)="flag = !flag">Toggle flag's value</button>

    <p>
      Flag's value: {{flag}}
    </p>

    <p>
     1. span with *ngIf="flag": <span *ngIf="flag">Flag is true</span>
    </p>

    <p>
      2. template with [ngIf]="flag": <template [ngIf]="flag">Flag is true</template>
    </p>
  `
})
class AppComponent {
    flag: boolean = true;
}

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);