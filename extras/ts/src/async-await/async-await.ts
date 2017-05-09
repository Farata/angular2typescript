async function getCustomers(){

    let promise = new Promise(
        function (resolve, reject){

            console.log("Getting customers");
            // Emulate an async server call here
            setTimeout(function(){
                let success = true;
                if (success){
                    resolve( "John Smith"); // got the customer
                }else{
                    reject("Can't get customers");
                }
            },1000);

        }
    );
    return promise;
}

async function getOrders(customer){

    let promise =  new Promise(
        function (resolve, reject){

            // Emulate an async server call here
            setTimeout(function(){
                let success = true;   // change it to false

                if (success){
                    resolve( `Found the order 123 for ${customer}`); // got the order
                }else{
                    reject(`getOrders() has thrown an error for ${customer}`);
                }
            },1000);

        }
    );
    return promise;
}


(async function getCustomersOrders(){
  try {
      const customer = await getCustomers();  // no callbacks
      console.log(`Got customer ${customer}`);
      const orders = await getOrders(customer);
      console.log(orders);
  } catch(err){
      console.log(err);
  }

})();

console.log("This is the last line in the code. Chained getCustomers() and getOrders().");
