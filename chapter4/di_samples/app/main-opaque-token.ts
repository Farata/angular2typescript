import {Component, OpaqueToken, Inject, NgModule} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

export const BackendUrl  = new OpaqueToken('BackendUrl');

@Component({
  selector: 'app',
  template: 'URL: {{url}}'
})
class AppComponent {
  constructor(@Inject(BackendUrl) public url: string) {}
}

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent],
  providers: [  {provide:BackendUrl, useValue: 'myQAserver.com'}],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
