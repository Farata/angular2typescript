import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {AbstractControl, ValidationErrors} from "@angular/forms";


@Injectable()
export class SsnValidatorService {

  constructor() { }

  /** This function can be used by form controls in a way prescribed in Angular doc
   */
  checkWorkAuthorization(field: AbstractControl):Observable<ValidationErrors | null>{

    // in the real world you'd make an HTTP call to server to check if the value is valid

    return Observable.of(field.value.indexOf('123') >=0 ? null: {work: " you're not authorized to work"});
  }
  /**
   *
   This function is returns validation in the format prescribed by Angular validation API.,
   But this function  can't be attached to the form control as a validator.
   Invoke it using the switchmap/subscribe combo (see app.component.ts)
   */
  checkWorkAuthorizationV2(ssn: string):Observable<ValidationErrors | null>{

    // in the real world you'd make an HTTP call to server to check if the value is valid

    return Observable.of(ssn.indexOf('123') >=0 ? null: {cash: " - you can only work for cash"});
  }








/*  checkWorkAuthorizationV2(ssn: string):Observable<ValidationErrors | null>{

    // in the real world you'd make an HTTP call to server
    // to check if the value is valid

  return Observable.create(observer => {

        ssn.indexOf('123') >=0 ? observer.next(): observer.next({cash: "you can only work for cash"});
       // observer.complete();

    })

  }*/




}
