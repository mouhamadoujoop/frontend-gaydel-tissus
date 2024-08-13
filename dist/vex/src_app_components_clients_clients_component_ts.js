"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_components_clients_clients_component_ts"],{

/***/ 38358:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/clients/clients-create-update/clients-create-update.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsCreateUpdateComponent: () => (/* binding */ ClientsCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_account_accounts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/account/accounts.service */ 74199);



















function ClientsCreateUpdateComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.form.controls.full_name.value, " ");
  }
}
function ClientsCreateUpdateComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nouveau Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientsCreateUpdateComponent_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 8)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 19)(4, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientsCreateUpdateComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ajouter Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ClientsCreateUpdateComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Modifier Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ClientsCreateUpdateComponent {
  static #_ = this.id = 100;
  constructor(defaults, dialogRef, fb, dialog, AccountService) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.dialog = dialog;
    this.AccountService = AccountService;
    this.form = this.fb.group({
      id: [ClientsCreateUpdateComponent.id++],
      full_name: [this.defaults?.full_name || ''],
      phone: [this.defaults?.phone || ''],
      address: [this.defaults?.address || '']
    });
    this.mode = 'create';
    this.showSiteField = false;
  }
  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }
    this.form.patchValue(this.defaults);
  }
  save() {
    if (this.mode === 'create') {
      this.createClient();
    } else if (this.mode === 'update') {
      this.updateClient();
    }
  }
  createClient() {
    const clients = this.form.value;
    this.dialogRef.close(clients);
  }
  updateClient() {
    const clients = this.form.value;
    if (!this.defaults) {
      throw new Error('Client ID does not exist, this roles cannot be updated');
    }
    clients.id = this.defaults.id;
    this.dialogRef.close(clients);
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }
  static #_2 = this.ɵfac = function ClientsCreateUpdateComponent_Factory(t) {
    return new (t || ClientsCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_accounts_service__WEBPACK_IMPORTED_MODULE_0__.AccountsService));
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ClientsCreateUpdateComponent,
    selectors: [["vex-clients-create-update"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 29,
    vars: 6,
    consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], [1, "flex", "flex-col"], ["class", "flex-auto", 4, "ngIf"], [1, "flex-auto"], ["formControlName", "full_name", "matInput", ""], ["matIconPrefix", "", "svgIcon", "mat:person_pin_circle"], ["formControlName", "phone", "matInput", ""], ["matIconPrefix", "", "svgIcon", "mat:phone"], ["formControlName", "address", "matInput", ""], ["matIconPrefix", "", "svgIcon", "mat:location_city"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], [1, "headline", "m-0", "flex-auto"], ["formControlName", "site_id", "matInput", "", "required", "", "min", "1"], ["matIconPrefix", "", "svgIcon", "mat:edit"], ["color", "primary", "mat-flat-button", "", "type", "submit"]],
    template: function ClientsCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ClientsCreateUpdateComponent_Template_form_ngSubmit_0_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ClientsCreateUpdateComponent_h2_2_Template, 2, 1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ClientsCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ClientsCreateUpdateComponent_mat_form_field_8_Template, 5, 0, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 8)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nom & Pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9)(13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "T\u00E9l\u00E9phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 11)(18, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 8)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Addresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 13)(23, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-dialog-actions", 15)(25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ClientsCreateUpdateComponent_button_27_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ClientsCreateUpdateComponent_button_28_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.full_name.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.form.controls.full_name.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSiteField);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUpdateMode());
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMtY3JlYXRlLXVwZGF0ZS9jbGllbnRzLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdMQUF3TCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9451:
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsComponent: () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _models_clients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/clients */ 23740);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _clients_create_update_clients_create_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients-create-update/clients-create-update.component */ 38358);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/collections */ 20636);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 83951);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 86820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 5292);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ 10727);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-header.directive */ 72369);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout.component */ 60306);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _models_accounts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/accounts */ 298);
/* harmony import */ var _accounts_accounts_create_update_accounts_create_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../accounts/accounts-create-update/accounts-create-update.component */ 41871);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var src_app_models_roles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/roles */ 74173);
/* harmony import */ var _services_account_accounts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/account/accounts.service */ 74199);
/* harmony import */ var _services_client_clients_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/client/clients.service */ 78068);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_sale_sales_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/sale/sales.service */ 70972);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 21021);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
















































function ClientsComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r0.siteName, "/clients");
  }
}
function ClientsComponent_span_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClientsComponent_span_7_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r1.selection.selected.length, " clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selection.selected.length > 1);
  }
}
function ClientsComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.createClient());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 37)(1, "mat-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClientsComponent_th_17_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event ? ctx_r23.masterToggle() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", ctx_r3.selection.hasValue() && ctx_r3.isAllSelected())("indeterminate", ctx_r3.selection.hasValue() && !ctx_r3.isAllSelected());
  }
}
function ClientsComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 39)(1, "mat-checkbox", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ClientsComponent_td_18_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);
      const row_r25 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event ? ctx_r26.selection.toggle(row_r25) : null);
    })("click", function ClientsComponent_td_18_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", ctx_r4.selection.isSelected(row_r25));
  }
}
function ClientsComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 37);
  }
}
function ClientsComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", row_r29["imageSrc"], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function ClientsComponent_ng_container_22_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", column_r30.label, " ");
  }
}
function ClientsComponent_ng_container_22_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r35 = ctx.$implicit;
    const column_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", column_r30.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r35[column_r30.property], " ");
  }
}
function ClientsComponent_ng_container_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClientsComponent_ng_container_22_ng_container_1_th_1_Template, 2, 1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ClientsComponent_ng_container_22_ng_container_1_td_2_Template, 2, 2, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matColumnDef", column_r30.property);
  }
}
function ClientsComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClientsComponent_ng_container_22_ng_container_1_Template, 3, 1, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", column_r30.type === "text");
  }
}
function ClientsComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 48);
  }
}
function ClientsComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 49)(1, "div", 50)(2, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_td_25_Template_a_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_td_25_Template_a_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_td_25_Template_a_click_6_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function ClientsComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Solde ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 49)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_td_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function ClientsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 48);
  }
}
const _c0 = function (a0) {
  return {
    client: a0
  };
};
function ClientsComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 60)(1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_td_31_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](2, _c0, row_r44))("matMenuTriggerFor", _r18);
  }
}
function ClientsComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 63);
  }
}
function ClientsComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 64);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
function ClientsComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_button_37_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49);
      const column_r47 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r48.toggleColumnVisibility(column_r47, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-checkbox", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_button_37_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function ClientsComponent_button_37_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49);
      const column_r47 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](column_r47.visible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", column_r47.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", column_r47.label, " ");
  }
}
function ClientsComponent_ng_template_40_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_ng_template_40_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r57);
      const client_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().client;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r55.createSale(client_r52.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Effectuer Vente");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ClientsComponent_ng_template_40_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ClientsComponent_ng_template_40_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r60);
      const client_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().client;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r58.transactionAccounts(client_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Voir Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return ["CAISSIERE", "SUPERVISEUR", "SUPER_ADMIN"];
};
const _c2 = function () {
  return ["CAISSIERE"];
};
function ClientsComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ClientsComponent_ng_template_40_button_0_Template, 4, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ClientsComponent_ng_template_40_button_1_Template, 4, 0, "button", 67);
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1).includes(ctx_r19.userRoles.role_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c2).includes(ctx_r19.userRoles.role_name));
  }
}
class ClientsComponent {
  constructor(dialog, AccountsService, clientService, accountsService, snackbar, router, salesService, localStorage) {
    this.dialog = dialog;
    this.AccountsService = AccountsService;
    this.clientService = clientService;
    this.accountsService = accountsService;
    this.snackbar = snackbar;
    this.router = router;
    this.salesService = salesService;
    this.localStorage = localStorage;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormControl('boxed');
    /**
     * Simulating a service with HTTP that returns Observables
     * You probably want to remove this and do all requests in a service with HTTP
     */
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.clients = [];
    this.columns = [{
      label: 'Client',
      property: 'full_name',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    }, {
      label: 'Téléphone',
      property: 'phone',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Addresse',
      property: 'address',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Solde',
      property: 'balance',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Actions',
      property: 'actions',
      type: 'button',
      visible: true
    }];
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 20, 50];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__.SelectionModel(true, []);
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormControl();
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_14__.DestroyRef);
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return this.clientService.getClientsBySite(this.site_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(result => {
      {
        this.siteName = result['data'][0].site.name;
        this.clients = result.data;
      }
      return this.clients.map(client => new _models_clients__WEBPACK_IMPORTED_MODULE_0__.Client(client));
    }));
  }
  ngOnInit() {
    this.userRoles = new src_app_models_roles__WEBPACK_IMPORTED_MODULE_9__.Roles(JSON.parse(this.localStorage.getData('dataRole') ?? 'null'));
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.site_id = this.userConnected.site_id;
    this.getData().subscribe(clients => {
      this.subject$.next(clients);
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(Boolean)).subscribe(clients => {
      this.clients = clients;
      this.dataSource.data = clients;
    });
    this.searchCtrl.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_21__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => this.onFilterChange(value));
  }
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
  createClient() {
    this.dialog.open(_clients_create_update_clients_create_update_component__WEBPACK_IMPORTED_MODULE_1__.ClientsCreateUpdateComponent).afterClosed().subscribe(client => {
      if (client) {
        client.site_id = this.site_id;
        try {
          this.clientService.addClients(client).subscribe(result => {
            if (result.status === 200) {
              const account = new _models_accounts__WEBPACK_IMPORTED_MODULE_7__.Account({
                'client_id': result.client.id,
                'balance': 0,
                'client': result.client
              });
              this.accountsService.addAccount(account).subscribe(result => {
                if (result.status === 200) {
                  this.clients.unshift(new _models_clients__WEBPACK_IMPORTED_MODULE_0__.Client(client));
                  this.subject$.next(this.clients);
                  this.snackbar.open("Client créé ajouté avec success", 'MERCI', {
                    duration: 1000
                  });
                } else {
                  this.snackbar.open("Echec Ajout Client", 'MERCI DE REESSAYER', {
                    duration: 1000
                  });
                }
              });
            } else {
              this.snackbar.open("Echec Ajout Client", 'MERCI DE REESSAYER', {
                duration: 1000
              });
            }
          });
        } catch (error) {}
      }
    });
  }
  updateClient(client) {
    this.dialog.open(_clients_create_update_clients_create_update_component__WEBPACK_IMPORTED_MODULE_1__.ClientsCreateUpdateComponent, {
      data: client
    }).afterClosed().subscribe(updateClient => {
      if (updateClient) {
        this.clientService.updateClient(updateClient).subscribe(result => {
          // if (result.status === 200)
          const index = this.clients.findIndex(existingClient => existingClient.id === updateClient.id);
          this.clients[index] = new _models_clients__WEBPACK_IMPORTED_MODULE_0__.Client(updateClient);
          this.subject$.next(this.clients);
          this.snackbar.open("Client modifier avec succés", 'MERCI', {
            duration: 1000
          });
        });
      }
    });
  }
  deleteClient(client) {
    this.clients.splice(this.clients.findIndex(existingClient => existingClient.id === client.id), 1);
    this.selection.deselect(client);
    this.subject$.next(this.clients);
  }
  deleteClients(clients) {
    clients.forEach(c => this.deleteClient(c));
  }
  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
  toggleColumnVisibility(column, event) {
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
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  trackByProperty(index, column) {
    return column.property;
  }
  onLabelChange(change, row) {
    const index = this.clients.findIndex(c => c === row);
    //this.products[index].labels = change.value;
    this.subject$.next(this.clients);
  }
  //variable dans client(hasAccount par defaut =0)
  createAccount(client) {
    this.dialog.open(_accounts_accounts_create_update_accounts_create_update_component__WEBPACK_IMPORTED_MODULE_8__.AccountsCreateUpdateComponent, {
      data: {
        id: client.id,
        isEdit: false
      }
    }).afterClosed().subscribe(account => {
      // if (account) {
      //   this.AccountsService.addAccountToClient(client.id, account).subscribe();
      // }
    });
  }
  createSale(account) {
    const client_id = account;
    this.router.navigate(['/new-sale'], {
      state: {
        clientId: client_id
      }
    });
  }
  AccountsClient(client) {
    this.router.navigate(['/accounts'], {
      state: {
        id: client.id
      }
    });
  }
  transactionAccounts(client) {
    this.router.navigate(['/transactions'], {
      state: {
        id: client.account_id
      }
    });
  }
  static #_ = this.ɵfac = function ClientsComponent_Factory(t) {
    return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_account_accounts_service__WEBPACK_IMPORTED_MODULE_10__.AccountsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_client_clients_service__WEBPACK_IMPORTED_MODULE_11__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_account_accounts_service__WEBPACK_IMPORTED_MODULE_10__.AccountsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_sale_sales_service__WEBPACK_IMPORTED_MODULE_12__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_13__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: ClientsComponent,
    selectors: [["vex-clients"]],
    viewQuery: function ClientsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      columns: "columns"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵStandaloneFeature"]],
    decls: 41,
    vars: 19,
    consts: [[1, "pb-1", "flex", "flex-col", "items-start", "justify-center"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], [4, "ngIf"], ["subscriptSizing", "dynamic"], ["matIconPrefix", "", "svgIcon", "mat:search"], ["matInput", "", "placeholder", "Search\u2026", "type", "text", 3, "formControl"], [1, "flex-1"], ["mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", "flex-none", 3, "matMenuTriggerFor"], ["svgIcon", "mat:filter_list"], ["class", "ml-4 flex-none", "color", "primary", "mat-mini-fab", "", "matTooltip", "Add client", "type", "button", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "w-8 min-w-8 p-0", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "labels"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover transition duration-400 ease-out-swift cursor-pointer", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["columnFilterMenu", "matMenu"], ["class", "mat-menu-item block", 3, "click", 4, "ngFor", "ngForOf"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Add client", "type", "button", 1, "ml-4", "flex-none", 3, "click"], ["svgIcon", "mat:add"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change", "click"], ["mat-cell", "", 1, "w-8", "min-w-8", "p-0"], [1, "avatar", "h-8", "w-8", "align-middle", 3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary-600", "bg-primary-600/10", 3, "click"], ["svgIcon", "mat:phone", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal-600", "bg-teal/10", 3, "click"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green-600", "bg-green-600/10", 3, "click"], ["svgIcon", "mat:map", 1, "icon-sm"], [1, "flex", "items-center", "gap-1", 3, "click"], [1, "bg-base", "text-hint", "cursor-pointer", "hover:bg-hover", "flex-none", "flex", "items-center", "justify-center"], ["svgIcon", "mat:add", 1, "icon-sm"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerData", "matMenuTriggerFor", "click"], ["svgIcon", "mat:more_horiz"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "transition", "duration-400", "ease-out-swift", "cursor-pointer"], [1, "mat-menu-item", "block", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "mat:shopping_cart"], ["svgIcon", "mat:remove_red_eye"]],
    template: function ClientsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "vex-page-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "vex-page-layout-content", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ClientsComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ClientsComponent_span_7_Template, 4, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "mat-icon", 7)(10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ClientsComponent_button_14_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](16, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, ClientsComponent_th_17_Template, 2, 2, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, ClientsComponent_td_18_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](19, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, ClientsComponent_th_20_Template, 1, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, ClientsComponent_td_21_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, ClientsComponent_ng_container_22_Template, 2, 1, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](23, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, ClientsComponent_th_24_Template, 1, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, ClientsComponent_td_25_Template, 8, 0, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](26, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, ClientsComponent_th_27_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, ClientsComponent_td_28_Template, 4, 0, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](29, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, ClientsComponent_th_30_Template, 1, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, ClientsComponent_td_31_Template, 3, 4, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, ClientsComponent_tr_32_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, ClientsComponent_tr_33_Template, 1, 1, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "mat-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "mat-menu", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, ClientsComponent_button_37_Template, 3, 2, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "mat-menu", 30, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, ClientsComponent_ng_template_40_Template, 2, 4, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-6", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.selection.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](18, _c2).includes(ctx.userRoles.role_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.columns);
      }
    },
    dependencies: [_vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_6__.VexPageLayoutComponent, _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_5__.VexPageLayoutHeaderDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlDirective, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.VexPageLayoutContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuTrigger, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_34__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_34__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatPrefix, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule],
    styles: ["@charset \"UTF-8\";\n.small-btn[_ngcontent-%COMP%] {\n  width: 50px; \n\n  padding: 3px 6px; \n\n  font-size: 12px; \n\n  background-color: #4f46e5; \n\n  border-radius: 7px; \n\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); \n\n  color: white; \n\n}\n\n\n\n.small-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ff9800; \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsV0FBQSxFQUFBLHVCQUFBO0VBQ0EsZ0JBQUEsRUFBQSxpRkFBQTtFQUNBLGVBQUEsRUFBQSw2Q0FBQTtFQUNBLHlCQUFBLEVBQUEsMkJBQUE7RUFDQSxrQkFBQSxFQUFBLHFCQUFBO0VBQ0Esd0NBQUEsRUFBQSxpQkFBQTtFQUNBLFlBQUEsRUFBQSxtREFBQTtBQUVGOztBQUNBLDhCQUFBO0FBQ0E7RUFDRSx5QkFBQSxFQUFBLHNDQUFBO0FBRUYiLCJmaWxlIjoiY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbC1idG4ge1xyXG4gIHdpZHRoOiA1MHB4OyAvKiBSw6lkdWlyZSBsYSBsYXJnZXVyICovXHJcbiAgcGFkZGluZzogM3B4IDZweDsgLyogUsOpZHVpcmUgbGEgaGF1dGV1ciBldCBsJ2VzcGFjZSBpbnTDqXJpZXVyIHBvdXIgcydhZGFwdGVyIMOgIGxhIG5vdXZlbGxlIHRhaWxsZSAqL1xyXG4gIGZvbnQtc2l6ZTogMTJweDsgLyogRGltaW51ZSBkYXZhbnRhZ2UgbGEgdGFpbGxlIGRlIGxhIHBvbGljZSAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjQ2ZTU7IC8qIENvdWxldXIgZCdhcnJpw6hyZS1wbGFuICovXHJcbiAgYm9yZGVyLXJhZGl1czogN3B4OyAvKiBCb3JkdXJlIGFycm9uZGllICovXHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKTsgLyogT21icmUgbMOpZ8OocmUgKi9cclxuICBjb2xvcjogd2hpdGU7IC8qIENvdWxldXIgZHUgdGV4dGUgcG91ciB1bmUgbWVpbGxldXJlIGxpc2liaWxpdMOpICovXHJcbn1cclxuXHJcbi8qIFBvdXIgbGUgc3Vydm9sIChvcHRpb25hbCkgKi9cclxuLnNtYWxsLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDsgLyogQ291bGV1ciBkJ2FycmnDqHJlLXBsYW4gc3VyIHN1cnZvbCAqL1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsV0FBQSxFQUFBLHVCQUFBO0VBQ0EsZ0JBQUEsRUFBQSxpRkFBQTtFQUNBLGVBQUEsRUFBQSw2Q0FBQTtFQUNBLHlCQUFBLEVBQUEsMkJBQUE7RUFDQSxrQkFBQSxFQUFBLHFCQUFBO0VBQ0Esd0NBQUEsRUFBQSxpQkFBQTtFQUNBLFlBQUEsRUFBQSxtREFBQTtBQUVGOztBQUNBLDhCQUFBO0FBQ0E7RUFDRSx5QkFBQSxFQUFBLHNDQUFBO0FBRUY7QUFDQSw0MENBQTQwQyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbC1idG4ge1xyXG4gIHdpZHRoOiA1MHB4OyAvKiBSw4PCqWR1aXJlIGxhIGxhcmdldXIgKi9cclxuICBwYWRkaW5nOiAzcHggNnB4OyAvKiBSw4PCqWR1aXJlIGxhIGhhdXRldXIgZXQgbCdlc3BhY2UgaW50w4PCqXJpZXVyIHBvdXIgcydhZGFwdGVyIMODwqAgbGEgbm91dmVsbGUgdGFpbGxlICovXHJcbiAgZm9udC1zaXplOiAxMnB4OyAvKiBEaW1pbnVlIGRhdmFudGFnZSBsYSB0YWlsbGUgZGUgbGEgcG9saWNlICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNDZlNTsgLyogQ291bGV1ciBkJ2FycmnDg8KocmUtcGxhbiAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDsgLyogQm9yZHVyZSBhcnJvbmRpZSAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMik7IC8qIE9tYnJlIGzDg8KpZ8ODwqhyZSAqL1xyXG4gIGNvbG9yOiB3aGl0ZTsgLyogQ291bGV1ciBkdSB0ZXh0ZSBwb3VyIHVuZSBtZWlsbGV1cmUgbGlzaWJpbGl0w4PCqSAqL1xyXG59XHJcblxyXG4vKiBQb3VyIGxlIHN1cnZvbCAob3B0aW9uYWwpICovXHJcbi5zbWFsbC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7IC8qIENvdWxldXIgZCdhcnJpw4PCqHJlLXBsYW4gc3VyIHN1cnZvbCAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__.stagger40ms]
    }
  });
}


