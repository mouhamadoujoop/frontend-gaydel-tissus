"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_components_sales_sales-create-update_sales-create-update_component_ts"],{

/***/ 24787:
/*!***************************************************************************************!*\
  !*** ./src/app/components/sales/sales-create-update/sales-create-update.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesCreateUpdateComponent: () => (/* binding */ SalesCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _models_sales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/sales */ 5133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _models_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/products */ 81825);
/* harmony import */ var _models_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/sites */ 56052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_product_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product/products.service */ 83146);
/* harmony import */ var _services_site_sites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/site/sites.service */ 13961);
/* harmony import */ var _services_sale_sales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/sale/sales.service */ 70972);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);





























function SalesCreateUpdateComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.form.controls.id.value, " ");
  }
}
function SalesCreateUpdateComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Nouvelles Ventes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 23)(2, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_mat_form_field_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 15)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 9)(4, "input", 25)(5, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r3.siteCtrl)("matAutocomplete", _r4)("value", ctx_r3.getSiteNameById(ctx_r3.siteCtrl.value));
  }
}
function SalesCreateUpdateComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 26)(1, "span", 27)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", product_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", product_r15.name, " ");
  }
}
function SalesCreateUpdateComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SalesCreateUpdateComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.productCtrl.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Veuillez s\u00E9lectionner un produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Quantit\u00E9 requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Quantit\u00E9 doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Prix requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Prix doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ajouter Vente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SalesCreateUpdateComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Modifier Vente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class SalesCreateUpdateComponent {
  constructor(defaults, dialogRef, fb, productService, siteService, salesService, snackbar) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.productService = productService;
    this.siteService = siteService;
    this.salesService = salesService;
    this.snackbar = snackbar;
    this.id = 0;
    this.siteId = 0;
    this.siteName = "";
    this.productId = 0;
    this.products = [];
    this.sites = [];
    this.productName = "";
    this.form = this.fb.group({
      id: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      site_id: [this.defaults?.site_id || ''],
      site: [this.defaults?.site || ''],
      product_id: [this.defaults?.product_id || ''],
      product: [this.defaults?.product || ''],
      pU: [this.defaults?.pU || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1)]],
      quantity_sold: [this.defaults?.quantity_sold, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1)]],
      sale_date: [this.defaults?.sale_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      step: [this.defaults?.step, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
    this.mode = 'create';
    this.productCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.siteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.showSiteField = false;
  }
  getProducts() {
    return this.productService.getProducts().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(result => {
      this.products = result.data;
      return this.products.map(product => new _models_products__WEBPACK_IMPORTED_MODULE_1__.Product(product));
    }));
  }
  getSites() {
    return this.siteService.getSites().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(result => {
      this.sites = result.data;
      return this.sites.map(site => new _models_sites__WEBPACK_IMPORTED_MODULE_2__.Site(site));
    }));
  }
  ngOnInit() {
    this.getProducts().subscribe(products => {
      this.products = products;
      this.getSites().subscribe(sites => {
        this.sites = sites;
        if (this.defaults) {
          this.mode = 'update';
        } else {
          this.defaults = {};
        }
        this.form.patchValue(this.defaults);
      });
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createSale();
      let sale = new _models_sales__WEBPACK_IMPORTED_MODULE_0__.Sale(this.form.value);
    } else if (this.mode === 'update') {
      this.updateSale();
    }
  }
  createSale() {
    this.form.get('product_id')?.setValue(this.productId);
    this.form.get('product')?.setValue(this.productName);
    this.form.get('site_id')?.setValue(this.siteId);
    this.form.get('site')?.setValue(this.siteName);
    const sale = this.form.value;
    this.dialogRef.close(sale);
  }
  updateSale() {
    const sales = this.form.value;
    const quantity_sold = Number(this.form.get('quantity_sold')?.value || 0);
    if (!this.defaults) {
      throw new Error('sales ID does not exist, this roles cannot be updated');
    }
    sales.id = this.defaults.id;
    this.dialogRef.close(sales);
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }
  getProductNameById(id) {
    this.productId = id;
    const product = this.products.find(p => p.id === id);
    this.productName = product ? product.name : '';
    return product ? product.name : '';
  }
  getSiteNameById(id) {
    this.siteId = id;
    const site = this.sites.find(s => s.id === id);
    this.siteName = site ? site.name : '';
    return site ? site.name : '';
  }
  static #_ = this.ɵfac = function SalesCreateUpdateComponent_Factory(t) {
    return new (t || SalesCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_product_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_site_sites_service__WEBPACK_IMPORTED_MODULE_4__.SitesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_sale_sales_service__WEBPACK_IMPORTED_MODULE_5__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SalesCreateUpdateComponent,
    selectors: [["vex-sales-create-update"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 39,
    vars: 18,
    consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], [1, "flex", "flex-col"], ["class", "flex-auto", 4, "ngIf"], [1, "w-300", "max-w-full"], ["matInput", "", 3, "formControl", "matAutocomplete", "value"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 4, "ngIf"], [4, "ngIf"], [1, "flex-auto"], ["formControlName", "quantity_sold", "matInput", "", "required", "", "min", "1"], ["matIconPrefix", "", "svgIcon", "mat:number"], ["formControlName", "pU", "matInput", "", "required", "", "min", "1"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], [1, "headline", "m-0", "flex-auto"], ["formControlName", "client_id", "matInput", "", "required", "", "min", "1"], ["matIconPrefix", "", "svgIcon", "mat:edit"], ["formControlName", "site_id", "matInput", "", "required", "", "min", "1"], [3, "value"], [1, "flex", "items-center"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button"], ["svgIcon", "mat:arrow_drop_down"], ["color", "primary", "mat-flat-button", "", "type", "submit"]],
    template: function SalesCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SalesCreateUpdateComponent_Template_form_ngSubmit_0_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SalesCreateUpdateComponent_h2_2_Template, 2, 1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SalesCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, SalesCreateUpdateComponent_mat_form_field_8_Template, 3, 0, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SalesCreateUpdateComponent_mat_form_field_9_Template, 6, 3, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-form-field", 8)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Selectionner Produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-autocomplete", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SalesCreateUpdateComponent_mat_option_16_Template, 4, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SalesCreateUpdateComponent_button_17_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SalesCreateUpdateComponent_button_18_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SalesCreateUpdateComponent_mat_error_19_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-form-field", 15)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Quantit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 16)(24, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SalesCreateUpdateComponent_mat_error_25_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, SalesCreateUpdateComponent_mat_error_26_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-form-field", 15)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Prix Unitaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "input", 18)(31, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, SalesCreateUpdateComponent_mat_error_32_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SalesCreateUpdateComponent_mat_error_33_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-dialog-actions", 19)(35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, SalesCreateUpdateComponent_button_37_Template, 2, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, SalesCreateUpdateComponent_button_38_Template, 2, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.form.controls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSiteField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSiteField);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.productCtrl)("matAutocomplete", _r4)("value", ctx.getProductNameById(ctx.productCtrl.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.productCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.productCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.productCtrl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.form.get("quantity_sold")) == null ? null : tmp_12_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx.form.get("quantity_sold")) == null ? null : tmp_13_0.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.form.get("pU")) == null ? null : tmp_14_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx.form.get("pU")) == null ? null : tmp_15_0.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCreateMode() && ctx.form.invalid == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isUpdateMode() && ctx.form.invalid == false);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zYWxlcy9zYWxlcy1jcmVhdGUtdXBkYXRlL3NhbGVzLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9MQUFvTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 81825:
/*!************************************!*\
  !*** ./src/app/models/products.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* binding */ Product)
/* harmony export */ });
class Product {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.quality = product.quality;
    this.conversion_rate = product.conversion_rate;
  }
}

