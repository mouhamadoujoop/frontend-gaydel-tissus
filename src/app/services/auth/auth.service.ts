import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { environment } from 'src/app/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private API_URL= environment.API_URL;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService,
    private cookieService: CookieService
  ){}


  checkLoginStatus(): Observable<any> {
    return this.httpClient.get<any>(environment.BASE_URL  + '/authenticate');
  }
  //login
  login(data: any) {
    return this.httpClient.post(environment.BASE_URL + '/login', data, {... this.localStorage.headerCors()});
  }
  // logout
  logout(user:any){
    return this.httpClient.post(environment.BASE_URL + '/logout', user,{... this.localStorage.getAuthorization()});
  }

  // Obtenir l'utilisateur
  getUser(){
    return this.httpClient.get(environment.BASE_URL + '/user', {... this.localStorage.getAuthorization()});
  }

  // Réinitialiser le mot de passe
  // resetPassword(oldPassword: string, newPassword: string): Observable<any> {
  //   const requestData = {
  //     old_password: oldPassword,
  //     new_password: newPassword
  //   };
  //   // Faites appel à l'API Laravel pour réinitialiser le mot de passe
  //   return this.httpClient.put(environment.BASE_URL +'/resetPassword', requestData, {... this.localStorage.getAuthorization()});
  // }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    const token = this.localStorage.getAuthorization();
    return !!token; // Cela retournera true si le token est présent, false sinon
  }
}
