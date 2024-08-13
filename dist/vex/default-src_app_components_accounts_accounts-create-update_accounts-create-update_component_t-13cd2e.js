"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_components_accounts_accounts-create-update_accounts-create-update_component_t-13cd2e"],{

/***/ 41871:
/*!************************************************************************************************!*\
  !*** ./src/app/components/accounts/accounts-create-update/accounts-create-update.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountsCreateUpdateComponent: () => (/* binding */ AccountsCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _models_clients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/clients */ 23740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_client_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/client/clients.service */ 78068);


























function AccountsCreateUpdateComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.form.controls.id.value, " ");
  }
}
function AccountsCreateUpdateComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nouveau Compte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AccountsCreateUpdateComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 21)(1, "span", 22)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const client_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", client_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", client_r11.full_name, " ");
  }
}
function AccountsCreateUpdateComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountsCreateUpdateComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.clientCtrl.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AccountsCreateUpdateComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AccountsCreateUpdateComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Veuillez s\u00E9lectionner un client");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AccountsCreateUpdateComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Solde requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AccountsCreateUpdateComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Solde doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AccountsCreateUpdateComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nouveau Compte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AccountsCreateUpdateComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Modifier Compte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AccountsCreateUpdateComponent {
  static #_ = this.id = 100;
  constructor(defaults, dialogRef, fb, snackbar, clientService) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.snackbar = snackbar;
    this.clientService = clientService;
    this.clientId = 0;
    this.clients = [];
    this.clientName = "";
    this.form = this.fb.group({
      id: [AccountsCreateUpdateComponent.id++],
      balance: [this.defaults?.balance, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
      client_id: [this.defaults?.client_id || ''],
      client: [this.defaults?.client || '']
      // full_name: [this.defaults?.full_name || ''],
      // client_id: [this.defaults?.client_id || ''],
      // balance: [this.defaults?.balance || 0, [Validators.required, Validators.min(0)]],
      // paymentOrAdvance: [0, [Validators.required, Validators.min(0)]]
    });

    this.mode = 'create';
    this.clientCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
  }
  getClientsBySite() {
    return this.clientService.getClientsBySite(this.site_id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(result => {
      this.clients = result.data;
      return this.clients.map(client => new _models_clients__WEBPACK_IMPORTED_MODULE_0__.Client(client));
    }));
  }
  ngOnInit() {
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.site_id = this.userConnected.site_id;
    this.getClientsBySite().subscribe(clients => {
      this.clients = clients;
      if (this.defaults) {
        this.mode = 'update';
      } else {
        this.defaults = {};
      }
      this.form.patchValue(this.defaults);
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createAccount();
    } else if (this.mode === 'update') {
      this.updateAccount();
    }
  }
  createAccount() {
    this.form.get('client_id')?.setValue(this.clientId);
    this.form.get('client')?.setValue(this.clientName);
    const account = this.form.value;
    this.dialogRef.close(account);
  }
  updateAccount() {
    const account = this.form.value;
    console.log(account);
    if (!this.defaults) {
      throw new Error('Account ID does not exist, this account cannot be updated');
    }
    account.id = this.defaults.id;
    this.dialogRef.close(account);
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }
  getClientNameById(id) {
    this.clientId = id;
    const client = this.clients.find(c => c.id === id);
    this.clientName = client ? client.full_name : '';
    return client ? client.full_name : '';
  }
  static #_2 = this.ɵfac = function AccountsCreateUpdateComponent_Factory(t) {
    return new (t || AccountsCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_client_clients_service__WEBPACK_IMPORTED_MODULE_1__.ClientsService));
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AccountsCreateUpdateComponent,
    selectors: [["vex-accounts-create-update"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 30,
    vars: 14,
    consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], [1, "flex", "flex-col"], [1, "w-300", "max-w-full"], ["matInput", "", 3, "formControl", "matAutocomplete", "value"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 4, "ngIf"], [4, "ngIf"], [1, "flex-auto"], ["formControlName", "balance", "matInput", "", "required", "", "min", "1"], ["matIconPrefix", "", "svgIcon", "mat:payment"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], [1, "headline", "m-0", "flex-auto"], [3, "value"], [1, "flex", "items-center"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button"], ["svgIcon", "mat:arrow_drop_down"], ["color", "primary", "mat-flat-button", "", "type", "submit"]],
    template: function AccountsCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AccountsCreateUpdateComponent_Template_form_ngSubmit_0_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AccountsCreateUpdateComponent_h2_2_Template, 2, 1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AccountsCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-dialog-content", 6)(8, "mat-form-field", 7)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Selectionner Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-autocomplete", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AccountsCreateUpdateComponent_mat_option_14_Template, 4, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AccountsCreateUpdateComponent_button_15_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AccountsCreateUpdateComponent_button_16_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AccountsCreateUpdateComponent_mat_error_17_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 14)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Solde");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 15)(22, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AccountsCreateUpdateComponent_mat_error_23_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AccountsCreateUpdateComponent_mat_error_24_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-dialog-actions", 17)(26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AccountsCreateUpdateComponent_button_28_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AccountsCreateUpdateComponent_button_29_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        let tmp_10_0;
        let tmp_11_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.controls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.form.controls.id.value && !ctx.form.controls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.clientCtrl)("matAutocomplete", _r2)("value", ctx.getClientNameById(ctx.clientCtrl.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.clientCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.clientCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.clientCtrl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.form.get("balance")) == null ? null : tmp_10_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.form.get("balance")) == null ? null : tmp_11_0.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCreateMode() && ctx.form.invalid == false && ctx.clientCtrl.invalid == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUpdateMode() && ctx.form.invalid == false);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50cy1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50cy9hY2NvdW50cy1jcmVhdGUtdXBkYXRlL2FjY291bnRzLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdMQUF3TCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 298:
