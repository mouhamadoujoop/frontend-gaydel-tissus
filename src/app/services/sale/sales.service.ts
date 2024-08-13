
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { Site } from '../../models/sites';
import { Sale } from '../../models/sales';


@Injectable({
  providedIn: 'root'
})
export class SalesService {
  BASE_URL = environment.BASE_URL
  //private API_URL= environment.API_URL;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ){}

  getSalesById(siteID: number){
    return this.httpClient.get(`${this.BASE_URL}/sites/${siteID}/sales`, {... this.localStorage.getAuthorization()});
  }

  getSaleByInvoice(invoiceID: number){
    return this.httpClient.get(`${this.BASE_URL}/invoices/${invoiceID}/sale`, {... this.localStorage.getAuthorization()});
  }

  addSales(sale:Sale):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/sales`, sale,{... this.localStorage.getAuthorization()});

  }
  updateSale(sale:Sale):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/sales/`+sale.id, sale,{... this.localStorage.getAuthorization()});

  }
  deleteSale(sale:Sale):Observable<any>{
    return this.httpClient.delete(`${this.BASE_URL}/sales/`+sale.id, {... this.localStorage.getAuthorization()});

  }


}
