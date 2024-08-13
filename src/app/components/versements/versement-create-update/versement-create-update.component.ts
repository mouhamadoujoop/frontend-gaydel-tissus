import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  Validators
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { Transaction } from '../../../models/transactions';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Client } from '../../../models/clients';
import { Account } from '../../../models/accounts';
import { map, Observable, ReplaySubject } from 'rxjs';
import { ClientsService } from '../../../services/client/clients.service';
import { AccountsService } from '../../../services/account/accounts.service';
import { Site } from '../../../models/sites';
import { Versement } from '../../../models/versements';
import { VersementService } from '../../../services/versement/versement.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vex-versement-create-update',
  templateUrl: './versement-create-update.component.html',
  styleUrls: ['./versement-create-update.component.scss'],
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
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgForOf
  ]
})
export class VersementCreateUpdateComponent implements OnInit {
  layoutCtrl = new FormControl('boxed');
  subject$: ReplaySubject<Versement[]> = new ReplaySubject<Versement[]>(1);
  data$: Observable<Versement[]> = this.subject$.asObservable();

  id :number = 0;
  site_id!:number;
  totalVersement: number = 0;
  versements: Versement[] = [];
  userConnected!: any;
  siteName: string ="";
  user_id! : number;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Versement | undefined,
    private dialogRef: MatDialogRef<VersementCreateUpdateComponent>,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private versementService : VersementService,

  )
  {
    this.form = this.fb.group({
      site_id: [this.defaults?.site_id || ''],
      dateVersement: [this.defaults?.dateVersement],
      montantVerse:[this.defaults?.montantVerse, Validators.required],
      user_id:[0, Validators.required],

    });

  }
  getTotaleVersement() {
    this.totalVersement = this.versements.reduce((acc, versement) => acc + parseFloat(String(versement.montantVerse)), 0);
  }

  ngOnInit() {
      if (this.defaults) {
        this.mode = 'update';
      } else {
        this.defaults = {} as Versement;
      }
      this.userConnected = localStorage.getItem('dataUser');
      this.userConnected = JSON.parse(this.userConnected);
      this.site_id = this.userConnected.site_id;
       this.getAllVersementsBySites().subscribe((versements) => {
        this.subject$.next(versements);
        this.getTotaleVersement();
       });
        this.form.patchValue(this.defaults);

  }


  save() {
    if (this.mode === 'create') {
      this.createVersement();
    } else
      if (this.mode === 'update') {
      this.updateVersement();
    }
  }
  getAllVersementsBySites() {
    return this.versementService.getAllVersementsBySites(this.site_id).pipe(
      map((res: any) => {
        this.versements = res.data;
        return this.versements.map(
          (versement) => new Versement({ ...versement, userName: `${versement.user.first_name} ${versement.user.last_name}` })
        );
      })
    );
  }
  createVersement() {
    this.form.get('user_id')?.setValue(this.userConnected.id);
    this.form.get('site_id')?.setValue(this.site_id);
    const versements = this.form.value;
    this.dialogRef.close(versements);
  }

  updateVersement() {
    const versements = this.form.value;

    if (!this.defaults) {
      throw new Error(
        'Versement ID does not exist, this roles cannot be updated'
      );
    }

    versements.id = this.defaults.id;

    this.dialogRef.close(versements);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }


}


