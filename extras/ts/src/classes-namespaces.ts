namespace People{
 export class Person {

    constructor(public firstName: string,
        public lastName: string, public age: number,  private _ssn: string) {
    }
 }

}

let p = new People.Person("John", "Smith", 29, "123-90-4567");
console.log(`Last name: ${p.lastName}  SSN: ${ p._ssn}`);