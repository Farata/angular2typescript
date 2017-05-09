function StockQuoteGeneratorArrow(symbol) {
    var _this = this;
    this.symbol = symbol;
    setInterval(function () {
        console.log("Fat arrow. The price of " + _this.symbol
            + " is " + Math.random());
    }, 4000);
}
var stockQuoteGeneratorArrow = new StockQuoteGeneratorArrow("IBM");
function StockQuoteGeneratorAnonymous(symbol) {
    this.symbol = symbol;
    setInterval(function () {
        console.log("   Anonymous.The price of " + this.symbol
            + " is " + Math.random());
    }, 4000);
}
var stockQuoteGeneratorAnonymous = new StockQuoteGeneratorAnonymous("IBM");
//# sourceMappingURL=fatArrow.js.map