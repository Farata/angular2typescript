let customer = "Joe";
  (function (){
      console.log("The name of the customer inside the function is "  + customer);
      if (true) {
       let customer = "Mary";
        console.log("The name of the customer inside the block is "  + customer); 
      }
   
  })();
 
console.log("The name of the customer in the global scope is "  + customer);