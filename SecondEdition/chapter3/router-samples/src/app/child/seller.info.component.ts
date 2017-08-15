import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'seller',
    template: 'The seller of this product is Mary Lou (98%)',
    styles: [':host {background: yellow}']
})
export class SellerInfoComponent {
   sellerID: string;

   constructor(route: ActivatedRoute){
     this.sellerID = route.snapshot.paramMap.get('id');
     console.log(`The SellerInfoComponent got the seller id ${this.sellerID}`);
   }
}
