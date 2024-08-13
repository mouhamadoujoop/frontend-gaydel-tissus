import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { User } from './user';
export class Stock {
  id: number;
  site_id: number;
  site: string;
  user_id: number;
  user: string;
  product_id: number;
  product: string;
  quantity: number;
  threshold: number;


  constructor(stock: any) {
    const localStorageService = LocalStorageService.getInstance();
    const userData = localStorageService.getData('dataUser');
    const userInfo = userData ? new User(JSON.parse(userData)) : new User({ id: null, first_name: 'Unknown', last_name: 'User' });
    this.id = stock.id;
    this.site_id = stock.site_id;
    this.site = (stock.site && stock.site.name) ? stock.site.name : stock.site;
    this.user_id = stock.user_id ? stock.user_id : userInfo.id;
    this.user = (stock.user  && stock.user.first_name)? stock.user.first_name+' '+stock.user.last_name :(stock.user)? stock.user: `${userInfo.first_name} ${userInfo.last_name}`;
    this.product_id = stock.product_id;
    this.product = (stock.product && stock.product.name) ? stock.product.name : stock.product;
    this.quantity = stock.quantity;
    this.threshold = stock.threshold;
  }

}
