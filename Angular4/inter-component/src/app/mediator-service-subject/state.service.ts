import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

export class StateService{

  private stateEvent: BehaviorSubject<string> = new BehaviorSubject('');

  set searchCriteria(value: string) {

    this.stateEvent.next(value);

    console.log(`StateService BehaviorSubject emitting ${value}`);
  }

  getState(): Observable<string>{
    return this.stateEvent.asObservable();  // to prevent amazon and ebay components from using next()
  }

}
