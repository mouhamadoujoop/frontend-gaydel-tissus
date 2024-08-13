"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_components_stock-replenishment_stock-replenishment_component_ts"],{

/***/ 29620:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/components/stock-replenishment/stock-replenishment-create-update/stock-replenishment-create-update.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockReplenishmentCreateUpdateComponent: () => (/* binding */ StockReplenishmentCreateUpdateComponent)
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
























function StockReplenishmentCreateUpdateComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 21)(1, "span", 22)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r10.name, " ");
  }
}
function StockReplenishmentCreateUpdateComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockReplenishmentCreateUpdateComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.productCtrl.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockReplenishmentCreateUpdateComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockReplenishmentCreateUpdateComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Veuillez s\u00E9lectionner un produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockReplenishmentCreateUpdateComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Quantit\u00E9 requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockReplenishmentCreateUpdateComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Quantit\u00E9 doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockReplenishmentCreateUpdateComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Seuil requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockReplenishmentCreateUpdateComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Seuil doit \u00EAtre au moins 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StockReplenishmentCreateUpdateComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class StockReplenishmentCreateUpdateComponent {
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
      id: [StockReplenishmentCreateUpdateComponent.id++],
      site_id: [this.defaults?.id || 0],
      site: [this.defaults?.name || ''],
      product_id: [0],
      product: [''],
      quantity: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
      threshold: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]]
    });
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
    });
  }
  save() {
    this.createReplenishment();
  }
  createReplenishment() {
    this.form.get('product_id')?.setValue(this.productId);
    this.form.get('product')?.setValue(this.productName);
    const stock = this.form.value;
    this.dialogRef.close(stock);
  }
  getProductNameById(id) {
    this.productId = id;
    const product = this.products.find(p => p.id === id);
    this.productName = product ? product.name : '';
    return product ? product.name : '';
  }
  static #_2 = this.ɵfac = function StockReplenishmentCreateUpdateComponent_Factory(t) {
    return new (t || StockReplenishmentCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService));
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StockReplenishmentCreateUpdateComponent,
    selectors: [["vex-stock-replenishment-create-update"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 36,
    vars: 13,
    consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], [1, "headline", "m-0", "flex-auto"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], [1, "flex", "flex-col"], [1, "w-300", "max-w-full"], ["matInput", "", 3, "formControl", "matAutocomplete", "value"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 4, "ngIf"], [4, "ngIf"], [1, "flex-auto"], ["type", "number", "formControlName", "quantity", "matInput", "", "required", "", "min", "1"], ["matIconPrefix", "", "svgIcon", "mat:edit_location"], ["type", "number", "formControlName", "threshold", "matInput", "", "required", "", "min", "1"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], [3, "value"], [1, "flex", "items-center"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button", 3, "click"], ["mat-icon-button", "", "matIconSuffix", "", "type", "button"], ["svgIcon", "mat:arrow_drop_down"], ["color", "primary", "mat-flat-button", "", "type", "submit"]],
    template: function StockReplenishmentCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StockReplenishmentCreateUpdateComponent_Template_form_ngSubmit_0_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Nouveau Entr\u00E9e en Stock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-dialog-content", 6)(8, "mat-form-field", 7)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Selectionner Produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-autocomplete", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, StockReplenishmentCreateUpdateComponent_mat_option_14_Template, 4, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, StockReplenishmentCreateUpdateComponent_button_15_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, StockReplenishmentCreateUpdateComponent_button_16_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, StockReplenishmentCreateUpdateComponent_mat_error_17_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 14)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Quantit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 15)(22, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, StockReplenishmentCreateUpdateComponent_mat_error_23_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, StockReplenishmentCreateUpdateComponent_mat_error_24_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 14)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Seuil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 17)(29, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, StockReplenishmentCreateUpdateComponent_mat_error_30_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, StockReplenishmentCreateUpdateComponent_mat_error_31_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-dialog-actions", 18)(33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, StockReplenishmentCreateUpdateComponent_button_35_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.productCtrl)("matAutocomplete", _r0)("value", ctx.getProductNameById(ctx.productCtrl.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.productCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productCtrl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.form.get("quantity")) == null ? null : tmp_8_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.form.get("quantity")) == null ? null : tmp_9_0.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.form.get("threshold")) == null ? null : tmp_10_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.form.get("threshold")) == null ? null : tmp_11_0.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.invalid == false && ctx.productCtrl.invalid == false);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteTrigger, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay1yZXBsZW5pc2htZW50LWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9jay1yZXBsZW5pc2htZW50L3N0b2NrLXJlcGxlbmlzaG1lbnQtY3JlYXRlLXVwZGF0ZS9zdG9jay1yZXBsZW5pc2htZW50LWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdNQUF3TSIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 26159:
/*!*********************************************************************************!*\
  !*** ./src/app/components/stock-replenishment/stock-replenishment.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockReplenishmentComponent: () => (/* binding */ StockReplenishmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _stock_replenishment_create_update_stock_replenishment_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-replenishment-create-update/stock-replenishment-create-update.component */ 29620);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/collections */ 20636);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 83951);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 86820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 5292);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ 10727);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-header.directive */ 72369);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout.component */ 60306);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var src_app_models_StockReplenishment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/StockReplenishment */ 31358);
