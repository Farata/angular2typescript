function StockQuoteGeneratorArrow(symbol: string){

   this.symbol = symbol; 

    setInterval(() => { 
        console.log("Fat arrow. The price of " + this.symbol
            + " is " + Math.random());
    }, 4000);

}

var stockQuoteGeneratorArrow = new StockQuoteGeneratorArrow("IBM");


function StockQuoteGeneratorAnonymous(symbol: string){

    this.symbol = symbol; 

    setInterval(function () { 
        console.log("   Anonymous.The price of " + this.symbol
            + " is " + Math.random());
    }, 4000);

}

var stockQuoteGeneratorAnonymous = new StockQuoteGeneratorAnonymous("IBM");