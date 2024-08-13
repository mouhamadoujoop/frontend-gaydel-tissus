export class Sale {

  id: number;
  site_id: number;
  step: number;
  client_id: number;
  invoice_id!: number;
  product_id: number;
  quantity_sold: number;
  sale_date: string;
  pU:number;
  pTotal:number;
  site: string;
  product: string;
  callDate: string;

  constructor(sale: any) {
    const today = new Date(Date.now());
    this.id = sale.id;
    this.site_id = sale.site_id;
    this.product_id = sale.product_id;
    this.quantity_sold = sale.quantity_sold;
    this.sale_date = sale.sale_date ? sale.sale_date : today.toISOString().substring(0,10);
    this.pU = sale.pU;
    this.pTotal = sale.pU*sale.quantity_sold;
    this.product = (sale.product && sale.product.name) ? sale.product.name  : (sale.product)? sale.product: '';
    this.site = (sale.site && sale.site.name) ? sale.site.name : (sale.site)?  sale.site : '';
    this.callDate = this.formatDate(new Date(this.sale_date));
    this.client_id = sale.client_id;
    this.step = sale.step;


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
