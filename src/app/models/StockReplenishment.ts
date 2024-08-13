import { LocalStorageService } from "../services/local-storage/local-storage.service";
import { User } from "./user";

export class StockReplenishment {
  id: number;
  site_id: number;
  site: string;
  user_id: number;
  user: string;
  product_id: number;
  product: string;
  quantity_replenished: number;
  replenishment_date: string;
  displayed_Date: string;


  constructor(stockReplenishment?: any) {
    const today = new Date(Date.now());
    const localStorageService = LocalStorageService.getInstance();
    const userData = localStorageService.getData('dataUser');
    const userInfo = userData ? new User(JSON.parse(userData)) : new User({ id: null, first_name: 'Unknown', last_name: 'User' });
    this.user_id = stockReplenishment.user_id ? stockReplenishment.user_id : userInfo.id;
    this.user = (stockReplenishment.user  && stockReplenishment.user.first_name)? stockReplenishment.user.first_name+' '+stockReplenishment.user.last_name :(stockReplenishment.user)? stockReplenishment.user: `${userInfo.first_name} ${userInfo.last_name}`;
    if (stockReplenishment) {
      this.id = stockReplenishment.id;
      this.site_id = stockReplenishment.site_id;
      this.site = stockReplenishment.site;
      this.product_id = stockReplenishment.product_id;
      this.product = (stockReplenishment.product && stockReplenishment.product.name) ? stockReplenishment.product.name : stockReplenishment.product;
      this.quantity_replenished = (stockReplenishment.quantity) ? stockReplenishment.quantity : stockReplenishment.quantity_replenished;
      this.replenishment_date = (stockReplenishment.replenishment_date) ? stockReplenishment.replenishment_date : today.toISOString().substring(0, 10);
      this.displayed_Date = this.formatDate(new Date(this.replenishment_date));
    } else {
      this.id = 0;
      this.site_id = 0;
      this.site = '';
      this.product_id = 0;
      this.product = '';
      this.quantity_replenished = 0;
      this.replenishment_date = today.toISOString().substring(0, 10);
      this.displayed_Date = this.formatDate(today);
    }
  }
  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString();
    return `${day} ${month} ${year}`;
  }
}
