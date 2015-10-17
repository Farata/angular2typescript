var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
// tag::imports[]
var angular2_1 = require('angular2/angular2');
var carousel_1 = require('app/components/carousel/carousel');
var footer_1 = require('app/components/footer/footer');
var navbar_1 = require('app/components/navbar/navbar');
var product_1 = require('app/components/product/product');
var search_1 = require('app/components/search/search');
var product_service_1 = require('app/services/product-service');
// end::imports[]
// tag::annotation-view[]
var ApplicationComponent = (function () {
    function ApplicationComponent(productService) {
        this.productService = productService;
        this.products = []; // <1>
        this.products = this.productService.getProducts(); // <3>
    }
    ApplicationComponent = __decorate([
        angular2_1.View({
            templateUrl: 'app/components/application/application.html',
            styleUrls: ['app/components/application/application.css'],
            directives: [
                angular2_1.NgFor,
                carousel_1["default"],
                footer_1["default"],
                navbar_1["default"],
                product_1["default"],
                search_1["default"]
            ]
        }),
        angular2_1.Component({
            selector: 'auction-application',
            viewBindings: [
                product_service_1.ProductService // <2>
            ]
        })
    ], ApplicationComponent);
    return ApplicationComponent;
})();
exports["default"] = ApplicationComponent;
// end::class[]
//# sourceMappingURL=application.js.map