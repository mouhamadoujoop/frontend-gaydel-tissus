
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { Account } from '../../../models/accounts';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { map, Observable, startWith } from 'rxjs';
import { Product } from '../../../models/products';
import { Client } from '../../../models/clients';
import { ClientsService } from '../../../services/client/clients.service';

@Component({
  selector: 'vex-accounts-create-update',
  templateUrl: './accounts-create-update.component.html',
  styleUrls: ['./accounts-create-update.component.scss'],
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
    MatSnackBarModule,
    AsyncPipe,
    MatAutocompleteModule,
    MatOptionModule,
    NgForOf
  ]
})
export class AccountsCreateUpdateComponent implements OnInit {
  static id = 100;
  clientId : number=0;
  clients:  Client[] = [] ;
  clientName: string = "";
  userConnected! : any
  site_id! : number
  form = this.fb.group({
    id: [AccountsCreateUpdateComponent.id++],
    balance: [this.defaults?.balance, [Validators.required, Validators.min(1)]],
    client_id: [this.defaults?.client_id || ''],
    client: [this.defaults?.client || ''],

    // full_name: [this.defaults?.full_name || ''],
    // client_id: [this.defaults?.client_id || ''],
    // balance: [this.defaults?.balance || 0, [Validators.required, Validators.min(0)]],
    // paymentOrAdvance: [0, [Validators.required, Validators.min(0)]]

});

  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Account | undefined,
    private dialogRef: MatDialogRef<AccountsCreateUpdateComponent>,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private clientService: ClientsService
  ) {}
  getClientsBySite() {
    return this.clientService.getClientsBySite(this.site_id).pipe(
      map((result: any) => {
          this.clients = result.data;

        return this.clients.map((client) => new Client(client));
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
        this.defaults = {} as Account;
      }
      this.form.patchValue(this.defaults);
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createAccount();
    } else if (this.mode === 'update') {
      this.updateAccount();
    }
  }

  createAccount() {
    this.form.get('client_id')?.setValue(this.clientId);
    this.form.get('client')?.setValue(this.clientName);
    const account = this.form.value;
    this.dialogRef.close(account);
  }

  updateAccount() {
    const account = this.form.value;
    console.log(account);
    if (!this.defaults) {
      throw new Error(
        'Account ID does not exist, this account cannot be updated'
      );
    }

    account.id = this.defaults.id;

    this.dialogRef.close(account);
  }

    isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
  getClientNameById(id: number): string {
    this.clientId=id;
    const client = this.clients.find(c => c.id === id);
    this.clientName = client ? client.full_name : '';
    return client ? client.full_name : '';
  }
  clientCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);


}

