import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { Site } from '../../../models/sites';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'vex-sites-create-update',
  templateUrl: './sites-create-update.component.html',
  styleUrls: ['./sites-create-update.component.scss'],
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
    MatInputModule
  ]
})
export class SitesCreateUpdateComponent implements OnInit {
  static id = 100;

  form = this.fb.group({
    id: [SitesCreateUpdateComponent.id++],
    name: [this.defaults?.name, [Validators.required]],
    address: [this.defaults?.address, [Validators.required]]
  });
  mode: 'create' | 'update' = 'create';

  constructor(


    @Inject(MAT_DIALOG_DATA) public defaults: Site | undefined,
    private dialogRef: MatDialogRef<SitesCreateUpdateComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Site;
    }

    this.form.patchValue(this.defaults);
  }

  save() {
    if (this.mode === 'create') {
      this.createSite();
    } else if (this.mode === 'update') {
      this.updateSite();
    }
  }

  createSite() {
    const site = this.form.value;


    this.dialogRef.close(site);
  }

  updateSite() {
    const site = this.form.value;

    if (!this.defaults) {
      throw new Error(
        'Site ID does not exist, this Site cannot be updated'
      );
    }

    site.id = this.defaults.id;

    this.dialogRef.close(site);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}


