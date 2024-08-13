"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_components_current-sale_current-sale_component_ts"],{

/***/ 39914:
/*!*******************************************************************!*\
  !*** ./src/app/components/current-sale/current-sale.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentSaleComponent: () => (/* binding */ CurrentSaleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/collections */ 20636);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 83951);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 86820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 5292);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ 10727);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-header.directive */ 72369);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout.component */ 60306);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var src_app_models_invoices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/invoices */ 18178);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 21021);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/user */ 59147);
/* harmony import */ var src_app_models_roles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/roles */ 74173);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/invoice/invoice.service */ 85784);
/* harmony import */ var src_app_services_pdf_pdf_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/pdf/pdf-service.service */ 87412);
/* harmony import */ var src_app_services_sale_sales_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sale/sales.service */ 70972);
/* harmony import */ var src_app_services_client_clients_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/client/clients.service */ 78068);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
















































function CurrentSaleComponent_ng_container_15_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", column_r13.label, " ");
  }
}
function CurrentSaleComponent_ng_container_15_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", column_r13.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", row_r18[column_r13.property], " ");
  }
}
function CurrentSaleComponent_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CurrentSaleComponent_ng_container_15_ng_container_1_th_1_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, CurrentSaleComponent_ng_container_15_ng_container_1_td_2_Template, 2, 2, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matColumnDef", column_r13.property);
  }
}
function CurrentSaleComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CurrentSaleComponent_ng_container_15_ng_container_1_Template, 3, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", column_r13.type === "text");
  }
}
function CurrentSaleComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 33);
  }
}
function CurrentSaleComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 34)(1, "div", 35)(2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CurrentSaleComponent_td_18_Template_a_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CurrentSaleComponent_td_18_Template_a_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CurrentSaleComponent_td_18_Template_a_click_6_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function CurrentSaleComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Qualit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CurrentSaleComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 34)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CurrentSaleComponent_td_21_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function CurrentSaleComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 33);
  }
}
const _c0 = function (a0) {
  return {
    invoice: a0
  };
};
function CurrentSaleComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 45)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CurrentSaleComponent_td_24_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](2, _c0, row_r27))("matMenuTriggerFor", _r11);
  }
}
function CurrentSaleComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 48);
  }
}
function CurrentSaleComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 49);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
function CurrentSaleComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CurrentSaleComponent_button_30_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32);
      const column_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r31.toggleColumnVisibility(column_r30, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-checkbox", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CurrentSaleComponent_button_30_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function CurrentSaleComponent_button_30_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32);
      const column_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](column_r30.visible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", column_r30.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", column_r30.label, " ");
  }
}
function CurrentSaleComponent_ng_template_33_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CurrentSaleComponent_ng_template_33_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r40);
      const invoice_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().invoice;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r38.updateInvoice(invoice_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function CurrentSaleComponent_ng_template_33_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CurrentSaleComponent_ng_template_33_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r43);
      const invoice_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().invoice;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r41.validateInvoice(invoice_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function CurrentSaleComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, CurrentSaleComponent_ng_template_33_button_0_Template, 4, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CurrentSaleComponent_ng_template_33_button_1_Template, 4, 0, "button", 52);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r12.userRoles.role_name != "CAISSIERE");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r12.userRoles.role_name === "CAISSIERE");
  }
}
class CurrentSaleComponent {
  constructor(router, dialog, invoiceService, snackbar, localStorage, pdfServiceService, salesService, clientsService) {
    this.router = router;
    this.dialog = dialog;
    this.invoiceService = invoiceService;
    this.snackbar = snackbar;
    this.localStorage = localStorage;
    this.pdfServiceService = pdfServiceService;
    this.salesService = salesService;
    this.clientsService = clientsService;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('boxed');
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.columns = [];
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 20, 50];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__.SelectionModel(true, []);
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl();
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_13__.DestroyRef);
    this.step = 0;
    this.siteId = 0;
    this.invoices = [];
    this.dataRole = []; // pour recuperer le localStorage
    this.totalVente = 0;
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  getInvoicByStep() {
    return this.invoiceService.getInvoicByStep(this.step, this.siteId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(res => {
      this.invoices = res.data;
      return this.invoices.map(invoice => new src_app_models_invoices__WEBPACK_IMPORTED_MODULE_5__.Invoices(invoice));
    }));
  }
  updateColumnVisibility() {
    this.columns = [{
      label: 'Numéro Facture',
      property: 'num_invoice',
      type: 'text',
      visible: this.step === 1 // Visibility condition
    }, {
      label: 'Montant Facture(FCFA)',
      property: 'total_amount',
      type: 'text',
      visible: true
    }, {
      label: 'Détails',
      property: 'details',
      type: 'text',
      visible: true
    }, {
      label: 'Actions',
      property: 'actions',
      type: 'button',
      visible: this.step === 0
    }];
  }
  ngOnInit() {
    this.userRoles = new src_app_models_roles__WEBPACK_IMPORTED_MODULE_8__.Roles(JSON.parse(this.localStorage.getData('dataRole') ?? 'null'));
    if (history.state.siteId) {
      this.step = 1;
      this.siteId = history.state.siteId;
    } else {
      const localStorageService = src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService.getInstance();
      const userData = localStorageService.getData('dataUser');
      const userInfo = userData ? new src_app_models_user__WEBPACK_IMPORTED_MODULE_7__.User(JSON.parse(userData)) : new src_app_models_user__WEBPACK_IMPORTED_MODULE_7__.User({
        id: null,
        first_name: 'Unknown',
        last_name: 'User'
      });
      this.siteId = userInfo.site_id;
    }
    this.getInvoicByStep().subscribe(invoices => {
      this.subject$.next(invoices);
      this.totalVente = this.invoices.reduce((total, invoice) => total + invoice.total_amount, 0);
    });
    this.updateColumnVisibility();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(Boolean)).subscribe(invoices => {
      this.invoices = invoices;
      this.dataSource.data = invoices;
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
  deleteSale(sale) {
    console.log(sale);
    // this.invoiceService.deleteSale(sale).subscribe((result:any) => {
    //   if (result.status === 200 ) {
    //     this.invoices.splice(
    //       this.invoices.findIndex(
    //         (existingSale) => existingSale.id === sale.id
    //       ),
    //       1
    //     );
    //     this.selection.deselect(sale);
    //     this.subject$.next(this.invoices);
    //     this.snackbar.open(
    //       "Vente Supprimer avec succés",
    //       'MERCI',
    //       {
    //         duration: 1000
    //       }
    //     );
    //   }else{
    //     this.snackbar.open(
    //       "Echec Suppression Vente",
    //       'MERCI DE REESSAYER',
    //       {
    //         duration: 1000
    //       }
    //     );
    //   }
    // });
    //
    // this.invoices.splice(
    //   this.invoices.findIndex(
    //     (existingSale) => existingSale.id === sale.id
    //   ),
    //   1
    // );
    // this.selection.deselect(sale);
    // this.subject$.next(this.invoices);
  }

  updateInvoice(invoice) {
    this.router.navigate(['/new-sale'], {
      state: {
        invoiceId: invoice.id
      }
    });
  }
  validateInvoice(invoice) {
    this.invoiceService.validateInvoice(invoice).subscribe(result => {
      if (result.data) {
        this.invoices.splice(this.invoices.findIndex(existingInvoice => existingInvoice.id === invoice.id), 1);
        this.selection.deselect(invoice);
        this.subject$.next(this.invoices);
        // this.getSaleByInvoice(invoice.id);
        // this.router.navigate(['/pdf'], { state: { numInvoice: invoice.num_invoice} });
      }
    });
  }

  getSaleByInvoice(invoiceId) {
    this.salesService.getSaleByInvoice(invoiceId).subscribe(res => {
      this.pdfServiceService.saveData(res.data);
      if (res.data[0].client_id) {
        this.getClient(res.data[0].client_id);
      }
    });
  }
  getClient(clientId) {
    this.clientsService.getClientById(clientId).subscribe(res => {
      this.pdfServiceService.saveClient(res.data);
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
    const index = this.invoices.findIndex(s => s === row);
    this.subject$.next(this.invoices);
  }
  static #_ = this.ɵfac = function CurrentSaleComponent_Factory(t) {
    return new (t || CurrentSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_9__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_pdf_pdf_service_service__WEBPACK_IMPORTED_MODULE_10__.PdfServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_sale_sales_service__WEBPACK_IMPORTED_MODULE_11__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_client_clients_service__WEBPACK_IMPORTED_MODULE_12__.ClientsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: CurrentSaleComponent,
    selectors: [["vex-current-sale"]],
    viewQuery: function CurrentSaleComponent_Query(rf, ctx) {
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
    decls: 34,
    vars: 16,
    consts: [[1, "pb-1", "flex", "flex-col", "items-start", "justify-center"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], ["subscriptSizing", "dynamic"], ["matIconPrefix", "", "svgIcon", "mat:search"], ["matInput", "", "placeholder", "Search\u2026", "type", "text", 3, "formControl"], [1, "flex-1"], ["mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", "flex-none", 3, "matMenuTriggerFor"], ["svgIcon", "mat:filter_list"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "labels"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover transition duration-400 ease-out-swift cursor-pointer", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["columnFilterMenu", "matMenu"], ["class", "mat-menu-item block", 3, "click", 4, "ngFor", "ngForOf"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary-600", "bg-primary-600/10", 3, "click"], ["svgIcon", "mat:phone", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal-600", "bg-teal/10", 3, "click"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "p-0", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green-600", "bg-green-600/10", 3, "click"], ["svgIcon", "mat:map", 1, "icon-sm"], [1, "flex", "items-center", "gap-1", 3, "click"], [1, "bg-base", "text-hint", "cursor-pointer", "hover:bg-hover", "flex-none", "flex", "items-center", "justify-center"], ["svgIcon", "mat:add", 1, "icon-sm"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerData", "matMenuTriggerFor", "click"], ["svgIcon", "mat:more_horiz"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "transition", "duration-400", "ease-out-swift", "cursor-pointer"], [1, "mat-menu-item", "block", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "mat:edit"], ["svgIcon", "mat:check"]],
    template: function CurrentSaleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "vex-page-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "vex-page-layout-content", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "mat-icon", 6)(10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, CurrentSaleComponent_ng_container_15_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](16, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, CurrentSaleComponent_th_17_Template, 1, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, CurrentSaleComponent_td_18_Template, 8, 0, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](19, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, CurrentSaleComponent_th_20_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, CurrentSaleComponent_td_21_Template, 4, 0, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](22, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, CurrentSaleComponent_th_23_Template, 1, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, CurrentSaleComponent_td_24_Template, 3, 4, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, CurrentSaleComponent_tr_25_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, CurrentSaleComponent_tr_26_Template, 1, 1, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "mat-menu", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, CurrentSaleComponent_button_30_Template, 3, 2, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "mat-menu", 23, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, CurrentSaleComponent_ng_template_33_Template, 2, 2, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-6", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Ventes en cours: ", ctx.totalVente, " F");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.columns);
      }
    },
    dependencies: [_vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_4__.VexPageLayoutComponent, _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__.VexPageLayoutHeaderDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__.MatButtonToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlDirective, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__.VexPageLayoutContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuTrigger, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatPrefix, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW50LXNhbGUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jdXJyZW50LXNhbGUvY3VycmVudC1zYWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger40ms]
    }
  });
}


/***/ }),

