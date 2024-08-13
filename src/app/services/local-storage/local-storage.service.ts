import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private static instance: LocalStorageService;

  token:any = []; // pour recuperer le localStorage
  //userToken:any;     // stock les infos et le token

  constructor() {
    LocalStorageService.instance = this;
  }

  public static getInstance(): LocalStorageService {
    return LocalStorageService.instance;
  }

  public saveData(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: any) {
    return localStorage.getItem(key);
  }
  
  public removeData(key: any) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  getAuthorization(){
    this.token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers  };

    return requestOptions;
  }
  headerCors(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };

    return requestOptions;
  }


}
