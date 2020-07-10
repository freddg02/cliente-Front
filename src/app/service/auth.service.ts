import { Injectable } from '@angular/core';
import {User} from '../models/user';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost/user/login';
  

  constructor(private http:HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  login(email:String, password: String){
    const url_api="http://localhost/user/";
    return this.http.post<User>(
      url_api,{
        email:email,
        password:password
      },
      {headers:this.headers}
    )
    .pipe(map(data => data));
   }  

  

}
