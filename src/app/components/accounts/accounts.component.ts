import {
  AfterViewInit,
  Component, DestroyRef,
  inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Account } from '../../models/accounts';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { AccountsCreateUpdateComponent } from './accounts-create-update/accounts-create-update.component';
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
import { Router } from '@angular/router';
import { AccountsService } from '../../services/account/accounts.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ClientsCreateUpdateComponent } from '../clients/clients-create-update/clients-create-update.component';
import { Client } from '../../models/clients';
import { SalesCreateUpdateComponent } from '../sales/sales-create-update/sales-create-update.component';
import { Sale } from '../../models/sales';
import { SalesService } from '../../services/sale/sales.service';

@Component({
  selector: 'vex-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  standalone: true,
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
export class AccountsComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');

  subject$: ReplaySubject<Account[]> = new ReplaySubject<Account[]>(1);
  data$: Observable<Account[]> = this.subject$.asObservable();
  accounts: Account[] = [];
  site_id!:number;
  userConnected!: any;
  public loading = false;


  @Input()
  columns: TableColumn<Account>[] = [
    {
      label: 'Checkbox',
      property: 'checkbox',
      type: 'checkbox',
      visible: true
    },
    {
      label: 'Client',
      property: 'client',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },
    {
      label: 'Solde',
      property: 'balance',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Account>;
  selection = new SelectionModel<Account>(true, []);
  searchCtrl = new UntypedFormControl();

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef = inject(DestroyRef);

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private accountsService: AccountsService,
    private snackbar: MatSnackBar,
    private salesService:SalesService
  ) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  getData() {
    return this.accountsService.getAccounts().pipe(
      map((result: any) => {
        this.accounts = result.data;
        return this.accounts.map((account) => new Account(account));
      })
    );
  }
  ngOnInit() {
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.site_id = this.userConnected.site_id;
    this.getData().subscribe((accounts) => {
      this.subject$.next(accounts);
    });
    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Account[]>(Boolean)).subscribe((accounts) => {
      this.accounts = accounts;
      this.dataSource.data = accounts;
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
  createAccount() {
    this.dialog
      .open(AccountsCreateUpdateComponent)
      .afterClosed()
      .subscribe((account: Account) => {
        if (account) {
          this.loading = true;
          this.accountsService.addAccount(account).subscribe((result:any) => {
            if (result.status === 200) {
              this.loading = false;
              this.accounts.unshift(new Account(account));
              this.subject$.next(this.accounts);
              this.snackbar.open(
                "Client créé ajouté avec success",
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
  updateAccount(account: Account) {
    this.dialog
      .open(AccountsCreateUpdateComponent, {
        data: account
      })
      .afterClosed()
      .subscribe((updateAccount) => {
        if (updateAccount) {
          console.log(updateAccount);
          this.accountsService.updateAccount(updateAccount).subscribe((result:any) => {
            // if (result.status === 200)

            const index = this.accounts.findIndex(
              (existingAccount) => existingAccount.id === updateAccount.id
            );
            this.accounts[index] = new Account(updateAccount);
            this.subject$.next(this.accounts);
            this.snackbar.open(
              "Compte modifier avec succés",
              'MERCI',
              {
                duration: 1000
              }
            );

          });

        }

      });
  }


  deleteAccount(account: Account) {
    this.accounts.splice(
      this.accounts.findIndex(
        (existingAccount) => existingAccount.id === account.id
      ),
      1
    );
    this.selection.deselect(account);
    this.subject$.next(this.accounts);
  }

  deleteAccounts(accounts: Account[]) {
    accounts.forEach((a) => this.deleteAccount(a));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column: TableColumn<Account>, event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Account) {
    const index = this.accounts.findIndex((a) => a === row);
    this.subject$.next(this.accounts);
  }
  AccountsClient(client: Client){
    this.router.navigate(['/accounts'], { state: {id: client.id}})
  }
  transactionAccounts(account: Account) {
    this.router.navigate(['/transactions'], { state: { id: account.id } });
  }


  createSale(account: any) {
    const client_id = account.client_id;

    this.dialog.open(SalesCreateUpdateComponent)
    .afterClosed()
    .subscribe((sale: Sale) => {
      if (sale) {
        sale.site_id = this.site_id;
        sale.client_id = client_id;
        sale.step = 0;
        this.salesService.addSales(new Sale(sale)).subscribe((result:any) => {
          if (result.status === 200) {
            this.snackbar.open(
              "Vente créé ajouté avec success",
              'MERCI',
              {
                duration: 1000
              }
            );
          }else{
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
}
