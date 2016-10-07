/// <reference path="PayBand.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Payroll;
(function (Payroll) {
    var Person = (function () {
        // properties are omitted for brevity
        function Person() {
        }
        return Person;
    })();
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee() {
            _super.apply(this, arguments);
        }
        Employee.prototype.increasePay = function (percent) {
            console.log("Increasing salary by", percent);
            return true;
        };
        return Employee;
    })(Person);
    Payroll.Employee = Employee;
    var Contractor = (function () {
        function Contractor() {
            this.increaseCap = 20;
        }
        Contractor.prototype.increasePay = function (percent) {
            if (percent < this.increaseCap) {
                console.log("Increasing hourly rate by ", percent);
                return true;
            }
            else {
                console.log("Sorry, the increase cap for contractors is", this.increaseCap);
                return false;
            }
        };
        return Contractor;
    })();
    Payroll.Contractor = Contractor;
})(Payroll || (Payroll = {}));
var workers = [];
workers[0] = new Payroll.Employee();
workers[1] = new Payroll.Contractor();
workers.forEach(function (worker) { return worker.increasePay(30); });
//# sourceMappingURL=Payroll.js.map