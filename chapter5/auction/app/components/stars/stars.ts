// tag::annotations[]
import {Component, OnInit} from '@angular/core';
@Component({
  templateUrl: 'app/components/stars/stars.html',
  styles: [` .starrating { color: #d17581; }`],
  selector: 'auction-stars',
  inputs: ['rating', 'count'] // <1>
})
// end::annotations[]
// tag::class[]
export default class StarsComponent implements OnInit {
  count: number = 5; // <1>
  rating: number = 0; // <2>
  stars: boolean[] = []; // <3>

  ngOnInit() { // <4>
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
// end::class[]