/*!************************************!*\
  !*** ./src/app/models/accounts.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Account: () => (/* binding */ Account)
/* harmony export */ });
class Account {
  constructor(account) {
    this.id = account.id;
    this.client_id = account.client_id;
    this.balance = account.balance;
    this.client = account.client && account.client.full_name ? account.client.full_name : account.client;
  }
}

/***/ }),

/***/ 23740:
/*!***********************************!*\
  !*** ./src/app/models/clients.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Client: () => (/* binding */ Client)
/* harmony export */ });
class Client {
  constructor(client) {
    this.id = client.id;
    this.full_name = client.full_name;
    this.phone = client.phone;
    this.address = client.address;
    this.balance = client.account && client.account.balance ? client.account.balance : 0;
    this.account_id = client.account && client.account.id ? client.account.id : 0;
    this.site_id = client.site_id;
    // this.hasAccount = true;
  }
}

/***/ }),

/***/ 74199:
/*!******************************************************!*\
  !*** ./src/app/services/account/accounts.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountsService: () => (/* binding */ AccountsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);





class AccountsService {
  constructor(httpClient, router, localStorage) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
    this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
  }
  // addAccountToClient(id: number, account: Account): Observable<Account> {
  //   return this.httpClient.post(`${this.BASE_URL}/accounts/`, account, { ...this.localStorage.getAuthorization() });
  // }
  getAccounts() {
    return this.httpClient.get(`${this.BASE_URL}/accounts`, {
      ...this.localStorage.getAuthorization()
    });
  }
  addAccount(account) {
    return this.httpClient.post(`${this.BASE_URL}/accounts`, account, {
      ...this.localStorage.getAuthorization()
    });
  }
  updateAccount(account) {
    return this.httpClient.put(`${this.BASE_URL}/accounts/` + account.id, account, {
      ...this.localStorage.getAuthorization()
    });
  }
  static #_ = this.ɵfac = function AccountsService_Factory(t) {
    return new (t || AccountsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AccountsService,
    factory: AccountsService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 78068:
/*!****************************************************!*\
  !*** ./src/app/services/client/clients.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsService: () => (/* binding */ ClientsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);





class ClientsService {
  //private API_URL= environment.API_URL;
  constructor(httpClient, router, localStorage) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
    this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
  }
  getClientsBySite(site_id) {
    return this.httpClient.get(`${this.BASE_URL}/clients/site/${site_id}`, {
      ...this.localStorage.getAuthorization()
    });
  }
  getClientById(client_id) {
    return this.httpClient.get(`${this.BASE_URL}/clients/${client_id}`, {
      ...this.localStorage.getAuthorization()
    });
  }
  getClientInvoice(client_id) {
    return this.httpClient.get(`${this.BASE_URL}/clients/${client_id}/invoice`, {
      ...this.localStorage.getAuthorization()
    });
  }
  // getAccountByI(id: number):Observable<any>{
  //   return this.httpClient.get(`${this.BASE_URL}/clients/account/${site_id}`, {... this.localStorage.getAuthorization()});
  //
  // }
  addClients(client) {
    return this.httpClient.post(`${this.BASE_URL}/clients`, client, {
      ...this.localStorage.getAuthorization()
    });
  }
  updateClient(client) {
    return this.httpClient.put(`${this.BASE_URL}/clients/` + client.id, client, {
      ...this.localStorage.getAuthorization()
    });
  }
  static #_ = this.ɵfac = function ClientsService_Factory(t) {
    return new (t || ClientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ClientsService,
    factory: ClientsService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_components_accounts_accounts-create-update_accounts-create-update_component_t-13cd2e.js.map