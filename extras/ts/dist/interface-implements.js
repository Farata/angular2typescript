var Employee = (function () {
    function Employee() {
    }
    Employee.prototype.increasePay = function (percent) {
        console.log("Increasing employee salary by " + percent);
    };
    return Employee;
}());
var Contractor = (function () {
    function Contractor() {
    }
    Contractor.prototype.increasePay = function (percent) {
        console.log("Increasing contractor's rate by " + percent);
    };
    return Contractor;
}());
var workers = []; // better type: IPayable[]
workers[0] = new Employee();
workers[1] = new Contractor();
workers.forEach(function (worker) { return worker.increasePay(20); });
