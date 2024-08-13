"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_components_stock_stock_component_ts"],{

/***/ 341:
/*!***************************************************************************************!*\
  !*** ./src/app/components/stock/stock-create-update/stock-create-update.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockCreateUpdateComponent: () => (/* binding */ StockCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _models_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/products */ 81825);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product/products.service */ 83146);
























function StockCreateUpdateComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ajout Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nouveau Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_7_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23)(1, "span", 24)(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r15.name, " ");
  }
}
function StockCreateUpdateComponent_mat_dialog_content_7_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockCreateUpdateComponent_mat_dialog_content_7_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.productCtrl.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_7_button_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_7_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Veuillez s\u00E9lectionner un produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_7_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Quantit\u00E9 requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_7_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Quantit\u00E9 doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_7_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Seuil requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_7_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Seuil doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-dialog-content", 11)(1, "mat-form-field", 12)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Selectionner Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-autocomplete", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, StockCreateUpdateComponent_mat_dialog_content_7_mat_option_7_Template, 4, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, StockCreateUpdateComponent_mat_dialog_content_7_button_8_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, StockCreateUpdateComponent_mat_dialog_content_7_button_9_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, StockCreateUpdateComponent_mat_dialog_content_7_mat_error_10_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 19)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 20)(15, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, StockCreateUpdateComponent_mat_dialog_content_7_mat_error_16_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, StockCreateUpdateComponent_mat_dialog_content_7_mat_error_17_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 19)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Seuil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 22)(22, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, StockCreateUpdateComponent_mat_dialog_content_7_mat_error_23_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, StockCreateUpdateComponent_mat_dialog_content_7_mat_error_24_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r2.productCtrl)("matAutocomplete", _r6)("value", ctx_r2.getProductNameById(ctx_r2.productCtrl.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.productCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.productCtrl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.productCtrl.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r2.form.get("quantity")) == null ? null : tmp_7_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r2.form.get("quantity")) == null ? null : tmp_8_0.hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r2.form.get("threshold")) == null ? null : tmp_9_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r2.form.get("threshold")) == null ? null : tmp_10_0.hasError("min"));
  }
}
function StockCreateUpdateComponent_mat_dialog_content_8_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Quantit\u00E9 requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_8_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La quantit\u00E9 doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_mat_dialog_content_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-dialog-content", 11)(1, "mat-form-field", 19)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 28)(5, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 19)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Quantit\u00E9 Actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 29)(10, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 19)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Quantit\u00E9 Entr\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 30)(15, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, StockCreateUpdateComponent_mat_dialog_content_8_mat_error_16_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, StockCreateUpdateComponent_mat_dialog_content_8_mat_error_17_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 19)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Seuil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 31)(22, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.form.get("newQuantity")) == null ? null : tmp_0_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.form.get("newQuantity")) == null ? null : tmp_1_0.hasError("min"));
  }
}
function StockCreateUpdateComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nouveau Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockCreateUpdateComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Approvisionner Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class StockCreateUpdateComponent {
  static #_ = this.id = 100;
  constructor(defaults, dialogRef, fb, productService) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.productService = productService;
    this.newQuantity = 0;
    this.productId = 0;
    this.productName = '';
    this.products = [];
    this.form = this.fb.group({
      id: [StockCreateUpdateComponent.id++],
      site_id: [this.defaults?.site_id || ''],
      site: [this.defaults?.site || ''],
      product_id: [this.defaults?.product_id || ''],
      product: [this.defaults?.product || ''],
      quantity: [this.defaults?.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
      threshold: [this.defaults?.threshold, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
      newQuantity: [this.newQuantity || '']
    });
    this.mode = 'create';
    this.productCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
  }
  getProducts() {
    return this.productService.getProducts().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(result => {
      if (result.total) {
        this.products = result.data;
      }
      return this.products.map(product => new _models_products__WEBPACK_IMPORTED_MODULE_0__.Product(product));
    }));
  }
  ngOnInit() {
    this.getProducts().subscribe(products => {
      this.products = products;
      if (this.defaults) {
        this.mode = 'update';
        this.form.addControl('newQuantity', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(this.newQuantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]));
      } else {
        this.defaults = {};
      }
      this.form.patchValue(this.defaults);
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createStock();
    } else if (this.mode === 'update') {
      this.updateStock();
    }
  }
  createStock() {
    this.form.get('product_id')?.setValue(this.productId);
    this.form.get('product')?.setValue(this.productName);
    const stock = this.form.value;
    this.dialogRef.close(stock);
  }
  updateStock() {
    const newQuantity = Number(this.form.get('newQuantity')?.value || 0);
    this.form.get('quantity')?.setValue(newQuantity);
    const stock = this.form.value;
    if (!this.defaults) {
      throw new Error('Stock ID does not exist, this Stock cannot be updated');
    }
    stock.id = this.defaults.id;
    this.dialogRef.close(stock);
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
  static #_2 = this.ɵfac = function StockCreateUpdateComponent_Factory(t) {
    return new (t || StockCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService));
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StockCreateUpdateComponent,
    selectors: [["vex-stock-create-update"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 7,
    consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], ["class", "flex flex-col", 4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], [1, "headline", "m-0", "flex-auto"], [1, "flex", "flex-col"], [1, "w-300", "max-w-full"], ["matInput", "", 3, "formControl", "matAutocomplete", "value"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 4, "ngIf"], [4, "ngIf"], [1, "flex-auto"], ["type", "number", "formControlName", "quantity", "matInput", "", "required", "", "min", "1"], ["matIconPrefix", "", "svgIcon", "mat:edit_location"], ["type", "number", "formControlName", "threshold", "matInput", "", "required", "", "min", "1"], [3, "value"], [1, "flex", "items-center"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button"], ["svgIcon", "mat:arrow_drop_down"], ["formControlName", "product", "matInput", "", "readonly", ""], ["type", "number", "formControlName", "quantity", "matInput", "", "readonly", ""], ["type", "number", "formControlName", "newQuantity", "matInput", "", "required", "", "min", "1"], ["type", "number", "formControlName", "threshold", "matInput", "", "readonly", ""], ["color", "primary", "mat-flat-button", "", "type", "submit"]],
    template: function StockCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StockCreateUpdateComponent_Template_form_ngSubmit_0_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StockCreateUpdateComponent_h2_2_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StockCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, StockCreateUpdateComponent_mat_dialog_content_7_Template, 25, 11, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, StockCreateUpdateComponent_mat_dialog_content_8_Template, 23, 2, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-dialog-actions", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, StockCreateUpdateComponent_button_12_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, StockCreateUpdateComponent_button_13_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUpdateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUpdateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCreateMode() && ctx.form.invalid == false && ctx.productCtrl.invalid == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUpdateMode() && ctx.form.invalid == false);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteTrigger, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9jay9zdG9jay1jcmVhdGUtdXBkYXRlL3N0b2NrLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9MQUFvTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 41446:
/*!*****************************************************!*\
  !*** ./src/app/components/stock/stock.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockComponent: () => (/* binding */ StockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _models_stocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/stocks */ 96220);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _stock_create_update_stock_create_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-create-update/stock-create-update.component */ 341);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/collections */ 20636);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 83951);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 86820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 5292);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ 10727);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-header.directive */ 72369);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout.component */ 60306);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _models_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/sites */ 56052);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var src_app_models_StockReplenishment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/StockReplenishment */ 31358);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_site_sites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/site/sites.service */ 13961);
