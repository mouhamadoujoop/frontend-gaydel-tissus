import { Sale } from "./sales";

export class Invoices {

  id: number;
  num_invoice!: number;
  step: number;
  client_id!: number;
  client!: number;
  total_amount:number;
  invoice_date: string;
  user_id: number;
  user: string;
  details: string = '';
  displayed_Date: string;

  constructor(invoice: any) {
    const today = new Date(Date.now());
    this.id = invoice.id;
    this.user_id = invoice.user_id;
    if (invoice.sales) {
      for (let i = 0; i < invoice.sales.length; i++) {
        const element = invoice.sales[i];
        this.details += element.quantity_sold+" "+element.product.name + " " + element.quantity_sold*element.pU+"F";
        
        // Ajouter un point-virgule seulement s'il y a un autre élément après
        if (i < invoice.sales.length - 1) {
          this.details += " ; ";
        }
      }
      
    }
    this.step = invoice.step;
    this.invoice_date = invoice.invoice_date ? invoice.invoice_date : today.toISOString().substring(0,10);
    this.total_amount = invoice.total_amount;
    this.user = (invoice.user && invoice.user.first_name) ? invoice.user.first_name  : (invoice.user)? invoice.user: '';
    if (invoice.num_invoice) {
      this.num_invoice = invoice.num_invoice;
    }
    if (invoice.client_id) {
      this.client_id = invoice.client_id;
    }
    if (invoice.client) {
      this.client = invoice.client;
    }
    this.step = invoice.step;
    this.displayed_Date = this.formatDate(new Date(this.invoice_date));


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
