import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { catchError, Observable, of, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Transaction } from '../../models/transactions';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableColumn } from '@vex/interfaces/table-column.interface';
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
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Versement } from '../../models/versements';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { VersementService } from '../../services/versement/versement.service';
import { SitesService } from '../../services/site/sites.service';
import { Roles } from '../../models/roles';
import { User } from '../../models/user';
import { VersementCreateUpdateComponent } from './versement-create-update/versement-create-update.component';
import { Sale } from '../../models/sales';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
    selector: 'vex-versements',
   templateUrl: './versements.component.html',
  styleUrls: ['./versements.component.scss'],
   standalone: true,
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
    DatePipe,
    NgxLoadingModule
  ]
})
export class VersementsComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Versement[]> = new ReplaySubject<Versement[]>(1);
  data$: Observable<Versement[]> = this.subject$.asObservable();

  @Input()
  columns: TableColumn<Versement>[] = [
    {
      label: 'Montant Verse(FCFA)',
      property: 'montantVerse',
      type: 'text',
      visible: true,
    },
    {
      label: 'Date',
      property: 'dateVersement',
      type: 'text',
      visible: true,
    },
    {
      label: 'Utilisateur',
      property: 'userName',
      type: 'text',
      visible: true,
    },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }

  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Versement>;
  selection = new SelectionModel<Versement>(true, []);
  searchCtrl = new UntypedFormControl();
  public loading = false;

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  siteName!: string;
  siteId: number = 0;
  versements: Versement[] = [];
  dataRole: any = [];
  userRoles!: Roles;
  userConnected!: any;
  start_date: any
  end_date: any
  totalVersement: number = 0;


  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private localStorage: LocalStorageService,
    private versementService: VersementService,
    private siteService: SitesService
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


  getAllVersementsBySites() {
    return this.versementService.getAllVersementsBySites(this.siteId).pipe(
      map((res: any) => {
        this.versements = res.data;
        this.getSiteById(res.data[0].site_id);
        return this.versements.map(
          (versement) => new Versement({ ...versement, userName: `${versement.user.first_name} ${versement.user.last_name}` })
        );
      })
    );
  }
  getVersementBetweenTwoDates() {
    if (!this.start_date && !this.end_date) {
      this.snackbar.open(
        "Veuillez indiquer la période",
        'MERCI DE REESSAYER',
        {
          duration: 1000
        }
      );
      return;  // Arrêter l'exécution de la méthode si les dates ne sont pas définies.
    }

    this.versementService.getVersementBetweenTwoDates(this.siteId, this.start_date, this.end_date).subscribe(res => {
      if (res) {
        // Vérifiez que la réponse contient bien les versements
        if (res['data']['versements']) {
          this.versements = res['data']['versements'].map((versement: any) => {
            return {
              ...versement,
              userName: `${versement.user.first_name} ${versement.user.last_name}`
            };
          });
          this.totalVersement = res['data']['total'];

          // Mettre à jour la source de données du tableau
          this.dataSource.data = this.versements;
          this.dataSource._updateChangeSubscription(); // Forcer la mise à jour du tableau.

          // Mettre à jour les sujets si nécessaire
          this.subject$.next(this.versements);
        } else {
          console.error("Aucun versement trouvé dans la réponse", res);
        }
      } else {
        console.error("Réponse vide du service", res);
      }
    });
  }


  // getVersementBetweenTwoDates() {
  //   if(!this.start_date && !this.end_date){
  //     this.snackbar.open(
  //       "Veuillez indiquer la periode",
  //       'MERCI DE REESSAYER',
  //       {
  //         duration: 1000
  //       }
  //     );
  //   }
  //   this.versementService.getVersementBetweenTwoDates(this.siteId, this.start_date, this.end_date).subscribe(res =>{
  //     if(res){
  //       // console.log(res);
  //       this.versements = res['data']['versements'];
  //       console.log(this.versements);
  //       this.totalVersement = res['data']['total'];
  //       console.log(this.dataSource.data);
  //       // this.versements.unshift(new Versement(versement));
  //       // this.subject$.next(this.versements);
  //       this.dataSource.data = this.versements
  //       this.subject$.next(this.versements);
  //     }
  //   });
  //
  // }

  getSiteById(siteId: number) {
    this.siteService.getSite(siteId).subscribe((res) => {
      if (res['data'] && res['data'] != null) {
        this.siteName = res['data'].name;
      }
    });
  }

  ngOnInit() {
    this.userRoles = new Roles(JSON.parse(this.localStorage.getData('dataRole') ?? 'null'));
    const localStorageService = LocalStorageService.getInstance();
    const userData = localStorageService.getData('dataUser');
    const userInfo = userData ? new User(JSON.parse(userData)) : new User({ id: null, first_name: 'Unknown', last_name: 'User' });
    this.siteId = userInfo.site_id;
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.getAllVersementsBySites().subscribe((versements) => {
      this.subject$.next(versements);
      this.getTotaleVersement();
    });


    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<any>(Boolean)).subscribe((versements) => {
      this.versements = versements;
      this.dataSource.data = versements;
    });

    this.searchCtrl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.onFilterChange(value));
  }
  getTotaleVersement() {
    this.totalVersement = this.versements.reduce((acc, versement) => acc + parseFloat(String(versement.montantVerse)), 0);
  }
  createVersement() {
    this.dialog
      .open(VersementCreateUpdateComponent)
      .afterClosed()
      .subscribe((versement: Versement) => {
        if (versement) {
          this.loading = true;
          versement.user = this.userConnected;
          this.versementService.addVersement(new Versement(versement)).subscribe((result:any) => {
            if (result.data) {
              this.loading = false;
              this.versements.unshift(new Versement(versement));
              this.subject$.next(this.versements);
              this.snackbar.open(
                "Versement ajouter avec succés",
                'MERCI',
                {
                  duration: 1000
                }
              );
            }else{
              this.loading = false;
              this.snackbar.open(
                result.message,
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
  updateVersement(versement: Versement) {
    const versementId = versement.id
    this.dialog
      .open(VersementCreateUpdateComponent, {
        data: versement
      })
      .afterClosed()
      .subscribe((updateVersement) => {
        if(updateVersement){

          const data = {
            id: versementId,
            site_id: updateVersement.site_id,
            montantVerse: updateVersement.montantVerse,
            dateVersement: updateVersement.dateVersement,
            user_id: updateVersement.user_id,
            user: versement.user
          }

          if (data) {
            this.loading = true;
            this.versementService.updateVersement(versementId, data).subscribe((result:any) => {
              if (result.data) {
                this.loading = false;
                const index = this.versements.findIndex(
                  (existingVersement) =>  existingVersement.id === versementId
                );
                this.versements[index] = new Versement(data);
                console.log(this.versements);
                this.subject$.next(this.versements);
                this.snackbar.open(
                  "Versement modifier avec succés",
                  'MERCI',
                  {
                    duration: 2000
                  }
                );
              }else{
                this.loading = false;
                this.snackbar.open(
                  "Echec Modification Versement",
                  'MERCI DE REESSAYER',
                  {
                    duration: 2000
                  }
                );

              }
            });
          }
        }
      });
  }
  deleteVersement(versement: Versement) {
    if(confirm('Voulez vous vraiment supprimer cet versement?')){
      this.versementService.deleteVersement(versement.id).subscribe((result:any) => {
        if (result.data) {
          this.versements.splice(
            this.versements.findIndex(
              (existingVersement) => existingVersement.id === versement.id
            ),
            1
          );
          this.selection.deselect(versement);
          this.subject$.next(this.versements);
          this.snackbar.open(

            "Versement Supprimer avec succés",

            'MERCI',
            {
              duration: 1000
            }
          );
        }else{
          this.snackbar.open(
            "Echec Suppression Versement",
            'MERCI DE REESSAYER',
            {
              duration: 1000
            }
          );

        }
      });

    }
  }
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }


  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column: TableColumn<Transaction>, event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Versement) {
    const index = this.versements.findIndex((v) => v === row);
    this.subject$.next(this.versements);
  }


}

