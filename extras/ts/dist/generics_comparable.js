var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    Rectangle.prototype.compareTo = function (value) {
        if (this.width * this.height >= value.width * value.height) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return Rectangle;
}());
var rect1 = new Rectangle(2, 5);
var rect2 = new Rectangle(2, 3);
rect1.compareTo(rect2) === 1 ? console.log("rect1 is bigger") :
    console.log("rect1 is smaller");
var Programmer = (function () {
    function Programmer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    ;
    Programmer.prototype.compareTo = function (value) {
        if (this.salary >= value.salary) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return Programmer;
}());
var prog1 = new Programmer("John", 20000);
var prog2 = new Programmer("Alex", 30000);
prog1.compareTo(prog2) === 1 ? console.log(prog1.name + " is richer") :
    console.log(prog1.name + " is poorer");
