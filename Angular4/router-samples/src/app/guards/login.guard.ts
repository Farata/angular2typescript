import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate{

    canActivate() {

        return this.checkIfLoggedIn();
    }

    private checkIfLoggedIn(): boolean{

        // A call to the actual login service would go here
        // For now we'll just randomly return true or false

        let loggedIn:boolean = Math.random() <0.5;

        if(!loggedIn){
            console.log("LoginGuard: The user is not logged in and can't navigate to product details");
        }

        return loggedIn;
    }
}
