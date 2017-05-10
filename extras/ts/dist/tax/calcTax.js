"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.calcTax = calcTax;
