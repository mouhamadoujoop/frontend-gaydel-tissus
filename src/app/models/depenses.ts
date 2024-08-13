import { LocalStorageService } from "../services/local-storage/local-storage.service";
import { User } from "./user";

export class Depenses {
  id: number;
  site_id: number;
  site: string;
  user_id: number;
  user: string;
  details: string;
  amount: number;
  expense_date: string;
  displayed_Date: string;


  constructor(depense?: any) {
    const today = new Date(Date.now());
    const localStorageService = LocalStorageService.getInstance();
    const userData = localStorageService.getData('dataUser');
    const userInfo = userData ? new User(JSON.parse(userData)) : new User({ id: null, first_name: 'Unknown', last_name: 'User' });
    this.user_id = depense.user_id ? depense.user_id : userInfo.id;
    this.user = (depense.user  && depense.user.first_name)? depense.user.first_name+' '+depense.user.last_name :(depense.user)? depense.user: `${userInfo.first_name} ${userInfo.last_name}`;
    if (depense) {
      this.id = depense.id;
      this.site_id = depense.site_id;
      this.site = (depense.site && depense.site.name) ? depense.site.name : depense.site;
      this.details = depense.details;
      this.amount = depense.amount;
      this.expense_date = (depense.expense_date) ? depense.expense_date : today.toISOString().substring(0, 10);
      this.displayed_Date = this.formatDate(new Date(this.expense_date));
      
    } else {
      this.id = 0;
      this.site_id = 0;
      this.site = '';
      this.details = '';
      this.amount = 0;
      this.expense_date = today.toISOString().substring(0, 10);
      this.displayed_Date = this.formatDate(new Date(this.expense_date));
      
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
