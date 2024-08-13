
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { Sale } from '../../../models/sales';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { map, Observable, startWith } from 'rxjs';
import { Product } from '../../../models/products';
import { Client } from '../../../models/clients';
import { ProductsService } from '../../../services/product/products.service';
import { Account } from '../../../models/accounts';
import { Site } from '../../../models/sites';
import { SitesService } from '../../../services/site/sites.service';
import { SalesService } from '../../../services/sale/sales.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { defaults } from 'autoprefixer';

@Component({
  selector: 'vex-sales-create-update',
  templateUrl: './sales-create-update.component.html',
  styleUrls: ['./sales-create-update.component.scss'],
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
    AsyncPipe,
    MatAutocompleteModule,
    MatOptionModule,
    NgForOf
  ]
})
export class SalesCreateUpdateComponent implements OnInit {
   id = 0;
  siteId: number=0;
  siteName: string ="";
  productId : number=0;
  products:  Product[] = [] ;
  sites:  Site[] = [] ;
  productName: string = "";


  form = this.fb.group({
    id: [0, Validators.required],
    site_id: [this.defaults?.site_id || ''],
    site: [this.defaults?.site || ''],
    product_id: [this.defaults?.product_id || ''],
    product: [this.defaults?.product || ''],
    pU: [this.defaults?.pU|| '',[Validators.required, Validators.min(1)]],
    quantity_sold: [this.defaults?.quantity_sold,[Validators.required, Validators.min(1)]],
    sale_date: [this.defaults?.sale_date, [Validators.required]],
    step: [this.defaults?.step, [Validators.required]]
  });
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Sale | undefined,
    private dialogRef: MatDialogRef<SalesCreateUpdateComponent>,
    private fb: FormBuilder,
    private productService: ProductsService,
    private siteService: SitesService,
    private salesService: SalesService,
    private snackbar: MatSnackBar
  ) {}
  getProducts() {
    return this.productService.getProducts().pipe(
      map((result: any) => {
        this.products = result.data;

        return this.products.map((product) => new Product(product));
      })
    );
  }
  getSites() {
    return this.siteService.getSites().pipe(
      map((result: any) => {
        this.sites = result.data;

        return this.sites.map((site) => new Site(site));
      })
    );
  }
  ngOnInit() {
    this.getProducts().subscribe(products => {
      this.products = products;
      this.getSites().subscribe(sites => {
        this.sites = sites;
        if (this.defaults) {
          this.mode = 'update';
        } else {
          this.defaults = {} as Sale;
        }
        this.form.patchValue(this.defaults);
      });
    });

  }
  save() {
    if (this.mode === 'create') {
      this.createSale();
      let sale = new Sale(this.form.value);

    } else if (this.mode === 'update') {
      this.updateSale();
    }
  }
  createSale() {
    this.form.get('product_id')?.setValue(this.productId);
    this.form.get('product')?.setValue(this.productName);
    this.form.get('site_id')?.setValue(this.siteId);
    this.form.get('site')?.setValue(this.siteName);
    const sale = this.form.value;


    this.dialogRef.close(sale);
  }
  updateSale() {
    const sales = this.form.value;
    const quantity_sold = Number(this.form.get('quantity_sold')?.value || 0);

    if (!this.defaults) {
      throw new Error(
        'sales ID does not exist, this roles cannot be updated'
      );
    }

    sales.id = this.defaults.id;
    this.dialogRef.close(sales);
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
  getSiteNameById(id: number): string {
    this.siteId=id;
    const site = this.sites.find(s => s.id === id);
    this.siteName = site ? site.name : '';
    return site ? site.name : '';
  }
  siteCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  showSiteField = false;
}

