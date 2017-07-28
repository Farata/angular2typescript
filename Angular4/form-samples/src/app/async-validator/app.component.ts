import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {SsnValidatorService} from "./ssn-validator.service";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';

function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="myForm">
      <h2>Sync and async validation demo </h2>
      
      Enter your SSN: <input type="text" formControlName="ssnControl">
           <span *ngIf ="myForm.hasError('ssn', 'ssnControl'); else validSSN"> SSN is invalid.</span>
           <ng-template #validSSN> SSN is valid.</ng-template>
      
           <span *ngIf ="myForm.hasError('work', 'ssnControl')"> {{myForm.get('ssnControl').errors.work}}</span>
      
           <span *ngIf ="myForm.hasError('cash')"> {{myForm.errors.cash}}</span> 
    </form>
  `
})
export class AppComponent implements OnInit{

  myForm: FormGroup;

  constructor(private ssnValidatorService: SsnValidatorService) {
    this.myForm = new FormGroup({
      ssnControl: new FormControl('',
                       ssnValidator,
                       ssnValidatorService.checkWorkAuthorization.bind(ssnValidatorService))
    });
  }

  ngOnInit(){
    let ssnControl = this.myForm.get('ssnControl');
    ssnControl.valueChanges
      .debounceTime(2000)
      .switchMap(ssnValue => this.ssnValidatorService.checkWorkAuthorizationV2(ssnValue))
      .subscribe((res) => {
          this.myForm.setErrors(res);
        }
      );
  }
}
