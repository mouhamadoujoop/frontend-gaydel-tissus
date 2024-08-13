import { LocalStorageService } from "../services/local-storage/local-storage.service";
import { User } from "./user";

export class StockTransfer {
  id: number;
  user_id: number;
  user: string;
  source_site_id: number;
  destination_site_id: number;
  source: string;
  destination: string;
  product_id: number;
  product: string;
  quantity_transferred: number;
  quantityToTransfer: number;
  transfer_date: string;
  displayed_Date: string;


  constructor(stockTransfer?: any) {
    const today = new Date(Date.now());
    const localStorageService = LocalStorageService.getInstance();
    const userData = localStorageService.getData('dataUser');
    const userInfo = userData ? new User(JSON.parse(userData)) : new User({ id: null, first_name: 'Unknown', last_name: 'User' });
    this.user_id = stockTransfer.user_id ? stockTransfer.user_id : userInfo.id;
    this.user = (stockTransfer.user  && stockTransfer.user.first_name)? stockTransfer.user.first_name+' '+stockTransfer.user.last_name :(stockTransfer.user)? stockTransfer.user: `${userInfo.first_name} ${userInfo.last_name}`;
    if (stockTransfer) {
      this.id = stockTransfer.id;
      this.	source_site_id = stockTransfer.	source_site_id;
      this.	destination_site_id = stockTransfer.destination_site_id;
      this.source = (stockTransfer.source_site && stockTransfer.source_site.name) ? stockTransfer.source_site.name : stockTransfer.source_site;
      this.destination = (stockTransfer.destination_site && stockTransfer.destination_site.name) ? stockTransfer.destination_site.name : stockTransfer.destination_site;
      this.product_id = stockTransfer.product_id;
      this.product = (stockTransfer.product && stockTransfer.product.name) ? stockTransfer.product.name : stockTransfer.product;
      this.quantity_transferred = (stockTransfer.quantity) ? stockTransfer.quantity : stockTransfer.quantity_transferred;
      this.transfer_date = (stockTransfer.transfer_date) ? stockTransfer.transfer_date : today.toISOString().substring(0, 10);
      this.displayed_Date = this.formatDate(new Date(this.transfer_date));
    } else {
      this.id = 0;
      this.destination_site_id = 0;
      this.source_site_id = 0;
      this.source = '';
      this.destination = '';
      this.product_id = 0;
      this.product = '';
      this.quantity_transferred = 0;
      this.transfer_date = today.toISOString().substring(0, 10);
      this.displayed_Date = this.formatDate(today);
    }
    this.quantityToTransfer=this.quantity_transferred;
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
