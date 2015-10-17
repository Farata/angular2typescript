function StockQuoteGeneratorArrow(symbol: string){

    this.symbol = symbol; //<A>

    setInterval(() => { // <B>
        console.log("StockQuoteGeneratorArrow. The price quote for " + this.symbol
            + " is " + Math.random());
    }, 1000);

}

var stockQuoteGeneratorArrow = new StockQuoteGeneratorArrow("IBM");


function StockQuoteGeneratorAnonymous(symbol: string){

    this.symbol = symbol; // <C>

    setInterval(function () {  // <D>
        console.log("   StockQuoteGeneratorAnonymous.The price quote for " + this.symbol
            + " is " + Math.random());
    }, 1000);

}

var stockQuoteGeneratorAnonymous = new StockQuoteGeneratorAnonymous("IBM");