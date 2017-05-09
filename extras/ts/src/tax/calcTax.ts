export function calcTax(income: number, state: string = 'NY', 
                        dependents?: number): number{

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
