interface Comparator<T> {
    compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {

    constructor(private width:number, private height: number){};

    compareTo(value: Rectangle): number{
        if (this.width*this.height >= value.width*value.height){
            return 1;}
        else  {
            return -1;
        }
    }
}

let rect1:Rectangle = new Rectangle(2,5);
let rect2: Rectangle = new Rectangle(2,3);

rect1.compareTo(rect2)===1? console.log("rect1 is bigger"): 
                            console.log("rect1 is smaller") ;


class Programmer implements Comparator<Programmer> {

    constructor(public name:string, private salary: number){};

    compareTo(value: Programmer): number{
        if (this.salary >= value.salary){
            return 1;}
        else  {
            return -1;
        }
    }
}

let prog1:Programmer = new Programmer("John",20000);
let prog2: Programmer = new Programmer("Alex",30000);


prog1.compareTo(prog2)===1?console.log(`${prog1.name} is richer`):
                           console.log(`${prog1.name} is poorer`) ;