var Person1 = (function () {
    function Person1(firstName, lastName, age, _ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._ssn = _ssn;
    }
    Object.defineProperty(Person1.prototype, "ssn", {
        get: function () {
            return this._ssn;
        },
        set: function (value) {
            this._ssn = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person1;
})();
var p = new Person1("John", "Smith", 29);
p.ssn = "456-70-1234";
console.log("Last name: " + p.lastName + " SSN: " + p.ssn);
//# sourceMappingURL=Person1.js.map