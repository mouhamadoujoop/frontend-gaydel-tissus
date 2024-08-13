
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  BASE_URL = environment.BASE_URL
  //private API_URL= environment.API_URL;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ){}



  getClientsBySite(site_id: number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/clients/site/${site_id}`, {... this.localStorage.getAuthorization()});

  }

  getClientById(client_id: number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/clients/${client_id}`, {... this.localStorage.getAuthorization()});

  }

  getClientInvoice(client_id: number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/clients/${client_id}/invoice`, {... this.localStorage.getAuthorization()});

  }
  // getAccountByI(id: number):Observable<any>{
  //   return this.httpClient.get(`${this.BASE_URL}/clients/account/${site_id}`, {... this.localStorage.getAuthorization()});
  //
  // }

  addClients(client:Client):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/clients`, client,{... this.localStorage.getAuthorization()});

  }
  updateClient(client:Client):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/clients/`+client.id, client,{... this.localStorage.getAuthorization()});

  }



}
