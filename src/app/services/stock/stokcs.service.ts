import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/models/stocks';

@Injectable({
  providedIn: 'root'
})
export class StokcsService {
  BASE_URL = environment.BASE_URL
  //private API_URL= environment.API_URL;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ){}
  
  
  getStocks():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/stocks`, {... this.localStorage.getAuthorization()});

  }

  addStock(stock:Stock):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/stocks`, stock,{... this.localStorage.getAuthorization()});

  }

  updateStock(stock:Stock):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/stocks/`+stock.id, stock,{... this.localStorage.getAuthorization()});

  }

  

}