/* harmony import */ var src_app_models_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/sites */ 56052);
/* harmony import */ var src_app_models_stocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/stocks */ 96220);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_site_sites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/site/sites.service */ 13961);
/* harmony import */ var src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/product/products.service */ 83146);
/* harmony import */ var src_app_services_stock_stokcs_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/stock/stokcs.service */ 90193);
/* harmony import */ var src_app_services_StockReplenishment_stock_replenishments_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/StockReplenishment/stock-replenishments.service */ 68726);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ 51333);















































function StockReplenishmentComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Historique approvisonnement: ", ctx_r0.site.name, "");
  }
}
function StockReplenishmentComponent_span_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function StockReplenishmentComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, StockReplenishmentComponent_span_7_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r1.selection.selected.length, " Historique");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.selection.selected.length > 1);
  }
}
function StockReplenishmentComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 32)(1, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function StockReplenishmentComponent_th_18_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event ? ctx_r16.masterToggle() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
  }
}
function StockReplenishmentComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 34)(1, "mat-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function StockReplenishmentComponent_td_19_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20);
      const row_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event ? ctx_r19.selection.toggle(row_r18) : null);
    })("click", function StockReplenishmentComponent_td_19_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r18));
  }
}
function StockReplenishmentComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 32);
  }
}
function StockReplenishmentComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", row_r22["imageSrc"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function StockReplenishmentComponent_ng_container_23_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", column_r23.label, " ");
  }
}
function StockReplenishmentComponent_ng_container_23_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r28 = ctx.$implicit;
    const column_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", column_r23.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", row_r28[column_r23.property], " ");
  }
}
function StockReplenishmentComponent_ng_container_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, StockReplenishmentComponent_ng_container_23_ng_container_1_th_1_Template, 2, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, StockReplenishmentComponent_ng_container_23_ng_container_1_td_2_Template, 2, 2, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matColumnDef", column_r23.property);
  }
}
function StockReplenishmentComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, StockReplenishmentComponent_ng_container_23_ng_container_1_Template, 3, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", column_r23.type === "text");
  }
}
function StockReplenishmentComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 43);
  }
}
function StockReplenishmentComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 44)(1, "div", 45)(2, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StockReplenishmentComponent_td_26_Template_a_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StockReplenishmentComponent_td_26_Template_a_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StockReplenishmentComponent_td_26_Template_a_click_6_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function StockReplenishmentComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Qualit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function StockReplenishmentComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 44)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StockReplenishmentComponent_td_29_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function StockReplenishmentComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 55);
  }
}
function StockReplenishmentComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 56);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
function StockReplenishmentComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StockReplenishmentComponent_button_35_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r40);
      const column_r38 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r39.toggleColumnVisibility(column_r38, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-checkbox", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StockReplenishmentComponent_button_35_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function StockReplenishmentComponent_button_35_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r40);
      const column_r38 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](column_r38.visible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", column_r38.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", column_r38.label, " ");
  }
}
class StockReplenishmentComponent {
  constructor(dialog, route, siteService, productService, stockService, stockReplenishmentSercvice, snackbar) {
    this.dialog = dialog;
    this.route = route;
    this.siteService = siteService;
    this.productService = productService;
    this.stockService = stockService;
    this.stockReplenishmentSercvice = stockReplenishmentSercvice;
    this.snackbar = snackbar;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl('boxed');
    this.site = new src_app_models_sites__WEBPACK_IMPORTED_MODULE_7__.Site();
    /**
     * Simulating a service with HTTP that returns Observables
     * You probably want to remove this and do all requests in a service with HTTP
     */
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.stockReplenishments = [];
    this.columns = [{
      label: 'Produit',
      property: 'product',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    }, {
      label: 'Quatité entrée',
      property: 'quantity_replenished',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Date Entrée',
      property: 'displayed_Date',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }];
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 20, 50];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__.SelectionModel(true, []);
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl();
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_13__.DestroyRef);
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData(site) {
    return this.stockReplenishmentSercvice.getStockReplenishments(site).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(result => {
      if (result.status === 200) {
        this.stockReplenishments = result.stockReplenishments || [];
      }
      return this.stockReplenishments.map(stockReplenishments => new src_app_models_StockReplenishment__WEBPACK_IMPORTED_MODULE_6__.StockReplenishment(stockReplenishments));
    }));
  }
  ngOnInit() {
    this.id = history.state.siteId;
    this.siteService.getSite(this.id).subscribe(result => {
      this.site = new src_app_models_sites__WEBPACK_IMPORTED_MODULE_7__.Site(result.data);
      this.getData(this.site).subscribe(stockReplenishments => {
        this.subject$.next(stockReplenishments);
      });
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(Boolean)).subscribe(stockReplenishments => {
      this.stockReplenishments = stockReplenishments;
      this.dataSource.data = stockReplenishments;
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
  createStockReplenishment() {
    this.dialog.open(_stock_replenishment_create_update_stock_replenishment_create_update_component__WEBPACK_IMPORTED_MODULE_0__.StockReplenishmentCreateUpdateComponent, {
      data: this.site
    }).afterClosed().subscribe(stockReplenishment => {
      if (stockReplenishment) {
        stockReplenishment.site_id = this.site.id;
        stockReplenishment.site = this.site.name;
        try {
          this.productService.checkProductExistsInStock(stockReplenishment.product_id, stockReplenishment.site_id).subscribe(result => {
            if (result["data"] === true) {
              this.stockReplenishmentSercvice.addStockReplenishment(new src_app_models_StockReplenishment__WEBPACK_IMPORTED_MODULE_6__.StockReplenishment(stockReplenishment)).subscribe(result => {
                if (result.status === 200) {
                  this.snackbar.open("Entrée Stock effectué avec succés", 'MERCI', {
                    duration: 2000
                  });
                } else {
                  this.snackbar.open("Echec Entrée Stock ", 'MERCI DE REESSAYER', {
                    duration: 2000
                  });
                }
              });
            } else {
              const stock = new src_app_models_stocks__WEBPACK_IMPORTED_MODULE_8__.Stock(stockReplenishment);
              stock.quantity = 0;
              this.stockService.addStock(stock).subscribe(result => {
                if (result["status "] === 200) {
                  this.stockReplenishmentSercvice.addStockReplenishment(new src_app_models_StockReplenishment__WEBPACK_IMPORTED_MODULE_6__.StockReplenishment(stockReplenishment)).subscribe(result => {
                    if (result.status === 200) {
                      this.snackbar.open("Entrée Stock effectué avec succés ", 'MERCI', {
                        duration: 2000
                      });
                    } else {
                      this.snackbar.open("Echec Entrée Stock ", 'MERCI DE REESSAYER', {
                        duration: 2000
                      });
                    }
                  });
                } else {
                  this.snackbar.open("Echec Entrée Stock effectué ", 'MERCI DE REESSAYER', {
                    duration: 2000
                  });
                }
              });
            }
          });
          this.stockReplenishments.unshift(new src_app_models_StockReplenishment__WEBPACK_IMPORTED_MODULE_6__.StockReplenishment(stockReplenishment));
          this.subject$.next(this.stockReplenishments);
        } catch (error) {
          this.snackbar.open("Echec Entrée Stock", 'MERCI DE REESSAYER', {
            duration: 2000
          });
        }
      }
    });
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
    const index = this.stockReplenishments.findIndex(s => s === row);
    this.subject$.next(this.stockReplenishments);
  }
  static #_ = this.ɵfac = function StockReplenishmentComponent_Factory(t) {
    return new (t || StockReplenishmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_site_sites_service__WEBPACK_IMPORTED_MODULE_9__.SitesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_product_products_service__WEBPACK_IMPORTED_MODULE_10__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_stock_stokcs_service__WEBPACK_IMPORTED_MODULE_11__.StokcsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_StockReplenishment_stock_replenishments_service__WEBPACK_IMPORTED_MODULE_12__.StockReplenishmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: StockReplenishmentComponent,
    selectors: [["vex-stock-replenishment"]],
    viewQuery: function StockReplenishmentComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSort, 7);
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
    decls: 36,
    vars: 17,
    consts: [[1, "pb-1", "flex", "flex-col", "items-start", "justify-center"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], [4, "ngIf"], ["subscriptSizing", "dynamic"], ["matIconPrefix", "", "svgIcon", "mat:search"], ["matInput", "", "placeholder", "Search\u2026", "type", "text", 3, "formControl"], [1, "flex-1"], ["mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", "flex-none", 3, "matMenuTriggerFor"], ["svgIcon", "mat:filter_list"], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Add Stock", "type", "button", 1, "ml-4", "flex-none", 3, "click"], ["svgIcon", "mat:add"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "w-8 min-w-8 p-0", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "labels"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover transition duration-400 ease-out-swift cursor-pointer", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["columnFilterMenu", "matMenu"], ["class", "mat-menu-item block", 3, "click", 4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change", "click"], ["mat-cell", "", 1, "w-8", "min-w-8", "p-0"], [1, "avatar", "h-8", "w-8", "align-middle", 3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary-600", "bg-primary-600/10", 3, "click"], ["svgIcon", "mat:phone", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal-600", "bg-teal/10", 3, "click"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green-600", "bg-green-600/10", 3, "click"], ["svgIcon", "mat:map", 1, "icon-sm"], [1, "flex", "items-center", "gap-1", 3, "click"], [1, "bg-base", "text-hint", "cursor-pointer", "hover:bg-hover", "flex-none", "flex", "items-center", "justify-center"], ["svgIcon", "mat:add", 1, "icon-sm"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "transition", "duration-400", "ease-out-swift", "cursor-pointer"], [1, "mat-menu-item", "block", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"]],
    template: function StockReplenishmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "vex-page-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "vex-page-layout-content", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, StockReplenishmentComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, StockReplenishmentComponent_span_7_Template, 4, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "mat-icon", 7)(10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StockReplenishmentComponent_Template_button_click_14_listener() {
          return ctx.createStockReplenishment();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, StockReplenishmentComponent_th_18_Template, 2, 2, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, StockReplenishmentComponent_td_19_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](20, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, StockReplenishmentComponent_th_21_Template, 1, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, StockReplenishmentComponent_td_22_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, StockReplenishmentComponent_ng_container_23_Template, 2, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](24, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, StockReplenishmentComponent_th_25_Template, 1, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, StockReplenishmentComponent_td_26_Template, 8, 0, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](27, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, StockReplenishmentComponent_th_28_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, StockReplenishmentComponent_td_29_Template, 4, 0, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, StockReplenishmentComponent_tr_30_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, StockReplenishmentComponent_tr_31_Template, 1, 1, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "mat-paginator", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "mat-menu", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, StockReplenishmentComponent_button_35_Template, 3, 2, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-6", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.selection.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.columns);
      }
    },
    dependencies: [_vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_5__.VexPageLayoutComponent, _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.VexPageLayoutHeaderDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__.MatButtonToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlDirective, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.VexPageLayoutContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuTrigger, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatPrefix, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay1yZXBsZW5pc2htZW50LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9jay1yZXBsZW5pc2htZW50L3N0b2NrLXJlcGxlbmlzaG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9MQUFvTCIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__.stagger40ms]
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
//# sourceMappingURL=src_app_components_stock-replenishment_stock-replenishment_component_ts.js.map