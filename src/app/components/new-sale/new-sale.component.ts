import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableColumn } from '@vex/interfaces/table-column.interface';

import { NewSaleCreateUpdateComponent } from './new-sale-create-update/new-sale-create-update.component';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  Validators
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';

import { SalesService } from '../../services/sale/sales.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Sale } from '../../models/sales';
import { Product } from '../../models/products';
import { Client } from 'src/app/models/clients';
import { ClientsService } from 'src/app/services/client/clients.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Roles } from 'src/app/models/roles';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';

@Component({
  selector: 'vex-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss'],
  standalone : true,
  animations: [fadeInUp400ms, stagger40ms],
  imports: [
    VexPageLayoutComponent,
    VexPageLayoutHeaderDirective,
    VexBreadcrumbsComponent,
    MatButtonToggleModule,
    ReactiveFormsModule,
    VexPageLayoutContentDirective,
    NgIf,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    NgFor,
    NgClass,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class NewSaleComponent implements OnInit, AfterViewInit {
  layoutCtrl = new FormControl('boxed');
  subject$: ReplaySubject<Sale[]> = new ReplaySubject<Sale[]>(1);
  data$: Observable<Sale[]> = this.subject$.asObservable();
  @Input()
  columns: TableColumn<Sale>[] = [
    {
      label: 'Nom Produit',
      property: 'product',
      type: 'text',
      visible: true
    },
    {
      label: 'Quantité Vendu',
      property: 'quantity_sold',
      type: 'text',
      visible: true
    },
    {
      label: 'Prix Unitaire(FCFA)',
      property: 'pU',
      type: 'text',
      visible: true
    },
    {
      label: 'Prix Total(FCFA)',
      property: 'pTotal',
      type: 'text',
      visible: true
    },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Sale>;
  selection = new SelectionModel<Sale>(true, []);
  searchCtrl = new UntypedFormControl();
  form = this.fb.group({
    amount_payed: [0, [Validators.required, Validators.min(1)]],
  });


  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  site_id!:number;
  invoice_id : number = 0;
  clientId:number=0;
  userConnected!: any;
  siteName !: string;
  salesList: Sale [] = [];
  client !: Client;
  totalVente: number = 0;
  userRoles!: Roles;



  constructor(private dialog: MatDialog,
              private salesService: SalesService,
              private invoiceService: InvoiceService,
              private clientsService: ClientsService,
              private snackbar: MatSnackBar,
              private fb: FormBuilder,
              private localStorage: LocalStorageService
  ) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  getSaleByInvoice(){
    return this.salesService.getSaleByInvoice(this.invoice_id).pipe(map((res:any) => {
        this.salesList = res.data;
        return this.salesList.map((sale)=>new Sale(sale));

    })
    );
  }

  getClient(clientId:any){
    return this.clientsService.getClientById(clientId).pipe(map((res:any) => {
        this.client = new Client(res.data);
        
    })
    );
  }

  getClientInvoice(clientId:any){
    return this.clientsService.getClientInvoice(clientId).pipe(map((res:any) => {
      if (res.status === 200) {
        this.invoice_id = res.data.id;
        this.getSaleByInvoice().subscribe((sales) => {
          this.subject$.next(sales);
         });
        
      }
        
    })
    );
  }

  ngOnInit() {
    this.userRoles = new Roles(JSON.parse(this.localStorage.getData('dataRole') ?? 'null'));
    if (history.state.clientId) {
      this.clientId=history.state.clientId;
      this.getClient(this.clientId).subscribe((client) => {
        this.getClientInvoice(this.client.id).subscribe((invoice) => {

        });
       });
      
    }else{
      if (history.state.invoiceId) {
        this.invoice_id = history.state.invoiceId;
        this.getSaleByInvoice().subscribe((sales) => {
          this.subject$.next(sales);
          if(this.salesList[0].client_id){
            this.clientId = this.salesList[0].client_id;
            this.getClient(this.clientId).subscribe((client) => {
              this.client = new Client(client);
             });
          }
         });
        
      }

    }
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.site_id = this.userConnected.site_id;
    

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<any>(Boolean)).subscribe((sales) => {
      this.salesList = sales;
      this.totalVente = this.salesList.reduce((total, sale) => total + sale.quantity_sold*sale.pU, 0);
      this.dataSource.data = sales;
    });

    this.searchCtrl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
  createSale() {
    this.dialog
      .open(NewSaleCreateUpdateComponent)
      .afterClosed()
      .subscribe((sale: Sale) => {
        if (sale) {
          if(this.clientId!==0){
            sale.client_id = this.clientId;
          }
          sale.site_id = this.site_id;
          const newSale= new Sale(sale);
          if (this.invoice_id === 0) {
            newSale.step = 0;
            this.salesService.addSales(newSale).subscribe((result:any) => {
              console.log(result);
              this.snackbar.open(
                result.message,
                'MERCI',
                {
                  duration: 1500
                }
              );
              if (result.status === 200) {
                this.invoice_id = result.data.invoice_id;
                newSale.id = result.data.id;
                this.salesList.unshift(newSale);
                this.subject$.next(this.salesList);
                
              }
            });
          } else {
            newSale.invoice_id = this.invoice_id;
            
            newSale.step = 0;
            this.salesService.addSales(newSale).subscribe((result:any) => {
              console.log(result);
              this.snackbar.open(
                result.message,
                'MERCI',
                {
                  duration: 1500
                }
              );
              if (result.status === 200) {
                this.invoice_id = result.data.invoice_id;
                newSale.id = result.data.id;
                this.salesList.unshift(newSale);
                this.subject$.next(this.salesList);
              }
            });
            
          }
          
        }
        
        
      });
  }
  updateSale(sale: Sale) {
    this.dialog
      .open(NewSaleCreateUpdateComponent, {
        data: sale
      })
      .afterClosed()
      .subscribe((updateSale) => {

        if (updateSale) {
          
          sale.site_id = this.site_id;
          sale.step = 0;
          this.salesService.updateSale(new Sale(updateSale)).subscribe((result:any) => {
            if (result.status === 200 ) {
              const index = this.salesList.findIndex(
                (existingSale) => existingSale.id === updateSale.id
              );
              this.salesList[index] = new Sale(updateSale);
              this.subject$.next(this.salesList);
              this.snackbar.open(

                "Vente modifier avec succés",

                'MERCI',
                {
                  duration: 1000
                }
              );
            }else{
              this.snackbar.open(
                "Echec Modification Vente",
                'MERCI DE REESSAYER',
                {
                  duration: 1000
                }
              );

            }
          });

        }
      });
  }
  deleteSale(sale: Sale) {
    
    this.salesService.deleteSale(sale).subscribe((result:any) => {
      if (result.status === 200 ) {
        this.salesList.splice(
          this.salesList.findIndex(
            (existingSale) => existingSale.id === sale.id
          ),
          1
        );
        this.selection.deselect(sale);
        this.subject$.next(this.salesList);
        this.snackbar.open(

          "Vente Supprimer avec succés",

          'MERCI',
          {
            duration: 1000
          }
        );
      }else{
        this.snackbar.open(
          "Echec Suppression Vente",
          'MERCI DE REESSAYER',
          {
            duration: 1000
          }
        );

      }
    });
    //
    // this.salesList.splice(
    //   this.salesList.findIndex(
    //     (existingSale) => existingSale.id === sale.id
    //   ),
    //   1
    // );
    // this.selection.deselect(sale);
    // this.subject$.next(this.salesList);
  }
*
  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column: TableColumn<Product>, event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Sale) {
    const index = this.salesList.findIndex((s) => s === row);
    this.subject$.next(this.salesList);
  }

  payer(){

    console.log(this.form.get('amount_payed')?.value);
    const amount = this.form.get('amount_payed')?.value;
    if (amount) {
      this.invoiceService.validateClientInvoice(this.invoice_id,amount).subscribe((result:any) => {
        if (result.status == 200 ) {
          
          this.snackbar.open(
  
            "Vente Effectuer avec succés",
  
            'MERCI',
            {
              duration: 1000
            }
          );
        }else{
          this.snackbar.open(
            "Echec Vente",
            'MERCI DE REESSAYER',
            {
              duration: 1000
            }
          );
  
        }
      });
    }
    
    
  }
}


