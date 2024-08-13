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
import { Site } from 'src/app/models/sites';

@Component({
  selector: 'vex-stock-replenishment-create-update',
  templateUrl: './stock-replenishment-create-update.component.html',
  styleUrls: ['./stock-replenishment-create-update.component.scss'],
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
export class StockReplenishmentCreateUpdateComponent implements OnInit {
  static id = 100;
  newQuantity: number = 0;
  productId: number = 0;
  productName: string = '';
  products: Product[] = [];
  form = this.fb.group({
    id: [StockReplenishmentCreateUpdateComponent.id++],
    site_id: [this.defaults?.id || 0],
    site: [this.defaults?.name || ''],
    product_id: [ 0],
    product: [''],
    quantity: [0, [Validators.required, Validators.min(1)]],
    threshold: [10 , [Validators.required, Validators.min(1)]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Site | undefined,
    private dialogRef: MatDialogRef<StockReplenishmentCreateUpdateComponent>,
    private fb: FormBuilder,
    private productService: ProductsService,
  ) {}

  
  getProducts() {
    return this.productService.getProducts().pipe(
      map((result: any) => {
        if (result.total) {
          this.products = result.data;
        }
        return this.products.map((product) => new Product(product));
      })
    );
  }
  ngOnInit() {
    this.getProducts().subscribe(products => {
      this.products = products;
    });
    
  }

  save() {
      this.createReplenishment();
  }

  createReplenishment() {
    this.form.get('product_id')?.setValue(this.productId);
    this.form.get('product')?.setValue(this.productName);
    const stock = this.form.value;


    this.dialogRef.close(stock);
  }

  

  
  getProductNameById(id: number): string {
    this.productId=id;
    const product = this.products.find(p => p.id === id);
    this.productName = product ? product.name : '';
    return product ? product.name : '';
  }
  
  productCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  
}


