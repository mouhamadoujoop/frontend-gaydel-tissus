import { SitesService } from './../../../services/site/sites.service';
import { UsersService } from './../../../services/users/users.service';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
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
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { User } from 'src/app/models/user';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Roles } from 'src/app/models/roles';
import { Site } from 'src/app/models/sites';

@Component({
  selector: 'vex-users-create-update',
  templateUrl: './users-create-update.component.html',
  styleUrls: ['./users-create-update.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    NgFor,
    NgIf,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe
  ]
})
export class UsersCreateUpdateComponent implements OnInit {
  roleId: number = 0;
  roleName: string = '';
  roles: Roles[] = [];

  siteId: number = 0;
  siteName: string = '';
  sites: Site[] = [];

  roleCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  siteCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  statusCtrl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);

  inputType = 'password';
  visible = false;

  static id = 100;

  form = this.fb.group({
    id: [UsersCreateUpdateComponent.id++],
    first_name: [this.defaults?.first_name, [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s'-]+$/)]],
    last_name: [this.defaults?.last_name, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    password: [this.defaults?.password],
    phone: [this.defaults?.phone, [Validators.required, Validators.pattern(/^(\+221|221)?(77|78|70|76|75)\d{7}$/)]],
    email: [this.defaults?.email, [Validators.required, Validators.email]],
    role_id: [this.defaults?.role_id || ''],
    role: [this.defaults?.role || ''],
    status: [this.defaults?.status, [Validators.required]],
    site_id: [this.defaults?.site_id || ''],
    site: [this.defaults?.site || '']
  });
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: User | undefined,
    private dialogRef: MatDialogRef<UsersCreateUpdateComponent>,
    private fb: FormBuilder,
    private usersService: UsersService,
    private sitesService: SitesService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.getRoles();
    this.getSites();
    
    if (this.defaults) {
      this.mode = 'update';

      const role = this.defaults.role_id as any;
      const site = this.defaults.site_id as any;
      this.roleCtrl.setValue(role.id); 
      this.siteCtrl.setValue(site.id); 
      this.statusCtrl.setValue(this.defaults.status); 
      
    } else {
      this.defaults = {} as User;
    }

    this.form.patchValue(this.defaults);
  }

  save() {
    if (this.mode === 'create') {
      this.createUser();
    } else if (this.mode === 'update') {
      console.log({form: this.form.value});
      this.updateUser();
    }
  }

  createUser() {
    this.form.get('role_id')?.setValue(this.roleId);
    this.form.get('role')?.setValue(this.roleName);
    this.form.get('site_id')?.setValue(this.siteId);
    this.form.get('site')?.setValue(this.siteName);
    this.form.get('status')?.setValue(this.statusCtrl.value);
    const users = this.form.value;

    this.dialogRef.close(users);
  }

  updateUser() {
    this.form.get('role_id')?.setValue(this.roleId);
    this.form.get('role')?.setValue(this.roleName);
    this.form.get('site_id')?.setValue(this.siteId);
    this.form.get('site')?.setValue(this.siteName);
    this.form.get('status')?.setValue(this.statusCtrl.value);
    const users = this.form.value;

    if (!this.defaults) {
      throw new Error(
        'User ID does not exist, this roles cannot be updated'
      );
    }

    users.id = this.defaults.id;

    this.dialogRef.close(users);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  getRoles(){
    this.usersService.getRoles().subscribe(
    (result) => {
        this.roles = result.data;
      });
  }

  getRoleNameById(id: number): string {
    this.roleId=id;
    const role = this.roles.find(r => r.id === id);
    this.roleName = role ? role.role_name : '';
    return role ? role.role_name : '';
  }
  

  getSites(){
    this.sitesService.getSites().subscribe(
      (result) => {
        this.sites = result.data;
      });
  }

  getSiteNameById(id: number): string {
    this.siteId=id;
    const site = this.sites.find(s => s.id === id);
    this.siteName = site ? site.name : '';
    return site ? site.name : '';
  }
  
}
