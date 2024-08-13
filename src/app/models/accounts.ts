
export class Account {
  id: number;
  client_id: number;
  client: string;
  balance: number
  constructor(account: any) {
    this.id = account.id;
    this.client_id = account.client_id;
    this.balance = account.balance;
    this.client = (account.client && account.client.full_name) ? account.client.full_name : account.client;

  }

}
