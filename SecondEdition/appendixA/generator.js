function* getStockPrice(symbol){

  while(true){
    yield Math.random()*100;

    console.log(`resuming for ${symbol}`);
  }
}

const priceGenerator = getStockPrice("IBM"); 

const limitPrice = 15; 
const price = 100;

while ( price > limitPrice){ 

   price = priceGenerator.next().value; 
   console.log (`The generator returned ${price}`);
}

console.log(`buying at ${price} !!!`); 