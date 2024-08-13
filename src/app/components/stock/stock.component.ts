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
import { Stock } from '../../models/stocks';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { StockCreateUpdateComponent } from './stock-create-update/stock-create-update.component';
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
import { Site } from '../../models/sites';
import { SitesService } from 'src/app/services/site/sites.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { StokcsService } from 'src/app/services/stock/stokcs.service';
import { StockReplenishment } from 'src/app/models/StockReplenishment';
import { StockReplenishmentsService } from 'src/app/services/StockReplenishment/stock-replenishments.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'vex-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
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
export class StockComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');
  id!: number;
  site: Site = new Site();

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Stock[]> = new ReplaySubject<Stock[]>(1);
  data$: Observable<Stock[]> = this.subject$.asObservable();
  stocks: Stock[] = [];

  @Input()
  columns: TableColumn<Stock>[] = [
    {
      label: 'Produit',
      property: 'product',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Quatité en Stock',
      property: 'quantity',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    {
      label: 'Quatité Seuil',
      property: 'threshold',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Stock>;
  selection = new SelectionModel<Stock>(true, []);
  searchCtrl = new UntypedFormControl();
  public loading = false;

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private siteService: SitesService,
    private stockService: StokcsService,
    private stockReplenishment: StockReplenishmentsService,
    private snackbar: MatSnackBar,
    private localStorage: LocalStorageService,
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
    return this.siteService.getSiteStocks(site).pipe(
      map((result: any) => {
        if (result.status===200) {
          this.stocks = result.stocks || [];
        }
        return this.stocks.map((stock) => new Stock(stock));
      })
    );
  }

  ngOnInit() {
    // this.id = Number(this.route.snapshot.params['id']);
    this.id = history.state.siteId;
    this.siteService.getSite(this.id).subscribe((result:any) => {
        this.site = new Site(result.data);
        this.getData(this.site).subscribe((stocks) => {
          this.subject$.next(stocks);
        });
    });


    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Stock[]>(Boolean)).subscribe((stocks) => {
      this.stocks = stocks;
        this.dataSource.data = stocks;
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

  createStock() {

    this.localStorage.saveData('site', this.site.id);

    this.dialog
      .open(StockCreateUpdateComponent)
      .afterClosed()
      .subscribe((stock: Stock) => {
        if (stock) {
          this.loading = true;
          stock.site_id=this.site.id;
          const newStock = new Stock(stock);

          if (this.stocks.find(s => s.product_id === newStock.product_id)) {
            const stockReplenishment = new StockReplenishment(stock);
            console.log(stockReplenishment);
            const index = this.stocks.findIndex(
              (existingStock) => existingStock.product_id === stock.product_id
            );
            this.stocks[index].quantity += new Stock(stock).quantity;
            this.subject$.next(this.stocks);

              this.stockReplenishment.addStockReplenishment(stockReplenishment).subscribe((result:any) => {
                if (result.status === 200) {
                      this.loading = false;
                      this.snackbar.open(
                        "Stock effectué avec succés ",
                        'MERCI',
                        {
                          duration: 2000
                        }
                      );
                }else{
                  this.loading = false;
                  this.snackbar.open(
                    "Echec Ajout Stock ",
                    'MERCI DE REESSAYER',
                    {
                      duration: 2000
                    }
                  );
                }
              });

          }else{
            this.loading =false;
            this.stocks.unshift(new Stock(stock));
            this.subject$.next(this.stocks);
            newStock.quantity=0;
            this.stockService.addStock(newStock).subscribe((result:any) => {
              if (result["status "] === 200) {
                this.loading = false;
                this.stockReplenishment.addStockReplenishment(new StockReplenishment(stock)).subscribe((result:any) => {
                  if (result.status === 200) {
                        this.loading = false;
                        this.snackbar.open(
                          "Stock ajouté avec succés ",
                          'MERCI',
                          {
                            duration: 2000
                          }
                        );
                  }else{
                    this.loading = false;
                    this.snackbar.open(
                      "Echec Ajout Stock ",
                      'MERCI DE REESSAYER',
                      {
                        duration: 2000
                      }
                    );
                  }
                });
              }else{
                this.loading = false;
                this.snackbar.open(
                  "Echec Ajout Stock effectué ",
                  'MERCI DE REESSAYER',
                  {
                    duration: 2000
                  }
                );

              }
            });
          }


        }
      });
  }

  updateStock(stock: Stock) {
    this.dialog
      .open(StockCreateUpdateComponent, {
        data: stock
      })
      .afterClosed()
      .subscribe((updateStock) => {

        if (updateStock) {
          this.loading = true;
          const stockReplenishment = new StockReplenishment(updateStock);
          this.stockReplenishment.addStockReplenishment(stockReplenishment).subscribe((result:any) => {
            if (result.status === 200) {
              this.loading = false;
              const index = this.stocks.findIndex(
                (existingStock) => existingStock.id === updateStock.id
              );
              this.stocks[index].quantity += new Stock(updateStock).quantity;
              this.subject$.next(this.stocks);
              this.loading = false;
              this.snackbar.open(

                "Stock ajouter avec succés",
                'MERCI',
                {
                  duration: 2000
                }
              );
            }else{
              this.loading = false;
              this.snackbar.open(
                "Echec Ajout Stock",
                'MERCI DE REESSAYER',
                {
                  duration: 2000
                }
              );
            }
          });


        }
      });
  }

  deleteStock(stock: Stock) {

    this.stocks.splice(
      this.stocks.findIndex(
        (existingStock) => existingStock.id === stock.id
      ),
      1
    );
    this.selection.deselect(stock);
    this.subject$.next(this.stocks);
  }

  deleteStocks(stocks: Stock[]) {

    stocks.forEach((s) => this.deleteStock(s));
  }



  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column: TableColumn<Stock>, event: Event) {
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

  onLabelChange(change: MatSelectChange, row: Stock) {
    const index = this.stocks.findIndex((s) => s === row);
    this.subject$.next(this.stocks);
  }
}

