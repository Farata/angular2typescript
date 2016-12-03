import {CanDeactivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {ProductDetailComponent} from "../product.component";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent>{

    constructor(private _router:Router){}

    canDeactivate(component: ProductDetailComponent){
        return window.confirm("You have unsaved changes. Still want to leave?");

    }
}
