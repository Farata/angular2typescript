import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private router: Router){}

    canActivate() {

        return this.checkIfLoggedIn();
    }

    private checkIfLoggedIn(): boolean{

        // A call to the actual login service would go here
        // For now we'll just randomly return true or false

        let loggedIn:boolean = Math.random() <0.5;

        if(!loggedIn){
            alert("You're not logged in and will be redirected to Login page");
            this.router.navigate(["/login"]);
        }

        return loggedIn;
    }
}
