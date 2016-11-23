import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable} from "rxjs/Observable";

@Injectable()
export class DataService{

    mydata: Array[];

    constructor(private http:Http){}

    loadData(): Observable | any {
        if (this.mydata){
            return this.mydata;  // return from cache
        } else
        {
            return this.http.get("./45MB_DATA.json")
                .map(res => res.json())
                .do(data => this.mydata = data);
        }
    }
}
