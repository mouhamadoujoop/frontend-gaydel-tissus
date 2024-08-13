import { UsersService } from './../../services/users/users.service';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { Observable,ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
import { NgClass, NgFor, NgIf } from '@angular/common';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { UsersCreateUpdateComponent } from './users-create-update/users-create-update.component';

@Component({
  selector: 'vex-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
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
    MatSnackBarModule
  ]
})
export class UsersComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<User[]> = new ReplaySubject<User[]>(1);
  data$: Observable<User[]> = this.subject$.asObservable();
  users: User[] = [];

  @Input()
  columns: TableColumn<User>[] = [
    {
      label: 'Prénom',
      property: 'first_name',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    },

    {
      label: 'Nom',
      property: 'last_name',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },
    {
      label: 'Téléphone',
      property: 'phone',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },
    {
      label: 'Email',
      property: 'email',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },
    {
      label: 'Role',
      property: 'role',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },
    {
      label: 'Site',
      property: 'site',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },
    {
      label: 'Status',
      property: 'status',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    },

    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<User>;
  selection = new SelectionModel<User>(true, []);
  searchCtrl = new UntypedFormControl();


  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private dialog: MatDialog,
    private usersService: UsersService,
    private snackbar: MatSnackBar,
  ) {}
  
  ngOnInit() {
    this.getData().subscribe((users) => {
      this.subject$.next(users);
    });
    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<User[]>(Boolean)).subscribe((users) => {
      this.users = users;
      this.dataSource.data = users;
    });

    console.log({user:this.users});
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
      return this.usersService.getUsers().pipe(
        map((result: any) => {
          this.users = result.data;
          return this.users.map((user) => new User(user));
        })
      );
    }

  createUser() {
    this.dialog
      .open(UsersCreateUpdateComponent)
      .afterClosed()
      .subscribe((user: User) => {
        if (user) {
          this.usersService.addUser(user).subscribe((result:any) => {
            if (result.status === 200) {
              this.users.unshift(new User(user));
              this.subject$.next(this.users);
              this.snackbar.open(
                "L'utilisateur ajouter avec succés",
                'MERCI',
                {
                  duration: 1000
                }
              );
            }else{
              this.snackbar.open(
                "Echec Ajout Utilisateur",
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

  updateUser(user: User) {
    this.dialog
      .open(UsersCreateUpdateComponent, {
        data: user
      })
      .afterClosed()
      .subscribe((updatedUser) => {

        if (updatedUser) {
          this.usersService.updateUser(updatedUser).subscribe((result:any) => {
            console.log({result: result});
            if (result.status === 200) {
              const index = this.users.findIndex(
                (existingUser) => existingUser.id === updatedUser.id
              );
              this.users[index] = new User(updatedUser);
              this.subject$.next(this.users);
              this.snackbar.open(
                "Utilisateur modifier avec succés",
                'MERCI',
                {
                  duration: 1000
                }
              );
            }else{
              this.snackbar.open(
                "Echec Modification Utilisateur",
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

  toggleColumnVisibility(column: TableColumn<User>, event: Event) {
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

  onLabelChange(change: MatSelectChange, row: User) {
    const index = this.users.findIndex((u) => u === row);
    this.subject$.next(this.users);
  }

}
