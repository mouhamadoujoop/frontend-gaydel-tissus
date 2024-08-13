
import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { catchError, Observable, of, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Transaction } from '../../models/transactions';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { TransactionsCreateUpdateComponent } from './transactions-create-update/transactions-create-update.component';
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
import { Account } from '../../models/accounts';
import { TransactionsService } from '../../services/transaction/transactions.service';
import { Client } from '../../models/clients';
import { SitesCreateUpdateComponent } from '../sites/sites-create-update/sites-create-update.component';
import { Site } from '../../models/sites';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Sale } from '../../models/sales';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'vex-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
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
export class TransactionsComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Transaction[]> = new ReplaySubject<Transaction[]>(1);
  data$: Observable<Transaction[]> = this.subject$.asObservable();
  transactions: Transaction[] = [];
  userConnected!: any;
  site_id!:number;
  siteName !: string;
  public loading = false;
  @Input()
  columns: TableColumn<Transaction>[] = [
    {
      label: 'Client',
      property: 'client',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Type de transaction',
      property: 'type',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },
    {
      label: 'Montant à Regler',
      property: 'amount_settled',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },
    {
      label: 'Date',
      property: 'callDate',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Transaction>;
  selection = new SelectionModel<Transaction>(true, []);
  searchCtrl = new UntypedFormControl();


  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  id:number = 0;
  constructor(
    private dialog: MatDialog,
    private transactionService: TransactionsService,
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
  getData() {
    return this.transactionService.getTransactionAccountID(this.id).pipe(
      map((result: any) => {
        {
          this.transactions = result.data;
          console.log(result);

        }

        return this.transactions.map((transaction) => new Transaction(transaction));
      })
    );}
  getTransactions() {
    return this.transactionService.getAllTransactions().pipe(
      map(result => {
        this.transactions = result.data;
        return this.transactions.map(transaction => new Transaction(transaction));
      }),
    );
  }

  ngOnInit() {
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.site_id = this.userConnected.site_id;
    if (history.state.id ) {
      this.id = history.state.id;
      if (history.state.site){
        this.getTodayTransactionBySite().subscribe(transactions => {
          this.subject$.next(transactions);
        });
      }else {
        this.getData().subscribe(transactions => {
          this.subject$.next(transactions);
        });
      }
    } else {
      this.getTransactions().subscribe(transactions => {
        this.subject$.next(transactions);
      });
    }

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Transaction[]>(Boolean)).subscribe(transactions => {
      this.transactions = transactions;
      this.dataSource.data = transactions;
    });

    this.searchCtrl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => this.onFilterChange(value));
  }
  getTodayTransactionBySite(){
         return this.transactionService.getTodayTransactionBySite(this.id).pipe(map((res:any) => {
        this.transactions = res.data;
        return this.transactions.map((transaction)=>new Transaction(transaction));

      })
    );
  }
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  createTransaction() {
    this.dialog
      .open(TransactionsCreateUpdateComponent)
      .afterClosed()
      .subscribe((transaction: Transaction) => {
        if (transaction) {
          this.loading = true;
          transaction.user_id = this.userConnected.id;


          this.transactionService.AddTransactions(new Transaction(transaction)).subscribe((result:any) => {
            if (result.status === 200) {
              this.loading = false;
              this.transactions.unshift(new Transaction(transaction));
              this.subject$.next(this.transactions);
              this.snackbar.open(
                "Transaction ajouter avec succés",
                'MERCI',
                {
                  duration: 1000
                }
              );
            }else{
              this.loading = false;
              this.snackbar.open(
                result.message,
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
  updateTransaction(transaction: Transaction) {
    this.dialog
      .open(TransactionsCreateUpdateComponent, {
        data: transaction
      })
      .afterClosed()
      .subscribe((updateTransaction) => {

        if (updateTransaction) {

          const index = this.transactions.findIndex(
            (existingTransaction) => existingTransaction.id === updateTransaction.id
          );
          this.transactions[index] = new Transaction(updateTransaction);
          this.subject$.next(this.transactions);
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

  toggleColumnVisibility(column: TableColumn<Transaction>, event: Event) {
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

  onLabelChange(change: MatSelectChange, row: Transaction) {
    const index = this.transactions.findIndex((t) => t === row);
    this.subject$.next(this.transactions);
  }
}

