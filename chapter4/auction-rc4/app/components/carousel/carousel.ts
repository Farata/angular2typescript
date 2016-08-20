import {Component} from '@angular/core';
import {DomSanitizationService, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'auction-carousel',
  templateUrl: 'app/components/carousel/carousel.html'
})
export default class CarouselComponent {

  imgHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizationService) {
    this.imgHtml = sanitizer.bypassSecurityTrustHtml(`
        <img class="slide-image" src="http://placehold.it/800x300" alt=""/>`);
  }
}



/*
import {Component} from '@angular/core';

@Component({
  selector: 'auction-carousel',
  templateUrl: 'app/components/carousel/carousel.html'
})
export default class CarouselComponent {}
*/
