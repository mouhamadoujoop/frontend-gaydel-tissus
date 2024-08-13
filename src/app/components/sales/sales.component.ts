
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

import { SalesCreateUpdateComponent } from './sales-create-update/sales-create-update.component';
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

import { SalesService } from '../../services/sale/sales.service';
import { Account } from '../../models/accounts';
import { SitesCreateUpdateComponent } from '../sites/sites-create-update/sites-create-update.component';
import { Site } from '../../models/sites';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ClientsCreateUpdateComponent } from '../clients/clients-create-update/clients-create-update.component';
import { Client } from '../../models/clients';
import { User } from '../../models/user';
import { Sale } from '../../models/sales';
import { AccountsCreateUpdateComponent } from '../accounts/accounts-create-update/accounts-create-update.component';
import { Transaction } from '../../models/transactions';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { Product } from '../../models/products';
import { ProductsCreateUpdateComponent } from '../products/products-create-update/products-create-update.component';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'vex-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
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
export class SalesComponent implements OnInit, AfterViewInit {
  layoutCtrl = new FormControl('boxed');
  subject$: ReplaySubject<Sale[]> = new ReplaySubject<Sale[]>(1);
  data$: Observable<Sale[]> = this.subject$.asObservable();
  @Input()
  columns: TableColumn<Sale>[] = [
    {
      label: 'Site',
      property: 'site_id',
      type: 'text',
      visible: true
    },
    {
      label: 'Nom Produit',
      property: 'product',
      type: 'text',
      visible: true
    },
    {
      label: 'Quantité Solde',
      property: 'quantity_sold',
      type: 'text',
      visible: true
    },
    {
      label: 'Prix Unitaire',
      property: 'pU',
      type: 'text',
      visible: true
    },
    {
      label: 'Date',
      property: 'callDate',
      type: 'text',
      visible: true
    }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Sale>;
  selection = new SelectionModel<Sale>(true, []);
  searchCtrl = new UntypedFormControl();


  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  site_id!:number;
  userConnected!: any;
  siteName !: string;
  salesList: Sale [] = [];
  public loading = false;


  constructor(private dialog: MatDialog,
              private salesService: SalesService,
              private snackbar: MatSnackBar,

              // private localStorage: LocalStorageService
  ) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  getSalesBySite(){
    return this.salesService.getSalesById(this.site_id).pipe(map((res:any) => {
        this.siteName = res['data'][0].site.name;
        this.salesList = res.data;
        return this.salesList.map((sale)=>new Sale(sale));

    })
    );
  }

  ngOnInit() {
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.site_id = this.userConnected.site_id;
    // this.getSalesBySite();
    this.getSalesBySite().subscribe((sales) => {
      this.subject$.next(sales);
     });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<any>(Boolean)).subscribe((sales) => {
      this.salesList = sales;
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
      .open(SalesCreateUpdateComponent)
      .afterClosed()
      .subscribe((sale: Sale) => {
        if (sale) {
          this.loading = true;
          sale.site_id = this.site_id;
          sale.step = 0;
          this.salesService.addSales(new Sale(sale)).subscribe((result:any) => {
            if (result.status === 200) {
              this.loading = false;
              this.salesList.unshift(result.data);
              this.subject$.next(this.salesList);
              this.snackbar.open(
                "Vente créé ajouté avec success",
                'MERCI',
                {
                  duration: 1000
                }
              );
            }else{
              this.loading = false;


              this.snackbar.open(
                "Echec Ajout Client",
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
  updateSale(sale: Sale) {
    this.dialog
      .open(SalesCreateUpdateComponent, {
        data: sale
      })
      .afterClosed()
      .subscribe((updateSale) => {

        if (updateSale) {
          sale.site_id = this.site_id;
          sale.step = 0;
          this.salesService.updateSale(updateSale).subscribe((result:any) => {
            if (result.data ) {
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

}


