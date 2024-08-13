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
import { Depenses } from '../../models/depenses';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { DepenseCreateUpdateComponent } from './depense-create-update/depense-create-update.component';
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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DepenseService } from 'src/app/services/depenses/depense.service';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Site } from 'src/app/models/sites';
import { SitesService } from 'src/app/services/site/sites.service';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'vex-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss'],
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
export class DepenseComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Depenses[]> = new ReplaySubject<Depenses[]>(1);
  data$: Observable<Depenses[]> = this.subject$.asObservable();
  depenses: Depenses[] = [];
  user!: User;
  site!: Site;
  totalDepense: number = 0;
  siteId: number = 0;
  public loading = false;

  @Input()
  columns: TableColumn<Depenses>[] = [
    {
      label: 'Détails',
      property: 'details',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Montant(FCFA)',
      property: 'amount',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    // {
    //   label: 'Fait Par',
    //   property: ,
    //   type: 'text',
    //   visible: true,
    //   cssClasses: ['text-secondary', 'font-medium']
    // },

    {
      label: 'Date',
      property: 'displayed_Date',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Depenses>;
  selection = new SelectionModel<Depenses>(true, []);
  searchCtrl = new UntypedFormControl();

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private depenseService: DepenseService,
    private snackbar: MatSnackBar,
    private siteService: SitesService,
    private localStorage: LocalStorageService,

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
  getData(site:number) {
    return this.depenseService.getDepensesSites(site).pipe(
      map((result: any) => {
          this.depenses = result.dailyExpenses || [];
          return this.depenses.map((depense) => new Depenses(depense));

      })
    );
  }
  getSite(site:number) {
    return this.siteService.getSite(site).pipe(
      map((result: any) => {
          this.site = new Site(result.data);
      })
    );
  }

  ngOnInit() {
    this.user = new User(JSON.parse(this.localStorage.getData('dataUser') ?? 'null'));
    if (history.state.siteId) {
      this.siteId=history.state.siteId;

    }else{
      this.siteId=this.user.site_id;
    }
    if (this.user) {
      this.getData(this.siteId).subscribe((depenses) => {
        this.subject$.next(depenses);
      });
      this.getSite(this.siteId).subscribe((site) => {
      });

    }


    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Depenses[]>(Boolean)).subscribe((depenses) => {
      this.depenses = depenses;
      this.totalDepense = this.depenses.reduce((total, depense) => total + depense.amount, 0);
        this.dataSource.data = depenses;
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

  createDepense() {
    this.dialog
      .open(DepenseCreateUpdateComponent)
      .afterClosed()
      .subscribe((depense: Depenses) => {
        if (depense) {
          this.loading = true;
          depense.site_id = this.user.site_id;
          const newDepense = new Depenses(depense);
          this.depenseService.addDepense(newDepense).subscribe((result:any) => {
            if (result.status === 200) {
              this.loading = false;
              this.depenses.unshift( newDepense);
              this.subject$.next(this.depenses);
              this.snackbar.open(
                "Dépense Ajouter avec succés",
                'MERCI',
                {
                  duration: 2000
                }
              );
            }else{
              this.loading = false;
              this.snackbar.open(
                "Echec Ajout Dépenses",
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

  updateDepense(depense: Depenses) {
    this.dialog
      .open(DepenseCreateUpdateComponent, {
        data: depense
      })
      .afterClosed()
      .subscribe((updatedDepense) => {

        if (updatedDepense) {
          this.depenseService.updateDepense(updatedDepense).subscribe((result:any) => {
            if (result.status === 200) {
              const index = this.depenses.findIndex(
                (existingSite) =>  existingSite.id === updatedDepense.id
              );
              this.depenses[index] = new Depenses(updatedDepense);
              this.subject$.next(this.depenses);
              this.snackbar.open(
                "Dépense modifier avec succés",
                'MERCI',
                {
                  duration: 2000
                }
              );
            }else{
              this.snackbar.open(
                "Echec Modification Dépenses",
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



  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column: TableColumn<Depenses>, event: Event) {
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

  onLabelChange(change: MatSelectChange, row: Depenses) {
    const index = this.depenses.findIndex((s) => s === row);
    this.subject$.next(this.depenses);
  }
}

