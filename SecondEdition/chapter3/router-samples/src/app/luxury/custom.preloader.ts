import { PreloadingStrategy, Route } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import {Injectable} from "@angular/core";

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return (route.data && route.data['preloadme']) ?
      load(): Observable.of();
  }
}
