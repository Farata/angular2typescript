var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tax = (function () {
    function Tax() {
    }
    Tax.prototype.calcTax = function (income, stateTax) {
        console.log("Your honest tax is:  " + income * stateTax);
    };
    return Tax;
}());
;
var TaxMixin = (function () {
    function TaxMixin() {
    }
    TaxMixin.prototype.mafiaSpecial = function (income, stateTax) {
        console.log("Your mafia special tax is: " + (income * stateTax - 1000));
    };
    ;
    TaxMixin.prototype.drugCartelSpecial = function (income, stateTax) {
        console.log("Your drug cartel special tax is: " + (income * stateTax - 3000));
    };
    ;
    return TaxMixin;
}());
//  Can't do this: class TaxSpecial extends Tax, TaxMixin{} 
var TaxSpecial = (function (_super) {
    __extends(TaxSpecial, _super);
    function TaxSpecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TaxSpecial;
}(Tax));
// a boilerplate function to copy members of a mixin
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(TaxSpecial, [TaxMixin]);
var myTax = new TaxSpecial();
myTax.calcTax(100000, 0.06);
myTax.mafiaSpecial(100000, 0.06);
myTax.drugCartelSpecial(100000, 0.06);
