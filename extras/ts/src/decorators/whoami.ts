function Whoami (target){
    console.log(`You are: \n ${target}`)
}

@Whoami
class Friend {

    constructor(private name: string, private age: number){}
}

