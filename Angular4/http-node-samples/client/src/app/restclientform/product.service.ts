import { Http} from '@angular/http';
import { Injectable} from "@angular/core";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{

  constructor( private http: Http){}

  getProductByID(productID: string): Observable<any>{
    return this.http.get(`/products/${productID}`)
      .map(res => res.json());
  }
}
