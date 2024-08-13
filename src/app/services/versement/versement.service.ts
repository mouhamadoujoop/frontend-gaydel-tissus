import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { Account } from '../../models/accounts';
import { Versement } from '../../models/versements';

@Injectable({
  providedIn: 'root'
})
export class VersementService {
  BASE_URL = environment.BASE_URL

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService) {
  }

  getAllVersementsBySites(siteId: number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/versements/site/${siteId}`, {... this.localStorage.getAuthorization()});

  }

  addVersement(versement:Versement):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/versements`, versement,{... this.localStorage.getAuthorization()});

  }

  updateVersement(versementId: number, versement:any):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/versements/${versementId}`, versement,{... this.localStorage.getAuthorization()});

  }
  deleteVersement(versementId: number):Observable<any>{
    return this.httpClient.delete(`${this.BASE_URL}/versements/${versementId}`,{... this.localStorage.getAuthorization()});

  }
  getVersementBetweenTwoDates(site_id: number,start_date: Date, end_date: Date):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/versements-periode/site/${site_id}?start_date=${start_date}&end_date=${end_date}`,{... this.localStorage.getAuthorization()});

  }

}
