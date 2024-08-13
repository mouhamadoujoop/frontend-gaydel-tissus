import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { Site } from 'src/app/models/sites';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  BASE_URL = environment.BASE_URL
  //private API_URL= environment.API_URL;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ){}
  
  getSites():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/sites`, {... this.localStorage.getAuthorization()});
  }

  addSite(site:Site):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/sites`, site,{... this.localStorage.getAuthorization()});

  }

  updateSite(site:Site):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/sites/`+site.id, site,{... this.localStorage.getAuthorization()});

  }

  getSite(id:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/sites/`+id, {... this.localStorage.getAuthorization()});

  }

  getSiteStocks(site:Site):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/sites/`+site.id+`/stocks`, {... this.localStorage.getAuthorization()});

  }

}
