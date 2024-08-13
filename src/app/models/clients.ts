import { trigger } from '@angular/animations';
import { Account } from './accounts';

export class Client {
  id: number;
  full_name: string;
  phone: string;
  address: string;
  balance: number;
  site_id: number;
  account_id: number;

  constructor(client: any) {
    this.id = client.id;
    this.full_name = client.full_name;
    this.phone = client.phone;
    this.address = client.address;
    this.balance = (client.account && client.account.balance) ? client.account.balance : 0;
    this.account_id = (client.account && client.account.id) ? client.account.id : 0;
    this.site_id = client.site_id

     // this.hasAccount = true;
  }

}
