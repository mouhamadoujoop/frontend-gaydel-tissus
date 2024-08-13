

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { Client } from '../../../models/clients';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { AccountsService } from '../../../services/account/accounts.service';
import { Product } from '../../../models/products';
import { SalesCreateUpdateComponent } from '../../sales/sales-create-update/sales-create-update.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'vex-clients-create-update',
  templateUrl: './clients-create-update.component.html',
  styleUrls: ['./clients-create-update.component.scss'],
  standalone : true,
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
    MatAutocompleteModule
  ]
})
export class ClientsCreateUpdateComponent implements OnInit {
  static id = 100;

  form = this.fb.group({
    id: [ClientsCreateUpdateComponent.id++],
    full_name: [this.defaults?.full_name || ''],
    phone: [this.defaults?.phone || ''],
    address: [this.defaults?.address || '']
  });
  mode: 'create' | 'update' = 'create';


  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Client | undefined,
    private dialogRef: MatDialogRef<ClientsCreateUpdateComponent>,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private AccountService: AccountsService
  ) {}

  ngOnInit() {

    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Client;
    }

    this.form.patchValue(this.defaults);
  }

  save() {
    if (this.mode === 'create') {
      this.createClient();
    } else if (this.mode === 'update') {
      this.updateClient();
    }
  }

  createClient() {
    const clients = this.form.value;


    this.dialogRef.close(clients);
  }

  updateClient() {
    const clients = this.form.value;

    if (!this.defaults) {
      throw new Error(
        'Client ID does not exist, this roles cannot be updated'
      );
    }

    clients.id = this.defaults.id;

    this.dialogRef.close(clients);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
  showSiteField = false;
  // onSubmit() {
  //   if (this.form.valid) {
  //     const account:any= this.form.value;
  //     // Logique pour créer ou éditer le compte client
  //     this.AccountService.addAccountToClient(this.data.clientId, account).subscribe();
  //   }
  // }

}


