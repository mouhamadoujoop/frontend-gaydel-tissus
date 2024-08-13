"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_components_roles_roles_component_ts"],{

/***/ 84404:
/*!*****************************************************!*\
  !*** ./src/app/components/roles/roles.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesComponent: () => (/* binding */ RolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_role_roles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/role/roles.service */ 42943);


class RolesComponent {
  constructor(roleService) {
    this.roleService = roleService;
  }
  ngOnInit() {
    this.getRoles();
  }
  getRoles() {
    this.roleService.getRoles().subscribe(result => {
      this.roles = result.data;
    });
    console.log(this.roles);
  }
  static #_ = this.ɵfac = function RolesComponent_Factory(t) {
    return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_role_roles_service__WEBPACK_IMPORTED_MODULE_0__.RolesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RolesComponent,
    selectors: [["vex-roles"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    template: function RolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "roles works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yb2xlcy9yb2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 42943:
/*!************************************************!*\
  !*** ./src/app/services/role/roles.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesService: () => (/* binding */ RolesService)
/* harmony export */ });
/* harmony import */ var src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);





class RolesService {
  //private API_URL= environment.API_URL;
  constructor(httpClient, router, localStorage) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
  }
  // //login
  // login(data: any) {
  //   // return this.httpClient.post(environment.API_URL + '/login', data);
  //   return this.httpClient.post(environment.BASE_URL + '/login', data, {... this.localStorage.headerCors()});
  // }
  // // logout
  // logout(){
  //   return this.httpClient.post(environment.BASE_URL + '/logout', {... this.localStorage.getAuthorization()});
  // }
  // Obtenir l'utilisateur
  getRoles() {
    return this.httpClient.get(src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL + '/roles', {
      ...this.localStorage.getAuthorization()
    });
  }
  static #_ = this.ɵfac = function RolesService_Factory(t) {
    return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: RolesService,
    factory: RolesService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_components_roles_roles_component_ts.js.map