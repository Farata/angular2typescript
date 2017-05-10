function getStock() {
    return {
        symbol: "IBM",
        price: 100.00,
        open: 99.5,
        volume: 100000
    };
}
var _a = getStock(), symbol = _a.symbol, price = _a.price;
console.log("The price of " + symbol + " is " + price);
