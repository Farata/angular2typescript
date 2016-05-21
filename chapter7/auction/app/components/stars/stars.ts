import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'auction-stars',
  styles: [`.starrating { color: #d17581; }`],
  templateUrl: 'app/components/stars/stars.html'
})
export default class StarsComponent {
  private _rating: number;
  private stars: boolean[];

  private maxStars: number = 5;

  @Input()
  readonly: boolean = true;

  @Input()
  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value || 0;
    this.stars = Array(this.maxStars).fill(true, 0, this.rating);
  }

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  fillStarsWithColor(index) {

    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
