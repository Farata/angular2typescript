import {CanDeactivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate{

    constructor(private _router:Router){}

    canDeactivate(){
        return window.confirm("You have unsaved changes. Still want to leave?");

    }
}