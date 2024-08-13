import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { Site } from 'src/app/models/sites';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL = environment.BASE_URL
  //private API_URL= environment.API_URL;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ){}
  
  

  getProducts():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/products`, {... this.localStorage.getAuthorization()});

  }

  getProductsInStock():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/product/instock`, {... this.localStorage.getAuthorization()});

  }
  getProductNotInStock(site:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/product/notinstock/`+site, {... this.localStorage.getAuthorization()});

  }

  addProduct(product:Product):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/products`, product,{... this.localStorage.getAuthorization()});

  }

  updateProduct(product:Product):Observable<any>{
    return this.httpClient.put(`${this.BASE_URL}/products/`+product.id, product,{... this.localStorage.getAuthorization()});

  }

  checkProductExistsInStock(product:number,site:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/sites/`+product+`/product/`+site+`/checkProductExistsInSiteStock`,{... this.localStorage.getAuthorization()});

  }


  
}
