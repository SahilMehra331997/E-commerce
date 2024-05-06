import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http:HttpClient) {}

   getData():Observable<any>{
      return this.http.get<any>(`${this.apiUrl}`);
   }
  

  uploadData(data:Product){
    console.log(data);
    return this.http.post(this.apiUrl,data)
  }


}
