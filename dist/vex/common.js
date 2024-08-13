"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["common"],{

/***/ 31358:
/*!**********************************************!*\
  !*** ./src/app/models/StockReplenishment.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockReplenishment: () => (/* binding */ StockReplenishment)
/* harmony export */ });
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local-storage/local-storage.service */ 21021);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ 59147);


class StockReplenishment {
  constructor(stockReplenishment) {
    const today = new Date(Date.now());
    const localStorageService = _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getInstance();
    const userData = localStorageService.getData('dataUser');
    const userInfo = userData ? new _user__WEBPACK_IMPORTED_MODULE_1__.User(JSON.parse(userData)) : new _user__WEBPACK_IMPORTED_MODULE_1__.User({
      id: null,
      first_name: 'Unknown',
      last_name: 'User'
    });
    this.user_id = stockReplenishment.user_id ? stockReplenishment.user_id : userInfo.id;
    this.user = stockReplenishment.user && stockReplenishment.user.first_name ? stockReplenishment.user.first_name + ' ' + stockReplenishment.user.last_name : stockReplenishment.user ? stockReplenishment.user : `${userInfo.first_name} ${userInfo.last_name}`;
    if (stockReplenishment) {
      this.id = stockReplenishment.id;
      this.site_id = stockReplenishment.site_id;
      this.site = stockReplenishment.site;
      this.product_id = stockReplenishment.product_id;
      this.product = stockReplenishment.product && stockReplenishment.product.name ? stockReplenishment.product.name : stockReplenishment.product;
      this.quantity_replenished = stockReplenishment.quantity ? stockReplenishment.quantity : stockReplenishment.quantity_replenished;
      this.replenishment_date = stockReplenishment.replenishment_date ? stockReplenishment.replenishment_date : today.toISOString().substring(0, 10);
      this.displayed_Date = this.formatDate(new Date(this.replenishment_date));
    } else {
      this.id = 0;
      this.site_id = 0;
      this.site = '';
      this.product_id = 0;
      this.product = '';
      this.quantity_replenished = 0;
      this.replenishment_date = today.toISOString().substring(0, 10);
      this.displayed_Date = this.formatDate(today);
    }
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

/***/ 96220:
/*!**********************************!*\
  !*** ./src/app/models/stocks.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stock: () => (/* binding */ Stock)
/* harmony export */ });
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 21021);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ 59147);


class Stock {
  constructor(stock) {
    const localStorageService = src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getInstance();
    const userData = localStorageService.getData('dataUser');
    const userInfo = userData ? new _user__WEBPACK_IMPORTED_MODULE_1__.User(JSON.parse(userData)) : new _user__WEBPACK_IMPORTED_MODULE_1__.User({
      id: null,
      first_name: 'Unknown',
      last_name: 'User'
    });
    this.id = stock.id;
    this.site_id = stock.site_id;
    this.site = stock.site && stock.site.name ? stock.site.name : stock.site;
    this.user_id = stock.user_id ? stock.user_id : userInfo.id;
    this.user = stock.user && stock.user.first_name ? stock.user.first_name + ' ' + stock.user.last_name : stock.user ? stock.user : `${userInfo.first_name} ${userInfo.last_name}`;
    this.product_id = stock.product_id;
    this.product = stock.product && stock.product.name ? stock.product.name : stock.product;
    this.quantity = stock.quantity;
    this.threshold = stock.threshold;
  }
}

/***/ }),

/***/ 68726:
/*!*****************************************************************************!*\
  !*** ./src/app/services/StockReplenishment/stock-replenishments.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockReplenishmentsService: () => (/* binding */ StockReplenishmentsService)
/* harmony export */ });
/* harmony import */ var src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);





class StockReplenishmentsService {
  constructor(httpClient, router, localStorage) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
    this.BASE_URL = src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
  }
  getStockReplenishments(site) {
    return this.httpClient.get(`${this.BASE_URL}/sites/` + site.id + `/stockReplenishments`, {
      ...this.localStorage.getAuthorization()
    });
  }
  addStockReplenishment(stockReplenishment) {
    return this.httpClient.post(`${this.BASE_URL}/stock-replenishment`, stockReplenishment, {
      ...this.localStorage.getAuthorization()
    });
  }
  updateStockReplenishment(stockReplenishment) {
    return this.httpClient.put(`${this.BASE_URL}/stock-replenishment/` + stockReplenishment.id, stockReplenishment, {
      ...this.localStorage.getAuthorization()
    });
  }
  static #_ = this.ɵfac = function StockReplenishmentsService_Factory(t) {
    return new (t || StockReplenishmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: StockReplenishmentsService,
    factory: StockReplenishmentsService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 85784:
/*!*****************************************************!*\
  !*** ./src/app/services/invoice/invoice.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceService: () => (/* binding */ InvoiceService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);





class InvoiceService {
  constructor(httpClient, router, localStorage) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
    this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
  }
  getInvoicByStep(step, siteID) {
    return this.httpClient.get(`${this.BASE_URL}/invoices/site/` + siteID + `/step/` + step, {
      ...this.localStorage.getAuthorization()
    });
  }
  validateInvoice(invoice) {
    return this.httpClient.put(`${this.BASE_URL}/invoices/validate/` + invoice.id, {}, {
      ...this.localStorage.getAuthorization()
    });
  }
  validateClientInvoice(invoiceID, amount) {
    const requestData = {
      invoice_id: invoiceID,
      amount: amount
    };
    return this.httpClient.put(`${this.BASE_URL}/invoices/client/validate`, requestData, {
      ...this.localStorage.getAuthorization()
    });
  }
  static #_ = this.ɵfac = function InvoiceService_Factory(t) {
    return new (t || InvoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: InvoiceService,
    factory: InvoiceService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 87412:
/*!*****************************************************!*\
  !*** ./src/app/services/pdf/pdf-service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfServiceService: () => (/* binding */ PdfServiceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class PdfServiceService {
  constructor() {}
  saveData(value) {
    localStorage.setItem('sales', JSON.stringify(value));
  }
  getClient() {
    return localStorage.getItem('client');
  }
  saveClient(value) {
    localStorage.setItem('client', JSON.stringify(value));
  }
  getData() {
    return localStorage.getItem('sales');
  }
  removeData() {
    localStorage.removeItem('sales');
    localStorage.removeItem('client');
  }
  getDataObservable() {
    const data = this.getData();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(data);
  }
  static #_ = this.ɵfac = function PdfServiceService_Factory(t) {
    return new (t || PdfServiceService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PdfServiceService,
    factory: PdfServiceService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 90193:
/*!**************************************************!*\
  !*** ./src/app/services/stock/stokcs.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StokcsService: () => (/* binding */ StokcsService)
/* harmony export */ });
/* harmony import */ var src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);





class StokcsService {
  //private API_URL= environment.API_URL;
  constructor(httpClient, router, localStorage) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
    this.BASE_URL = src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
  }
  getStocks() {
    return this.httpClient.get(`${this.BASE_URL}/stocks`, {
      ...this.localStorage.getAuthorization()
    });
  }
  addStock(stock) {
    return this.httpClient.post(`${this.BASE_URL}/stocks`, stock, {
      ...this.localStorage.getAuthorization()
    });
  }
  updateStock(stock) {
    return this.httpClient.put(`${this.BASE_URL}/stocks/` + stock.id, stock, {
      ...this.localStorage.getAuthorization()
    });
  }
  static #_ = this.ɵfac = function StokcsService_Factory(t) {
    return new (t || StokcsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: StokcsService,
    factory: StokcsService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=common.js.map