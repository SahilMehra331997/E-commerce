import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableLoading } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http:HttpClient) { }

  getUser():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  saveUser(data:User):Observable<any>{
    return this.http.post(`${this.apiUrl}`,data);
  }
}
