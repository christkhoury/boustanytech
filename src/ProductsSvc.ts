import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
  })
export class ProductsSvc{
  url: any = 'https://boustanytechnology.herokuapp.com/products';
  usersArray: any = [];
  
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(data => {
      // Populating usersArray with names from API
      data.constructor().forEach(element => {
        this.usersArray.push(element.name);
      });
    });
  }
 getproducts():Observable<any>{
  return this.http.get(this.url)
 }
}
