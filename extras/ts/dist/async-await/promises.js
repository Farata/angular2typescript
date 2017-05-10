"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCustomers() {
    var promise = new Promise(function (resolve, reject) {
        console.log("Getting customers");
        // Emulate an async server call here
        setTimeout(function () {
            var success = true;
            if (success) {
                resolve("John Smith"); // got the customer
            }
            else {
                reject("Can't get customers");
            }
        }, 1000);
    });
    return promise;
}
exports.getCustomers = getCustomers;
function getOrders(customer) {
    var promise = new Promise(function (resolve, reject) {
        // Emulate an async server call here
        setTimeout(function () {
            var success = true;
            if (success) {
                resolve("Found the order 123 for " + customer); // got the order
            }
            else {
                reject("Can't get orders");
            }
        }, 1000);
    });
    return promise;
}
getCustomers()
    .then(function (cust) { console.log("Got customer" + cust); return cust; }) // callbacks are moved inside then()
    .then(function (cust) { return getOrders(cust); })
    .then(function (order) { return console.log(order); })
    .catch(function (err) { return console.error(err); });
console.log("This is the last line in the code. Chained getCustomers() and getOrders().");
