import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableLoading } from '@ngneat/hot-toast';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http:HttpClient) { }

  currentUser(username:string){
     this._user.next(username);
  }

  get user():BehaviorSubject<string> {
    return this._user;
  }

  getUser():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  saveUser(data:User):Observable<any>{
    return this.http.post(`${this.apiUrl}`,data);
  }
}

