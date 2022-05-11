import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:any = 'https://boustany.herokuapp.com/Products'
  constructor(private http:HttpClient) { }

  getcategories():Observable<any>{
    return this.http.get(this.url)
  }
  getitems(category:any):Observable<any>{
  let categ =`https://boustany.herokuapp.com/Products${ category }`
    return this.http.get(categ)
  }
}
