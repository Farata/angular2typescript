import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {DataService} from "./data.service";
import {Injectable} from "@angular/core";

@Injectable()
export class DataResolver implements Resolve<any>{

    constructor ( private dataService: DataService){}

    resolve(route: ActivatedRouteSnapshot){
        return this.dataService.loadData();
    }
}
