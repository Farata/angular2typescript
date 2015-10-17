function calcTax(income, state, dependents) {
    if (state === void 0) { state = 'NY'; }
    var deduction;
    if (dependents) {
        deduction = dependents * 500;
    }
    else {
        deduction = 0;
    }
    if (state == 'NY') {
        return income * 0.06 - deduction;
    }
    else if (state == 'NJ') {
        return income * 0.05 - deduction;
    }
}
var tax = calcTax(50000, 'NJ', 3);
console.log("Your tax is " + tax);
var tax = calcTax(50000);
console.log("Your tax is " + tax);
