import {bootstrap} from 'angular2/platform/browser';
import {Component, OpaqueToken, provide, Inject} from 'angular2/core';

export const BackendUrl  = new OpaqueToken('BackendUrl');

@Component({
  selector: 'app-root',
  template: 'URL: {{url}}',
  providers: [
    // This is how we can override the dependency:
    // provide(BackendUrl, {useValue: 'nb-demo.surancebay.com'})
  ]
})
class RootComponent {
  constructor(@Inject(BackendUrl) public url: string) {}
}

bootstrap(RootComponent, [
  provide(BackendUrl, {useValue: 'nb.surancebay.com'})
]);
