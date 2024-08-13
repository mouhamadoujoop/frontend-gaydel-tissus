import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import { Invoices } from 'src/app/models/invoices';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  BASE_URL = environment.BASE_URL

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  getInvoicByStep(step:number,siteID:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/invoices/site/`+siteID+`/step/`+step, {... this.localStorage.getAuthorization()});

  }

  validateInvoice(invoice:Invoices):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/invoices/validate/`+invoice.id, {},{... this.localStorage.getAuthorization()});

  }
  validateClientInvoice(invoiceID:number,amount:number):Observable<any>{
    const requestData = {
      invoice_id: invoiceID,
      amount: amount
    };
    return this.httpClient.put(`${this.BASE_URL}/invoices/client/validate`, requestData,{... this.localStorage.getAuthorization()});

  }
}
