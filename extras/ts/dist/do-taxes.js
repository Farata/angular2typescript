"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calcTax_1 = require("./tax/calcTax");
var tax = calcTax_1.calcTax(50000, 'NJ', 3);
console.log("Your tax is " + tax);
var tax = calcTax_1.calcTax(50000);
console.log("Your tax is " + tax);
