import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import { Depenses } from 'src/app/models/depenses';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {
  BASE_URL = environment.BASE_URL

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  addDepense(depense:Depenses):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/dailyexpense`, depense,{... this.localStorage.getAuthorization()});

  }

  getDepenses():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/dailyexpense`, {... this.localStorage.getAuthorization()});

  }

  updateDepense(depense:Depenses):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/dailyexpense`, depense,{... this.localStorage.getAuthorization()});

  }
  
  getDepensesSites(site_id:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/sites/`+site_id+`/stockDailyExpenses`, {... this.localStorage.getAuthorization()});

  }
  
  getDaylyDepensesSites(site_id:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/sites/`+site_id+`/stockDailyExpenses`, {... this.localStorage.getAuthorization()});

  }
}
