var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var stars_1 = require('app/components/stars/stars');
var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent = __decorate([
        angular2_1.View({
            templateUrl: 'app/components/product/product.html',
            directives: [stars_1["default"]]
        }),
        angular2_1.Component({
            selector: 'auction-product',
            properties: ['product']
        })
    ], ProductComponent);
    return ProductComponent;
})();
exports["default"] = ProductComponent;
//# sourceMappingURL=product.js.map