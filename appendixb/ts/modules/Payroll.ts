/// <reference path="PayBand.ts" />

module Payroll {
    export interface IPayable {

        increasePay(percent: number): boolean
    }

    class Person {
        // properties are omitted for brevity

        constructor() {
        }
    }

    export class Employee extends Person implements IPayable {

        increasePay(percent: number): boolean {

            console.log("Increasing salary by",percent);
            return true;
        }
    }

    export class Contractor implements IPayable {
        increaseCap: number = 20;

        increasePay(percent: number): boolean {
            if (percent < this.increaseCap) {
                console.log("Increasing hourly rate by ", percent);
                return true;
            } else {
                console.log("Sorry, the increase cap for contractors is", this.increaseCap);
                return false;
            }
        }
    }

}

var workers: Array<Payroll.IPayable> = [];
workers[0] = new Payroll.Employee();
workers[1] = new Payroll.Contractor();

workers.forEach((worker) => worker.increasePay(30));

