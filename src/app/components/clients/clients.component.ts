
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
import { Client } from '../../models/clients';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { ClientsCreateUpdateComponent } from './clients-create-update/clients-create-update.component';
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
import { AccountsService } from '../../services/account/accounts.service';
import { AccountsCreateUpdateComponent } from '../accounts/accounts-create-update/accounts-create-update.component';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ClientsService } from '../../services/client/clients.service';
import { SalesCreateUpdateComponent } from '../sales/sales-create-update/sales-create-update.component';
import { Sale } from 'src/app/models/sales';
import { SalesService } from 'src/app/services/sale/sales.service';
import { Roles } from 'src/app/models/roles';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'vex-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
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
export class ClientsComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Client[]> = new ReplaySubject<Client[]>(1);
  data$: Observable<Client[]> = this.subject$.asObservable();
  clients: Client[] = [];
  userRoles!: Roles;

  @Input()
  columns: TableColumn<Client>[] = [
    {
      label: 'Client',
      property: 'full_name',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Téléphone',
      property: 'phone',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },
    {
      label: 'Addresse',
      property: 'address',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
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
  dataSource!: MatTableDataSource<Client>;
  selection = new SelectionModel<Client>(true, []);
  searchCtrl = new UntypedFormControl();
  site_id!:number;
  userConnected!: any;
  siteName !: string;
  public loading = false;


  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
              private dialog: MatDialog,
              private AccountsService: AccountsService,
              private clientService: ClientsService,
              private accountsService: AccountsService,
              private snackbar: MatSnackBar,
              private router: Router,
              private salesService:SalesService,
              private localStorage: LocalStorageService
            ) {
  }

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
    return this.clientService.getClientsBySite(this.site_id).pipe(
      map((result: any) => {
       {
         this.siteName = result['data'][0].site.name;
          this.clients = result.data;

        }

        return this.clients.map((client) => new Client(client));
      })
    );
  }
  ngOnInit() {
    this.userRoles = new Roles(JSON.parse(this.localStorage.getData('dataRole') ?? 'null'));
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.site_id = this.userConnected.site_id;
    this.getData().subscribe((clients) => {
      this.subject$.next(clients);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Client[]>(Boolean)).subscribe((clients) => {
      this.clients = clients;
      this.dataSource.data = clients;
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

  createClient() {
    this.dialog
      .open(ClientsCreateUpdateComponent)
      .afterClosed()
      .subscribe((client: Client) => {
        if (client) {
          this.loading = true;
          client.site_id = this.site_id;
          try {this.clientService.addClients(client).subscribe((result:any) => {
            if (result.status === 200) {


              const account = new Account( {
                'client_id': result.client.id,
                'balance': 0,
                'client': result.client,
              });

              this.accountsService.addAccount(account).subscribe((result:any) => {
                if (result.status === 200) {
                  this.loading = false;
                  this.clients.unshift(new Client(client));
                  this.subject$.next(this.clients);
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

          } catch (error) {

          }

        }
      });
  }

  updateClient(client: Client) {
    this.dialog
      .open(ClientsCreateUpdateComponent, {
        data: client
      })
      .afterClosed()
      .subscribe((updateClient) => {
        if (updateClient) {
          this.clientService.updateClient(updateClient).subscribe((result:any) => {
            // if (result.status === 200)
              const index = this.clients.findIndex(
                (existingClient) => existingClient.id === updateClient.id
              );
              this.clients[index] = new Client(updateClient);
              this.subject$.next(this.clients);
              this.snackbar.open(
                "Client modifier avec succés",
                'MERCI',
                {
                  duration: 1000
                }
              );

          });

        }

      });
  }

  deleteClient(client: Client) {

    this.clients.splice(
      this.clients.findIndex(
        (existingClient) => existingClient.id === client.id
      ),
      1
    );
    this.selection.deselect(client);
    this.subject$.next(this.clients);
  }

  deleteClients(clients: Client[]) {

    clients.forEach((c) => this.deleteClient(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column: TableColumn<Client>, event: Event) {
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

  onLabelChange(change: MatSelectChange, row: Client) {
    const index = this.clients.findIndex((c) => c === row);
    //this.products[index].labels = change.value;
    this.subject$.next(this.clients);
  }

  //variable dans client(hasAccount par defaut =0)

  createAccount(client: Client) {
    this.dialog.open(AccountsCreateUpdateComponent, {
      data: { id: client.id, isEdit: false }
    }).afterClosed().subscribe((account: Account) => {
      // if (account) {
      //   this.AccountsService.addAccountToClient(client.id, account).subscribe();
      // }
    });
  }
  createSale(account: any) {
    const client_id = account;


    this.router.navigate(['/new-sale'], { state: { clientId: client_id} });


  }
  transactionAccounts(client: Client) {
    this.router.navigate(['/transactions'], { state: { id: client.account_id } });
  }


}

