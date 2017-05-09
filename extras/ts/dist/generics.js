var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Generics;
(function (Generics) {
    var Person = (function () {
        function Person() {
        }
        return Person;
    }());
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Employee;
    }(Person));
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var workers = [];
    workers[0] = new Person();
    workers[1] = new Employee();
    //workers[2] = new Animal();
})(Generics || (Generics = {}));
//# sourceMappingURL=generics.js.map