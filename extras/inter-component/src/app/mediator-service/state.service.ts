import {EventEmitter, Injectable} from "@angular/core";

export class StateService{

  private _searchCriteria: string;

  stateEvent: EventEmitter<string> = new EventEmitter();

  set searchCriteria(value: string) {

    this._searchCriteria = value;

    this.stateEvent.emit(value);

    console.log(`StateService emitting ${value}`);
  }

  get searchCriteria (){
    return this._searchCriteria;
  }
}
