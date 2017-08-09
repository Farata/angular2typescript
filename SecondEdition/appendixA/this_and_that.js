function StockQuoteGenerator(symbol){
    // this.symbol = symbol;    // is undefined inside getQuote()
     const that = this;
     that.symbol = symbol;
     setInterval(function getQuote(){
         console.log("The price quote for " + that.symbol
                 + " is " + Math.random());
     }, 1000);
 }
 const stockQuoteGenerator = new StockQuoteGenerator("IBM");