"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_components_new-sale_new-sale_component_ts"],{

/***/ 5492:
/*!************************************************************************************************!*\
  !*** ./src/app/components/new-sale/new-sale-create-update/new-sale-create-update.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewSaleCreateUpdateComponent: () => (/* binding */ NewSaleCreateUpdateComponent)
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





























function NewSaleCreateUpdateComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.form.controls.product.value, " ");
  }
}
function NewSaleCreateUpdateComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Nouvelles Ventes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewSaleCreateUpdateComponent_mat_form_field_8_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 23)(1, "span", 24)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", product_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", product_r14.name, " ");
  }
}
function NewSaleCreateUpdateComponent_mat_form_field_8_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NewSaleCreateUpdateComponent_mat_form_field_8_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.productCtrl.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewSaleCreateUpdateComponent_mat_form_field_8_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewSaleCreateUpdateComponent_mat_form_field_8_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Veuillez s\u00E9lectionner un produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewSaleCreateUpdateComponent_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 17)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Selectionner Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-autocomplete", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NewSaleCreateUpdateComponent_mat_form_field_8_mat_option_6_Template, 4, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, NewSaleCreateUpdateComponent_mat_form_field_8_button_7_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NewSaleCreateUpdateComponent_mat_form_field_8_button_8_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, NewSaleCreateUpdateComponent_mat_form_field_8_mat_error_9_Template, 2, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.productCtrl)("matAutocomplete", _r9)("value", ctx_r2.getProductNameById(ctx_r2.productCtrl.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.productCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.productCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.productCtrl.invalid);
  }
}
function NewSaleCreateUpdateComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Quantit\u00E9 requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewSaleCreateUpdateComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Quantit\u00E9 doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewSaleCreateUpdateComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Prix requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewSaleCreateUpdateComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Prix doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewSaleCreateUpdateComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ajouter Vente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewSaleCreateUpdateComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Modifier Vente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class NewSaleCreateUpdateComponent {
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
      product: [this.defaults?.product || '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      pU: [this.defaults?.pU || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1)]],
      quantity_sold: [this.defaults?.quantity_sold, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1)]],
      sale_date: [this.defaults?.sale_date],
      step: [this.defaults?.step]
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
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.getProducts().subscribe(products => {
        this.products = products;
        this.getSites().subscribe(sites => {
          this.sites = sites;
        });
      });
      this.defaults = {};
    }
    this.form.patchValue(this.defaults);
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
    this.form.get('product')?.setValue(this.productName);
    return product ? product.name : '';
  }
  getSiteNameById(id) {
    this.siteId = id;
    const site = this.sites.find(s => s.id === id);
    this.siteName = site ? site.name : '';
    return site ? site.name : '';
  }
  static #_ = this.ɵfac = function NewSaleCreateUpdateComponent_Factory(t) {
    return new (t || NewSaleCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_product_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_site_sites_service__WEBPACK_IMPORTED_MODULE_4__.SitesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_sale_sales_service__WEBPACK_IMPORTED_MODULE_5__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: NewSaleCreateUpdateComponent,
    selectors: [["vex-new-sale-create-update"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 28,
    vars: 10,
    consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], [1, "flex", "flex-col"], ["class", "w-300 max-w-full", 4, "ngIf"], [1, "flex-auto"], ["formControlName", "quantity_sold", "matInput", "", "required", "", "min", "1"], ["matIconPrefix", "", "svgIcon", "mat:number"], [4, "ngIf"], ["formControlName", "pU", "matInput", "", "required", "", "min", "1"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], [1, "headline", "m-0", "flex-auto"], [1, "w-300", "max-w-full"], ["matInput", "", 3, "formControl", "matAutocomplete", "value"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 4, "ngIf"], [3, "value"], [1, "flex", "items-center"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button"], ["svgIcon", "mat:arrow_drop_down"], ["color", "primary", "mat-flat-button", "", "type", "submit"]],
    template: function NewSaleCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function NewSaleCreateUpdateComponent_Template_form_ngSubmit_0_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NewSaleCreateUpdateComponent_h2_2_Template, 2, 1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NewSaleCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NewSaleCreateUpdateComponent_mat_form_field_8_Template, 10, 7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 8)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Quantit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 9)(13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, NewSaleCreateUpdateComponent_mat_error_14_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, NewSaleCreateUpdateComponent_mat_error_15_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field", 8)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Prix Unitaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 12)(20, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, NewSaleCreateUpdateComponent_mat_error_21_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, NewSaleCreateUpdateComponent_mat_error_22_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-dialog-actions", 13)(24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, NewSaleCreateUpdateComponent_button_26_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, NewSaleCreateUpdateComponent_button_27_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.form.controls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.form.get("quantity_sold")) == null ? null : tmp_4_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.form.get("quantity_sold")) == null ? null : tmp_5_0.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.form.get("pU")) == null ? null : tmp_6_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.form.get("pU")) == null ? null : tmp_7_0.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCreateMode() && ctx.form.invalid == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isUpdateMode() && ctx.form.invalid == false);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctc2FsZS1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uZXctc2FsZS9uZXctc2FsZS1jcmVhdGUtdXBkYXRlL25ldy1zYWxlLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdMQUF3TCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9295:
