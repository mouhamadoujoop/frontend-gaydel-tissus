import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Invoices } from 'src/app/models/invoices';
import { Sale } from 'src/app/models/sales';
import { Observable, ReplaySubject, filter, map } from 'rxjs';
import { VexConfigService } from '@vex/config/vex-config.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SalesService } from 'src/app/services/sale/sales.service';
import { ClientsService } from 'src/app/services/client/clients.service';
import { Client } from 'src/app/models/clients';
import { PdfServiceService } from 'src/app/services/pdf/pdf-service.service';

@Component({
  selector: 'vex-pdf-invoices',
  templateUrl: './pdf-invoices.component.html',
  styleUrls: ['./pdf-invoices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
  standalone: true,
  providers: [DatePipe],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    NgFor,
    NgClass,
    MatCheckboxModule,
    RouterLink,
    MatSnackBarModule,
    AsyncPipe
  ]
})

export class PdfInvoicesComponent  implements OnInit{
  subject$: ReplaySubject<Sale[]> = new ReplaySubject<Sale[]>(1);
  data$: Observable<Sale[]> = this.subject$.asObservable();
  today: Date = new Date();
  formattedDate: string='';
  numInvoice: number = 0;
  totalVente : number = 0;
  invoice!: Invoices ;
  sales: Sale[]=[] ;
  sale!: Sale ;
  dataUser:any = []; // pour recuperer le localStorage
  dataSales:any = []; 
  client!: Client;
  imageUrl$ = this.configService.config$.pipe(
    map((config) => config.sidenav.imageUrl)
  );

  @ViewChild('htmlData') htmlData!: ElementRef;

constructor(
  private router: Router,
  private localStorage: LocalStorageService,
  private pdfServiceService: PdfServiceService,
  private configService: VexConfigService,
  private datePipe: DatePipe
) {}

  
  
  
  ngOnInit(): void {
    if (history.state.numInvoice) {
      const formatted = this.datePipe.transform(this.today, 'dd:MM:yyyy');
      this.formattedDate = formatted ? formatted : '';
      this.numInvoice=history.state.numInvoice;
    
      this.dataSales = this.pdfServiceService.getData();
      this.sales = JSON.parse(this.dataSales);
      this.sales.map((sale)=>new Sale(sale));
     console.log(this.sales);
     
      

    
     this.openPDF(); 
    }
    
  }
  public openPDF(): void {
    setTimeout(() => {
      const printContentElement = document.getElementById('htmlData');
      if (printContentElement) {
        const styles = Array.from(document.styleSheets)
        .map(sheet => {
          try {
            return Array.from(sheet.cssRules)
              .map(rule => rule.cssText)
              .join('');
          } catch (e) {
            console.error(e);
            return '';
          }
        })
        .join('');
        const printContent = printContentElement.innerHTML;
        const printWindow = window.open('', '_blank');
        
        
        
        if (printWindow) {
          printWindow.document.write('<html><head><title>Facture PDF</title>');
          printWindow.document.write(`<style>${styles}</style>`);
          printWindow.document.write('</head><body>');
          printWindow.document.write(printContent);
          printWindow.document.write('</body></html>');
          printWindow.document.close();
    
          // Wait for the content to be fully loaded before printing
          printWindow.onload = () => {
            printWindow.print();
            // printWindow.close();
          };
        }
      } else {
        console.error('Element with id "htmlData" not found.');
      }
    }, 10);
    
    

    // setTimeout(() => {
    //   let DATA: any = document.getElementById('htmlData');
    //   if (DATA) {
    //     html2canvas(DATA).then(canvas => {
    //         const imageData = canvas.toDataURL('image/png');
      
    //         const printWindow = window.open('', '_blank');
    //         if (printWindow) {
    //           printWindow.document.open();
    //           printWindow.document.write(`
    //             <html>
    //               <head>
    //                 <title>Print Content</title>
    //                 <style>
    //                   /* Add any custom CSS styles here */
    //                   body { font-family: Arial, sans-serif; }
    //                   /* Example styles */
    //                   .content { padding: 20px; }
    //                 </style>
    //               </head>
    //               <body onload="window.print(); window.close(); ">
    //                 <div class="content">
    //                   <img src="${imageData}" style="width: 100%;" />
    //                 </div>
    //               </body>
    //             </html>
    //           `);
    //           printWindow.document.close();
    //           // this.router.navigate(['/current-sale']);
    //         } else {
    //           console.error('Failed to open print window.');
    //         }
         
    //     });
        
    //   }
    // }, 10);
  }
 

}