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
import { StockReplenishmentCreateUpdateComponent } from './stock-replenishment-create-update/stock-replenishment-create-update.component';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import {
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
import { ActivatedRoute } from '@angular/router';
import { StockReplenishment } from 'src/app/models/StockReplenishment';
import { StockReplenishmentsService } from 'src/app/services/StockReplenishment/stock-replenishments.service';
import { SitesService } from 'src/app/services/site/sites.service';
import { Site } from 'src/app/models/sites';
import { ProductsService } from 'src/app/services/product/products.service';
import { StokcsService } from 'src/app/services/stock/stokcs.service';
import { Stock } from 'src/app/models/stocks';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'vex-stock-replenishment',
  templateUrl: './stock-replenishment.component.html',
  styleUrls: ['./stock-replenishment.component.scss'],
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
export class StockReplenishmentComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');
  id!: number;
  site: Site = new Site();

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<StockReplenishment[]> = new ReplaySubject<StockReplenishment[]>(1);
  data$: Observable<StockReplenishment[]> = this.subject$.asObservable();
  stockReplenishments: StockReplenishment[] = [];

  @Input()
  columns: TableColumn<StockReplenishment>[] = [
    {
      label: 'Produit',
      property: 'product',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Quatité entrée',
      property: 'quantity_replenished',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    {
      label: 'Date Entrée',
      property: 'displayed_Date',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<StockReplenishment>;
  selection = new SelectionModel<StockReplenishment>(true, []);
  searchCtrl = new UntypedFormControl();


  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private siteService: SitesService,
    private productService: ProductsService,
    private stockService: StokcsService,
    private stockReplenishmentSercvice: StockReplenishmentsService,
    private snackbar: MatSnackBar,
  ) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData(site:Site) {
    return this.stockReplenishmentSercvice.getStockReplenishments(site).pipe(
      map((result: any) => {
        if (result.status===200) {
          this.stockReplenishments = result.stockReplenishments || [];
        }
        return this.stockReplenishments.map((stockReplenishments) => new StockReplenishment(stockReplenishments));
      })
    );
  }

  ngOnInit() {
    
    this.id = history.state.siteId;
    this.siteService.getSite(this.id).subscribe((result:any) => {
        this.site = new Site(result.data);
        this.getData(this.site).subscribe((stockReplenishments) => {
          this.subject$.next(stockReplenishments);
        });
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<StockReplenishment[]>(Boolean)).subscribe((stockReplenishments) => {
      this.stockReplenishments = stockReplenishments;
        this.dataSource.data = stockReplenishments;
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

  createStockReplenishment() {
    this.dialog
      .open(StockReplenishmentCreateUpdateComponent, {
        data: this.site
      })
      .afterClosed()
      .subscribe((stockReplenishment: StockReplenishment) => {
        if (stockReplenishment) {
          stockReplenishment.site_id = this.site.id;
          stockReplenishment.site = this.site.name;
          try {
            this.productService.checkProductExistsInStock(stockReplenishment.product_id,stockReplenishment.site_id).subscribe(
              (result:any) => {
                if (result["data"] === true) {
                  this.stockReplenishmentSercvice.addStockReplenishment(new StockReplenishment(stockReplenishment)).subscribe((result:any) => {
                    if (result.status === 200) {
                      
                          this.snackbar.open(
                            "Entrée Stock effectué avec succés",
                            'MERCI',
                            {
                              duration: 2000
                            }
                          );
                    }else{
                      this.snackbar.open(
                        "Echec Entrée Stock ",
                        'MERCI DE REESSAYER',
                        {
                          duration: 2000
                        }
                      );
                    }
                  });
                } else {
                  const stock = new Stock(stockReplenishment);
                  stock.quantity = 0;
                  this.stockService.addStock(stock).subscribe((result:any) => {
                    if (result["status "] === 200) {
                      this.stockReplenishmentSercvice.addStockReplenishment(new StockReplenishment(stockReplenishment)).subscribe((result:any) => {
                        if (result.status === 200) {
                          
                              this.snackbar.open(
                                "Entrée Stock effectué avec succés ",
                                'MERCI',
                                {
                                  duration: 2000
                                }
                              );
                        }else{
                          this.snackbar.open(
                            "Echec Entrée Stock ",
                            'MERCI DE REESSAYER',
                            {
                              duration: 2000
                            }
                          );
                        }
                      });
                    }else{
                      this.snackbar.open(
                        "Echec Entrée Stock effectué ",
                        'MERCI DE REESSAYER',
                        {
                          duration: 2000
                        }
                      );
              
                    }
                  });
                  
                }
              });
            this.stockReplenishments.unshift(new StockReplenishment(stockReplenishment));
            this.subject$.next(this.stockReplenishments);
          } catch (error) {
            this.snackbar.open(
              "Echec Entrée Stock",
              'MERCI DE REESSAYER',
              {
                duration: 2000
              }
            );
          }
          
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

  toggleColumnVisibility(column: TableColumn<StockReplenishment>, event: Event) {
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

  onLabelChange(change: MatSelectChange, row: StockReplenishment) {
    const index = this.stockReplenishments.findIndex((s) => s === row);
    this.subject$.next(this.stockReplenishments);
  }
}

