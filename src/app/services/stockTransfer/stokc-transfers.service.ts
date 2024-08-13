import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StockReplenishment } from 'src/app/models/StockReplenishment';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Site } from 'src/app/models/sites';
import { StockTransfer } from 'src/app/models/StockTransfer';

@Injectable({
  providedIn: 'root'
})
export class StokcTransfersService {
  BASE_URL = environment.BASE_URL

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  
  getStockTransfersReceived(site:Site):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/sites/`+site.id+`/stockTransfersReceived`, {... this.localStorage.getAuthorization()});

  }
  
  getStockTransfersInitiated(site:Site):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/sites/`+site.id+`/stockTransfersInitiated`, {... this.localStorage.getAuthorization()});

  }

  transferStock(stockTransfer:StockTransfer):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/stocks/transfer`, stockTransfer,{... this.localStorage.getAuthorization()});

  }

  updateStockReplenishment(stockReplenishment:StockReplenishment):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/stock-replenishment/`+stockReplenishment.id, stockReplenishment,{... this.localStorage.getAuthorization()});

  }

}
