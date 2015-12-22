class Employee extends Person{
    department: string;

    constructor(public config: IPerson){

        super(config);

    }
}