interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    ssn?: string;
}

class Customer  {
    constructor(person: IPerson) {
    }
}

let aPerson: IPerson = {
    firstName: "John",
    lastName: "Smith",
    age:35
}

let cust = new Customer(aPerson);
