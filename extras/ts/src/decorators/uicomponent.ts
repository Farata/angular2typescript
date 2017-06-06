function UIcomponent (html: string){
    console.log(`The decorator received ${html} \n`);

    return function(target){
        console.log(`Creating a UI component from \n ${target} ` );
    }

}

@UIcomponent('<h1>Hello Shopper!</h1>')
class Shopper {

    constructor(private name: string){}
}