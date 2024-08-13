

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { Product } from '../../../models/products';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'vex-products-create-update',
  templateUrl: './products-create-update.component.html',
  styleUrls: ['./products-create-update.component.scss'],
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
export class ProductsCreateUpdateComponent implements OnInit {
  static id = 100;

  form = this.fb.group({
    id: [ProductsCreateUpdateComponent.id++],
    name: [this.defaults?.name , [Validators.required]],
    quality: [this.defaults?.quality , [Validators.required]],
    conversion_rate: [this.defaults?.conversion_rate , [Validators.required, Validators.min(0)]]
  });
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Product | undefined,
    private dialogRef: MatDialogRef<ProductsCreateUpdateComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Product;
    }

    this.form.patchValue(this.defaults);
  }

  save() {
    if (this.mode === 'create') {
      this.createProduct();
    } else if (this.mode === 'update') {
      this.updateProduct();
    }
  }

  createProduct() {
    const products = this.form.value;


    this.dialogRef.close(products);
  }

  updateProduct() {
    const products = this.form.value;

    if (!this.defaults) {
      throw new Error(
        'Product ID does not exist, this roles cannot be updated'
      );
    }

    products.id = this.defaults.id;

    this.dialogRef.close(products);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}

