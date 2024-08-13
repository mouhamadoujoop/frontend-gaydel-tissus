
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { Transaction } from '../../../models/transactions';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Client } from '../../../models/clients';
import { Account } from '../../../models/accounts';
import { map } from 'rxjs';
import { ClientsService } from '../../../services/client/clients.service';
import { AccountsService } from '../../../services/account/accounts.service';
import { Site } from '../../../models/sites';

@Component({
  selector: 'vex-transactions-create-update',
  templateUrl: './transactions-create-update.component.html',
  styleUrls: ['./transactions-create-update.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    NgIf,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgForOf
  ]
})
export class TransactionsCreateUpdateComponent implements OnInit {
   id :number = 0;
  clients: Client[] = [];
  accounts: Account[] = [];
  site_id!:number;
  accountId!:number;
  userConnected!: any;
  siteName: string ="";
  clientName: string ="";
  sites:  Site[] = [] ;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Transaction | undefined,
    private dialogRef: MatDialogRef<TransactionsCreateUpdateComponent>,
    private fb: FormBuilder,
    private clientService: ClientsService,
    private accountService: AccountsService,
  )
  {
    this.form = this.fb.group({
      id: [0, Validators.required],
      site_id: [this.defaults?.site_id || ''],
      site: [this.defaults?.site || ''],
      client: [this.defaults?.client || '', Validators.required],
      account_id: [this.defaults?.account_id || ''],
      type: [this.defaults?.type || '', Validators.required],
      amount_settled: [this.defaults?.amount_settled || '', [Validators.required, Validators.min(1)]],
      transaction_date: [this.defaults?.transaction_date],
      step: [this.defaults?.step]

    });

    this.form.get('account_id')?.valueChanges.subscribe(value => {
      if (value) {
        this.getClientNameByAccountId(value);
      }
    });
  }

  getClientsBySite() {
    return this.clientService.getClientsBySite(this.site_id).pipe(
      map((result: any) => {
        this.clients = result.data;

        return this.clients.map((client) => new Client(client));
      })
    );
  }
  getAccounts() {
    // Assuming the API provides the accounts
    return this.accountService.getAccounts().pipe(
      map((result: any) => {
        this.accounts = result.data.map((account: any) => new Account(account));
        return this.accounts;
      })
    );
  }
  ngOnInit() {
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.site_id = this.userConnected.site_id;
    this.getClientsBySite().subscribe(clients => {
      this.clients = clients;
      if (this.defaults) {
        this.mode = 'update';
      } else {
        this.defaults = {} as Transaction;
      }
      this.form.patchValue(this.defaults);
    });

    this.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }


  save() {
    if (this.mode === 'create') {
      this.createTransaction();
    } else if (this.mode === 'update') {
      this.updateTransaction();
    }
  }

  createTransaction() {
    this.form.get('account_id')?.setValue(this.accountId);
    const transactions = this.form.value;
    this.dialogRef.close(transactions);
  }

  updateTransaction() {
    const transactions = this.form.value;

    if (!this.defaults) {
      throw new Error(
        'Transaction ID does not exist, this roles cannot be updated'
      );
    }

    transactions.id = this.defaults.id;

    this.dialogRef.close(transactions);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
  getClientNameByAccountId(accountId: number): string {
    this.accountId= accountId;
    const account = this.accounts.find(a => a.id === accountId);
    const client = account ? this.clients.find(c => c.id === account.client_id) : undefined;
    this.clientName = client ? client.full_name : '';
    this.form.get('client')?.setValue(this.clientName);
    return client ? client.full_name : '';
  }
  clientCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  showSiteField = false;
  getSiteNameById(id: number): string {
    this.site_id=id;
    const site = this.sites.find(s => s.id === id);
    this.siteName = site ? site.name : '';
    return site ? site.name : '';
  }
  siteCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);

}

