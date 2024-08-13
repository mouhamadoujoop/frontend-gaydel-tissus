
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../../models/sites';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Client } from '../../models/clients';
import { Transaction } from '../../models/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  BASE_URL = environment.BASE_URL

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService) {
  }

  getTransactionAccountID(id: number):Observable<any>{
    // return this.httpClient.get(`${this.BASE_URL}/accounts/`+id+"/transactions", {... this.localStorage.getAuthorization()});
    return this.httpClient.get(`${this.BASE_URL}/transactions/account/`+id, {... this.localStorage.getAuthorization()});

  }
  getAllTransactions(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/transactions`, {
      ...this.localStorage.getAuthorization()
    });
  }

  getTodayTransactionBySite(id: number): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/transactions/today/${id}`, {
      ...this.localStorage.getAuthorization()
    });
  }
  AddTransactions(transaction:Transaction):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/transactions`, transaction,{... this.localStorage.getAuthorization()});

  }
}