/***/ }),

/***/ 5133:
/*!*********************************!*\
  !*** ./src/app/models/sales.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sale: () => (/* binding */ Sale)
/* harmony export */ });
class Sale {
  constructor(sale) {
    const today = new Date(Date.now());
    this.id = sale.id;
    this.site_id = sale.site_id;
    this.product_id = sale.product_id;
    this.quantity_sold = sale.quantity_sold;
    this.sale_date = sale.sale_date ? sale.sale_date : today.toISOString().substring(0, 10);
    this.pU = sale.pU;
    this.pTotal = sale.pU * sale.quantity_sold;
    this.product = sale.product && sale.product.name ? sale.product.name : sale.product ? sale.product : '';
    this.site = sale.site && sale.site.name ? sale.site.name : sale.site ? sale.site : '';
    this.callDate = this.formatDate(new Date(this.sale_date));
    this.client_id = sale.client_id;
    this.step = sale.step;
  }
  formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString();
    return `${day} ${month} ${year}`;
  }
}

/***/ }),

/***/ 56052:
/*!*********************************!*\
  !*** ./src/app/models/sites.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Site: () => (/* binding */ Site)
/* harmony export */ });
class Site {
  constructor(site) {
    if (site) {
      this.id = site.id;
      this.name = site.name;
      this.address = site.address;
    } else {
      this.id = 0;
      this.name = '';
      this.address = '';
    }
  }
}

