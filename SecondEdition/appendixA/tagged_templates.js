function currencyAdjustment(stringParts, region, amount) {
    console.log( stringParts);
    console.log( region );
    console.log( amount );

  let sign;
  if (region==1){
    sign="$"
  } else{
    sign='\u20AC';      // the euro sign
    amount=0.9*amount;  // convert to euros using 0.9 as exchange rate
  }
  return `${stringParts[0]}${sign}${amount}${stringParts[2]}`;
}

const amount = 100;
const region = 2;  // Europe: 2, USA: 1

const message = currencyAdjustment`You've earned ${region} ${amount}!`
console.log(message);