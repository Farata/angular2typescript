import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class StateService{

  stateEvent: BehaviorSubject<string> = new BehaviorSubject('');

  set searchCriteria(value: string) {

    this.stateEvent.next(value);

    console.log(`StateService BehaviorSubject emitting ${value}`);
  }
}
