export class  Transaction  {
  id: number;
  account_id: number;
  client: string;
  transaction_date:string;
  type: number;
  amount_settled: number;
  user_id: number;
  callDate: string;
  site_id : number;
  site : string;
  step: number;

  constructor(transaction: any) {
    const today = new Date();
    this.id = transaction.id;
    this.account_id =  transaction.account_id;
    this.site_id = transaction.site_id;
    this.type =  transaction.type;
    this.amount_settled =  transaction.amount_settled;
    this.transaction_date = transaction.transaction_date ? transaction.transaction_date : today.toISOString().substring(0,10);
    this.user_id = transaction.user_id;
    this.callDate = this.formatDate(new Date(this.transaction_date));
    this.site = (transaction.site && transaction.site.name) ? transaction.site.name : (transaction.site)?  transaction.site : '';
    this.client = (transaction.account && transaction.account.client.full_name) ? transaction.account.client.full_name : transaction.client ? transaction.client: '';
    this.step = transaction.step;
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
