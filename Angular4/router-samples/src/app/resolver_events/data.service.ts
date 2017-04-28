import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';

@Injectable()
export class DataService{

    mydata: Array<string>[];

    constructor(private http:Http){}

    loadData(): Observable<string[]> {
        if (this.mydata){
            return Observable.from(this.mydata);  // return from cache
        } else
        {
            return this.http.get("./assets/45MB_DATA.json")
                .map(res => res.json())
                .do(data => this.mydata = data);
        }
    }
}
