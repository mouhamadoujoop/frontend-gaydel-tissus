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

import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl
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

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Product } from '../../models/products';
import { Invoices } from 'src/app/models/invoices';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { User } from 'src/app/models/user';
import { Roles } from 'src/app/models/roles';
import { PdfServiceService } from 'src/app/services/pdf/pdf-service.service';
import { ClientsService } from 'src/app/services/client/clients.service';
import { SalesService } from 'src/app/services/sale/sales.service';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'vex-current-sale',
  templateUrl: './current-sale.component.html',
  styleUrls: ['./current-sale.component.scss'],
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
    MatSnackBarModule,
    NgxLoadingModule
  ]
})
export class CurrentSaleComponent implements OnInit, AfterViewInit {
  layoutCtrl = new FormControl('boxed');
  subject$: ReplaySubject<Invoices[]> = new ReplaySubject<Invoices[]>(1);
  data$: Observable<Invoices[]> = this.subject$.asObservable();
  @Input()
  // columns: TableColumn<Invoices>[] = [
  //   {
  //     label: 'Numéro Facture',
  //     property: 'num_invoice',
  //     type: 'text',
  //     visible: this.step === 1 // Visibility condition
  //   },
  //   {
  //     label: 'Montant Facture',
  //     property: 'total_amount',
  //     type: 'text',
  //     visible: true
  //   },
  //   {
  //     label: 'Détails',
  //     property: 'details',
  //     type: 'text',
  //     visible: true
  //   },
  //   { label: 'Actions', property: 'actions', type: 'button', visible: true }
  // ];

  columns: TableColumn<Invoices>[] = [];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Invoices>;
  selection = new SelectionModel<Invoices>(true, []);
  searchCtrl = new UntypedFormControl();


  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  step:number=0;
  siteId:number=0;
  invoices: Invoices [] = [];
  dataRole:any = []; // pour recuperer le localStorage
  userRoles!: Roles;
  totalVente: number = 0;



  constructor(
    private router: Router,
    private dialog: MatDialog,
    private invoiceService: InvoiceService,
    private snackbar: MatSnackBar,
    private localStorage: LocalStorageService,
    private pdfServiceService: PdfServiceService,
    private salesService: SalesService,
    private clientsService: ClientsService,
    // public loading = false
  ) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  getInvoicByStep(){
    return this.invoiceService.getInvoicByStep(this.step,this.siteId).pipe(map((res:any) => {
        this.invoices = res.data;
        return this.invoices.map((invoice)=>new Invoices(invoice));


    })
    );
  }

  updateColumnVisibility(){
    this.columns = [
      {
        label: 'Numéro Facture',
        property: 'num_invoice',
        type: 'text',
        visible: this.step === 1 // Visibility condition
      },
      {
        label: 'Montant Facture(FCFA)',
        property: 'total_amount',
        type: 'text',
        visible: true
      },
      {
        label: 'Détails',
        property: 'details',
        type: 'text',
        visible: true
      },
      { label: 'Actions', property: 'actions', type: 'button', visible: this.step === 0 }
    ];
  }

  ngOnInit() {
    this.userRoles = new Roles(JSON.parse(this.localStorage.getData('dataRole') ?? 'null'));

    if (history.state.siteId) {
      this.step=1;
      this.siteId=history.state.siteId;

    }else{
      const localStorageService = LocalStorageService.getInstance();
      const userData = localStorageService.getData('dataUser');
      const userInfo = userData ? new User(JSON.parse(userData)) : new User({ id: null, first_name: 'Unknown', last_name: 'User' });
      this.siteId=userInfo.site_id;
    }
    this.getInvoicByStep().subscribe((invoices) => {
      this.subject$.next(invoices);

      this.totalVente = this.invoices.reduce((total, invoice) => total + invoice.total_amount, 0);
    });

    this.updateColumnVisibility();
    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<any>(Boolean)).subscribe((invoices) => {
      this.invoices = invoices;
      this.dataSource.data = invoices;
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


  deleteSale(sale: Invoices) {
    console.log(sale);

    // this.invoiceService.deleteSale(sale).subscribe((result:any) => {
    //   if (result.status === 200 ) {
    //     this.invoices.splice(
    //       this.invoices.findIndex(
    //         (existingSale) => existingSale.id === sale.id
    //       ),
    //       1
    //     );
    //     this.selection.deselect(sale);
    //     this.subject$.next(this.invoices);
    //     this.snackbar.open(

    //       "Vente Supprimer avec succés",

    //       'MERCI',
    //       {
    //         duration: 1000
    //       }
    //     );
    //   }else{
    //     this.snackbar.open(
    //       "Echec Suppression Vente",
    //       'MERCI DE REESSAYER',
    //       {
    //         duration: 1000
    //       }
    //     );

    //   }
    // });
    //
    // this.invoices.splice(
    //   this.invoices.findIndex(
    //     (existingSale) => existingSale.id === sale.id
    //   ),
    //   1
    // );
    // this.selection.deselect(sale);
    // this.subject$.next(this.invoices);
  }

  updateInvoice(invoice:Invoices){
    this.router.navigate(['/new-sale'], { state: { invoiceId: invoice.id } });

  }

  validateInvoice(invoice:Invoices){
    this.invoiceService.validateInvoice(invoice).subscribe((result:any) => {
      if (result.data) {
        this.invoices.splice(
          this.invoices.findIndex(
            (existingInvoice) => existingInvoice.id === invoice.id
          ),
          1
        );
        this.selection.deselect(invoice);
        this.subject$.next(this.invoices);
        // this.getSaleByInvoice(invoice.id);
        // this.router.navigate(['/pdf'], { state: { numInvoice: invoice.num_invoice} });
      }
    });

  }

  getSaleByInvoice(invoiceId: number){
    this.salesService.getSaleByInvoice(invoiceId).subscribe((res: any) => {
        this.pdfServiceService.saveData(res.data);
        if(res.data[0].client_id){
          this.getClient(res.data[0].client_id);
        }

    });
  }


  getClient(clientId:any){
    this.clientsService.getClientById(clientId).subscribe((res: any) => {
      this.pdfServiceService.saveClient(res.data);

    });
  }

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

  onLabelChange(change: MatSelectChange, row: Invoices) {
    const index = this.invoices.findIndex((s) => s === row);
    this.subject$.next(this.invoices);
  }

}


