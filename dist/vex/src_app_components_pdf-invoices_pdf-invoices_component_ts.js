"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_components_pdf-invoices_pdf-invoices_component_ts"],{

/***/ 64452:
/*!*******************************************************************!*\
  !*** ./src/app/components/pdf-invoices/pdf-invoices.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfInvoicesComponent: () => (/* binding */ PdfInvoicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 83951);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var src_app_models_sales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/sales */ 5133);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 21021);
/* harmony import */ var src_app_services_pdf_pdf_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pdf/pdf-service.service */ 87412);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/config/vex-config.service */ 50376);


















const _c0 = ["htmlData"];
function PdfInvoicesComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sale_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sale_r1.quantity_sold);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sale_r1.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", sale_r1.pU, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", sale_r1.pU * sale_r1.quantity_sold, " ");
  }
}
class PdfInvoicesComponent {
  constructor(router, localStorage, pdfServiceService, configService, datePipe) {
    this.router = router;
    this.localStorage = localStorage;
    this.pdfServiceService = pdfServiceService;
    this.configService = configService;
    this.datePipe = datePipe;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.today = new Date();
    this.formattedDate = '';
    this.numInvoice = 0;
    this.totalVente = 0;
    this.sales = [];
    this.dataUser = []; // pour recuperer le localStorage
    this.dataSales = [];
    this.imageUrl$ = this.configService.config$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(config => config.sidenav.imageUrl));
  }
  ngOnInit() {
    if (history.state.numInvoice) {
      const formatted = this.datePipe.transform(this.today, 'dd:MM:yyyy');
      this.formattedDate = formatted ? formatted : '';
      this.numInvoice = history.state.numInvoice;
      this.dataSales = this.pdfServiceService.getData();
      this.sales = JSON.parse(this.dataSales);
      this.sales.map(sale => new src_app_models_sales__WEBPACK_IMPORTED_MODULE_1__.Sale(sale));
      console.log(this.sales);
      this.openPDF();
    }
  }
  openPDF() {
    setTimeout(() => {
      const printContentElement = document.getElementById('htmlData');
      if (printContentElement) {
        const styles = Array.from(document.styleSheets).map(sheet => {
          try {
            return Array.from(sheet.cssRules).map(rule => rule.cssText).join('');
          } catch (e) {
            console.error(e);
            return '';
          }
        }).join('');
        const printContent = printContentElement.innerHTML;
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write('<html><head><title>Facture PDF</title>');
          printWindow.document.write(`<style>${styles}</style>`);
          printWindow.document.write('</head><body>');
          printWindow.document.write(printContent);
          printWindow.document.write('</body></html>');
          printWindow.document.close();
          // Wait for the content to be fully loaded before printing
          printWindow.onload = () => {
            printWindow.print();
            // printWindow.close();
          };
        }
      } else {
        console.error('Element with id "htmlData" not found.');
      }
    }, 10);
    // setTimeout(() => {
    //   let DATA: any = document.getElementById('htmlData');
    //   if (DATA) {
    //     html2canvas(DATA).then(canvas => {
    //         const imageData = canvas.toDataURL('image/png');
    //         const printWindow = window.open('', '_blank');
    //         if (printWindow) {
    //           printWindow.document.open();
    //           printWindow.document.write(`
    //             <html>
    //               <head>
    //                 <title>Print Content</title>
    //                 <style>
    //                   /* Add any custom CSS styles here */
    //                   body { font-family: Arial, sans-serif; }
    //                   /* Example styles */
    //                   .content { padding: 20px; }
    //                 </style>
    //               </head>
    //               <body onload="window.print(); window.close(); ">
    //                 <div class="content">
    //                   <img src="${imageData}" style="width: 100%;" />
    //                 </div>
    //               </body>
    //             </html>
    //           `);
    //           printWindow.document.close();
    //           // this.router.navigate(['/current-sale']);
    //         } else {
    //           console.error('Failed to open print window.');
    //         }
    //     });
    //   }
    // }, 10);
  }
  static #_ = this.ɵfac = function PdfInvoicesComponent_Factory(t) {
    return new (t || PdfInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_pdf_pdf_service_service__WEBPACK_IMPORTED_MODULE_3__.PdfServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_4__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PdfInvoicesComponent,
    selectors: [["vex-pdf-invoices"]],
    viewQuery: function PdfInvoicesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.htmlData = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 37,
    vars: 7,
    consts: [["id", "htmlDataCSS", 1, "w-full", "h-full"], ["id", "htmlData", 1, "boarding-pass"], [1, "logo"], ["alt", "Logo", "width", "50px", 1, "w-12", "select-none", "flex-none", "mr-2", 3, "src"], [1, "flight"], [1, "cities"], [1, "city"], [2, "font-size", "8px"], [1, "strap"], [1, "table", "table-bordered", "table-sm"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "date"]],
    template: function PdfInvoicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "header")(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Facture");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "section", 5)(12, "div", 6)(13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Gaydel Tissu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 6)(16, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Client: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "section", 8)(21, "table", 9)(22, "thead")(23, "tr")(24, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Quantit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Prix");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, PdfInvoicesComponent_tr_33_Template, 9, 4, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 12)(35, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Num\u00E9ro: ", ctx.numInvoice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Date: le ", ctx.formattedDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Facture : ", ctx.totalVente, "");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgFor, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["@charset \"UTF-8\";\n\n\n\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  margin: 0;\n  background: radial-gradient(ellipse farthest-corner at center top, #ECECEC, #999);\n  color: #363c44;\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n\n\n\n\n.boarding-pass[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  text-transform: uppercase;\n  \n\n\n\n  \n\n\n\n  \n\n\n\n  \n\n\n\n}\n.boarding-pass[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse; \n\n  border: 1px solid #dee2e6; \n\n  margin-bottom: 1rem; \n\n}\n.boarding-pass[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .boarding-pass[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n  border: 1px solid #dee2e6; \n\n}\n.boarding-pass[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa; \n\n}\n.boarding-pass[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #A2A9B3;\n  margin-bottom: 2px;\n}\n.boarding-pass[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: block;\n}\n.boarding-pass[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #36475f, #2c394f);\n  padding: 12px 20px;\n  height: 53px;\n}\n.boarding-pass[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  float: left;\n  width: 104px;\n  height: 31px;\n}\n.boarding-pass[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .flight[_ngcontent-%COMP%] {\n  float: right;\n  color: #fff;\n  text-align: right;\n}\n.boarding-pass[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .flight[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 8px;\n  margin-bottom: 2px;\n  opacity: 0.8;\n}\n.boarding-pass[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .flight[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.boarding-pass[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%] {\n  position: relative;\n}\n.boarding-pass[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.boarding-pass[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%] {\n  padding: 15px 12px;\n  float: left;\n}\n.boarding-pass[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]:nth-child(2) {\n  float: right;\n}\n.boarding-pass[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 300;\n  line-height: 1;\n}\n.boarding-pass[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 0px;\n  margin-left: 3px;\n}\n@keyframes _ngcontent-%COMP%_move {\n  40% {\n    left: 50%;\n    opacity: 1;\n  }\n  100% {\n    left: 70%;\n    opacity: 0;\n  }\n}\n.boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid #99D298;\n}\n.boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .places[_ngcontent-%COMP%], .boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 10px 0;\n}\n.boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .places[_ngcontent-%COMP%]::after, .boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  transform: scale(0.9);\n  transform-origin: left bottom;\n}\n.boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .places[_ngcontent-%COMP%] {\n  background: #ECECEC;\n  border-right: 1px solid #99D298;\n}\n.boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .places[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #97A1AD;\n}\n.boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .places[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #239422;\n}\n.boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 10px 20px 10px;\n  width: 47%;\n  float: left;\n}\n.boarding-pass[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.boarding-pass[_ngcontent-%COMP%]   .strap[_ngcontent-%COMP%] {\n  clear: both;\n  position: relative;\n  border-top: 1px solid #99D298;\n}\n.boarding-pass[_ngcontent-%COMP%]   .strap[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.boarding-pass[_ngcontent-%COMP%]   .strap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 15px 0 12px 12px;\n}\n.boarding-pass[_ngcontent-%COMP%]   .strap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.boarding-pass[_ngcontent-%COMP%]   .strap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.boarding-pass[_ngcontent-%COMP%]   .strap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.boarding-pass[_ngcontent-%COMP%]   .strap[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  font-size: 8px;\n  position: relative;\n  top: -5px;\n}\n.boarding-pass[_ngcontent-%COMP%]   .strap[_ngcontent-%COMP%]   .qrcode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 80px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBkZi1pbnZvaWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7O3FCQUFBO0FBR0E7OztFQUdFLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGlGQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQUVGOztBQVNBOztxQkFBQTtBQUdBO0VBVkUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBU0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBaUNBOzt1QkFBQTtFQWdDQTs7dUJBQUE7RUErQ0E7O3VCQUFBO0VBb0RBOzt1QkFBQTtBQTNKRjtBQVBFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBLEVBQUEsMENBQUE7RUFDQSx5QkFBQSxFQUFBLHVCQUFBO0VBQ0EsbUJBQUEsRUFBQSwrQkFBQTtBQVNKO0FBTkU7O0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUEsRUFBQSx5Q0FBQTtBQVFKO0FBTEU7RUFDRSx5QkFBQSxFQUFBLHNDQUFBO0FBT0o7QUFKRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTUo7QUFIRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBS0o7QUFDRTtFQUNFLHdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNOO0FBRUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQU47QUFFTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUdNO0VBQ0UsZUFBQTtBQURSO0FBVUU7RUFDRSxrQkFBQTtBQVJKO0FBVUk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFSTjtBQVdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBVE47QUFXTTtFQUNFLFlBQUE7QUFUUjtBQVlNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVZSO0FBYU07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVhSO0FBZ0JJO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQWROO0VBZ0JJO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUFkTjtBQUNGO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBcEJKO0FBc0JJOztFQUVFLFVBQUE7RUFDQSxlQUFBO0FBcEJOO0FBc0JNOztFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQW5CUjtBQXlCTTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7QUF2QlI7QUEyQkk7RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0FBekJOO0FBMkJNO0VBQ0UsY0FBQTtBQXpCUjtBQTRCTTtFQUNFLGNBQUE7QUExQlI7QUE4Qkk7RUFDRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBNUJOO0FBOEJNO0VBQ0UsZUFBQTtBQTVCUjtBQXFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBbkNKO0FBcUNJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBbkNOO0FBc0NJO0VBQ0UseUJBQUE7QUFwQ047QUFzQ007RUFDRSxtQkFBQTtBQXBDUjtBQXNDUTtFQUNFLGVBQUE7QUFwQ1Y7QUF1Q1E7RUFDRSxlQUFBO0FBckNWO0FBeUNNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQXZDUjtBQTBDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXhDTiIsImZpbGUiOiJwZGYtaW52b2ljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkJvZHlcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDsgIFxyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBjZW50ZXIgdG9wLCAjRUNFQ0VDLCAjOTk5KTtcclxuICBjb2xvcjogIzM2M2M0NDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5Cb2FyZGluZyBQYXNzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmJvYXJkaW5nLXBhc3Mge1xyXG4gIEBpbmNsdWRlIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIEFzc3VyZSBxdWUgbGVzIGJvcmR1cmVzIHNlIHJlam9pZ25lbnQgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7IC8qIENvdWxldXIgZGUgYm9yZHVyZSAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgLyogRXNwYWNlbWVudCBzb3VzIGxlIHRhYmxlYXUgKi9cclxuICB9XHJcblxyXG4gIHRoLFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7IC8qIENvdWxldXIgZGUgYm9yZHVyZSBwb3VyIGxlcyBjZWxsdWxlcyAqL1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTsgLyogQ291bGV1ciBkZSBmb25kIHBvdXIgbGVzIGVuLXTDqnRlcyAqL1xyXG4gIH1cclxuXHJcbiAgc21hbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogI0EyQTlCMztcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB9XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBIZWFkZXJcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgJiBoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM2NDc1ZiwgIzJjMzk0Zik7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsaWdodCB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIENpdGllc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuY2l0aWVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpdHkge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDEycHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAa2V5ZnJhbWVzIG1vdmUge1xyXG4gICAgICA0MCUge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgSW5mb3NcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmluZm9zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5RDI5ODtcclxuXHJcbiAgICAucGxhY2VzLFxyXG4gICAgLnRpbWVzIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aW1lcyB7XHJcbiAgICAgIFxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wbGFjZXMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTlEMjk4O1xyXG4gICAgICBcclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGNvbG9yOiAjOTdBMUFEO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGNvbG9yOiAjMjM5NDIyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4O1xyXG4gICAgICB3aWR0aDogNDclO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAgIHNtYWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBTdHJhcFxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuc3RyYXAge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5RDI5ODtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAxMnB4IDEycHg7XHJcblxyXG4gICAgICAmIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBcclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwIHtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucXJjb2RlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDIwcHg7XHJcbiAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8qIHsgZGlzcGxheTogbm9uZTsgfSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wZGYtaW52b2ljZXMvcGRmLWludm9pY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7cUJBQUE7QUFHQTs7O0VBR0Usc0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsaUZBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBRUY7O0FBU0E7O3FCQUFBO0FBR0E7RUFWRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFTQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFpQ0E7O3VCQUFBO0VBZ0NBOzt1QkFBQTtFQStDQTs7dUJBQUE7RUFvREE7O3VCQUFBO0FBM0pGO0FBUEU7RUFDRSxXQUFBO0VBQ0EseUJBQUEsRUFBQSwwQ0FBQTtFQUNBLHlCQUFBLEVBQUEsdUJBQUE7RUFDQSxtQkFBQSxFQUFBLCtCQUFBO0FBU0o7QUFORTs7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQSxFQUFBLHlDQUFBO0FBUUo7QUFMRTtFQUNFLHlCQUFBLEVBQUEsc0NBQUE7QUFPSjtBQUpFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUhFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFLSjtBQUNFO0VBQ0Usd0RBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ047QUFFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBR007RUFDRSxlQUFBO0FBRFI7QUFVRTtFQUNFLGtCQUFBO0FBUko7QUFVSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQVJOO0FBV0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFUTjtBQVdNO0VBQ0UsWUFBQTtBQVRSO0FBWU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVlI7QUFhTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWFI7QUFnQkk7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBZE47RUFnQkk7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQWROO0FBQ0Y7QUFzQkU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFwQko7QUFzQkk7O0VBRUUsVUFBQTtFQUNBLGVBQUE7QUFwQk47QUFzQk07O0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBbkJSO0FBeUJNO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtBQXZCUjtBQTJCSTtFQUNFLG1CQUFBO0VBQ0EsK0JBQUE7QUF6Qk47QUEyQk07RUFDRSxjQUFBO0FBekJSO0FBNEJNO0VBQ0UsY0FBQTtBQTFCUjtBQThCSTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUE1Qk47QUE4Qk07RUFDRSxlQUFBO0FBNUJSO0FBcUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFuQ0o7QUFxQ0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFuQ047QUFzQ0k7RUFDRSx5QkFBQTtBQXBDTjtBQXNDTTtFQUNFLG1CQUFBO0FBcENSO0FBc0NRO0VBQ0UsZUFBQTtBQXBDVjtBQXVDUTtFQUNFLGVBQUE7QUFyQ1Y7QUF5Q007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBdkNSO0FBMENJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBeENOO0FBQ0EsbzBRQUFvMFEiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkJvZHlcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDsgIFxyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBjZW50ZXIgdG9wLCAjRUNFQ0VDLCAjOTk5KTtcclxuICBjb2xvcjogIzM2M2M0NDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5Cb2FyZGluZyBQYXNzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmJvYXJkaW5nLXBhc3Mge1xyXG4gIEBpbmNsdWRlIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIEFzc3VyZSBxdWUgbGVzIGJvcmR1cmVzIHNlIHJlam9pZ25lbnQgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7IC8qIENvdWxldXIgZGUgYm9yZHVyZSAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgLyogRXNwYWNlbWVudCBzb3VzIGxlIHRhYmxlYXUgKi9cclxuICB9XHJcblxyXG4gIHRoLFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7IC8qIENvdWxldXIgZGUgYm9yZHVyZSBwb3VyIGxlcyBjZWxsdWxlcyAqL1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTsgLyogQ291bGV1ciBkZSBmb25kIHBvdXIgbGVzIGVuLXTDg8KqdGVzICovXHJcbiAgfVxyXG5cclxuICBzbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjQTJBOUIzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEhlYWRlclxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAmIGhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzY0NzVmLCAjMmMzOTRmKTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGhlaWdodDogNTNweDtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB3aWR0aDogMTA0cHg7XHJcbiAgICAgIGhlaWdodDogMzFweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmxpZ2h0IHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgQ2l0aWVzXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5jaXRpZXMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuXHJcbiAgICAuY2l0eSB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMTJweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBrZXlmcmFtZXMgbW92ZSB7XHJcbiAgICAgIDQwJSB7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgbGVmdDogNzAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBJbmZvc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuaW5mb3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTlEMjk4O1xyXG5cclxuICAgIC5wbGFjZXMsXHJcbiAgICAudGltZXMge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpbWVzIHtcclxuICAgICAgXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYWNlcyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNFQ0VDRUM7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OUQyOTg7XHJcbiAgICAgIFxyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgY29sb3I6ICM5N0ExQUQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgY29sb3I6ICMyMzk0MjI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm94IHtcclxuICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFN0cmFwXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5zdHJhcCB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTlEMjk4O1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuXHJcbiAgICAuYm94IHtcclxuICAgICAgcGFkZGluZzogMTVweCAwIDEycHggMTJweDtcclxuXHJcbiAgICAgICYgZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5xcmNvZGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMjBweDtcclxuICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyogeyBkaXNwbGF5OiBub25lOyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
    },
    changeDetection: 0
  });
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

/***/ })

}]);
//# sourceMappingURL=src_app_components_pdf-invoices_pdf-invoices_component_ts.js.map