/***/ }),

/***/ 83146:
/*!******************************************************!*\
  !*** ./src/app/services/product/products.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsService: () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);





class ProductsService {
  //private API_URL= environment.API_URL;
  constructor(httpClient, router, localStorage) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
    this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
  }
  getProducts() {
    return this.httpClient.get(`${this.BASE_URL}/products`, {
      ...this.localStorage.getAuthorization()
    });
  }
  getProductNotInStock(site) {
    return this.httpClient.get(`${this.BASE_URL}/sites/` + site.id + `/productsWithoutStock`, {
      ...this.localStorage.getAuthorization()
    });
  }
  addProduct(product) {
    return this.httpClient.post(`${this.BASE_URL}/products`, product, {
      ...this.localStorage.getAuthorization()
    });
  }
  updateProduct(product) {
    return this.httpClient.put(`${this.BASE_URL}/products/` + product.id, product, {
      ...this.localStorage.getAuthorization()
    });
  }
  checkProductExistsInStock(product, site) {
    return this.httpClient.get(`${this.BASE_URL}/sites/` + product + `/product/` + site + `/checkProductExistsInSiteStock`, {
      ...this.localStorage.getAuthorization()
    });
  }
  static #_ = this.ɵfac = function ProductsService_Factory(t) {
    return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductsService,
    factory: ProductsService.ɵfac,
    providedIn: 'root'
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


/***/ }),

/***/ 13961:
/*!************************************************!*\
  !*** ./src/app/services/site/sites.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SitesService: () => (/* binding */ SitesService)
/* harmony export */ });
/* harmony import */ var src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);





class SitesService {
  //private API_URL= environment.API_URL;
  constructor(httpClient, router, localStorage) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
    this.BASE_URL = src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
  }
  getSites() {
    return this.httpClient.get(`${this.BASE_URL}/sites`, {
      ...this.localStorage.getAuthorization()
    });
  }
  addSite(site) {
    return this.httpClient.post(`${this.BASE_URL}/sites`, site, {
      ...this.localStorage.getAuthorization()
    });
  }
  updateSite(site) {
    return this.httpClient.put(`${this.BASE_URL}/sites/` + site.id, site, {
      ...this.localStorage.getAuthorization()
    });
  }
  getSite(id) {
    return this.httpClient.get(`${this.BASE_URL}/sites/` + id, {
      ...this.localStorage.getAuthorization()
    });
  }
  getSiteStocks(site) {
    return this.httpClient.get(`${this.BASE_URL}/sites/` + site.id + `/stocks`, {
      ...this.localStorage.getAuthorization()
    });
  }
  static #_ = this.ɵfac = function SitesService_Factory(t) {
    return new (t || SitesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SitesService,
    factory: SitesService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_components_sales_sales-create-update_sales-create-update_component_ts.js.map