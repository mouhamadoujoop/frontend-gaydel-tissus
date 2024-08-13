import { Injectable } from '@angular/core';
import { Account } from '../../models/accounts';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../../models/sites';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  BASE_URL = environment.BASE_URL

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService) {
  }

  // addAccountToClient(id: number, account: Account): Observable<Account> {
  //   return this.httpClient.post(`${this.BASE_URL}/accounts/`, account, { ...this.localStorage.getAuthorization() });
  // }
  getAccounts():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/accounts`, {... this.localStorage.getAuthorization()});

  }

  addAccount(account:Account):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/accounts`, account,{... this.localStorage.getAuthorization()});

  }

  updateAccount(account:Account):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/accounts/`+account.id, account,{... this.localStorage.getAuthorization()});

  }
}
