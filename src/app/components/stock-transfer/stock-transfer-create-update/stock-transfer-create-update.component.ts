import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormControl, Validators} from '@angular/forms';
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
import { MatOptionModule } from '@angular/material/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { SitesService } from 'src/app/services/site/sites.service';
import { Site } from 'src/app/models/sites';
import { StockTransfer } from 'src/app/models/StockTransfer';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'vex-stock-transfer-create-update',
  templateUrl: './stock-transfer-create-update.component.html',
  styleUrls: ['./stock-transfer-create-update.component.scss'],
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
export class StockTransferCreateUpdateComponent implements OnInit {
  static id = 100;
  newQuantity: number = 0;
  productId: number = 0;
  siteId: number = 0;
  productName: string = '';
  siteName: string = '';
  products: Product[] = [];
  sites: Site[] = [];
  source: Site = new Site();
  form = this.fb.group({
    id: [StockTransferCreateUpdateComponent.id++],
    destination_site_id: [0],
    destination_site: [ ''],
    source_site_id: [this.defaults?.id || ''],
    source_site: [this.defaults?.name || ''],
    product_id: [0],
    product: [''],
    quantity_transferred: [0, [Validators.required, Validators.min(1)]]
  });
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Site | undefined,
    private dialogRef: MatDialogRef<StockTransferCreateUpdateComponent>,
    private fb: FormBuilder,
    private productService: ProductsService,
    private siteService: SitesService,
  ) {}

  
  getProducts(site:Site) {
    return this.productService.getProducts().pipe(
      map((result: any) => {
        if (result.total) {
          this.products = result.data;
        }
        return this.products.map((product) => new Product(product));
      })
    );
  }

  getSites() {
    return this.siteService.getSites().pipe(
      map((result: any) => {
        if (result.total) {
          this.sites = result.data;
        }
        return this.sites.map((site) => new Site(site));
      })
    );
  }
  ngOnInit() {
    this.getProducts(new Site(this.defaults)).subscribe(products => {
      this.products = products;
      if (this.defaults) {
        this.mode = 'create';
        this.source = new Site(this.defaults);
      } else {
        this.defaults = {} as Site;
      }
    });
    this.getSites().subscribe(sites => {
      this.sites = sites;
    });
    
  }

  save() {
    if (this.mode === 'create') {
      this.createStockTransfer();
    }
  }

  createStockTransfer() {
    this.form.get('product_id')?.setValue(this.productId);
    this.form.get('product')?.setValue(this.productName);
    this.form.get('destination_site_id')?.setValue(this.siteId);
    this.form.get('destination_site')?.setValue(this.siteName);
    const stockTransfer = this.form.value;


    this.dialogRef.close(stockTransfer);
  }

  updateStock() {
  
    const stockTransfer = this.form.value;
    
    
    if (!this.defaults) {
      throw new Error(
        'stockTransfer ID does not exist, this stockTransfer cannot be updated'
      );
    }

    stockTransfer.id = this.defaults.id;
    this.dialogRef.close(stockTransfer);
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
  
  getSiteNameById(id: number): string {
    this.siteId=id;
    const site = this.sites.find(s => s.id === id);
    this.siteName = site ? site.name : '';
    return site ? site.name : '';
  }
  
  productCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  siteCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  
  
}