/***/ 18178:
/*!************************************!*\
  !*** ./src/app/models/invoices.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Invoices: () => (/* binding */ Invoices)
/* harmony export */ });
class Invoices {
  constructor(invoice) {
    this.details = '';
    const today = new Date(Date.now());
    this.id = invoice.id;
    this.user_id = invoice.user_id;
    if (invoice.sales) {
      for (let i = 0; i < invoice.sales.length; i++) {
        const element = invoice.sales[i];
        this.details += element.quantity_sold + " " + element.product.name + " " + element.quantity_sold * element.pU + "F";
        // Ajouter un point-virgule seulement s'il y a un autre élément après
        if (i < invoice.sales.length - 1) {
          this.details += " ; ";
        }
      }
    }
    this.step = invoice.step;
    this.invoice_date = invoice.invoice_date ? invoice.invoice_date : today.toISOString().substring(0, 10);
    this.total_amount = invoice.total_amount;
    this.user = invoice.user && invoice.user.first_name ? invoice.user.first_name : invoice.user ? invoice.user : '';
    if (invoice.num_invoice) {
      this.num_invoice = invoice.num_invoice;
    }
    if (invoice.client_id) {
      this.client_id = invoice.client_id;
    }
    if (invoice.client) {
      this.client = invoice.client;
    }
    this.step = invoice.step;
    this.displayed_Date = this.formatDate(new Date(this.invoice_date));
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
//# sourceMappingURL=src_app_components_current-sale_current-sale_component_ts.js.map