// tag::annotations[]
import {Component, onInit} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
  templateUrl: 'app/components/stars/stars.html',
  directives: [NgFor],
  selector: 'auction-stars',
  inputs: ['rating', 'count'] // <1>
})
// end::annotations[]
// tag::class[]
export default class StarsComponent implements onInit {
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
