import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormControl, Validators} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { Stock } from '../../../models/stocks';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Product } from '../../../models/products';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { ProductsService } from 'src/app/services/product/products.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'vex-stock-create-update',
  templateUrl: './stock-create-update.component.html',
  styleUrls: ['./stock-create-update.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDialogModule,
    NgFor,
    NgIf,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    AsyncPipe
  ]
})
export class StockCreateUpdateComponent implements OnInit {
  static id = 100;
  newQuantity: number = 0;
  siteId: number = 0;
  productId: number = 0;
  productName: string = '';
  products: Product[] = [];
  form = this.fb.group({
    id: [StockCreateUpdateComponent.id++],
    site_id: [this.defaults?.site_id || ''],
    site: [this.defaults?.site || ''],
    product_id: [this.defaults?.product_id || ''],
    product: [this.defaults?.product || ''],
    quantity: [this.defaults?.quantity, [Validators.required, Validators.min(0)]],
    threshold: [this.defaults?.threshold , [Validators.required, Validators.min(1)]],
    newQuantity: [this.newQuantity || '']
  });
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Stock | undefined,
    private dialogRef: MatDialogRef<StockCreateUpdateComponent>,
    private fb: FormBuilder,
    private productService: ProductsService,
    private localStorage: LocalStorageService,
  ) {}

  
  getProducts() {
    return this.productService.getProductNotInStock(this.siteId).pipe(
      map((result: any) => {
        this.products = result.data;
        return this.products.map((product) => new Product(product));
      })
    );
  }
  ngOnInit() {
    this.siteId = Number(this.localStorage.getData('site'));
    this.localStorage.removeData('site');
    this.getProducts().subscribe(products => {
      this.products = products;
      if (this.defaults) {
        this.mode = 'update';
        this.form.addControl('newQuantity', new UntypedFormControl(this.newQuantity, [Validators.required, Validators.min(1)]));
      } else {
        this.defaults = {} as Stock;
      }
      this.form.patchValue(this.defaults);
    });
    
  }

  save() {
    if (this.mode === 'create') {
      this.createStock();
    } else if (this.mode === 'update') {
      this.updateStock();
    }
  }

  createStock() {
    this.form.get('product_id')?.setValue(this.productId);
    this.form.get('product')?.setValue(this.productName);
    const stock = this.form.value;


    this.dialogRef.close(stock);
  }

  updateStock() {
  const newQuantity = Number(this.form.get('newQuantity')?.value || 0);
  
  this.form.get('quantity')?.setValue(newQuantity);
  
    const stock = this.form.value;
    
    
    if (!this.defaults) {
      throw new Error(
        'Stock ID does not exist, this Stock cannot be updated'
      );
    }

    stock.id = this.defaults.id;
    this.dialogRef.close(stock);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
  
  getProductNameById(id: number): string {
    this.productId=id;
    const product = this.products.find(p => p.id === id);
    this.productName = product ? product.name : '';
    return product ? product.name : '';
  }
  
  productCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  
}


