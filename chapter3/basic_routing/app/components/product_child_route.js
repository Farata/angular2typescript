var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var seller_1 = require("./seller");
var product_description_1 = require("./product_description");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(params) {
        this.productID = params.get('id');
    }
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product',
            template: "<div class=\"product\">\n              <h1 >Product Detail for Product: {{productID}}</h1>\n              <router-outlet></router-outlet>\n              <p>\n              <a [routerLink]=\"[ './SellerInfo', {id:123}]\">Seller Info</a>\n\n              </div>\n    ",
            styles: ['.product {background: cyan}'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', component: product_description_1.ProductDescriptionComponent, as: 'ProductDescription' },
            { path: '/seller/:id', component: seller_1.SellerInfoComponent, as: 'SellerInfo' }
        ])
    ], ProductDetailComponent);
    return ProductDetailComponent;
})();
exports.ProductDetailComponent = ProductDetailComponent;
