
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    ssn?: string;
}

interface IEmployee{
    title: string;
    desk: string;
}

type TheWorker = IPerson & IEmployee;

let worker: TheWorker = {firstName:"John", lastName: "Smith", age:29,
                            title:"Manager", desk:"A1,234"};

function printWorker(worker: TheWorker){
   console.log(worker);
}

printWorker(worker);
                    

