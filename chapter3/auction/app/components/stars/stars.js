var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
// tag::annotations[]
var angular2_1 = require('angular2/angular2');
var StarsComponent = (function () {
    function StarsComponent() {
        this.count = 5; // <1>
        this.rating = 0; // <2>
        this.stars = []; // <3>
    }
    StarsComponent.prototype.onInit = function () {
        for (var i = 1; i <= this.count; i++) {
            this.stars.push(i > this.rating);
        }
    };
    StarsComponent = __decorate([
        angular2_1.View({
            templateUrl: 'app/components/stars/stars.html',
            directives: [angular2_1.NgFor]
        }),
        angular2_1.Component({
            selector: 'auction-stars',
            properties: ['rating', 'count'],
            lifecycle: [angular2_1.LifecycleEvent.onInit] // <2>
        })
    ], StarsComponent);
    return StarsComponent;
})();
exports["default"] = StarsComponent;
// end::class[]
//# sourceMappingURL=stars.js.map