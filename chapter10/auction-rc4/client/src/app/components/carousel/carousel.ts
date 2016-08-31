import {Component} from '@angular/core';
import {DomSanitizationService, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'auction-carousel',
    template: require('./carousel.html')
})
export default class CarouselComponent {

    imgHtml: SafeHtml;

    constructor(private sanitizer: DomSanitizationService) {
      this.imgHtml = sanitizer.bypassSecurityTrustHtml(`
        <img class="slide-image" src="http://placehold.it/800x300" alt=""/>`);
    }

}
