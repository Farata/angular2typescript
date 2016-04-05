import {Component,  Input, OnInit} from 'angular2/core'; // <1>

@Component({
  templateUrl: 'app/components/stars/stars.html',
  styles: [` .starrating { color: #d17581; }`],
  selector: 'auction-stars'
})
export default class StarsComponent implements OnInit {
  @Input() count: number = 5; // <1>
  @Input() rating: number = 0; // <2>
  stars: boolean[] = []; // <3>

  ngOnInit() { // <4>
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
