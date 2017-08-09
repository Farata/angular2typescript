function StockQuoteGenerator(symbol){
      this.symbol = symbol;
      setInterval(() => {
                 console.log("The price quote for " + this.symbol
                         + " is " + Math.random());
              }, 1000);
}

const stockQuoteGenerator = new StockQuoteGenerator("IBM");