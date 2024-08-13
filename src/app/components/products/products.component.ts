
import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from '../../models/products';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { ProductsCreateUpdateComponent } from './products-create-update/products-create-update.component';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from 'src/app/services/product/products.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'vex-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone : true,
  animations: [fadeInUp400ms, stagger40ms],
  imports: [
    VexPageLayoutComponent,
    VexPageLayoutHeaderDirective,
    VexBreadcrumbsComponent,
    MatButtonToggleModule,
    ReactiveFormsModule,
    VexPageLayoutContentDirective,
    NgIf,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    NgFor,
    NgClass,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    NgxLoadingModule
  ]
})
export class ProductsComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Product[]> = new ReplaySubject<Product[]>(1);
  data$: Observable<Product[]> = this.subject$.asObservable();
  products: Product[] = [];

  @Input()
  columns: TableColumn<Product>[] = [
    {
      label: 'Articles',
      property: 'name',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Qualité',
      property: 'quality',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    {
      label: 'Conversion(Kg-m)',
      property: 'conversion_rate',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Product>;
  selection = new SelectionModel<Product>(true, []);
  searchCtrl = new UntypedFormControl();
  public loading = false;

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private dialog: MatDialog,
    private productService: ProductsService,
    private snackbar: MatSnackBar,
  ) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
    getData() {
      return this.productService.getProducts().pipe(
        map((result: any) => {
          if (result.total) {
            this.products = result.data || [];
          }
          return this.products.map((product) => new Product(product));
        })
      );
    }

  ngOnInit() {
    this.getData().subscribe((products) => {
      this.subject$.next(products);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Product[]>(Boolean)).subscribe((products) => {
      this.products = products;
        this.dataSource.data = products;
    });

    this.searchCtrl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  createProduct() {
    this.dialog
      .open(ProductsCreateUpdateComponent)
      .afterClosed()
      .subscribe((product: Product) => {
        if (product) {
          this.loading = true;
          this.productService.addProduct(product).subscribe((result:any) => {
            if (result.status === 200) {
              this.loading = false;
              this.products.unshift(new Product(product));
              this.subject$.next(this.products);
              this.snackbar.open(
                "Produit ajouter avec succés",
                'MERCI',
                {
                  duration: 1000
                }
              );
            }else{
              this.loading = false;
              this.snackbar.open(
                "Echec Ajout Produit",
                'MERCI DE REESSAYER',
                {
                  duration: 1000
                }
              );

            }
          });
        }
      });
  }

  updateProduct(product: Product) {
    this.dialog
      .open(ProductsCreateUpdateComponent, {
        data: product
      })
      .afterClosed()
      .subscribe((updatedProduct) => {

        if (updatedProduct) {
          this.productService.updateProduct(updatedProduct).subscribe((result:any) => {
            if (result.status === 200) {
              const index = this.products.findIndex(
                (existingProduct) => existingProduct.id === updatedProduct.id
              );
              this.products[index] = new Product(updatedProduct);
              this.subject$.next(this.products);
              this.snackbar.open(
                "Produit modifier avec succés",
                'MERCI',
                {
                  duration: 1000
                }
              );
            }else{
              this.snackbar.open(
                "Echec Modification Produit",
                'MERCI DE REESSAYER',
                {
                  duration: 1000
                }
              );

            }
          });

        }
      });
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column: TableColumn<Product>, event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Product) {
    const index = this.products.findIndex((p) => p === row);
    //this.products[index].labels = change.value;
    this.subject$.next(this.products);
  }
}

