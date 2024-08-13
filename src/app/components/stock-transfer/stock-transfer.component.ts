import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { forkJoin, Observable, of, ReplaySubject } from 'rxjs';
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
import { SitesService } from 'src/app/services/site/sites.service';
import { Site } from 'src/app/models/sites';
import { StockTransfer } from 'src/app/models/StockTransfer';
import { StokcTransfersService } from 'src/app/services/stockTransfer/stokc-transfers.service';
import { StockTransferCreateUpdateComponent } from './stock-transfer-create-update/stock-transfer-create-update.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'vex-stock-transfer',
  templateUrl: './stock-transfer.component.html',
  styleUrls: ['./stock-transfer.component.scss'],
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
export class StockTransferComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');
  id!: number;
  site: Site = new Site();

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<StockTransfer[]> = new ReplaySubject<StockTransfer[]>(1);
  data$: Observable<StockTransfer[]> = this.subject$.asObservable();
  stockTransfers: StockTransfer[] = [];

  @Input()
  columns: TableColumn<StockTransfer>[] = [
    {
      label: 'Produit',
      property: 'product',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Destination',
      property: 'destination',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Source' ,
      property: 'source' ,
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Quatité transférée',
      property: 'quantity_transferred',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    {
      label: 'Date transfère',
      property: 'displayed_Date',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<StockTransfer>;
  selection = new SelectionModel<StockTransfer>(true, []);
  searchCtrl = new UntypedFormControl();


  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private siteService: SitesService,
    private stockTransferService: StokcTransfersService,
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
  getData(site: Site) {
    const received$ = this.stockTransferService.getStockTransfersReceived(site).pipe(
      map((result: any) => {
        if (result.status === 200) {
          return result.stockTransfersReceived || [];
        }
        return [];
      })
    );
  
    const initiated$ = this.stockTransferService.getStockTransfersInitiated(site).pipe(
      map((result: any) => {
        if (result.status === 200) {
          return result.stockTransfersInitiated || [];
        }
        return [];
      })
    );
  
    return forkJoin([received$, initiated$]).pipe(
      map(([receivedTransfers, initiatedTransfers]) => {
        this.stockTransfers = [...receivedTransfers, ...initiatedTransfers];
        return this.stockTransfers.map(stockTransfer => new StockTransfer(stockTransfer));
      })
    );
  }

  ngOnInit() {
    
    this.id = history.state.siteId;
    this.siteService.getSite(this.id).subscribe((result:any) => {
        this.site = new Site(result.data);
        this.getData(this.site).subscribe((stockTransfers) => {
          this.subject$.next(stockTransfers);
        });
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<StockTransfer[]>(Boolean)).subscribe((stockTransfers) => {
      this.stockTransfers = stockTransfers;
        this.dataSource.data = stockTransfers;
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

  createStockTransfer() {
    this.dialog
      .open(StockTransferCreateUpdateComponent,{
        data: this.site})
      .afterClosed()
      .subscribe((stockTransfer: StockTransfer) => {
        if (stockTransfer) {
          this.stockTransferService.transferStock(new StockTransfer(stockTransfer)).subscribe({
            next: (result: any) => {
              this.stockTransfers.unshift(new StockTransfer(stockTransfer));
              this.subject$.next(this.stockTransfers);
              if (result) {
                console.log(result.message);
                this.snackbar.open(
                  result.message,
                  'MERCI DE REESSAYER',
                  {
                    duration: 2000
                  }
                );
              }
            },
            error: (error: any) => {
              console.error(error);
              this.snackbar.open(
                error.error.message,
                'MERCI DE REESSAYER',
                {
                  duration: 10000
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

  toggleColumnVisibility(column: TableColumn<StockTransfer>, event: Event) {
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

  onLabelChange(change: MatSelectChange, row: StockTransfer) {
    const index = this.stockTransfers.findIndex((s) => s === row);
    this.subject$.next(this.stockTransfers);
  }
}

