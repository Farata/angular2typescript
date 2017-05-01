import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';
import {Product} from "../shared/product";

@Component({
  selector: 'auction-carousel',
  templateUrl: 'carousel.component.html'
})
export class CarouselComponent implements OnInit {
  products: Product[];

  ngOnInit() {
    this.products = [
      {id: 0, title: 'Backpack', price: 25.50, rating: 5, description: 'Great backpack', categories:['sports'], image: "/images/backpack.png"},
      {id: 1, title: 'Beachball', price: 10.00, rating: 4, description: 'Great backpack', categories:['sports'], image: "/images/beachball.png"},
      {id: 2, title: 'Binoculars', price: 100.00, rating: 3, description: 'Great binoculars', categories:['sports'], image: "/images/binoculars.png"}
    ];
  }
}





/*
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'auction-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: [ 'carousel.component.css' ]
})
export class CarouselComponent {

  imgHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.imgHtml = sanitizer.bypassSecurityTrustHtml(`
        <img class="slide-image" src="http://placehold.it/800x300" alt=""/>`);
  }
}
*/
