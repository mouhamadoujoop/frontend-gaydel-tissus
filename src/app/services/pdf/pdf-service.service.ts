import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {


  constructor() { }
  public saveData(value: any) {
    localStorage.setItem('sales', JSON.stringify(value));
  }
  public getClient() {
    return localStorage.getItem('client');
  }
  public saveClient(value: any) {
    localStorage.setItem('client', JSON.stringify(value));
  }
  public getData() {
    return localStorage.getItem('sales');
  }
  public removeData() {
    localStorage.removeItem('sales');
    localStorage.removeItem('client');
  }
  public getDataObservable(): Observable<any> {
    const data = this.getData();
    return of(data);
  }
}
