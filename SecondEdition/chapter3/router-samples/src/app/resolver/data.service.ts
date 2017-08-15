import {Injectable} from "@angular/core";
import 'rxjs/add/operator/do';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService{

    mydata:any;

    constructor(private http:HttpClient){}

    loadData(): Observable<string[]> {
        if (this.mydata){
            return Observable.from(this.mydata);  // return from cache
        } else
        {
            return this.http.get("./assets/45MB_DATA.json")
                .do(data => this.mydata = data);
        }
    }
}
