import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
//private API_URL= environment.API_URL;

constructor(
  private httpClient: HttpClient,
  private router: Router,
  private localStorage: LocalStorageService
){}


// //login
// login(data: any) {
//   // return this.httpClient.post(environment.API_URL + '/login', data);
//   return this.httpClient.post(environment.BASE_URL + '/login', data, {... this.localStorage.headerCors()});
// }
// // logout
// logout(){
//   return this.httpClient.post(environment.BASE_URL + '/logout', {... this.localStorage.getAuthorization()});
// }

  // Obtenir l'utilisateur
  getRoles(){
    return this.httpClient.get(environment.BASE_URL + '/roles', {... this.localStorage.getAuthorization()});
  }
}
