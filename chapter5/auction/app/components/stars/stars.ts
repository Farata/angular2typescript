import {Component, NgFor, OnInit} from 'angular2/angular2';

@Component({
  selector: 'auction-stars',
  inputs: ['rating', 'count'],
  templateUrl: 'app/components/stars/stars.html',
  styleUrls: ['app/components/stars/stars.css'],
  directives: [NgFor]
})
export default class StarsComponent implements OnInit {
  count: number = 5;
  rating: number = 0;
  stars: boolean[] = [];

  onInit() {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
