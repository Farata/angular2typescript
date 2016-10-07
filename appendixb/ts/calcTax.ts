function calcTax(income: number, state: string = 'NY', dependents?: number): number{

    var deduction: number;

    if (dependents) {  // handle the optional value in dependents
        deduction = dependents*500;
    }else {
        deduction = 0;
    }

    if (state == 'NY'){
        return income*0.06 - deduction;
    } else if (state=='NJ'){
        return income*0.05  - deduction;
    }
}

var tax: number = calcTax(50000, 'NJ', 3);
console.log("Your tax is " + tax);

var tax: number = calcTax(50000);
console.log("Your tax is " + tax);