/***/ }),

/***/ 70972:
/*!************************************************!*\
  !*** ./src/app/services/sale/sales.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesService: () => (/* binding */ SalesService)
/* harmony export */ });
/* harmony import */ var src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);





class SalesService {
  //private API_URL= environment.API_URL;
  constructor(httpClient, router, localStorage) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
    this.BASE_URL = src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
  }
  getSalesById(siteID) {
    return this.httpClient.get(`${this.BASE_URL}/sites/${siteID}/sales`, {
      ...this.localStorage.getAuthorization()
    });
  }
  getSaleByInvoice(invoiceID) {
    return this.httpClient.get(`${this.BASE_URL}/invoices/${invoiceID}/sale`, {
      ...this.localStorage.getAuthorization()
    });
  }
  addSales(sale) {
    return this.httpClient.post(`${this.BASE_URL}/sales`, sale, {
      ...this.localStorage.getAuthorization()
    });
  }
  updateSale(sale) {
    return this.httpClient.put(`${this.BASE_URL}/sales/` + sale.id, sale, {
      ...this.localStorage.getAuthorization()
    });
  }
  deleteSale(sale) {
    return this.httpClient.delete(`${this.BASE_URL}/sales/` + sale.id, {
      ...this.localStorage.getAuthorization()
    });
  }
  static #_ = this.ɵfac = function SalesService_Factory(t) {
    return new (t || SalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SalesService,
    factory: SalesService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_components_clients_clients_component_ts.js.map