/*!***********************************************************!*\
  !*** ./src/app/components/new-sale/new-sale.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewSaleComponent: () => (/* binding */ NewSaleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _new_sale_create_update_new_sale_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-sale-create-update/new-sale-create-update.component */ 5492);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/collections */ 20636);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 83951);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 86820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 5292);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ 10727);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-header.directive */ 72369);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout.component */ 60306);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var _models_sales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/sales */ 5133);
/* harmony import */ var src_app_models_clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/clients */ 23740);
/* harmony import */ var src_app_models_roles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/roles */ 74173);
/* harmony import */ var _services_sale_sales_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sale/sales.service */ 70972);
/* harmony import */ var src_app_services_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/invoice/invoice.service */ 85784);
/* harmony import */ var src_app_services_client_clients_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/client/clients.service */ 78068);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 21021);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ 51333);














































function NewSaleComponent_vex_page_layout_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "vex-page-layout-header", 36);
  }
}
function NewSaleComponent_vex_page_layout_header_2_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Montant requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function NewSaleComponent_vex_page_layout_header_2_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Montant invalide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function NewSaleComponent_vex_page_layout_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "vex-page-layout-header", 37)(1, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function NewSaleComponent_vex_page_layout_header_2_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r26.payer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, NewSaleComponent_vex_page_layout_header_2_mat_error_4_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, NewSaleComponent_vex_page_layout_header_2_mat_error_5_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, " Payer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.form.get("amount_payed")) == null ? null : tmp_1_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.form.get("amount_payed")) == null ? null : tmp_2_0.hasError("min"));
  }
}
function NewSaleComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Nouvelle Vente: ", ctx_r2.totalVente, "");
  }
}
function NewSaleComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r3.client.full_name, ": ", ctx_r3.totalVente, " F");
  }
}
function NewSaleComponent_span_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function NewSaleComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, NewSaleComponent_span_9_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r4.selection.selected.length, " sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.selection.selected.length > 1);
  }
}
function NewSaleComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 42)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function NewSaleComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r29.createSale());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function NewSaleComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 47)(1, "mat-checkbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function NewSaleComponent_th_20_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event ? ctx_r31.masterToggle() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", ctx_r7.selection.hasValue() && ctx_r7.isAllSelected())("indeterminate", ctx_r7.selection.hasValue() && !ctx_r7.isAllSelected());
  }
}
function NewSaleComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 49)(1, "mat-checkbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function NewSaleComponent_td_21_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r35);
      const row_r33 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event ? ctx_r34.selection.toggle(row_r33) : null);
    })("click", function NewSaleComponent_td_21_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r33 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", ctx_r8.selection.isSelected(row_r33));
  }
}
function NewSaleComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 47);
  }
}
function NewSaleComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", row_r37["imageSrc"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function NewSaleComponent_ng_container_25_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", column_r38.label, " ");
  }
}
function NewSaleComponent_ng_container_25_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r43 = ctx.$implicit;
    const column_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", column_r38.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", row_r43[column_r38.property], " ");
  }
}
function NewSaleComponent_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, NewSaleComponent_ng_container_25_ng_container_1_th_1_Template, 2, 1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, NewSaleComponent_ng_container_25_ng_container_1_td_2_Template, 2, 2, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matColumnDef", column_r38.property);
  }
}
function NewSaleComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, NewSaleComponent_ng_container_25_ng_container_1_Template, 3, 1, "ng-container", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", column_r38.type === "text");
  }
}
function NewSaleComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 58);
  }
}
function NewSaleComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 59)(1, "div", 60)(2, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_td_28_Template_a_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_td_28_Template_a_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_td_28_Template_a_click_6_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function NewSaleComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 56);
  }
}
function NewSaleComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 59)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_td_31_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function NewSaleComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 58);
  }
}
const _c0 = function (a0) {
  return {
    sale: a0
  };
};
function NewSaleComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 70)(1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_td_34_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](2, _c0, row_r52))("matMenuTriggerFor", _r22);
  }
}
function NewSaleComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 73);
  }
}
function NewSaleComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 74);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
function NewSaleComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_button_40_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57);
      const column_r55 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r56.toggleColumnVisibility(column_r55, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-checkbox", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_button_40_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function NewSaleComponent_button_40_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57);
      const column_r55 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](column_r55.visible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", column_r55.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", column_r55.label, " ");
  }
}
function NewSaleComponent_43_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_43_ng_template_0_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r63);
      const sale_r61 = restoredCtx.sale;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r62.updateSale(sale_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewSaleComponent_43_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r63);
      const sale_r61 = restoredCtx.sale;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r64.deleteSale(sale_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function NewSaleComponent_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, NewSaleComponent_43_ng_template_0_Template, 8, 0, "ng-template", 77);
  }
}
const _c1 = function () {
  return ["CAISSIERE"];
};
const _c2 = function () {
  return ["SUPERVISEUR", "SUPER_ADMIN"];
};
class NewSaleComponent {
  constructor(dialog, salesService, invoiceService, clientsService, snackbar, fb, localStorage) {
    this.dialog = dialog;
    this.salesService = salesService;
    this.invoiceService = invoiceService;
    this.clientsService = clientsService;
    this.snackbar = snackbar;
    this.fb = fb;
    this.localStorage = localStorage;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('boxed');
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.columns = [{
      label: 'Nom Produit',
      property: 'product',
      type: 'text',
      visible: true
    }, {
      label: 'Quantité Vendu',
      property: 'quantity_sold',
      type: 'text',
      visible: true
    }, {
      label: 'Prix Unitaire(FCFA)',
      property: 'pU',
      type: 'text',
      visible: true
    }, {
      label: 'Prix Total(FCFA)',
      property: 'pTotal',
      type: 'text',
      visible: true
    }, {
      label: 'Actions',
      property: 'actions',
      type: 'button',
      visible: true
    }];
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 20, 50];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__.SelectionModel(true, []);
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl();
    this.form = this.fb.group({
      amount_payed: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.min(1)]]
    });
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_13__.DestroyRef);
    this.invoice_id = 0;
    this.clientId = 0;
    this.salesList = [];
    this.totalVente = 0;
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  getSaleByInvoice() {
    return this.salesService.getSaleByInvoice(this.invoice_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(res => {
      this.salesList = res.data;
      return this.salesList.map(sale => new _models_sales__WEBPACK_IMPORTED_MODULE_6__.Sale(sale));
    }));
  }
  getClient(clientId) {
    return this.clientsService.getClientById(clientId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(res => {
      this.client = new src_app_models_clients__WEBPACK_IMPORTED_MODULE_7__.Client(res.data);
    }));
  }
  getClientInvoice(clientId) {
    return this.clientsService.getClientInvoice(clientId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(res => {
      if (res.status === 200) {
        this.invoice_id = res.data.id;
        this.getSaleByInvoice().subscribe(sales => {
          this.subject$.next(sales);
        });
      }
    }));
  }
  ngOnInit() {
    this.userRoles = new src_app_models_roles__WEBPACK_IMPORTED_MODULE_8__.Roles(JSON.parse(this.localStorage.getData('dataRole') ?? 'null'));
    if (history.state.clientId) {
      this.clientId = history.state.clientId;
      this.getClient(this.clientId).subscribe(client => {
        this.getClientInvoice(this.client.id).subscribe(invoice => {});
      });
    } else {
      if (history.state.invoiceId) {
        this.invoice_id = history.state.invoiceId;
        this.getSaleByInvoice().subscribe(sales => {
          this.subject$.next(sales);
          if (this.salesList[0].client_id) {
            this.clientId = this.salesList[0].client_id;
            this.getClient(this.clientId).subscribe(client => {
              this.client = new src_app_models_clients__WEBPACK_IMPORTED_MODULE_7__.Client(client);
            });
          }
        });
      }
    }
    this.userConnected = localStorage.getItem('dataUser');
    this.userConnected = JSON.parse(this.userConnected);
    this.site_id = this.userConnected.site_id;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(Boolean)).subscribe(sales => {
      this.salesList = sales;
      this.totalVente = this.salesList.reduce((total, sale) => total + sale.quantity_sold * sale.pU, 0);
      this.dataSource.data = sales;
    });
    this.searchCtrl.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => this.onFilterChange(value));
  }
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
  createSale() {
    this.dialog.open(_new_sale_create_update_new_sale_create_update_component__WEBPACK_IMPORTED_MODULE_0__.NewSaleCreateUpdateComponent).afterClosed().subscribe(sale => {
      if (sale) {
        if (this.clientId !== 0) {
          sale.client_id = this.clientId;
        }
        sale.site_id = this.site_id;
        const newSale = new _models_sales__WEBPACK_IMPORTED_MODULE_6__.Sale(sale);
        if (this.invoice_id === 0) {
          newSale.step = 0;
          this.salesService.addSales(newSale).subscribe(result => {
            console.log(result);
            this.snackbar.open(result.message, 'MERCI', {
              duration: 1500
            });
            if (result.status === 200) {
              this.invoice_id = result.data.invoice_id;
              newSale.id = result.data.id;
              this.salesList.unshift(newSale);
              this.subject$.next(this.salesList);
            }
          });
        } else {
          newSale.invoice_id = this.invoice_id;
          newSale.step = 0;
          this.salesService.addSales(newSale).subscribe(result => {
            console.log(result);
            this.snackbar.open(result.message, 'MERCI', {
              duration: 1500
            });
            if (result.status === 200) {
              this.invoice_id = result.data.invoice_id;
              newSale.id = result.data.id;
              this.salesList.unshift(newSale);
              this.subject$.next(this.salesList);
            }
          });
        }
      }
    });
  }
  updateSale(sale) {
    this.dialog.open(_new_sale_create_update_new_sale_create_update_component__WEBPACK_IMPORTED_MODULE_0__.NewSaleCreateUpdateComponent, {
      data: sale
    }).afterClosed().subscribe(updateSale => {
      if (updateSale) {
        sale.site_id = this.site_id;
        sale.step = 0;
        this.salesService.updateSale(updateSale).subscribe(result => {
          if (result.status === 200) {
            const index = this.salesList.findIndex(existingSale => existingSale.id === updateSale.id);
            this.salesList[index] = new _models_sales__WEBPACK_IMPORTED_MODULE_6__.Sale(updateSale);
            this.subject$.next(this.salesList);
            this.snackbar.open("Vente modifier avec succés", 'MERCI', {
              duration: 1000
            });
          } else {
            this.snackbar.open("Echec Modification Vente", 'MERCI DE REESSAYER', {
              duration: 1000
            });
          }
        });
      }
    });
  }
  deleteSale(sale) {
    this.salesService.deleteSale(sale).subscribe(result => {
      if (result.status === 200) {
        this.salesList.splice(this.salesList.findIndex(existingSale => existingSale.id === sale.id), 1);
        this.selection.deselect(sale);
        this.subject$.next(this.salesList);
        this.snackbar.open("Vente Supprimer avec succés", 'MERCI', {
          duration: 1000
        });
      } else {
        this.snackbar.open("Echec Suppression Vente", 'MERCI DE REESSAYER', {
          duration: 1000
        });
      }
    });
    //
    // this.salesList.splice(
    //   this.salesList.findIndex(
    //     (existingSale) => existingSale.id === sale.id
    //   ),
    //   1
    // );
    // this.selection.deselect(sale);
    // this.subject$.next(this.salesList);
  }

  *onFilterChange(value) {
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
    const index = this.salesList.findIndex(s => s === row);
    this.subject$.next(this.salesList);
  }
  payer() {
    console.log(this.form.get('amount_payed')?.value);
    const amount = this.form.get('amount_payed')?.value;
    if (amount) {
      this.invoiceService.validateClientInvoice(this.invoice_id, amount).subscribe(result => {
        if (result.status == 200) {
          this.snackbar.open("Vente Effectuer avec succés", 'MERCI', {
            duration: 1000
          });
        } else {
          this.snackbar.open("Echec Vente", 'MERCI DE REESSAYER', {
            duration: 1000
          });
        }
      });
    }
  }
  static #_ = this.ɵfac = function NewSaleComponent_Factory(t) {
    return new (t || NewSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_sale_sales_service__WEBPACK_IMPORTED_MODULE_9__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_10__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_client_clients_service__WEBPACK_IMPORTED_MODULE_11__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_12__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: NewSaleComponent,
    selectors: [["vex-new-sale"]],
    viewQuery: function NewSaleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      columns: "columns"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 44,
    vars: 27,
    consts: [["class", " flex flex-col items-start justify-center", 4, "ngIf"], ["class", " pb-10 flex flex-col items-start justify-center", 4, "ngIf"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], [4, "ngIf"], ["class", "mr-4 pr-4 border-r flex-none", 4, "ngIf"], ["subscriptSizing", "dynamic"], ["matIconPrefix", "", "svgIcon", "mat:search"], ["matInput", "", "placeholder", "Search\u2026", "type", "text", 3, "formControl"], [1, "flex-1"], ["mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", "flex-none", 3, "matMenuTriggerFor"], ["svgIcon", "mat:filter_list"], ["class", "ml-4 flex-none", "color", "primary", "mat-mini-fab", "", "matTooltip", "Add sale", "type", "button", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "w-8 min-w-8 p-0", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "labels"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover transition duration-400 ease-out-swift cursor-pointer", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["columnFilterMenu", "matMenu"], ["class", "mat-menu-item block", 3, "click", 4, "ngFor", "ngForOf"], ["actionsMenu", "matMenu"], [1, "flex", "flex-col", "items-start", "justify-center"], [1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [3, "formGroup", "ngSubmit"], [1, "flex-auto"], ["formControlName", "amount_payed", "type", "number", "matInput", ""], ["color", "primary", "mat-flat-button", "", "type", "submit", 2, "margin-left", "16px"], [1, "mr-4", "pr-4", "border-r", "flex-none"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Another action", "type", "button"], ["svgIcon", "mat:folder"], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Add sale", "type", "button", 1, "ml-4", "flex-none", 3, "click"], ["svgIcon", "mat:add"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change", "click"], ["mat-cell", "", 1, "w-8", "min-w-8", "p-0"], [1, "avatar", "h-8", "w-8", "align-middle", 3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary-600", "bg-primary-600/10", 3, "click"], ["svgIcon", "mat:phone", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal-600", "bg-teal/10", 3, "click"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green-600", "bg-green-600/10", 3, "click"], ["svgIcon", "mat:map", 1, "icon-sm"], [1, "flex", "items-center", "gap-1", 3, "click"], [1, "bg-base", "text-hint", "cursor-pointer", "hover:bg-hover", "flex-none", "flex", "items-center", "justify-center"], ["svgIcon", "mat:add", 1, "icon-sm"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerData", "matMenuTriggerFor", "click"], ["svgIcon", "mat:more_horiz"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "transition", "duration-400", "ease-out-swift", "cursor-pointer"], [1, "mat-menu-item", "block", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"], ["matMenuContent", ""], ["mat-menu-item", "", 3, "click"], ["svgIcon", "mat:edit"], ["svgIcon", "mat:delete"]],
    template: function NewSaleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, NewSaleComponent_vex_page_layout_header_1_Template, 1, 0, "vex-page-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, NewSaleComponent_vex_page_layout_header_2_Template, 8, 3, "vex-page-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "vex-page-layout-content", 2)(4, "div", 3)(5, "div", 4)(6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, NewSaleComponent_span_7_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, NewSaleComponent_span_8_Template, 2, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, NewSaleComponent_span_9_Template, 4, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, NewSaleComponent_div_10_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "mat-icon", 9)(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, NewSaleComponent_button_17_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](19, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, NewSaleComponent_th_20_Template, 2, 2, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, NewSaleComponent_td_21_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](22, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, NewSaleComponent_th_23_Template, 1, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, NewSaleComponent_td_24_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, NewSaleComponent_ng_container_25_Template, 2, 1, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](26, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, NewSaleComponent_th_27_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, NewSaleComponent_td_28_Template, 8, 0, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](29, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, NewSaleComponent_th_30_Template, 1, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, NewSaleComponent_td_31_Template, 4, 0, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](32, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, NewSaleComponent_th_33_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, NewSaleComponent_td_34_Template, 3, 4, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, NewSaleComponent_tr_35_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](36, NewSaleComponent_tr_36_Template, 1, 1, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](37, "mat-paginator", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "mat-menu", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, NewSaleComponent_button_40_Template, 3, 2, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "mat-menu", 32, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](43, NewSaleComponent_43_Template, 1, 0, null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](23, _c1).includes(ctx.userRoles.role_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](24, _c1).includes(ctx.userRoles.role_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-6", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.selection.isEmpty() && ctx.clientId === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.selection.isEmpty() && ctx.clientId !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](25, _c2).includes(ctx.userRoles.role_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](26, _c2).includes(ctx.userRoles.role_name));
      }
    },
    dependencies: [_vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_5__.VexPageLayoutComponent, _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.VexPageLayoutHeaderDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.VexPageLayoutContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuTrigger, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatPrefix, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctc2FsZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uZXctc2FsZS9uZXctc2FsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__.stagger40ms]
    }
  });
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
//# sourceMappingURL=src_app_components_new-sale_new-sale_component_ts.js.map