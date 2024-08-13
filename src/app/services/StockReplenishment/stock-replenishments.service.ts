import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StockReplenishment } from 'src/app/models/StockReplenishment';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Site } from 'src/app/models/sites';

@Injectable({
  providedIn: 'root'
})
export class StockReplenishmentsService {
  BASE_URL = environment.BASE_URL

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  
  getStockReplenishments(site:Site):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/sites/`+site.id+`/stockReplenishments`, {... this.localStorage.getAuthorization()});

  }

  addStockReplenishment(stockReplenishment:StockReplenishment):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/stock-replenishment`, stockReplenishment,{... this.localStorage.getAuthorization()});

  }

  updateStockReplenishment(stockReplenishment:StockReplenishment):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/stock-replenishment/`+stockReplenishment.id, stockReplenishment,{... this.localStorage.getAuthorization()});

  }

}
