export function getCustomers(){

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

function getOrders(customer){

    let promise =  new Promise(
        function (resolve, reject){

            // Emulate an async server call here
            setTimeout(function(){
                let success = true;
                if (success){
                    resolve( `Found the order 123 for ${customer}`); // got the order
                }else{
                    reject("Can't get orders");
                }
            },1000);

        }
    );
    return promise;
}

getCustomers()
    .then((cust) => {console.log("Got customer" + cust);return cust;})  // callbacks are moved inside then()
    .then((cust) => getOrders(cust))
    .then((order) => console.log(order))
    .catch((err) => console.error(err));
console.log("This is the last line in the code. Chained getCustomers() and getOrders().");