/* harmony import */ var src_app_services_stock_stokcs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/stock/stokcs.service */ 90193);
/* harmony import */ var src_app_services_StockReplenishment_stock_replenishments_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/StockReplenishment/stock-replenishments.service */ 68726);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ 51333);














































function StockComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Stocks: ", ctx_r0.site.name, "");
  }
}
function StockComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36)(1, "mat-checkbox", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function StockComponent_th_17_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event ? ctx_r18.masterToggle() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
  }
}
function StockComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 38)(1, "mat-checkbox", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function StockComponent_td_18_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22);
      const row_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event ? ctx_r21.selection.toggle(row_r20) : null);
    })("click", function StockComponent_td_18_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r20));
  }
}
function StockComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 36);
  }
}
function StockComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", row_r24["imageSrc"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}
function StockComponent_ng_container_22_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", column_r25.label, " ");
  }
}
function StockComponent_ng_container_22_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r31 = ctx.$implicit;
    const column_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", column_r25.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r31[column_r25.property], " ");
  }
}
function StockComponent_ng_container_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, StockComponent_ng_container_22_ng_container_1_th_1_Template, 2, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, StockComponent_ng_container_22_ng_container_1_td_2_Template, 2, 2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matColumnDef", column_r25.property);
  }
}
function StockComponent_ng_container_22_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", column_r25.label, " ");
  }
}
function StockComponent_ng_container_22_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r37 = ctx.$implicit;
    const column_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", column_r25.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r37[column_r25.property], " Kg ");
  }
}
function StockComponent_ng_container_22_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, StockComponent_ng_container_22_ng_container_2_th_1_Template, 2, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, StockComponent_ng_container_22_ng_container_2_td_2_Template, 2, 2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matColumnDef", column_r25.property);
  }
}
function StockComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, StockComponent_ng_container_22_ng_container_1_Template, 3, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, StockComponent_ng_container_22_ng_container_2_Template, 3, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", column_r25.type === "text" && column_r25.property !== "quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", column_r25.type === "text" && column_r25.property === "quantity");
  }
}
function StockComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 47);
  }
}
function StockComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 48)(1, "div", 49)(2, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_td_25_Template_a_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_td_25_Template_a_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_td_25_Template_a_click_6_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function StockComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Qualit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function StockComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 48)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_td_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function StockComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 47);
  }
}
const _c0 = function (a0) {
  return {
    stock: a0
  };
};
function StockComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 59)(1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_td_31_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c0, row_r46))("matMenuTriggerFor", _r16);
  }
}
function StockComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 62);
  }
}
function StockComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_tr_33_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r50);
      const row_r48 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r49.updateStock(row_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
function StockComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_button_37_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r53);
      const column_r51 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r52.toggleColumnVisibility(column_r51, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-checkbox", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_button_37_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function StockComponent_button_37_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r53);
      const column_r51 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](column_r51.visible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", column_r51.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", column_r51.label, " ");
  }
}
function StockComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_ng_template_40_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r58);
      const stock_r56 = restoredCtx.stock;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r57.updateStock(stock_r56));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Approvionner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
