// tag::annotations[]
import {Component, NgFor, OnInit} from 'angular2/angular2'; // <1>

@Component({
  templateUrl: 'app/components/stars/stars.html',
  directives: [NgFor],
  selector: 'auction-stars',
  inputs: ['rating', 'count'] // <2>
})
// end::annotations[]
// tag::class[]
export default class StarsComponent implements OnInit {
  count: number = 5; // <1>
  rating: number = 0; // <2>
  stars: boolean[] = []; // <3>

  onInit() { // <4>
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
// end::class[]
