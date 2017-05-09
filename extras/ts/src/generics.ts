namespace Generics{

class Person {
    name: string;
}

class Employee extends Person{
    department: number;
}

class Animal {
  //  name: string;
    breed: string;
}

let workers: Array<Person> =[];

workers[0] = new Person();
workers[1] = new Employee();
//workers[2] = new Animal();

}