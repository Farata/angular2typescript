class Tax {
   income: number;

   calcTax(income: number, stateTax){
      console.log(`Your honest tax is:  ${income*stateTax}`); 
   } 
};

class TaxMixin {

  mafiaSpecial(income: number, stateTax){
    console.log(`Your mafia special tax is: ${(income*stateTax - 1000)}`);
  };

  drugCartelSpecial (income: number, stateTax) {
     console.log(`Your drug cartel special tax is: ${(income*stateTax - 3000)}`);
  };		
}

//  Can't do this: class TaxSpecial extends Tax, TaxMixin{} 

class TaxSpecial extends Tax implements TaxMixin{

   mafiaSpecial: (income, stateTax) => void;
   drugCartelSpecial: (income, stateTax) => void;
}

// a boilerplate function to copy members of a mixin
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(TaxSpecial, [TaxMixin]);    

let myTax: TaxSpecial = new TaxSpecial();

myTax.calcTax(100000, 0.06);
myTax.mafiaSpecial(100000, 0.06);
myTax.drugCartelSpecial(100000, 0.06);