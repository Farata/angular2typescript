var People;
(function (People) {
    var Person = (function () {
        function Person(firstName, lastName, age, _ssn) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this._ssn = _ssn;
        }
        return Person;
    }());
    People.Person = Person;
})(People || (People = {}));
var p = new People.Person("John", "Smith", 29, "123-90-4567");
console.log("Last name: " + p.lastName + "  SSN: " + p._ssn);
