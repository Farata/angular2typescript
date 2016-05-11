import {Component} from '@angular/core';

@Component({
  selector: 'auction-carousel',
  template: require('./carousel.html')
})
export default class CarouselComponent {

  prev() {
    $('.carousel').carousel('prev');
  }

  next() {
    $('.carousel').carousel('next');
  }
}
