import { Component} from '@angular/core';

@Component({
  selector: 'app-mycalendar',
  template: `<div >
    <h3>Date from: </h3>
      <p-calendar [(ngModel)]="dateFrom"></p-calendar>
    
      <h3>Date to: </h3>
      <p-calendar [(ngModel)]="dateTo"></p-calendar>
    
      <p>Vacation from {{dateFrom | date}} to {{dateTo | date}}</p>
    
  </div>`
})
export class MycalendarComponent {

  dateFrom: Date;

  dateTo: Date;

}
