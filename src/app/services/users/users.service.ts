import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  BASE_URL = environment.BASE_URL
  //private API_URL= environment.API_URL;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ){}
  
  getUsers():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/users`, {... this.localStorage.getAuthorization()});
  }

  addUser(user:User):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/users`, user,{... this.localStorage.getAuthorization()});

  }

  updateUser(user:User):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/users/${user.id}`, user,{... this.localStorage.getAuthorization()});
  }

  getRoles():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/roles`, {... this.localStorage.getAuthorization()});
  }

}
