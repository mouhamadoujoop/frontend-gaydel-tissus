import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { Depenses } from 'src/app/models/depenses';

@Component({
  selector: 'vex-depense-create-update',
  templateUrl: './depense-create-update.component.html',
  styleUrls: ['./depense-create-update.component.scss'],
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
export class DepenseCreateUpdateComponent implements OnInit {
  static id = 100;

  form = this.fb.group({
    id: [DepenseCreateUpdateComponent.id++],
    details: [this.defaults?.details, [Validators.required]],
    amount: [this.defaults?.amount, [Validators.required, Validators.min(1)]],
  });
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Depenses | undefined,
    private dialogRef: MatDialogRef<DepenseCreateUpdateComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Depenses;
    }

    this.form.patchValue(this.defaults);
  }

  save() {
    if (this.mode === 'create') {
      this.createDepense();
    } else if (this.mode === 'update') {
      this.updateDepense();
    }
  }

  createDepense() {
    const depense = this.form.value;


    this.dialogRef.close(depense);
  }

  updateDepense() {
    const depense = this.form.value;

    if (!this.defaults) {
      throw new Error(
        'Dépense ID does not exist, this Site cannot be updated'
      );
    }

    depense.id = this.defaults.id;

    this.dialogRef.close(depense);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}


