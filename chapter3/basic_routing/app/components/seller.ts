import {Component, ViewEncapsulation} from 'angular2/core';
import { RouteParams} from 'angular2/router';

@Component({
    selector: 'seller',
    template: '<p></p>The seller of this product is Mary Lou (98% ) ',
    styles: ['seller {background: yellow}'],
    encapsulation: ViewEncapsulation.None
})
export class SellerInfoComponent {
   sellerID: string;
    constructor(params: RouteParams){
        this.sellerID = params.get('id');
        console.log("The SellerInfoComponent got the seller id " + this.sellerID);
    }

}