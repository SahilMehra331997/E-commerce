import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/admins';

  constructor(private http:HttpClient) {}

   getData():Observable<any>{
      return this.http.get<any>(`${this.apiUrl}`);
   }
  

  uploadData(data:any){
    return this.http.post(this.apiUrl,data)
  }

  deleteData(id:string)
  {
    if(id === '1234')
      {
        this.http.delete
      }
  }
}
