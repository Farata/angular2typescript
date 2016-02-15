var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var ProductDetailComponentParam = (function () {
    function ProductDetailComponentParam(params) {
        this.productID = params.get('id');
        //console.log("Is this prod environment?" + data.get('isProd'));
    }
    ProductDetailComponentParam = __decorate([
        core_1.Component({
            selector: 'product',
            template: "<h1 class=\"product\">Product Detail for Product: {{productID}}</h1>",
            styles: ['product {background: cyan}']
        })
    ], ProductDetailComponentParam);
    return ProductDetailComponentParam;
})();
exports.ProductDetailComponentParam = ProductDetailComponentParam;