class StockComponent {
  constructor(dialog, route, siteService, stockService, stockReplenishment, snackbar) {
    this.dialog = dialog;
    this.route = route;
    this.siteService = siteService;
    this.stockService = stockService;
    this.stockReplenishment = stockReplenishment;
    this.snackbar = snackbar;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormControl('boxed');
    this.site = new _models_sites__WEBPACK_IMPORTED_MODULE_7__.Site();
    /**
     * Simulating a service with HTTP that returns Observables
     * You probably want to remove this and do all requests in a service with HTTP
     */
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.stocks = [];
    this.columns = [{
      label: 'Produit',
      property: 'product',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    }, {
      label: 'Quatité en Stock',
      property: 'quantity',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Quatité Seuil',
      property: 'threshold',
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
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__.SelectionModel(true, []);
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormControl();
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_12__.DestroyRef);
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData(site) {
    return this.siteService.getSiteStocks(site).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(result => {
      if (result.status === 200) {
        this.stocks = result.stocks || [];
      }
      return this.stocks.map(stock => new _models_stocks__WEBPACK_IMPORTED_MODULE_0__.Stock(stock));
    }));
  }
  ngOnInit() {
    // this.id = Number(this.route.snapshot.params['id']);
    this.id = history.state.siteId;
    this.siteService.getSite(this.id).subscribe(result => {
      this.site = new _models_sites__WEBPACK_IMPORTED_MODULE_7__.Site(result.data);
      this.getData(this.site).subscribe(stocks => {
        this.subject$.next(stocks);
      });
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(Boolean)).subscribe(stocks => {
      this.stocks = stocks;
      this.dataSource.data = stocks;
    });
    this.searchCtrl.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => this.onFilterChange(value));
  }
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
  createStock() {
    this.dialog.open(_stock_create_update_stock_create_update_component__WEBPACK_IMPORTED_MODULE_1__.StockCreateUpdateComponent).afterClosed().subscribe(stock => {
      if (stock) {
        stock.site_id = this.site.id;
        const newStock = new _models_stocks__WEBPACK_IMPORTED_MODULE_0__.Stock(stock);
        if (this.stocks.find(s => s.product_id === newStock.product_id)) {
          const stockReplenishment = new src_app_models_StockReplenishment__WEBPACK_IMPORTED_MODULE_8__.StockReplenishment(stock);
          console.log(stockReplenishment);
          const index = this.stocks.findIndex(existingStock => existingStock.product_id === stock.product_id);
          this.stocks[index].quantity += new _models_stocks__WEBPACK_IMPORTED_MODULE_0__.Stock(stock).quantity;
          this.subject$.next(this.stocks);
          this.stockReplenishment.addStockReplenishment(stockReplenishment).subscribe(result => {
            if (result.status === 200) {
              this.snackbar.open("Stock effectué avec succés ", 'MERCI', {
                duration: 2000
              });
            } else {
              this.snackbar.open("Echec Ajout Stock ", 'MERCI DE REESSAYER', {
                duration: 2000
              });
            }
          });
        } else {
          console.log(stock, false);
          this.stocks.unshift(new _models_stocks__WEBPACK_IMPORTED_MODULE_0__.Stock(stock));
          this.subject$.next(this.stocks);
          newStock.quantity = 0;
          this.stockService.addStock(newStock).subscribe(result => {
            if (result["status "] === 200) {
              this.stockReplenishment.addStockReplenishment(new src_app_models_StockReplenishment__WEBPACK_IMPORTED_MODULE_8__.StockReplenishment(stock)).subscribe(result => {
                if (result.status === 200) {
                  this.snackbar.open("Stock ajouté avec succés ", 'MERCI', {
                    duration: 2000
                  });
                } else {
                  this.snackbar.open("Echec Ajout Stock ", 'MERCI DE REESSAYER', {
                    duration: 2000
                  });
                }
              });
            } else {
              this.snackbar.open("Echec Ajout Stock effectué ", 'MERCI DE REESSAYER', {
                duration: 2000
              });
            }
          });
        }
      }
    });
  }
  updateStock(stock) {
    this.dialog.open(_stock_create_update_stock_create_update_component__WEBPACK_IMPORTED_MODULE_1__.StockCreateUpdateComponent, {
      data: stock
    }).afterClosed().subscribe(updateStock => {
      if (updateStock) {
        const stockReplenishment = new src_app_models_StockReplenishment__WEBPACK_IMPORTED_MODULE_8__.StockReplenishment(updateStock);
        this.stockReplenishment.addStockReplenishment(stockReplenishment).subscribe(result => {
          if (result.status === 200) {
            const index = this.stocks.findIndex(existingStock => existingStock.id === updateStock.id);
            this.stocks[index].quantity += new _models_stocks__WEBPACK_IMPORTED_MODULE_0__.Stock(updateStock).quantity;
            this.subject$.next(this.stocks);
            this.snackbar.open("Stock ajouter avec succés", 'MERCI', {
              duration: 2000
            });
          } else {
            this.snackbar.open("Echec Ajout Stock", 'MERCI DE REESSAYER', {
              duration: 2000
            });
          }
        });
      }
    });
  }
  deleteStock(stock) {
    this.stocks.splice(this.stocks.findIndex(existingStock => existingStock.id === stock.id), 1);
    this.selection.deselect(stock);
    this.subject$.next(this.stocks);
  }
  deleteStocks(stocks) {
    stocks.forEach(s => this.deleteStock(s));
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
    const index = this.stocks.findIndex(s => s === row);
    this.subject$.next(this.stocks);
  }
  static #_ = this.ɵfac = function StockComponent_Factory(t) {
    return new (t || StockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_site_sites_service__WEBPACK_IMPORTED_MODULE_9__.SitesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_stock_stokcs_service__WEBPACK_IMPORTED_MODULE_10__.StokcsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_StockReplenishment_stock_replenishments_service__WEBPACK_IMPORTED_MODULE_11__.StockReplenishmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: StockComponent,
    selectors: [["vex-stock"]],
    viewQuery: function StockComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      columns: "columns"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
    decls: 41,
    vars: 16,
    consts: [[1, "pb-1", "flex", "flex-col", "items-start", "justify-center"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], [4, "ngIf"], ["subscriptSizing", "dynamic"], ["matIconPrefix", "", "svgIcon", "mat:search"], ["matInput", "", "placeholder", "Search\u2026", "type", "text", 3, "formControl"], [1, "flex-1"], ["mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", "flex-none", 3, "matMenuTriggerFor"], ["svgIcon", "mat:filter_list"], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Add Stock", "type", "button", 1, "ml-4", "flex-none", 3, "click"], ["svgIcon", "mat:add"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "w-8 min-w-8 p-0", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "labels"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover transition duration-400 ease-out-swift cursor-pointer", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["columnFilterMenu", "matMenu"], ["class", "mat-menu-item block", 3, "click", 4, "ngFor", "ngForOf"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change", "click"], ["mat-cell", "", 1, "w-8", "min-w-8", "p-0"], [1, "avatar", "h-8", "w-8", "align-middle", 3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary-600", "bg-primary-600/10", 3, "click"], ["svgIcon", "mat:phone", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal-600", "bg-teal/10", 3, "click"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green-600", "bg-green-600/10", 3, "click"], ["svgIcon", "mat:map", 1, "icon-sm"], [1, "flex", "items-center", "gap-1", 3, "click"], [1, "bg-base", "text-hint", "cursor-pointer", "hover:bg-hover", "flex-none", "flex", "items-center", "justify-center"], ["svgIcon", "mat:add", 1, "icon-sm"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerData", "matMenuTriggerFor", "click"], ["svgIcon", "mat:more_horiz"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "transition", "duration-400", "ease-out-swift", "cursor-pointer", 3, "click"], [1, "mat-menu-item", "block", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"], ["mat-menu-item", "", 3, "click"]],
    template: function StockComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "vex-page-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "vex-page-layout-content", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, StockComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "mat-icon", 7)(9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockComponent_Template_button_click_13_listener() {
          return ctx.createStock();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](16, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, StockComponent_th_17_Template, 2, 2, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, StockComponent_td_18_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](19, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, StockComponent_th_20_Template, 1, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, StockComponent_td_21_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, StockComponent_ng_container_22_Template, 3, 2, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](23, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, StockComponent_th_24_Template, 1, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, StockComponent_td_25_Template, 8, 0, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](26, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, StockComponent_th_27_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, StockComponent_td_28_Template, 4, 0, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](29, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, StockComponent_th_30_Template, 1, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, StockComponent_td_31_Template, 3, 4, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, StockComponent_tr_32_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, StockComponent_tr_33_Template, 1, 1, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "mat-paginator", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "mat-menu", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, StockComponent_button_37_Template, 3, 2, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "mat-menu", 31, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, StockComponent_ng_template_40_Template, 4, 0, "ng-template", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-6", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.selection.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matMenuTriggerFor", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.columns);
      }
    },
    dependencies: [_vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_6__.VexPageLayoutComponent, _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_5__.VexPageLayoutHeaderDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlDirective, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.VexPageLayoutContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuTrigger, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatPrefix, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9jay9zdG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__.stagger40ms]
    }
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
//# sourceMappingURL=src_app_components_stock_stock_component_ts.js.map