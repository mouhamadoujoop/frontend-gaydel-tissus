
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { Roles } from '../../../models/roles';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'vex-roles-create-update',
  templateUrl: './roles-create-update.component.html',
  styleUrls: ['./roles-create-update.component.scss'],
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
    MatInputModule
  ]
})
export class RolesCreateUpdateComponent implements OnInit {
  static id = 100;

  form = this.fb.group({
    id: [RolesCreateUpdateComponent.id++],
    role_name: [this.defaults?.role_name || '']
  });
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Roles | undefined,
    private dialogRef: MatDialogRef<RolesCreateUpdateComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Roles;
    }

    this.form.patchValue(this.defaults);
  }

  save() {
    if (this.mode === 'create') {
      this.createRoles();
    } else if (this.mode === 'update') {
      this.updateRoles();
    }
  }

  createRoles() {
    const roles = this.form.value;


    this.dialogRef.close(roles);
  }

  updateRoles() {
    const roles = this.form.value;

    if (!this.defaults) {
      throw new Error(
        'Roles ID does not exist, this roles cannot be updated'
      );
    }

    roles.id = this.defaults.id;

    this.dialogRef.close(roles);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}

