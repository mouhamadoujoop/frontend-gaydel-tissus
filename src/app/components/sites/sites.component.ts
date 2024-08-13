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
import { Site } from '../../models/sites';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { SitesCreateUpdateComponent } from './sites-create-update/sites-create-update.component';
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
import { Router } from '@angular/router';
import { SitesService } from 'src/app/services/site/sites.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Account } from '../../models/accounts';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'vex-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
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
export class SitesComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Site[]> = new ReplaySubject<Site[]>(1);
  data$: Observable<Site[]> = this.subject$.asObservable();
  sites: Site[] = [];

  @Input()
  columns: TableColumn<Site>[] = [
    {
      label: 'Site',
      property: 'name',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Adresse',
      property: 'address',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Site>;
  selection = new SelectionModel<Site>(true, []);
  searchCtrl = new UntypedFormControl();
  public loading = false;
  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private siteService: SitesService,
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
    return this.siteService.getSites().pipe(
      map((result: any) => {
        if (result.total) {
          this.sites = result.data || [];
        }
        return this.sites.map((site) => new Site(site));
      })
    );
  }

  ngOnInit() {
    this.getData().subscribe((sites) => {
      this.subject$.next(sites);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Site[]>(Boolean)).subscribe((sites) => {
      this.sites = sites;
        this.dataSource.data = sites;
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

  createSite() {
    this.dialog
      .open(SitesCreateUpdateComponent)
      .afterClosed()
      .subscribe((site: Site) => {
        if (site) {
          this.loading = true;
          this.siteService.addSite(site).subscribe((result:any) => {
            this.sites.unshift(new Site(site));
            this.subject$.next(this.sites);
            if (result["status "] === 200) {
              this.loading = false
              this.snackbar.open(
                "Site ajouter avec succés",
                'MERCI',
                {
                  duration: 2000
                }
              );
            }else{
              this.loading = false;
              this.snackbar.open(
                "Echec Ajout Site",
                'MERCI DE REESSAYER',
                {
                  duration: 2000
                }
              );

            }
          });
        }
      });
  }

  updateSite(site: Site) {
    this.dialog
      .open(SitesCreateUpdateComponent, {
        data: site
      })
      .afterClosed()
      .subscribe((updatedSite) => {

        if (updatedSite) {
          this.siteService.updateSite(updatedSite).subscribe((result:any) => {
            if (result.status === 200) {
              const index = this.sites.findIndex(
                (existingSite) =>  existingSite.id === updatedSite.id
              );
              this.sites[index] = new Site(updatedSite);
              this.subject$.next(this.sites);
              this.snackbar.open(
                "Site modifier avec succés",
                'MERCI',
                {
                  duration: 2000
                }
              );
            }else{
              this.snackbar.open(
                "Echec Modification Site",
                'MERCI DE REESSAYER',
                {
                  duration: 2000
                }
              );

            }
          });
        }
      });
  }

  stockSite(site: Site) {
    this.router.navigate(['/stocks'], { state: { siteId: site.id } });
    // this.router.navigate(['/stocks', site.id]);
  }

  stockEntree(site: Site) {
    this.router.navigate(['/entrees'], { state: { siteId: site.id } });
  }

  stockDeplacement(site: Site) {
    this.router.navigate(['/deplacements'], { state: { siteId: site.id } });
  }
  // transactionAccounts(site: Site) {
  //   this.router.navigate(['/transactions'], { state: { siteId: site.id } });
  // }
  getTodayTransactionBySite(site: Site) {
    this.router.navigate(['/transactions'], { state: { id: site.id, site:true} });
  }

  getTodaySalesBySite(site: Site) {
    this.router.navigate(['/current-sale'], { state: { siteId: site.id} });
  }

  getTodayExpensesBySite(site: Site) {
    this.router.navigate(['/depenses'], { state: { siteId: site.id} });
  }
  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column: TableColumn<Site>, event: Event) {
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

  onLabelChange(change: MatSelectChange, row: Site) {
    const index = this.sites.findIndex((s) => s === row);
    this.subject$.next(this.sites);
  }
}

