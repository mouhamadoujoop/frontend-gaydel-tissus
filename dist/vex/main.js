"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["main"],{

/***/ 93943:
/*!***************************************************!*\
  !*** ./src/@vex/animations/dropdown.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropdownAnimation: () => (/* binding */ dropdownAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 12501);

const dropdownAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('dropdown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0,
  opacity: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('false <=> true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms cubic-bezier(.35, 0, .25, 1)'))]);

/***/ }),

/***/ 16412:
/*!**************************************************!*\
  !*** ./src/@vex/animations/popover.animation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popoverAnimation: () => (/* binding */ popoverAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 12501);

const popoverAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('transformPopover', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'scale(0.6)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1)'
}))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}))])]);

/***/ }),

/***/ 26010:
/*!**********************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexHighlightDirective: () => (/* binding */ VexHighlightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _vex_highlight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-highlight.service */ 28391);



class VexHighlightDirective {
  constructor(_highlightService, _zone) {
    this._highlightService = _highlightService;
    this._zone = _zone;
    /** An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     */
    this.languages = [];
    /** Stream that emits when code string is highlighted */
    this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes['code'] && changes['code'].currentValue !== changes['code'].previousValue) {
      this.highlightElement(this.code, this.languages);
    }
  }
  /**
   * Highlighting with language detection and fix markup.
   * @param code Accepts a string with the code to highlight
   * @param languages An optional array of language names and aliases restricting detection to only those languages.
   * The subset can also be set with configure, but the local parameter overrides the option if set.
   */
  highlightElement(code, languages) {
    this._zone.runOutsideAngular(() => {
      const res = this._highlightService.highlightAuto(code, languages);
      this.highlightedCode = res.value;
      this.highlighted.emit(res);
    });
  }
  static #_ = this.ɵfac = function VexHighlightDirective_Factory(t) {
    return new (t || VexHighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_highlight_service__WEBPACK_IMPORTED_MODULE_0__.VexHighlightService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: VexHighlightDirective,
    selectors: [["", "vexHighlight", ""]],
    hostVars: 3,
    hostBindings: function VexHighlightDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("innerHTML", ctx.highlightedCode, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hljs", true);
      }
    },
    inputs: {
      languages: "languages",
      code: ["vexHighlight", "code"]
    },
    outputs: {
      highlighted: "highlighted"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}


/***/ }),

/***/ 43260:
/*!******************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEX_HIGHLIGHT_OPTIONS: () => (/* binding */ VEX_HIGHLIGHT_OPTIONS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

const VEX_HIGHLIGHT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HIGHLIGHT_OPTIONS');

/***/ }),

/***/ 85299:
/*!*******************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexHighlightModule: () => (/* binding */ VexHighlightModule),
/* harmony export */   hljsLanguages: () => (/* binding */ hljsLanguages)
/* harmony export */ });
/* harmony import */ var _vex_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-highlight.directive */ 26010);
/* harmony import */ var _vex_highlight_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-highlight.model */ 43260);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ 67158);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ 96186);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ 38499);
/* harmony import */ var _vex_highlight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vex-highlight.service */ 28391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);


/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */





/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
function hljsLanguages() {
  return [{
    name: 'typescript',
    func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    name: 'scss',
    func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    name: 'xml',
    func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__["default"]
  }];
}
class VexHighlightModule {
  static #_ = this.ɵfac = function VexHighlightModule_Factory(t) {
    return new (t || VexHighlightModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: VexHighlightModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [{
      provide: _vex_highlight_model__WEBPACK_IMPORTED_MODULE_1__.VEX_HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages
      }
    }, _vex_highlight_service__WEBPACK_IMPORTED_MODULE_5__.VexHighlightService]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](VexHighlightModule, {
    imports: [_vex_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.VexHighlightDirective],
    exports: [_vex_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.VexHighlightDirective]
  });
})();

/***/ }),

/***/ 28391:
/*!********************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexHighlightService: () => (/* binding */ VexHighlightService)
/* harmony export */ });
/* harmony import */ var _vex_highlight_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-highlight.model */ 43260);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ 71314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);



class VexHighlightService {
  constructor(options) {
    if (options) {
      // Register HighlightJS languages
      options.languages?.().map(language => this.registerLanguage(language.name, language.func));
      if (options.config) {
        // Set global config if present
        this.configure(options.config);
      }
    }
    // Throw an error if no languages were registered.
    if (this.listLanguages().length < 1) {
      throw new Error('[HighlightJS]: No languages were registered!');
    }
  }
  /**
   * Core highlighting function.
   * @param name Accepts a language name, or an alias
   * @param value A string with the code to highlight.
   * @param ignoreIllegals When present and evaluates to a true value, forces highlighting to finish
   * even in case of detecting illegal syntax for the language instead of throwing an exception.
   * When present, the function will restart parsing from this state instead of initializing a new one
   */
  highlight(name, value, ignoreIllegals) {
    return highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlight(name, value, ignoreIllegals);
  }
  /**
   * Highlighting with language detection.
   * @param value Accepts a string with the code to highlight
   * @param languageSubset An optional array of language names and aliases restricting detection to only those languages.
   * The subset can also be set with configure, but the local parameter overrides the option if set.
   */
  highlightAuto(value, languageSubset) {
    return highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightAuto(value, languageSubset);
  }
  /**
   * Applies highlighting to a DOM node containing code.
   * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
   * See the class reference for all available language names and aliases.
   * @param block The element to apply highlight on.
   */
  highlightBlock(block) {
    highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightBlock(block);
  }
  /**
   * Configures global options:
   */
  configure(config) {
    highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].configure(config);
  }
  /**
   * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
   */
  initHighlighting() {
    highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].initHighlighting();
  }
  /**
   * Adds new language to the library under the specified name. Used mostly internally.
   * @param name A string with the name of the language being registered
   * @param language A function that returns an object which represents the language definition.
   * The function is passed the hljs object to be able to use common regular expressions defined within it.
   */
  registerLanguage(name, language) {
    highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage(name, language);
  }
  /**
   * @return The languages names list.
   */
  listLanguages() {
    return highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].listLanguages();
  }
  /**
   * Looks up a language by name or alias.
   * @param name Language name
   * @return The language object if found, undefined otherwise.
   */
  getLanguage(name) {
    return highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguage(name);
  }
  static #_ = this.ɵfac = function VexHighlightService_Factory(t) {
    return new (t || VexHighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_vex_highlight_model__WEBPACK_IMPORTED_MODULE_0__.VEX_HIGHLIGHT_OPTIONS));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: VexHighlightService,
    factory: VexHighlightService.ɵfac
  });
}


/***/ }),

/***/ 95925:
/*!************************************************************!*\
  !*** ./src/@vex/components/vex-popover/vex-popover-ref.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPopoverRef: () => (/* binding */ VexPopoverRef)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72513);

class VexPopoverRef {
  constructor(overlay, content, data) {
    this.overlay = overlay;
    this.content = content;
    this.data = data;
    this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.afterClosed$ = this.afterClosed.asObservable();
    overlay.backdropClick().subscribe(() => {
      this._close('backdropClick', undefined);
    });
  }
  close(data) {
    this._close('close', data);
  }
  _close(type, data) {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });
    this.afterClosed.complete();
  }
}

/***/ }),

/***/ 67930:
/*!******************************************************************!*\
  !*** ./src/@vex/components/vex-popover/vex-popover.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPopoverComponent: () => (/* binding */ VexPopoverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/popover.animation */ 16412);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-popover-ref */ 95925);





function VexPopoverComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function VexPopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function VexPopoverComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VexPopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
  }
}
function VexPopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function VexPopoverComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VexPopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngComponentOutlet", ctx_r2.content);
  }
}
class VexPopoverComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
    this.renderMethod = 'component';
  }
  ngOnInit() {
    this.content = this.popoverRef.content;
    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }
    if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      };
    }
  }
  static #_ = this.ɵfac = function VexPopoverComponent_Factory(t) {
    return new (t || VexPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__.VexPopoverRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VexPopoverComponent,
    selectors: [["vex-popover"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "vex-popover"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]],
    template: function VexPopoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VexPopoverComponent_div_2_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, VexPopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VexPopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPopover", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.renderMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "template");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "component");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgComponentOutlet],
    styles: ["[_nghost-%COMP%], .vex-popover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZleC1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoidmV4LXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCxcclxuLnZleC1wb3BvdmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXBvcG92ZXIvdmV4LXBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUNBLGdYQUFnWCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LFxyXG4udmV4LXBvcG92ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__.popoverAnimation]
    }
  });
}


/***/ }),

/***/ 92371:
/*!****************************************************************!*\
  !*** ./src/@vex/components/vex-popover/vex-popover.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPopoverService: () => (/* binding */ VexPopoverService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 72698);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 83517);
/* harmony import */ var _vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-popover-ref */ 95925);
/* harmony import */ var _vex_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-popover.component */ 67930);







class VexPopoverService {
  constructor(overlay, injector) {
    this.overlay = overlay;
    this.injector = injector;
  }
  open({
    origin,
    content,
    data,
    width,
    height,
    position,
    offsetX,
    offsetY
  }) {
    const overlayRef = this.overlay.create(this.getOverlayConfig({
      origin,
      width,
      height,
      position,
      offsetX,
      offsetY
    }));
    const popoverRef = new _vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef(overlayRef, content, data);
    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.ComponentPortal(_vex_popover_component__WEBPACK_IMPORTED_MODULE_1__.VexPopoverComponent, null, injector));
    return popoverRef;
  }
  static getPositions() {
    return [{
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    }, {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }];
  }
  createInjector(popoverRef, injector) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector.create({
      providers: [{
        provide: _vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef,
        useValue: popoverRef
      }],
      parent: injector
    });
  }
  getOverlayConfig({
    origin,
    width,
    height,
    position,
    offsetX,
    offsetY
  }) {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      backdropClass: 'vex-popover-backdrop',
      positionStrategy: this.getOverlayPosition({
        origin,
        position,
        offsetX,
        offsetY
      }),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }
  getOverlayPosition({
    origin,
    position,
    offsetX,
    offsetY
  }) {
    return this.overlay.position().flexibleConnectedTo(origin).withPositions(position || VexPopoverService.getPositions()).withFlexibleDimensions(true).withDefaultOffsetY(offsetY || 0).withDefaultOffsetX(offsetX || 0).withTransformOriginOn('.vex-popover').withPush(true);
  }
  static #_ = this.ɵfac = function VexPopoverService_Factory(t) {
    return new (t || VexPopoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: VexPopoverService,
    factory: VexPopoverService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 6912:
/*!****************************************************************************!*\
  !*** ./src/@vex/components/vex-progress-bar/vex-progress-bar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexProgressBarComponent: () => (/* binding */ VexProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ 13123);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 69134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 13379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/router */ 7350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);








class VexProgressBarComponent {
  constructor(loader) {
    this.loader = loader;
    this.value$ = this.loader.useRef('router').value$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.delayWhen)(value => value === 0 ? (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(200) : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(undefined)));
  }
  static #_ = this.ɵfac = function VexProgressBarComponent_Factory(t) {
    return new (t || VexProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: VexProgressBarComponent,
    selectors: [["vex-progress-bar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LOADING_BAR_CONFIG,
      useValue: {
        latencyThreshold: 80
      }
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 9,
    consts: [["mode", "determinate", 1, "progress-bar", 3, "value"]],
    template: function VexProgressBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("visible", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx.value$)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0) > 0 && ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx.value$)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0) !== 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, ctx.value$)) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0);
      }
    },
    dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__.LoadingBarRouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: [".progress-bar[_ngcontent-%COMP%] {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n  transition: opacity 500ms cubic-bezier(0.25, 0.8, 0.25, 1) 200ms, visibility 0ms cubic-bezier(0.25, 0.8, 0.25, 1) 700ms;\n}\n.progress-bar.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 500ms cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0ms cubic-bezier(0.25, 0.8, 0.25, 1) 0ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZleC1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVIQUFBO0FBRkY7QUFLRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLCtHQUFBO0FBSEoiLCJmaWxlIjoidmV4LXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuJHRyYW5zaXRpb24tZGVsYXk6IDIwMG1zO1xyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zaXRpb24tZHVyYXRpb24gdGhlbWUoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24ub3V0LXN3aWZ0XCIpICR0cmFuc2l0aW9uLWRlbGF5LFxyXG4gIHZpc2liaWxpdHkgMG1zIHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKSAoJHRyYW5zaXRpb24tZHVyYXRpb24gKyAkdHJhbnNpdGlvbi1kZWxheSk7XHJcblxyXG4gICYudmlzaWJsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zaXRpb24tZHVyYXRpb24gdGhlbWUoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24ub3V0LXN3aWZ0XCIpLFxyXG4gICAgdmlzaWJpbGl0eSAwbXMgdGhlbWUoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24ub3V0LXN3aWZ0XCIpIDBtcztcclxuICB9XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXByb2dyZXNzLWJhci92ZXgtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1SEFBQTtBQUZGO0FBS0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwrR0FBQTtBQUhKO0FBQ0Esb3pDQUFvekMiLCJzb3VyY2VzQ29udGVudCI6WyIkdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiR0cmFuc2l0aW9uLWRlbGF5OiAyMDBtcztcclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0cmFuc2l0aW9uLWR1cmF0aW9uIHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKSAkdHJhbnNpdGlvbi1kZWxheSxcclxuICB2aXNpYmlsaXR5IDBtcyB0aGVtZShcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbi5vdXQtc3dpZnRcIikgKCR0cmFuc2l0aW9uLWR1cmF0aW9uICsgJHRyYW5zaXRpb24tZGVsYXkpO1xyXG5cclxuICAmLnZpc2libGUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0cmFuc2l0aW9uLWR1cmF0aW9uIHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKSxcclxuICAgIHZpc2liaWxpdHkgMG1zIHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKSAwbXM7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 19844:
/*!**********************************************************************!*\
  !*** ./src/@vex/components/vex-scrollbar/vex-scrollbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexScrollbarComponent: () => (/* binding */ VexScrollbarComponent)
/* harmony export */ });
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar */ 32163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


const _c0 = ["*"];
class VexScrollbarComponent {
  constructor(_element, zone) {
    this._element = _element;
    this.zone = zone;
  }
  ngAfterContentInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = new simplebar__WEBPACK_IMPORTED_MODULE_0__["default"](this._element.nativeElement, this.options);
    });
  }
  ngOnDestroy() {
    /**
     * Exists, but not typed in the type definition
     * https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/src/simplebar.js#L903
     */
    if (this.scrollbarRef && this.scrollbarRef.unMount) {
      this.scrollbarRef.unMount();
    }
  }
  static #_ = this.ɵfac = function VexScrollbarComponent_Factory(t) {
    return new (t || VexScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VexScrollbarComponent,
    selectors: [["vex-scrollbar"]],
    hostAttrs: [1, "vex-scrollbar"],
    inputs: {
      options: "options"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function VexScrollbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZleC1zY3JvbGxiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InZleC1zY3JvbGxiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXNjcm9sbGJhci92ZXgtc2Nyb2xsYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNBLG9XQUFvVyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 60483:
/*!******************************************************************!*\
  !*** ./src/@vex/components/vex-sidebar/vex-sidebar.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSidebarComponent: () => (/* binding */ VexSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);


const _c0 = ["*"];
class VexSidebarComponent {
  constructor(document) {
    this.document = document;
    this.position = 'left';
    this.invisibleBackdrop = false;
    this._opened = false;
  }
  get opened() {
    return this._opened;
  }
  set opened(opened) {
    this._opened = opened;
    opened ? this.enableScrollblock() : this.disableScrollblock();
  }
  get positionLeft() {
    return this.position === 'left';
  }
  get positionRight() {
    return this.position === 'right';
  }
  enableScrollblock() {
    if (!this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.add('vex-scrollblock');
    }
  }
  disableScrollblock() {
    if (this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.remove('vex-scrollblock');
    }
  }
  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function VexSidebarComponent_Factory(t) {
    return new (t || VexSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VexSidebarComponent,
    selectors: [["vex-sidebar"]],
    hostAttrs: [1, "vex-sidebar"],
    inputs: {
      position: "position",
      invisibleBackdrop: "invisibleBackdrop",
      opened: "opened"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 10,
    consts: [[1, "backdrop", 3, "click"], [1, "sidebar"]],
    template: function VexSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VexSidebarComponent_Template_div_click_0_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opaque", ctx.invisibleBackdrop)("show", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened)("position-left", ctx.positionLeft)("position-right", ctx.positionRight);
      }
    },
    styles: [".sidebar[_ngcontent-%COMP%] {\n  background: var(--vex-background-card);\n  bottom: 0;\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  max-width: 80vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: transform, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  width: var(--vex-sidenav-width);\n  z-index: 1000;\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n@media (min-width: 600px) {\n  .sidebar[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n.sidebar.position-left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translateX(-100%);\n}\n.sidebar.position-right[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n}\n.sidebar.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n.backdrop[_ngcontent-%COMP%] {\n  background-color: transparent;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: background-color, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  z-index: 800 !important;\n}\n.backdrop.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  visibility: visible;\n}\n.backdrop.opaque[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZleC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdGQUFBO0VBQUEsb0dBQUE7RUFBQSx1R0FBQTtBQUNGO0FBQ0U7RUFuQkY7SUFvQkksZ0JBQUE7RUFFRjtBQUNGO0FBQUU7RUFDRSxPQUFBO0VBQ0EsNEJBQUE7QUFFSjtBQUNFO0VBQ0UsUUFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFFRTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsMEJBQUE7RUFDQSxpREFBQTtFQUNBLDREQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQURGO0FBR0U7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLDZCQUFBO0FBRkoiLCJmaWxlIjoidmV4LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtY2FyZCk7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB0aGVtZShcInRyYW5zaXRpb25EdXJhdGlvbi40MDBcIik7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCB2aXNpYmlsaXR5O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB0aGVtZShcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbi5vdXQtc3dpZnRcIik7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi13aWR0aCk7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBAYXBwbHkgc2hhZG93LXhsO1xyXG5cclxuICBAc2NyZWVuIHNtIHtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAmLnBvc2l0aW9uLWxlZnQge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG5cclxuICAmLnBvc2l0aW9uLXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgdmlzaWJpbGl0eTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDgwMCAhaW1wb3J0YW50O1xyXG5cclxuICAmLnNob3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gICYub3BhcXVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXNpZGViYXIvdmV4LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsMENBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0ZBQUE7RUFBQSxvR0FBQTtFQUFBLHVHQUFBO0FBQ0Y7QUFDRTtFQW5CRjtJQW9CSSxnQkFBQTtFQUVGO0FBQ0Y7QUFBRTtFQUNFLE9BQUE7RUFDQSw0QkFBQTtBQUVKO0FBQ0U7RUFDRSxRQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUVFO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUNBLGlEQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlFO0VBQ0UsNkJBQUE7QUFGSjtBQUdBLG90RkFBb3RGIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWNhcmQpO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdGhlbWUoXCJ0cmFuc2l0aW9uRHVyYXRpb24uNDAwXCIpO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgdmlzaWJpbGl0eTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdGhlbWUoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24ub3V0LXN3aWZ0XCIpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtd2lkdGgpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgQGFwcGx5IHNoYWRvdy14bDtcclxuXHJcbiAgQHNjcmVlbiBzbSB7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgJi5wb3NpdGlvbi1sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIH1cclxuXHJcbiAgJi5wb3NpdGlvbi1yaWdodCB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB9XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2tkcm9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIHZpc2liaWxpdHk7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB6LWluZGV4OiA4MDAgIWltcG9ydGFudDtcclxuXHJcbiAgJi5zaG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAmLm9wYXF1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7892:
/*!*****************************************!*\
  !*** ./src/@vex/config/config.token.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEX_CONFIG: () => (/* binding */ VEX_CONFIG),
/* harmony export */   VEX_THEMES: () => (/* binding */ VEX_THEMES)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

const VEX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VEX_CONFIG');
const VEX_THEMES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VEX_THEMES');

/***/ }),

/***/ 26739:
/*!**************************************!*\
  !*** ./src/@vex/config/constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultRoundedButtonBorderRadius: () => (/* binding */ defaultRoundedButtonBorderRadius)
/* harmony export */ });
const defaultRoundedButtonBorderRadius = {
  value: 9999,
  unit: 'px'
};

/***/ }),

/***/ 95062:
/*!*************************************************!*\
  !*** ./src/@vex/config/vex-config.interface.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexColorScheme: () => (/* binding */ VexColorScheme),
/* harmony export */   VexConfigName: () => (/* binding */ VexConfigName),
/* harmony export */   VexTheme: () => (/* binding */ VexTheme)
/* harmony export */ });
var VexTheme;
(function (VexTheme) {
  VexTheme["DEFAULT"] = "vex-theme-default";
  VexTheme["TEAL"] = "vex-theme-teal";
})(VexTheme || (VexTheme = {}));
var VexConfigName;
(function (VexConfigName) {
  VexConfigName["apollo"] = "apollo";
  VexConfigName["zeus"] = "zeus";
  VexConfigName["hermes"] = "hermes";
  VexConfigName["poseidon"] = "poseidon";
  VexConfigName["ares"] = "ares";
  VexConfigName["ikaros"] = "ikaros";
})(VexConfigName || (VexConfigName = {}));
var VexColorScheme;
(function (VexColorScheme) {
  VexColorScheme["LIGHT"] = "light";
  VexColorScheme["DARK"] = "dark";
})(VexColorScheme || (VexColorScheme = {}));

/***/ }),

/***/ 50376:
/*!***********************************************!*\
  !*** ./src/@vex/config/vex-config.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexConfigService: () => (/* binding */ VexConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 84567);
/* harmony import */ var _vex_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-configs */ 59794);
/* harmony import */ var _vex_config_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vex-config.interface */ 95062);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/config/config.token */ 7892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/vex-layout.service */ 64952);









class VexConfigService {
  constructor(config, themes, document, layoutService) {
    this.config = config;
    this.themes = themes;
    this.document = document;
    this.layoutService = layoutService;
    this.configMap = _vex_configs__WEBPACK_IMPORTED_MODULE_1__.vexConfigs;
    this.configs = Object.values(this.configMap);
    this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.config);
    this.config$.subscribe(config => this._updateConfig(config));
  }
  get config$() {
    return this._configSubject.asObservable();
  }
  select(selector) {
    return this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(selector));
  }
  setConfig(configName) {
    const settings = this.configMap[configName];
    if (!settings) {
      throw new Error(`Config with name '${configName}' does not exist!`);
    }
    this._configSubject.next(settings);
  }
  updateConfig(config) {
    this._configSubject.next((0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({
      ...this._configSubject.getValue()
    }, config));
  }
  _updateConfig(config) {
    this._setLayoutClass(config.bodyClass);
    this._setStyle(config.style);
    this._setDensity();
    this._setDirection(config.direction);
    this._setSidenavState(config.sidenav.state);
    this._emitResize();
  }
  _setStyle(style) {
    /**
     * Set light/dark mode
     */
    switch (style.colorScheme) {
      case _vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.LIGHT:
        this.document.body.classList.remove(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.DARK);
        this.document.body.classList.add(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.LIGHT);
        break;
      case _vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.DARK:
        this.document.body.classList.remove(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.LIGHT);
        this.document.body.classList.add(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.DARK);
        break;
    }
    /**
     * Set theme class
     */
    this.document.body.classList.remove(...this.themes.map(t => t.className));
    this.document.body.classList.add(style.themeClassName);
    /**
     * Border Radius
     */
    this.document.body.style.setProperty('--vex-border-radius', `${style.borderRadius.value}${style.borderRadius.unit}`);
    const buttonBorderRadius = style.button.borderRadius ?? style.borderRadius;
    this.document.body.style.setProperty('--vex-button-border-radius', `${buttonBorderRadius.value}${buttonBorderRadius.unit}`);
  }
  _setDensity() {
    if (!this.document.body.classList.contains('vex-mat-dense-default')) {
      this.document.body.classList.add('vex-mat-dense-default');
    }
  }
  /**
   * Emit event so charts and other external libraries know they have to resize on layout switch
   * @private
   */
  _emitResize() {
    if (window) {
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => window.dispatchEvent(new Event('resize')), 200);
    }
  }
  _setDirection(direction) {
    this.document.body.dir = direction;
  }
  _setSidenavState(sidenavState) {
    sidenavState === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
  _setLayoutClass(bodyClass) {
    this.configs.forEach(c => {
      if (this.document.body.classList.contains(c.bodyClass)) {
        this.document.body.classList.remove(c.bodyClass);
      }
    });
    this.document.body.classList.add(bodyClass);
  }
  static #_ = this.ɵfac = function VexConfigService_Factory(t) {
    return new (t || VexConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__.VEX_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__.VEX_THEMES), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__.VexLayoutService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: VexConfigService,
    factory: VexConfigService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 59794:
/*!****************************************!*\
  !*** ./src/@vex/config/vex-configs.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vexConfigs: () => (/* binding */ vexConfigs)
/* harmony export */ });
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 84567);
/* harmony import */ var _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-config.interface */ 95062);
/* harmony import */ var _vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/utils/deep-clone */ 82928);



const baseConfig = {
  id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.apollo,
  name: 'Apollo',
  bodyClass: 'vex-layout-apollo',
  style: {
    themeClassName: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexTheme.DEFAULT,
    colorScheme: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexColorScheme.LIGHT,
    borderRadius: {
      value: 0.5,
      unit: 'rem'
    },
    button: {
      borderRadius: {
        value: 9999,
        unit: 'px'
      }
    }
  },
  direction: 'ltr',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    title: 'VEX',
    imageUrl: 'assets/img/logo/logo.svg',
    showCollapsePin: true,
    user: {
      visible: true
    },
    search: {
      visible: true
    },
    state: 'expanded'
  },
  toolbar: {
    fixed: true,
    user: {
      visible: true
    }
  },
  navbar: {
    position: 'below-toolbar'
  },
  footer: {
    visible: true,
    fixed: true
  }
};
const vexConfigs = {
  apollo: baseConfig,
  poseidon: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.poseidon,
    name: 'Poseidon',
    bodyClass: 'vex-layout-poseidon',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/poseidon.png',
    sidenav: {
      user: {
        visible: true
      },
      search: {
        visible: true
      }
    },
    toolbar: {
      user: {
        visible: false
      }
    }
  }),
  hermes: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.hermes,
    name: 'Hermes',
    bodyClass: 'vex-layout-hermes',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
    layout: 'vertical',
    boxed: true,
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false
    },
    footer: {
      fixed: false
    }
  }),
  ares: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.ares,
    name: 'Ares',
    bodyClass: 'vex-layout-ares',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    }
  }),
  zeus: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.zeus,
    name: 'Zeus',
    bodyClass: 'vex-layout-zeus',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
    sidenav: {
      state: 'collapsed'
    }
  }),
  ikaros: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.ikaros,
    name: 'Ikaros',
    bodyClass: 'vex-layout-ikaros',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
    layout: 'vertical',
    boxed: true,
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    }
  })
};

/***/ }),

/***/ 7374:
/*!***********************************************!*\
  !*** ./src/@vex/services/vex-demo.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexDemoService: () => (/* binding */ VexDemoService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 55998);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/config/vex-config.service */ 50376);






class VexDemoService {
  constructor(router, configService) {
    this.router = router;
    this.configService = configService;
    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(event => {
      const route = this.router.routerState.root.snapshot;
      if (route.queryParamMap.has('layout')) {
        this.configService.setConfig(route.queryParamMap.get('layout'));
      }
      if (route.queryParamMap.has('style')) {
        this.configService.updateConfig({
          style: {
            colorScheme: route.queryParamMap.get('style')
          }
        });
      }
      // TODO: Adjust primaryColor queryParam and see where it was used?
      const theme = route.queryParamMap.get('theme');
      if (theme) {
        this.configService.updateConfig({
          style: {
            themeClassName: theme
          }
        });
      }
      if (route.queryParamMap.has('rtl')) {
        this.configService.updateConfig({
          direction: (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(route.queryParamMap.get('rtl')) ? 'rtl' : 'ltr'
        });
      }
    });
  }
  static #_ = this.ɵfac = function VexDemoService_Factory(t) {
    return new (t || VexDemoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_0__.VexConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: VexDemoService,
    factory: VexDemoService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 64952:
/*!*************************************************!*\
  !*** ./src/@vex/services/vex-layout.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexLayoutService: () => (/* binding */ VexLayoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 39743);






class VexLayoutService {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
    this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
    this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
    this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this._configPanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.searchOpen$ = this._searchOpen.asObservable();
    this.isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.isLtLg = () => this.breakpointObserver.isMatched(`(max-width: 1279px)`);
    this.isMobile = () => this.breakpointObserver.isMatched(`(max-width: 599px)`);
    this.configPanelOpen$ = this._configPanelOpenSubject.asObservable();
    /**
     * Expand Sidenav when we switch from mobile to desktop view
     */
    this.isDesktop$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(matches => !matches), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.expandSidenav());
  }
  openQuickpanel() {
    this._quickpanelOpenSubject.next(true);
  }
  closeQuickpanel() {
    this._quickpanelOpenSubject.next(false);
  }
  openSidenav() {
    this._sidenavOpenSubject.next(true);
  }
  closeSidenav() {
    this._sidenavOpenSubject.next(false);
  }
  collapseSidenav() {
    this._sidenavCollapsedSubject.next(true);
  }
  expandSidenav() {
    this._sidenavCollapsedSubject.next(false);
  }
  collapseOpenSidenav() {
    this._sidenavCollapsedOpenSubject.next(true);
  }
  collapseCloseSidenav() {
    this._sidenavCollapsedOpenSubject.next(false);
  }
  openConfigpanel() {
    this._configPanelOpenSubject.next(true);
  }
  closeConfigpanel() {
    this._configPanelOpenSubject.next(false);
  }
  openSearch() {
    this._searchOpen.next(true);
  }
  closeSearch() {
    this._searchOpen.next(false);
  }
  static #_ = this.ɵfac = function VexLayoutService_Factory(t) {
    return new (t || VexLayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: VexLayoutService,
    factory: VexLayoutService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 42355:
/*!***************************************************!*\
  !*** ./src/@vex/services/vex-platform.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPlatformService: () => (/* binding */ VexPlatformService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 73274);



class VexPlatformService {
  constructor(document, rendererFactory2, platform) {
    this.document = document;
    this.rendererFactory2 = rendererFactory2;
    this.platform = platform;
    const renderer = this.rendererFactory2.createRenderer(null, null);
    if (this.platform.BLINK) {
      renderer.addClass(this.document.body, 'is-blink');
    }
  }
  static #_ = this.ɵfac = function VexPlatformService_Factory(t) {
    return new (t || VexPlatformService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: VexPlatformService,
    factory: VexPlatformService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 41353:
/*!********************************************************!*\
  !*** ./src/@vex/services/vex-splash-screen.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSplashScreenService: () => (/* binding */ VexSplashScreenService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







class VexSplashScreenService {
  constructor(router, document, animationBuilder) {
    this.router = router;
    this.document = document;
    this.animationBuilder = animationBuilder;
    this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen') ?? undefined;
    if (this.splashScreenElem) {
      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => this.hide());
    }
  }
  hide() {
    const player = this.animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0
    }))]).create(this.splashScreenElem);
    player.onDone(() => this.splashScreenElem?.remove());
    player.play();
  }
  static #_ = this.ɵfac = function VexSplashScreenService_Factory(t) {
    return new (t || VexSplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: VexSplashScreenService,
    factory: VexSplashScreenService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 39681:
/*!****************************************************!*\
  !*** ./src/@vex/utils/check-router-childs-data.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkRouterChildsData: () => (/* binding */ checkRouterChildsData),
/* harmony export */   getAllParams: () => (/* binding */ getAllParams)
/* harmony export */ });
function checkRouterChildsData(route, compareWith) {
  if (compareWith(route.data)) {
    return true;
  }
  if (!route.firstChild) {
    return false;
  }
  return checkRouterChildsData(route.firstChild, compareWith);
}
/**
 * Used to get params from children in their parent
 */
function getAllParams(route, result = new Map()) {
  if (route.params) {
    for (const key of Object.keys(route.params)) {
      result.set(key, route.params[key]);
    }
  }
  if (!route.firstChild) {
    return result;
  }
  return getAllParams(route.firstChild, result);
}

/***/ }),

/***/ 82928:
/*!**************************************!*\
  !*** ./src/@vex/utils/deep-clone.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deepClone(obj) {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  if (obj instanceof Array) {
    const copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }
  const copy = {};
  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key]);
  });
  return copy;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepClone);

/***/ }),

/***/ 75832:
/*!**********************************!*\
  !*** ./src/@vex/utils/is-nil.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNil: () => (/* binding */ isNil)
/* harmony export */ });
function isNil(value) {
  return value == null;
}

/***/ }),

/***/ 84567:
/*!**************************************!*\
  !*** ./src/@vex/utils/merge-deep.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeDeep: () => (/* binding */ mergeDeep)
/* harmony export */ });
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep(target, source) {
  const isObject = obj => obj && typeof obj === 'object';
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}

/***/ }),

/***/ 47637:
/*!************************************!*\
  !*** ./src/@vex/utils/track-by.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trackById: () => (/* binding */ trackById),
/* harmony export */   trackByKey: () => (/* binding */ trackByKey),
/* harmony export */   trackByLabel: () => (/* binding */ trackByLabel),
/* harmony export */   trackByRoute: () => (/* binding */ trackByRoute),
/* harmony export */   trackByValue: () => (/* binding */ trackByValue)
/* harmony export */ });
function trackByRoute(index, item) {
  return item.route;
}
function trackById(index, item) {
  return item.id;
}
function trackByKey(index, item) {
  return item.key;
}
function trackByValue(index, value) {
  return value;
}
function trackByLabel(index, value) {
  return value.label;
}

/***/ }),

/***/ 27463:
/*!**********************************!*\
  !*** ./src/@vex/vex.provider.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideVex: () => (/* binding */ provideVex)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _vex_services_vex_splash_screen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/services/vex-splash-screen.service */ 41353);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 64952);
/* harmony import */ var _vex_services_vex_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/services/vex-demo.service */ 7374);
/* harmony import */ var _vex_services_vex_platform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/services/vex-platform.service */ 42355);
/* harmony import */ var _vex_config_config_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/config/config.token */ 7892);
/* harmony import */ var _vex_components_vex_highlight_vex_highlight_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/components/vex-highlight/vex-highlight.module */ 85299);









function provideVex(options) {
  return [(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(_vex_components_vex_highlight_vex_highlight_module__WEBPACK_IMPORTED_MODULE_5__.VexHighlightModule), {
    provide: _vex_config_config_token__WEBPACK_IMPORTED_MODULE_4__.VEX_CONFIG,
    useValue: options.config
  }, {
    provide: _vex_config_config_token__WEBPACK_IMPORTED_MODULE_4__.VEX_THEMES,
    useValue: options.availableThemes
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MATERIAL_SANITY_CHECKS,
    useValue: {
      doctype: true,
      theme: false,
      version: true
    }
  }, {
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline'
    }
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_splash_screen_service__WEBPACK_IMPORTED_MODULE_0__.VexSplashScreenService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__.VexLayoutService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_platform_service__WEBPACK_IMPORTED_MODULE_3__.VexPlatformService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_demo_service__WEBPACK_IMPORTED_MODULE_2__.VexDemoService),
    multi: true
  }];
}

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);


class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["vex-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}


/***/ }),

/***/ 7110:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 32016);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 68740);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _core_icons_icons_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/icons/icons.provider */ 40214);
/* harmony import */ var _core_luxon_luxon_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/luxon/luxon.provider */ 310);
/* harmony import */ var _vex_vex_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/vex.provider */ 27463);
/* harmony import */ var _core_navigation_navigation_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/navigation/navigation.provider */ 72528);
/* harmony import */ var _vex_config_vex_configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/config/vex-configs */ 59794);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-quill */ 11363);
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth/auth.guard */ 90417);
















const appConfig = {
  providers: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard, (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule), (0,_angular_router__WEBPACK_IMPORTED_MODULE_12__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_12__.withHashLocation)(),
  // TODO: Add preloading withPreloading(),
  (0,_angular_router__WEBPACK_IMPORTED_MODULE_12__.withInMemoryScrolling)({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.withInterceptorsFromDi)()), (0,_vex_vex_provider__WEBPACK_IMPORTED_MODULE_3__.provideVex)({
    /**
     * The config that will be used by default.
     * This can be changed at runtime via the config panel or using the VexConfigService.
     */
    config: _vex_config_vex_configs__WEBPACK_IMPORTED_MODULE_5__.vexConfigs.poseidon,
    /**
     * Only themes that are available in the config in tailwind.config.ts should be listed here.
     * Any theme not listed here will not be available in the config panel.
     */
    availableThemes: [{
      name: 'Default',
      className: 'vex-theme-default'
    }, {
      name: 'Teal',
      className: 'vex-theme-teal'
    }, {
      name: 'Green',
      className: 'vex-theme-green'
    }, {
      name: 'Purple',
      className: 'vex-theme-purple'
    }, {
      name: 'Red',
      className: 'vex-theme-red'
    }, {
      name: 'Orange',
      className: 'vex-theme-orange'
    }]
  }), (0,_core_navigation_navigation_provider__WEBPACK_IMPORTED_MODULE_4__.provideNavigation)(), (0,_core_icons_icons_provider__WEBPACK_IMPORTED_MODULE_1__.provideIcons)(), (0,_core_luxon_luxon_provider__WEBPACK_IMPORTED_MODULE_2__.provideLuxon)(), (0,ngx_quill__WEBPACK_IMPORTED_MODULE_15__.provideQuillConfig)({
    modules: {
      toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        header: [1, 2, 3, 4, 5, 6, false]
      }], ['clean'], ['link', 'image']]
    }
  })]
};

/***/ }),

/***/ 32016:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth/auth.guard */ 90417);
/* harmony import */ var _layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layout/layout.component */ 78349);


const appRoutes = [{
  path: 'login',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("src_app_components_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/login/login.component */ 66666)).then(m => m.LoginComponent),
  data: {
    toolbarShadowEnabled: false
  }
}, {
  path: 'pdf',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_pdf-invoices_pdf-invoices_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/pdf-invoices/pdf-invoices.component */ 64452)).then(m => m.PdfInvoicesComponent),
  canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    allowedRoles: ['CAISSIERE'],
    toolbarShadowEnabled: false
  }
}, {
  path: '',
  component: _layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    allowedRoles: ['SUPER_ADMIN', 'ADMIN', 'SUPERVISEUR', 'CAISSIERE']
  },
  children: [{
    path: 'products',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("src_app_components_products_products_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/products/products.component */ 89510)).then(m => m.ProductsComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'roles',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_roles_roles_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/roles/roles.component */ 84404)).then(m => m.RolesComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'clients',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-src_app_components_accounts_accounts-create-update_accounts-create-update_component_t-13cd2e"), __webpack_require__.e("src_app_components_clients_clients_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/clients/clients.component */ 9451)).then(m => m.ClientsComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'sites',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("src_app_components_sites_sites_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/sites/sites.component */ 76760)).then(m => m.SitesComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'accounts',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-src_app_components_sales_sales-create-update_sales-create-update_component_ts"), __webpack_require__.e("default-src_app_components_accounts_accounts-create-update_accounts-create-update_component_t-13cd2e"), __webpack_require__.e("src_app_components_accounts_accounts_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/accounts/accounts.component */ 24202)).then(m => m.AccountsComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN', 'ADMIN', 'CAISSIERE'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'stocks',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_stock_stock_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/stock/stock.component */ 41446)).then(m => m.StockComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN', 'SUPERVISEUR'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'transactions',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("src_app_components_transactions_transactions_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/transactions/transactions.component */ 53754)).then(m => m.TransactionsComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'entrees',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_stock-replenishment_stock-replenishment_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/stock-replenishment/stock-replenishment.component */ 26159)).then(m => m.StockReplenishmentComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'users',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("src_app_components_users_users_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/users/users.component */ 65334)).then(m => m.UsersComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'deplacements',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("src_app_components_stock-transfer_stock-transfer_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/stock-transfer/stock-transfer.component */ 59302)).then(m => m.StockTransferComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'depenses',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("src_app_components_depense_depense_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/depense/depense.component */ 48799)).then(m => m.DepenseComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPER_ADMIN'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'sales',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-src_app_components_sales_sales-create-update_sales-create-update_component_ts"), __webpack_require__.e("src_app_components_sales_sales_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/sales/sales.component */ 91221)).then(m => m.SalesComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPERVISEUR', 'CAISSIERE'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'new-sale',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_new-sale_new-sale_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/new-sale/new-sale.component */ 9295)).then(m => m.NewSaleComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPERVISEUR', 'CAISSIERE'],
      toolbarShadowEnabled: false
    }
  }, {
    path: 'current-sale',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-up_animation_ts-node_modules_angular_material_fesm2022_che-aabdd8"), __webpack_require__.e("default-src_vex_animations_stagger_animation_ts-src_vex_components_vex-page-layout_vex-page-l-2ff512"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_current-sale_current-sale_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/current-sale/current-sale.component */ 39914)).then(m => m.CurrentSaleComponent),
    canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      allowedRoles: ['SUPERVISEUR', 'CAISSIERE'],
      toolbarShadowEnabled: false
    }
  }]
}];

/***/ }),

/***/ 40214:
/*!**********************************************!*\
  !*** ./src/app/core/icons/icons.provider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideIcons: () => (/* binding */ provideIcons)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.service */ 73296);


function provideIcons() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService),
    multi: true
  }];
}

/***/ }),

/***/ 73296:
/*!*********************************************!*\
  !*** ./src/app/core/icons/icons.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsService: () => (/* binding */ IconsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);



class IconsService {
  constructor(domSanitizer, iconRegistry) {
    this.domSanitizer = domSanitizer;
    this.iconRegistry = iconRegistry;
    this.iconRegistry.addSvgIconResolver((name, namespace) => {
      switch (namespace) {
        case 'mat':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/material-design-icons/two-tone/${name}.svg`);
        case 'logo':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/logos/${name}.svg`);
        case 'flag':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/flags/${name}.svg`);
        default:
          return null;
      }
    });
  }
  static #_ = this.ɵfac = function IconsService_Factory(t) {
    return new (t || IconsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: IconsService,
    factory: IconsService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 310:
/*!**********************************************!*\
  !*** ./src/app/core/luxon/luxon.provider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideLuxon: () => (/* binding */ provideLuxon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _luxon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luxon.service */ 85199);


function provideLuxon() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_luxon_service__WEBPACK_IMPORTED_MODULE_0__.LuxonService),
    multi: true
  }];
}

/***/ }),

/***/ 85199:
/*!*********************************************!*\
  !*** ./src/app/core/luxon/luxon.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LuxonService: () => (/* binding */ LuxonService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 17765);



class LuxonService {
  constructor(localeId) {
    this.localeId = localeId;
    luxon__WEBPACK_IMPORTED_MODULE_0__.Settings.defaultLocale = this.localeId;
  }
  static #_ = this.ɵfac = function LuxonService_Factory(t) {
    return new (t || LuxonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LuxonService,
    factory: LuxonService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 78936:
/*!**************************************************************!*\
  !*** ./src/app/core/navigation/navigation-loader.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationLoaderService: () => (/* binding */ NavigationLoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var src_app_models_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/roles */ 74173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 64952);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 21021);





class NavigationLoaderService {
  get items$() {
    return this._items.asObservable();
  }
  constructor(layoutService, localStorage) {
    this.layoutService = layoutService;
    this.localStorage = localStorage;
    this._items = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.loadNavigation();
  }
  loadNavigation() {
    const userRoles = new src_app_models_roles__WEBPACK_IMPORTED_MODULE_0__.Roles(JSON.parse(this.localStorage.getData('dataRole') ?? 'null'));
    const navigationItems = [{
      type: 'subheading',
      label: 'Tableau de bord',
      children: this.getNavigationLinks(userRoles.role_name)
    }];
    this._items.next(navigationItems);
  }
  getNavigationLinks(userRoles) {
    const links = [];
    if (userRoles.includes('ADMIN')) {
      links.push({
        type: 'link',
        label: 'Sites',
        route: '/sites',
        icon: 'font:fa-bacon',
        routerLinkActiveOptions: {
          exact: true
        }
      }, {
        type: 'link',
        label: 'Utilisateurs',
        route: '/users',
        icon: 'font:fa-bacon',
        routerLinkActiveOptions: {
          exact: true
        }
      }, {
        type: 'link',
        label: 'Produits',
        route: '/products',
        icon: 'font:fa-bacon',
        routerLinkActiveOptions: {
          exact: true
        }
      }, {
        type: 'link',
        label: 'Transactions',
        route: '/transactions',
        icon: 'font:fa-bacon',
        routerLinkActiveOptions: {
          exact: true
        }
      });
    }
    links.push({
      type: 'link',
      label: 'Clients',
      route: '/clients',
      icon: 'font:fa-bacon',
      routerLinkActiveOptions: {
        exact: true
      }
    });
    if (userRoles.includes('SUPERVISEUR') || userRoles.includes('ADMIN')) {
      links.push({
        type: 'link',
        label: 'Depenses',
        route: '/depenses',
        icon: 'font:fa-bacon',
        routerLinkActiveOptions: {
          exact: true
        }
      });
    }
    if (userRoles.includes('SUPERVISEUR') || userRoles.includes('CAISSIERE') || userRoles.includes('SUPER_ADMIN')) {
      links.push({
        type: 'link',
        label: 'Vente en cours',
        route: '/current-sale',
        icon: 'font:fa-bacon',
        routerLinkActiveOptions: {
          exact: true
        }
      });
    }
    if (userRoles.includes('SUPERVISEUR') || userRoles.includes('SUPER_ADMIN')) {
      links.push({
        type: 'link',
        label: 'Nouvelle vente',
        route: '/new-sale',
        icon: 'font:fa-bacon',
        routerLinkActiveOptions: {
          exact: true
        }
      });
    }
    return links;
  }
  static #_ = this.ɵfac = function NavigationLoaderService_Factory(t) {
    return new (t || NavigationLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: NavigationLoaderService,
    factory: NavigationLoaderService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 72528:
/*!********************************************************!*\
  !*** ./src/app/core/navigation/navigation.provider.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideNavigation: () => (/* binding */ provideNavigation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.service */ 20120);
/* harmony import */ var _navigation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-loader.service */ 78936);



function provideNavigation() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_navigation_loader_service__WEBPACK_IMPORTED_MODULE_1__.NavigationLoaderService),
    multi: true
  }];
}

/***/ }),

/***/ 20120:
/*!*******************************************************!*\
  !*** ./src/app/core/navigation/navigation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationService: () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _navigation_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-loader.service */ 78936);



class NavigationService {
  constructor(navigationLoaderService) {
    this.navigationLoaderService = navigationLoaderService;
    this.items$ = this.navigationLoaderService.items$;
    this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.openChange$ = this._openChangeSubject.asObservable();
  }
  triggerOpenChange(item) {
    this._openChangeSubject.next(item);
  }
  isLink(item) {
    return item.type === 'link';
  }
  isDropdown(item) {
    return item.type === 'dropdown';
  }
  isSubheading(item) {
    return item.type === 'subheading';
  }
  static #_ = this.ɵfac = function NavigationService_Factory(t) {
    return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_navigation_loader_service__WEBPACK_IMPORTED_MODULE_0__.NavigationLoaderService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NavigationService,
    factory: NavigationService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 81594:
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  BASE_URL: "http://gaydel.jamonodev.com/api"
  // BASE_URL:"http://localhost:8000/api"
};

/***/ }),

/***/ 90417:
/*!*******************************************!*\
  !*** ./src/app/guards/auth/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class AuthGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate(next, state) {
    const token = sessionStorage.getItem('token');
    let role = localStorage.getItem('dataRole');
    if (!role) {
      this.router.navigate(['/login']);
      return false;
    }
    role = JSON.parse(role);
    const allowedRoles = next.data['allowedRoles'];
    // @ts-ignore
    // if (token && (allowedRoles.includes(role.role_name))) {
    if (token) {
      return true;
    } else {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 48158:
/*!**************************************************************!*\
  !*** ./src/app/layouts/base-layout/base-layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLayoutComponent: () => (/* binding */ BaseLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 75043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 58989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33839);
/* harmony import */ var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/utils/check-router-childs-data */ 39681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/utils/is-nil */ 75832);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 64952);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/config/vex-config.service */ 50376);













function BaseLayoutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const config_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("vex-layout-boxed", config_r1.boxed)("vex-layout-footer-enabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 18, ctx_r0.isFooterVisible$))("vex-layout-footer-fixed", config_r1.footer.fixed && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 20, ctx_r0.isFooterVisible$))("vex-layout-horizontal", config_r1.layout === "horizontal")("vex-layout-scroll-disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 22, ctx_r0.scrollDisabled$))("vex-layout-search-overlay-open", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 24, ctx_r0.searchOpen$))("vex-layout-sidenav-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 26, ctx_r0.sidenavCollapsed$))("vex-layout-toolbar-fixed", config_r1.toolbar.fixed)("vex-layout-vertical", config_r1.layout === "vertical");
  }
}
const _c0 = ["*"];
class BaseLayoutComponent {
  constructor(layoutService, configService, router, document) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.router = router;
    this.document = document;
    this.config$ = this.configService.config$;
    /**
     * Check if footer should be visible
     */
    this.isFooterVisible$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
    /**
     * Check if footer is enabled in the config
     */
    this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.footer.visible)),
    /**
     * Check if footer is enabled on the current route
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.footerVisible ?? true)))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([configEnabled, routeEnabled]) => {
      if ((0,_vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__.isNil)(routeEnabled)) {
        return configEnabled;
      }
      return configEnabled && routeEnabled;
    }));
    this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
    this.isDesktop$ = this.layoutService.isDesktop$;
    this.scrollDisabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.scrollDisabled ?? false)));
    this.searchOpen$ = this.layoutService.searchOpen$;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
  }
  ngOnInit() {
    /**
     * Open sidenav on desktop when layout is not vertical
     * Close sidenav on mobile or when layout is vertical
     */
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.isDesktop$, this.configService.select(config => config.layout === 'vertical')]).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe(([isDesktop, isVerticalLayout]) => {
      if (isDesktop && !isVerticalLayout) {
        this.layoutService.openSidenav();
      } else {
        this.layoutService.closeSidenav();
      }
    });
    /**
     * Mobile only:
     * Close Sidenav after Navigating somewhere (e.g. when a user clicks a link in the Sidenav)
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.withLatestFrom)(this.isDesktop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([event, matches]) => !matches), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.layoutService.closeSidenav());
  }
  ngAfterViewInit() {
    /**
     * Enable Scrolling to specific parts of the page using the Router
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.Scroll), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe(e => {
      if (e.position) {
        // backward navigation
        this.sidenavContainer.scrollable.scrollTo({
          start: e.position[0],
          top: e.position[1]
        });
      } else if (e.anchor) {
        // anchor navigation
        const scroll = anchor => this.sidenavContainer.scrollable.scrollTo({
          behavior: 'smooth',
          top: anchor.offsetTop,
          left: anchor.offsetLeft
        });
        let anchorElem = this.document.getElementById(e.anchor);
        if (anchorElem) {
          scroll(anchorElem);
        } else {
          setTimeout(() => {
            if (!e.anchor) {
              return;
            }
            anchorElem = this.document.getElementById(e.anchor);
            if (!anchorElem) {
              return;
            }
            scroll(anchorElem);
          }, 100);
        }
      } else {
        // forward navigation
        this.sidenavContainer.scrollable.scrollTo({
          top: 0,
          start: 0
        });
      }
    });
  }
  static #_ = this.ɵfac = function BaseLayoutComponent_Factory(t) {
    return new (t || BaseLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_2__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_3__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BaseLayoutComponent,
    selectors: [["vex-base-layout"]],
    contentQueries: function BaseLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavContainer, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 3,
    consts: [["class", "vex-base-layout-container", 3, "vex-layout-boxed", "vex-layout-footer-enabled", "vex-layout-footer-fixed", "vex-layout-horizontal", "vex-layout-scroll-disabled", "vex-layout-search-overlay-open", "vex-layout-sidenav-collapsed", "vex-layout-toolbar-fixed", "vex-layout-vertical", 4, "ngIf"], [1, "vex-base-layout-container"]],
    template: function BaseLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BaseLayoutComponent_div_0_Template, 7, 28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.config$));
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 43593:
/*!******************************************************************************************************!*\
  !*** ./src/app/layouts/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigPanelToggleComponent: () => (/* binding */ ConfigPanelToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 90895);






class ConfigPanelToggleComponent {
  constructor() {
    this.openConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ConfigPanelToggleComponent_Factory(t) {
    return new (t || ConfigPanelToggleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfigPanelToggleComponent,
    selectors: [["vex-config-panel-toggle"]],
    outputs: {
      openConfig: "openConfig"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [["color", "primary", "mat-fab", "", "type", "button", 1, "config-panel-toggle", 3, "click"], ["svgIcon", "mat:settings"]],
    template: function ConfigPanelToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelToggleComponent_Template_button_click_0_listener() {
          return ctx.openConfig.emit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: [".config-panel-toggle[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n}\n\n  [dir=rtl] .config-panel-toggle {\n  left: 1.5rem;\n  right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy1wYW5lbC10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUFBLGNBQUE7RUFBQSxhQUFBO0FBQ0Y7O0FBR0U7RUFBQSxZQUFBO0VBQUE7QUFBQSIsImZpbGUiOiJjb25maWctcGFuZWwtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wYW5lbC10b2dnbGUge1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBAYXBwbHkgZml4ZWQgYm90dG9tLTYgcmlnaHQtNjtcclxufVxyXG5cclxuOjpuZy1kZWVwIFtkaXI9XCJydGxcIl0gLmNvbmZpZy1wYW5lbC10b2dnbGUge1xyXG4gIEBhcHBseSBsZWZ0LTYgcmlnaHQtYXV0bztcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwtdG9nZ2xlL2NvbmZpZy1wYW5lbC10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUFBLGNBQUE7RUFBQSxhQUFBO0FBQ0Y7O0FBR0U7RUFBQSxZQUFBO0VBQUEsV0FBQTtBQUFBO0FBS0YsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlnLXBhbmVsLXRvZ2dsZSB7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIEBhcHBseSBmaXhlZCBib3R0b20tNiByaWdodC02O1xyXG59XHJcblxyXG46Om5nLWRlZXAgW2Rpcj1cInJ0bFwiXSAuY29uZmlnLXBhbmVsLXRvZ2dsZSB7XHJcbiAgQGFwcGx5IGxlZnQtNiByaWdodC1hdXRvO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 76426:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/components/config-panel/config-panel.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigPanelComponent: () => (/* binding */ ConfigPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 59293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 92106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/config/vex-config.interface */ 95062);
/* harmony import */ var _vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/utils/is-nil */ 75832);
/* harmony import */ var _vex_config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/config/constants */ 26739);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/config/config.token */ 7892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/config/vex-config.service */ 50376);


















function ConfigPanelComponent_div_0_div_8_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 24);
  }
}
function ConfigPanelComponent_div_0_div_8_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 25);
  }
}
function ConfigPanelComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_8_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const colorScheme_r6 = restoredCtx.ngIf;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.isDark(colorScheme_r6) ? ctx_r9.disableDarkMode() : ctx_r9.enableDarkMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_8_mat_icon_2_Template, 1, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ConfigPanelComponent_div_0_div_8_mat_icon_3_Template, 1, 0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "DARK MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const colorScheme_r6 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isDark(colorScheme_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isDark(colorScheme_r6));
  }
}
function ConfigPanelComponent_div_0_div_13_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 24);
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-primary-600/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-500": a0,
    "bg-primary-600 text-on-primary-600": a1
  };
};
function ConfigPanelComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_13_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const theme_r11 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.selectTheme(theme_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ConfigPanelComponent_div_0_div_13_mat_icon_4_Template, 1, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const theme_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", theme_r11.className, " vex-color-picker rounded-full mt-2 flex items-center cursor-pointer relative hover:bg-primary-600 hover:text-on-primary-600 dark:hover:bg-primary-600 dark:hover:text-on-primary-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c0, !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 6, ctx_r3.isSelectedTheme$)) == null ? null : tmp_1_0(theme_r11.className)), (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 8, ctx_r3.isSelectedTheme$)) == null ? null : tmp_1_0(theme_r11.className)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 10, ctx_r3.isSelectedTheme$)) == null ? null : tmp_2_0(theme_r11.className));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 12, theme_r11.name));
  }
}
function ConfigPanelComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 31)(4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_17_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const config_r15 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.setConfig(config_r15.id, ctx_r17.ColorSchemeName.LIGHT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " LIGHT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_17_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const config_r15 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.setConfig(config_r15.id, ctx_r19.ColorSchemeName.DARK));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " DARK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const config_r15 = ctx.$implicit;
    const first_r16 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mt-6", !first_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", config_r15.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](config_r15.name);
  }
}
const _c1 = function (a0, a1) {
  return {
    "border-gray-300": a0,
    "border-transparent": a1
  };
};
const _c2 = function (a0, a1) {
  return {
    "bg-primary-600 border-primary-600": a0,
    "bg-foreground border-gray-500 group-hover:bg-app-bar": a1
  };
};
function ConfigPanelComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_22_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const borderRadius_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.selectBorderRadius(borderRadius_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const borderRadius_r20 = ctx.$implicit;
    const setting_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c1, ctx_r5.isSelectedBorderRadius(borderRadius_r20, setting_r1), !ctx_r5.isSelectedBorderRadius(borderRadius_r20, setting_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("border-top-left-radius", borderRadius_r20.value + borderRadius_r20.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c2, ctx_r5.isSelectedBorderRadius(borderRadius_r20, setting_r1), !ctx_r5.isSelectedBorderRadius(borderRadius_r20, setting_r1)));
  }
}
const _c3 = function (a0, a1) {
  return {
    "!bg-transparent !border-solid !border-primary-600 !text-primary-600": a0,
    "!border-transparent": a1
  };
};
function ConfigPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "THEME BASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ConfigPanelComponent_div_0_div_8_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4)(11, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "THEME COLORS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ConfigPanelComponent_div_0_div_13_Template, 9, 17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 4)(15, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "PRE-BUILT LAYOUTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ConfigPanelComponent_div_0_div_17_Template, 10, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 4)(19, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "ROUNDED CORNERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ConfigPanelComponent_div_0_div_22_Template, 2, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 4)(24, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "BUTTON STYLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 11)(27, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.selectButtonStyle(undefined));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " INHERIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.selectButtonStyle(ctx_r26.roundedButtonValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " ROUNDED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 4)(32, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 14)(35, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.layoutRTLChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "RTL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 4)(41, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 14)(44, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.toolbarPositionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 4)(52, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 14)(55, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.footerVisibleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Visible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.footerPositionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const setting_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 10, ctx_r0.colorScheme$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.themes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.configs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.roundedCornerValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c3, !ctx_r0.isSelectedButtonStyle(undefined, setting_r1), ctx_r0.isSelectedButtonStyle(undefined, setting_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](17, _c3, !ctx_r0.isSelectedButtonStyle(ctx_r0.roundedButtonValue, setting_r1), ctx_r0.isSelectedButtonStyle(ctx_r0.roundedButtonValue, setting_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 12, ctx_r0.isRTL$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", setting_r1.toolbar.fixed ? "fixed" : "static");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", setting_r1.footer.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", setting_r1.footer.fixed ? "fixed" : "static");
  }
}
class ConfigPanelComponent {
  constructor(configService, themes) {
    this.configService = configService;
    this.themes = themes;
    this.configs = this.configService.configs;
    this.config$ = this.configService.config$;
    this.isRTL$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.direction === 'rtl'));
    this.colorScheme$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.style.colorScheme));
    this.borderRadius$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.style.borderRadius.value));
    this.ConfigName = _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexConfigName;
    this.ColorSchemeName = _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme;
    this.selectedTheme$ = this.configService.select(config => config.style.themeClassName);
    this.isSelectedTheme$ = this.configService.select(config => config.style.themeClassName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(themeClassName => theme => themeClassName === theme));
    this.roundedCornerValues = [{
      value: 0,
      unit: 'rem'
    }, {
      value: 0.25,
      unit: 'rem'
    }, {
      value: 0.5,
      unit: 'rem'
    }, {
      value: 0.75,
      unit: 'rem'
    }, {
      value: 1,
      unit: 'rem'
    }, {
      value: 1.25,
      unit: 'rem'
    }, {
      value: 1.5,
      unit: 'rem'
    }, {
      value: 1.75,
      unit: 'rem'
    }];
    this.roundedButtonValue = _vex_config_constants__WEBPACK_IMPORTED_MODULE_2__.defaultRoundedButtonBorderRadius;
  }
  setConfig(layout, colorScheme) {
    this.configService.setConfig(layout);
    this.configService.updateConfig({
      style: {
        colorScheme
      }
    });
  }
  selectTheme(theme) {
    this.configService.updateConfig({
      style: {
        themeClassName: theme.className
      }
    });
  }
  enableDarkMode() {
    this.configService.updateConfig({
      style: {
        colorScheme: _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme.DARK
      }
    });
  }
  disableDarkMode() {
    this.configService.updateConfig({
      style: {
        colorScheme: _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme.LIGHT
      }
    });
  }
  layoutRTLChange(change) {
    this.configService.updateConfig({
      direction: change.checked ? 'rtl' : 'ltr'
    });
  }
  toolbarPositionChange(change) {
    this.configService.updateConfig({
      toolbar: {
        fixed: change.value === 'fixed'
      }
    });
  }
  footerVisibleChange(change) {
    this.configService.updateConfig({
      footer: {
        visible: change.checked
      }
    });
  }
  footerPositionChange(change) {
    this.configService.updateConfig({
      footer: {
        fixed: change.value === 'fixed'
      }
    });
  }
  isSelectedBorderRadius(borderRadius, config) {
    return borderRadius.value === config.style.borderRadius.value && borderRadius.unit === config.style.borderRadius.unit;
  }
  selectBorderRadius(borderRadius) {
    this.configService.updateConfig({
      style: {
        borderRadius: borderRadius
      }
    });
  }
  isSelectedButtonStyle(buttonStyle, config) {
    if ((0,_vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__.isNil)(config.style.button.borderRadius) && (0,_vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__.isNil)(buttonStyle)) {
      return true;
    }
    return buttonStyle?.value === config.style.button.borderRadius?.value;
  }
  selectButtonStyle(borderRadius) {
    this.configService.updateConfig({
      style: {
        button: {
          borderRadius: borderRadius
        }
      }
    });
  }
  isDark(colorScheme) {
    return colorScheme === _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme.DARK;
  }
  static #_ = this.ɵfac = function ConfigPanelComponent_Factory(t) {
    return new (t || ConfigPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_4__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__.VEX_THEMES));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ConfigPanelComponent,
    selectors: [["vex-config-panel"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["class", "config-panel", 4, "ngIf"], [1, "config-panel"], [1, "headline", "mb-4"], ["svgIcon", "mat:settings", 1, "mr-3"], [1, "section"], [1, "subheading"], ["class", "rounded-full mt-2 flex items-center cursor-pointer relative bg-black text-white select-none", "matRipple", "", 3, "click", 4, "ngIf"], ["matRipple", "", 3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], ["class", "rounded", 3, "mt-6", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-4", "gap-4"], ["class", "aspect-square bgbg-primary-60010 flex justify-end items-end cursor-pointer border-2 hover:border-gray-200 group transition duration-400 ease-out-swift rounded-tl", 3, "border-gray-300", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "gap-4"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "rounded", "flex-1", "border-2", "border-solid", 3, "ngClass", "click"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "rounded-full", "flex-1", "border-2", "border-solid", 3, "ngClass", "click"], [1, "section-content"], [3, "checked", "change"], [1, "flex", "flex-col", "gap-3", 3, "value", "change"], ["value", "fixed"], ["value", "static"], ["matRipple", "", 1, "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", "bg-black", "text-white", "select-none", 3, "click"], [1, "m-2", "h-6", "w-6", "rounded-full"], ["svgIcon", "mat:check", 4, "ngIf"], ["svgIcon", "mat:close", 4, "ngIf"], [1, "ml-1", "font-medium", "text-sm"], ["svgIcon", "mat:check"], ["svgIcon", "mat:close"], ["matRipple", "", 3, "ngClass", "click"], [1, "m-2", "h-6", "w-6", "rounded-full", "text-on-primary-600", "bg-primary-600"], [1, "rounded"], [1, "layout-image", "rounded", "overflow-hidden", "relative", "hover:bg-hover", "shadow-md"], [1, "w-full", "block", 3, "src"], [1, "layout-image-overlay", "flex", "items-center", "justify-center", "gap-1"], ["mat-raised-button", "", "type", "button", 1, "bg-white", "text-black", "flex-none", "!min-w-[70px]", 3, "click"], ["mat-raised-button", "", "type", "button", 1, "!bg-black", "!text-white", "flex-none", "!min-w-[70px]", 3, "click"], [1, "text-center", "body-2", "mt-2"], [1, "aspect-square", "bgbg-primary-60010", "flex", "justify-end", "items-end", "cursor-pointer", "border-2", "hover:border-gray-200", "group", "transition", "duration-400", "ease-out-swift", "rounded-tl", 3, "border-gray-300", "ngClass", "click"], [1, "h-7", "w-7", "border-2", "transition", "duration-400", "ease-out-swift", 2, "margin-bottom", "-2px", "margin-right", "-2px", 3, "ngClass"]],
    template: function ConfigPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ConfigPanelComponent_div_0_Template, 64, 20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.config$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe],
    styles: [".config-panel[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  border-bottom-width: 1px;\n  padding-bottom: 1rem;\n}\n.section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.section-content[_ngcontent-%COMP%] {\n  margin-inline-start: 0.75rem;\n}\n.section-content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-secondary-text-rgb) / var(--tw-text-opacity));\n}\n\n.layout[_ngcontent-%COMP%]    + .layout[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.layout-image[_ngcontent-%COMP%]:hover   .layout-image-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 1;\n  visibility: visible;\n}\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%] {\n  border-radius: var(--vex-border-radius);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  width: 100%;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n\n.vex-color-picker[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-color-picker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.color[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  height: 36px;\n  justify-content: center;\n  text-align: center;\n  vertical-align: middle;\n  width: 36px;\n  margin-inline-end: 1rem;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.color.light[_ngcontent-%COMP%] {\n  background: white;\n  color: #000;\n}\n.color.dark[_ngcontent-%COMP%] {\n  background: #303030;\n  color: white;\n}\n.color.flat[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #000;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsbUJBQUE7RUFBQSx3QkFBQTtFQUFBO0FBQUE7QUFFQTtFQUNFLG1CQUFBO0FBQ0o7O0FBSUU7RUFBQTtBQUFBO0FBR0U7RUFBQTtBQUFBOztBQUtGO0VBQUEsZ0JBQUE7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxnQkFBQTtFQUFBLHlCQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUE7QUFBQTs7QUFLRTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBSE47QUFPRTtFQUNFLHVDQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQUxKO0FBT0k7RUFDRSxjQUFBO0FBTE47O0FBVUE7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsNERBQUE7QUFQRjtBQVVJO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFJSjtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQUEsK0VBQUE7RUFBQSxtR0FBQTtFQUFBLHVHQUFBO0FBUkY7QUFVRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQVJKO0FBV0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFUSjtBQVlFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBVko7O0FBa0JFOzs7O0VBQUEsbUJBQUE7RUFBQTtBQUFBIiwiZmlsZSI6ImNvbmZpZy1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maWctcGFuZWwge1xyXG4gIEBhcHBseSBweC00IHB5LTY7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBAYXBwbHkgbWItNjtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIEBhcHBseSBib3JkZXItYiBtYi00IHBiLTQ7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24tY29udGVudCB7XHJcbiAgQGFwcGx5IG1zLTM7XHJcblxyXG4gIC5zdWJoZWFkaW5nIHtcclxuICAgIEBhcHBseSBtdC02O1xyXG4gIH1cclxufVxyXG5cclxuLnN1YmhlYWRpbmcge1xyXG4gIEBhcHBseSBteS00IHVwcGVyY2FzZSB0ZXh0LXhzIHRleHQtc2Vjb25kYXJ5IGZvbnQtbWVkaXVtO1xyXG59XHJcblxyXG4ubGF5b3V0ICsgLmxheW91dCB7XHJcbiAgQGFwcGx5IG10LTY7XHJcbn1cclxuXHJcbi5sYXlvdXQtaW1hZ2Uge1xyXG4gICY6aG92ZXIge1xyXG4gICAgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXZleC1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udmV4LWNvbG9yLXBpY2tlciB7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxuXHJcbiAgcCB7XHJcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbG9yIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIEBhcHBseSBzaGFkb3ctbGcgbWUtNDtcclxuXHJcbiAgJi5saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcbiAgJi5kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmLmZsYXQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG5cclxubWF0LXNsaWRlLXRvZ2dsZSArIG1hdC1zbGlkZS10b2dnbGUsXHJcbm1hdC1zbGlkZS10b2dnbGUgKyBtYXQtY2hlY2tib3gsXHJcbm1hdC1jaGVja2JveCArIG1hdC1zbGlkZS10b2dnbGUsXHJcbm1hdC1jaGVja2JveCArIG1hdC1jaGVja2JveCB7XHJcbiAgQGFwcGx5IGJsb2NrIG10LTM7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxzQkFBQTtBQUFBOztBQUlBO0VBQUEscUJBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsd0JBQUE7RUFBQSxvQkFBQTtBQUFBO0FBRUE7RUFDRSxtQkFBQTtBQUNKOztBQUlFO0VBQUEsNEJBQUE7QUFBQTtBQUdFO0VBQUEsa0JBQUE7QUFBQTs7QUFLRjtFQUFBLGdCQUFBO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsZ0JBQUE7RUFBQSx5QkFBQTtFQUFBLG9CQUFBO0VBQUEsNkVBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0FBQUE7O0FBS0U7RUFDRSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUhOO0FBT0U7RUFDRSx1Q0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsNERBQUE7QUFMSjtBQU9JO0VBQ0UsY0FBQTtBQUxOOztBQVVBO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLDREQUFBO0FBUEY7QUFVSTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLDREQUFBO0FBQUE7O0FBSUo7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUFBLCtFQUFBO0VBQUEsbUdBQUE7RUFBQSx1R0FBQTtBQVJGO0FBVUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFSSjtBQVdFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBVEo7QUFZRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQVZKOztBQWtCRTs7OztFQUFBLG1CQUFBO0VBQUEsY0FBQTtBQUFBO0FBZ0JGLGd6SEFBZ3pIIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wYW5lbCB7XHJcbiAgQGFwcGx5IHB4LTQgcHktNjtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIEBhcHBseSBtYi02O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgQGFwcGx5IGJvcmRlci1iIG1iLTQgcGItNDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi1jb250ZW50IHtcclxuICBAYXBwbHkgbXMtMztcclxuXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgQGFwcGx5IG10LTY7XHJcbiAgfVxyXG59XHJcblxyXG4uc3ViaGVhZGluZyB7XHJcbiAgQGFwcGx5IG15LTQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1zZWNvbmRhcnkgZm9udC1tZWRpdW07XHJcbn1cclxuXHJcbi5sYXlvdXQgKyAubGF5b3V0IHtcclxuICBAYXBwbHkgbXQtNjtcclxufVxyXG5cclxuLmxheW91dC1pbWFnZSB7XHJcbiAgJjpob3ZlciB7XHJcbiAgICAubGF5b3V0LWltYWdlLW92ZXJsYXkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGF5b3V0LWltYWdlLW92ZXJsYXkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdmV4LWJvcmRlci1yYWRpdXMpO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi52ZXgtY29sb3ItcGlja2VyIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xyXG5cclxuICBwIHtcclxuICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgQGFwcGx5IHNoYWRvdy1sZyBtZS00O1xyXG5cclxuICAmLmxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAmLmRhcmsge1xyXG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYuZmxhdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtc2xpZGUtdG9nZ2xlICsgbWF0LXNsaWRlLXRvZ2dsZSxcclxubWF0LXNsaWRlLXRvZ2dsZSArIG1hdC1jaGVja2JveCxcclxubWF0LWNoZWNrYm94ICsgbWF0LXNsaWRlLXRvZ2dsZSxcclxubWF0LWNoZWNrYm94ICsgbWF0LWNoZWNrYm94IHtcclxuICBAYXBwbHkgYmxvY2sgbXQtMztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 93147:
/*!***************************************************************!*\
  !*** ./src/app/layouts/components/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class FooterComponent {
  constructor() {}
  ngOnInit() {}
  ngOnDestroy() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["vex-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [[1, "flex-auto", "flex", "items-center", "justify-center", "container"], [1, "font-medium", "ltr:ml-4", "rtl:mr-4", "hidden", "sm:block", "text-center"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9JamonoDev@2024 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule],
    styles: ["[_nghost-%COMP%] {\n  position: relative;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  border-top-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--vex-background-card-rgb) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-text-rgb) / var(--tw-text-opacity));\n}[_nghost-%COMP%]:is(.dark   *)[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--vex-background-background-rgb) / var(--tw-bg-opacity));\n}[_nghost-%COMP%] {\n  height: var(--vex-footer-height);\n  z-index: var(--vex-footer-z-index);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEsV0FBQTtFQUFBLGFBQUE7RUFBQSxXQUFBO0VBQUEscUJBQUE7RUFBQSxrQkFBQTtFQUFBLDRFQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBLENBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUEsQ0FERjtFQUVFLGdDQUFBO0VBQ0Esa0NBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQGFwcGx5IGJnLWZvcmVncm91bmQgZGFyazpiZy1iYXNlIGJvcmRlci10IHRleHQtZGVmYXVsdCBmbGV4IHctZnVsbCBib3R0b20tMCByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IHZhcigtLXZleC1mb290ZXItaGVpZ2h0KTtcclxuICB6LWluZGV4OiB2YXIoLS12ZXgtZm9vdGVyLXotaW5kZXgpO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBLFdBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLHFCQUFBO0VBQUEsa0JBQUE7RUFBQSw0RUFBQTtFQUFBLG9CQUFBO0VBQUEsbUVBQUE7QUFBQSxDQUFBO0VBQUEsa0JBQUE7RUFBQSxrRkFBQTtBQUFBLENBREY7RUFFRSxnQ0FBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFhQSw0cUJBQTRxQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBAYXBwbHkgYmctZm9yZWdyb3VuZCBkYXJrOmJnLWJhc2UgYm9yZGVyLXQgdGV4dC1kZWZhdWx0IGZsZXggdy1mdWxsIGJvdHRvbS0wIHJlbGF0aXZlO1xyXG4gIGhlaWdodDogdmFyKC0tdmV4LWZvb3Rlci1oZWlnaHQpO1xyXG4gIHotaW5kZXg6IHZhcigtLXZleC1mb290ZXItei1pbmRleCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9208:
/*!********************************************************************************************!*\
  !*** ./src/app/layouts/components/navigation/navigation-item/navigation-item.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationItemComponent: () => (/* binding */ NavigationItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 75043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/utils/track-by */ 47637);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/navigation/navigation.service */ 20120);













const _c0 = function (a0, a1) {
  return {
    "bg-primary-600 text-on-primary-600": a0,
    "navigation-color": a1
  };
};
function NavigationItemComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, ctx_r0.isActive$)) == null ? null : tmp_0_0(ctx_r0.item)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, ctx_r0.isActive$)) == null ? null : tmp_1_0(ctx_r0.item), !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx_r0.isActive$)) == null ? null : tmp_1_0(ctx_r0.item))))("routerLink", ctx_r0.item.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.item.label, "\n");
  }
}
function NavigationItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.item.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r1.isActive$)) == null ? null : tmp_0_0(ctx_r1.item)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.item.label, "\n");
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_a_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 14);
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", child_r9.icon);
  }
}
const _c1 = function (a0) {
  return {
    "text-primary-600": a0
  };
};
function NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_a_1_mat_icon_2_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx_r10.isActive$)) == null ? null : tmp_0_0(child_r9)))("routerLink", child_r9.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_div_2_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 14);
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", child_r9.icon);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](child_r9.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_container_8_div_2_mat_icon_1_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 14);
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", child_r9.icon);
  }
}
const _c2 = function (a0) {
  return {
    item: a0
  };
};
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](11);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, item_r42))("ngTemplateOutlet", _r7);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 2, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const child_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](10);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r40)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r39.isActive$)) == null ? null : tmp_1_0(child_r38)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", child_r38.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r38.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](9);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, child_r38))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r37.isDropdown(child_r38));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](8);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r36)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r35.isActive$)) == null ? null : tmp_1_0(item_r34)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r34.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r34.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](7);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, item_r34))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r33.isDropdown(item_r34));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const child_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r32)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r31.isActive$)) == null ? null : tmp_1_0(child_r30)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", child_r30.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r30.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, child_r30))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r29.isDropdown(child_r30));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r28)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r27.isActive$)) == null ? null : tmp_1_0(item_r26)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r26.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r26.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, item_r26))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.isDropdown(item_r26));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_mat_icon_3_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 6, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r23)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r12.isActive$)) == null ? null : tmp_1_0(child_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r9.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template, 5, 8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template, 9, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r9 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && !ctx_r6.isFunction(child_r9.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && ctx_r6.isFunction(child_r9.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isDropdown(child_r9));
  }
}
function NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r49.isActive$)) == null ? null : tmp_0_0(item_r48)))("routerLink", item_r48.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r48.label);
  }
}
function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r48.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r50.isActive$)) == null ? null : tmp_0_0(item_r48)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r48.label, " ");
  }
}
function NavigationItemComponent_ng_container_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template, 3, 7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template, 3, 6, "div", 23);
  }
  if (rf & 2) {
    const item_r48 = ctx.item;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r48) && !ctx_r8.isFunction(item_r48.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r48) && ctx_r8.isFunction(item_r48.route));
  }
}
function NavigationItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_Template, 4, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavigationItemComponent_ng_container_2_ng_template_9_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r2.isActive$)) == null ? null : tmp_0_0(ctx_r2.item)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c0, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx_r2.isActive$)) == null ? null : tmp_2_0(ctx_r2.item), !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, ctx_r2.isActive$)) == null ? null : tmp_2_0(ctx_r2.item))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.item.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
  }
}
class NavigationItemComponent {
  constructor(navigationService, router) {
    this.navigationService = navigationService;
    this.router = router;
    this.isActive$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => item => this.hasActiveChilds(item)));
    this.isLink = this.navigationService.isLink;
    this.isDropdown = this.navigationService.isDropdown;
    this.isSubheading = this.navigationService.isSubheading;
    this.trackByRoute = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
  }
  ngOnInit() {}
  hasActiveChilds(parent) {
    if (this.isLink(parent)) {
      return this.router.isActive(parent.route, true);
    }
    if (this.isDropdown(parent) || this.isSubheading(parent)) {
      return parent.children.some(child => {
        if (this.isDropdown(child)) {
          return this.hasActiveChilds(child);
        }
        if (this.isLink(child) && !this.isFunction(child.route)) {
          return this.router.isActive(child.route, true);
        }
        return false;
      });
    }
    return false;
  }
  isFunction(prop) {
    return prop instanceof Function;
  }
  static #_ = this.ɵfac = function NavigationItemComponent_Factory(t) {
    return new (t || NavigationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavigationItemComponent,
    selectors: [["vex-navigation-item"]],
    inputs: {
      item: "item"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [["class", "navigation-item", "matRipple", "", 3, "hover:bg-hover", "ngClass", "routerLink", 4, "ngIf"], ["class", "navigation-item navigation-color", "matRipple", "", 3, "hover:bg-hover", "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", 1, "navigation-item", 3, "ngClass", "routerLink"], ["matRipple", "", 1, "navigation-item", "navigation-color", 3, "click"], ["matRipple", "", 1, "navigation-item", 3, "matMenuTriggerFor", "ngClass"], ["yPosition", "below"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["linkTemplate", ""], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "ngClass", "routerLink", 4, "ngIf"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "ngClass", "routerLink"], ["class", "text-current", 3, "svgIcon", 4, "ngIf"], [1, "text-current", 3, "svgIcon"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "click"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "matMenuTriggerFor", "ngClass"], ["level1", "matMenu"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], ["level2", "matMenu"], ["level3", "matMenu"], ["level4", "matMenu"], ["level5", "matMenu"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "ngClass", "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "ngClass", "click"]],
    template: function NavigationItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationItemComponent_a_0_Template, 5, 14, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_div_1_Template, 3, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_Template, 11, 15, "ng-container", 2);
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item) && ((tmp_2_0 = ctx.item.children == null ? null : ctx.item.children.length) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) > 0 || ctx.isDropdown(ctx.item));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: [".navigation-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-inline-end: 0.5rem;\n  display: block;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--vex-border-radius);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  text-decoration-line: none;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.navigation-color[_ngcontent-%COMP%] {\n  color: var(--vex-navigation-color);\n}\n\n.navigation-menu-item[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.navigation-menu-item[_ngcontent-%COMP%]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity));\n}\n.navigation-menu-item[_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEseUJBQUE7RUFBQSxjQUFBO0VBQUEsZUFBQTtFQUFBLHlCQUFBO1VBQUEsaUJBQUE7RUFBQSx1Q0FBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLHNCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsMEJBQUE7RUFDQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQURBOztBQUlGO0VBQ0Usa0NBQUE7QUFDRjs7QUFHRTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7QUFHRTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUdFO0VBQUEsb0JBQUE7RUFBQTtBQUFBIiwiZmlsZSI6Im5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWl0ZW0ge1xyXG4gIEBhcHBseSByb3VuZGVkIGN1cnNvci1wb2ludGVyIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNCBweS0yIHJlbGF0aXZlIHNlbGVjdC1ub25lIG5vLXVuZGVybGluZSBibG9jayBtZS0yO1xyXG4gIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWNvbG9yIHtcclxuICBjb2xvcjogdmFyKC0tdmV4LW5hdmlnYXRpb24tY29sb3IpO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW0ge1xyXG4gIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgQGFwcGx5IHRleHQtcHJpbWFyeS02MDA7XHJcblxyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgQGFwcGx5IHRleHQtcHJpbWFyeS02MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEseUJBQUE7RUFBQSxjQUFBO0VBQUEsZUFBQTtFQUFBLHlCQUFBO1VBQUEsaUJBQUE7RUFBQSx1Q0FBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLHNCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsMEJBQUE7RUFDQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQURBOztBQUlGO0VBQ0Usa0NBQUE7QUFDRjs7QUFHRTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLDREQUFBO0FBQUE7QUFHRTtFQUFBLG9CQUFBO0VBQUEsaUVBQUE7QUFBQTtBQUdFO0VBQUEsb0JBQUE7RUFBQSxpRUFBQTtBQUFBO0FBd0JOLHd6Q0FBd3pDIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24taXRlbSB7XHJcbiAgQGFwcGx5IHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSBweC00IHB5LTIgcmVsYXRpdmUgc2VsZWN0LW5vbmUgbm8tdW5kZXJsaW5lIGJsb2NrIG1lLTI7XHJcbiAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24tY29sb3Ige1xyXG4gIGNvbG9yOiB2YXIoLS12ZXgtbmF2aWdhdGlvbi1jb2xvcik7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbSB7XHJcbiAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBAYXBwbHkgdGV4dC1wcmltYXJ5LTYwMDtcclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBAYXBwbHkgdGV4dC1wcmltYXJ5LTYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 99373:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/components/navigation/navigation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-item/navigation-item.component */ 9208);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/navigation/navigation.service */ 20120);




function NavigationComponent_vex_navigation_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-navigation-item", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
  }
}
class NavigationComponent {
  constructor(navigationService) {
    this.navigationService = navigationService;
    this.items$ = this.navigationService.items$;
  }
  static #_ = this.ɵfac = function NavigationComponent_Factory(t) {
    return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavigationComponent,
    selectors: [["vex-navigation"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "border-b"], [1, "navigation", "flex", "items-center", "container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationComponent_vex_navigation_item_2_Template, 1, 1, "vex-navigation-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx.items$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_0__.NavigationItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  background: var(--vex-navigation-background);\n  display: block;\n  height: var(--vex-navigation-height);\n  position: relative;\n  z-index: 200;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  height: var(--vex-navigation-height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1uYXZpZ2F0aW9uLWJhY2tncm91bmQpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogdmFyKC0tdmV4LW5hdmlnYXRpb24taGVpZ2h0KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjAwO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgaGVpZ2h0OiB2YXIoLS12ZXgtbmF2aWdhdGlvbi1oZWlnaHQpO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGO0FBQ0EsZ3FCQUFncUIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LW5hdmlnYXRpb24tYmFja2dyb3VuZCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiB2YXIoLS12ZXgtbmF2aWdhdGlvbi1oZWlnaHQpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyMDA7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHtcclxuICBoZWlnaHQ6IHZhcigtLXZleC1uYXZpZ2F0aW9uLWhlaWdodCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 74132:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/components/quickpanel/quickpanel.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickpanelComponent: () => (/* binding */ QuickpanelComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 17765);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 13228);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);











const _c0 = function () {
  return [];
};
class QuickpanelComponent {
  constructor() {
    this.date = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('DD');
    this.dayName = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('EEEE');
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function QuickpanelComponent_Factory(t) {
    return new (t || QuickpanelComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: QuickpanelComponent,
    selectors: [["vex-quickpanel"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 67,
    vars: 19,
    consts: [[1, "body-2", "p-6", "bg-primary-600", "text-on-primary-600"], [1, "display-1"], ["matSubheader", ""], ["mat-list-item", "", 3, "routerLink"], ["matListItemTitle", ""], ["matListItemLine", ""], ["matRipple", "", 1, "vex-list-item"], [1, "progress-bar"], ["color", "primary", "mode", "determinate", 3, "value"], ["color", "accent", "mode", "determinate", 3, "value"], ["color", "warn", "mode", "determinate", 3, "value"]],
    template: function QuickpanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-nav-list")(9, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "UPCOMING EVENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3)(12, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Business Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "In 16 Minutes, Meeting Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 3)(17, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ask for Vacation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "12:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 3)(22, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Dinner with Sophie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "18:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 3)(27, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Deadline for Project X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "21:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "TODO-LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 3)(35, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Invite Jack to play golf");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Added: 6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 3)(40, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Get to know Angular more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Added: 2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 3)(45, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Configure that new router");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Added: 5 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "SERVER STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 6)(53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "CPU Load (71% / 100%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-progress-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6)(58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "RAM Usage (6,175 MB / 16,384 MB)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 6)(63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "CPU Temp (43\u00B0 / 80\u00B0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 54);
      }
    },
    dependencies: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItemTitle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 80vw;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.vex-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 72px;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  padding: 1rem;\n  padding-top: 0px;\n}\n.vex-list-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-background-hover);\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aWNrcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQUEsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsdUNBQUE7QUFBSjs7QUFJQTtFQUNFLGVBQUE7QUFERiIsImZpbGUiOiJxdWlja3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIG1heC13aWR0aDogODB2dztcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udmV4LWxpc3QtaXRlbSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA3MnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBAYXBwbHkgcC00IHB0LTA7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3F1aWNrcGFuZWwvcXVpY2twYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGFBQUE7RUFBQSxnQkFBQTtBQUFGO0FBRUU7RUFDRSx1Q0FBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtBQURGO0FBR0EsNHFDQUE0cUMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgbWF4LXdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi52ZXgtbGlzdC1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDcycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIEBhcHBseSBwLTQgcHQtMDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3Zlcik7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 64914:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/search-modal/search-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchModalComponent: () => (/* binding */ SearchModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);








class SearchModalComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SearchModalComponent_Factory(t) {
    return new (t || SearchModalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchModalComponent,
    selectors: [["vex-search-modal"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 66,
    vars: 0,
    consts: [[1, "flex", "items-center", "gap-4", "px-6", "py-3", "border-b", "border-divider"], ["svgIcon", "mat:search", 1, "text-secondary", "flex-none"], ["type", "text", "placeholder", "Search...", 1, "text-xl", "font-medium", "bg-transparent", "outline-none", "flex-auto", "placeholder-secondary"], ["type", "button", "mat-icon-button", "", 1, "flex-none", "ltr:-mr-2", "rtl:-ml-2", "text-secondary"], ["svgIcon", "mat:settings"], [1, "p-4"], [1, "text-xs", "font-semibold", "text-secondary", "px-2", "mb-2"], [1, "space-y-1"], ["matRipple", "", 1, "px-2", "py-2", "hover:bg-hover", "rounded", "transition", "duration-200", "ease-out", "flex", "items-center", "gap-4", "cursor-pointer", "select-none"], ["src", "assets/img/avatars/4.jpg", 1, "w-8", "h-8", "rounded-full", "flex-none"], [1, "flex-auto", "text-base", "font-medium"], [1, "flex-none", "text-xs", "text-secondary", "font-medium", "flex", "items-center", "gap-2"], ["svgIcon", "mat:contacts", 1, "icon-xs", "flex-none"], ["svgIcon", "mat:chevron_right", 1, "icon-sm", "flex-none"], ["src", "assets/img/avatars/3.jpg", 1, "w-8", "h-8", "rounded-full", "flex-none"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-foreground/20"], ["svgIcon", "mat:web", 1, "icon-sm", "flex-none"], [1, "text-secondary", "text-xs"], ["svgIcon", "mat:check", "color", "primary", 1, "icon-sm", "flex-none"]],
    template: function SearchModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 1)(3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Alice Miller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "found in Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Frank White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "found in Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5)(29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7)(32, "div", 8)(33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10)(36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Scrumboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "/apps/scrumboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8)(42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10)(45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mailbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "/apps/mailbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5)(51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7)(54, "div", 8)(55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Configure OrderController as defined in RVT-11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8)(61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Add more data-models to product-controller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple]
  });
}


/***/ }),

/***/ 86463:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/sidenav-item/sidenav-item.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavItemComponent: () => (/* binding */ SidenavItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _vex_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/dropdown.animation */ 93943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/navigation/navigation.service */ 20120);













function SidenavItemComponent_a_0_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r4.item.icon);
  }
}
const _c0 = function (a0, a1) {
  return [a0, a1];
};
function SidenavItemComponent_a_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r5.item.badge.bgClass, ctx_r5.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.item.badge.value);
  }
}
const _c1 = function () {
  return {
    exact: false
  };
};
function SidenavItemComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_a_0_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidenavItemComponent_a_0_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fragment", ctx_r0.item.fragment)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1))("routerLink", ctx_r0.item.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.level === 0 && ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
  }
}
function SidenavItemComponent_div_1_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r6.item.icon);
  }
}
function SidenavItemComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r7.item.badge.bgClass, ctx_r7.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.item.badge.value);
  }
}
function SidenavItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavItemComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.item.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_div_1_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidenavItemComponent_div_1_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.level === 0 && ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
  }
}
function SidenavItemComponent_ng_container_2_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r10.item.icon);
  }
}
function SidenavItemComponent_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r11.item.badge.bgClass, ctx_r11.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.item.badge.value);
  }
}
function SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-sidenav-item", 14);
  }
  if (rf & 2) {
    const subItem_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", subItem_r13)("level", ctx_r12.level + 1);
  }
}
function SidenavItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavItemComponent_ng_container_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.toggleOpen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_mat_icon_2_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SidenavItemComponent_ng_container_2_span_5_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template, 1, 2, "vex-sidenav-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("vex-sidenav-item--active", ctx_r2.isOpen || ctx_r2.isActive)("vex-sidenav-item--open", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.level === 0 && ctx_r2.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@dropdown", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
  }
}
function SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-sidenav-item", 14);
  }
  if (rf & 2) {
    const subItem_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", subItem_r17)("level", 0);
  }
}
function SidenavItemComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template, 1, 2, "vex-sidenav-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.item.children);
  }
}
class SidenavItemComponent {
  constructor(router, cd, navigationService) {
    this.router = router;
    this.cd = cd;
    this.navigationService = navigationService;
    this.isOpen = false;
    this.isActive = false;
    this.isLink = this.navigationService.isLink;
    this.isDropdown = this.navigationService.isDropdown;
    this.isSubheading = this.navigationService.isSubheading;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
  }
  get levelClass() {
    return `item-level-${this.level}`;
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.isDropdown(this.item)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.onRouteChange());
    this.navigationService.openChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.isDropdown(this.item)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe(item => this.onOpenChange(item));
  }
  ngOnChanges(changes) {
    if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
      this.onRouteChange();
    }
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.navigationService.triggerOpenChange(this.item);
    this.cd.markForCheck();
  }
  onOpenChange(item) {
    if (this.isChildrenOf(this.item, item)) {
      return;
    }
    if (this.hasActiveChilds(this.item)) {
      return;
    }
    if (this.item !== item) {
      this.isOpen = false;
      this.cd.markForCheck();
    }
  }
  onRouteChange() {
    if (this.hasActiveChilds(this.item)) {
      this.isActive = true;
      this.isOpen = true;
      this.navigationService.triggerOpenChange(this.item);
      this.cd.markForCheck();
    } else {
      this.isActive = false;
      this.isOpen = false;
      this.navigationService.triggerOpenChange(this.item);
      this.cd.markForCheck();
    }
  }
  isChildrenOf(parent, item) {
    if (parent.children.indexOf(item) !== -1) {
      return true;
    }
    return parent.children.filter(child => this.isDropdown(child)).some(child => this.isChildrenOf(child, item));
  }
  hasActiveChilds(parent) {
    return parent.children.some(child => {
      if (this.isDropdown(child)) {
        return this.hasActiveChilds(child);
      }
      if (this.isLink(child) && !this.isFunction(child.route)) {
        return this.router.isActive(child.route, false);
      }
    });
  }
  isFunction(prop) {
    return prop instanceof Function;
  }
  static #_ = this.ɵfac = function SidenavItemComponent_Factory(t) {
    return new (t || SidenavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SidenavItemComponent,
    selectors: [["vex-sidenav-item"]],
    hostVars: 2,
    hostBindings: function SidenavItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.levelClass);
      }
    },
    inputs: {
      item: "item",
      level: "level"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 4,
    consts: [["class", "vex-sidenav-item", "matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 3, "fragment", "routerLinkActiveOptions", "routerLink", 4, "ngIf"], ["class", "vex-sidenav-item", "matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 3, "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 1, "vex-sidenav-item", 3, "fragment", "routerLinkActiveOptions", "routerLink"], ["class", "vex-sidenav-item__icon", 3, "svgIcon", 4, "ngIf"], [1, "vex-sidenav-item__label"], ["class", "vex-sidenav-item__badge", 3, "ngClass", 4, "ngIf"], [1, "vex-sidenav-item__icon", 3, "svgIcon"], [1, "vex-sidenav-item__badge", 3, "ngClass"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 1, "vex-sidenav-item", 3, "click"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", 1, "vex-sidenav-item", 3, "click"], ["svgIcon", "mat:keyboard_arrow_right", 1, "vex-sidenav-item__dropdown-icon"], [1, "vex-sidenav-item__dropdown"], [3, "item", "level", 4, "ngFor", "ngForOf"], [3, "item", "level"], [1, "vex-sidenav-subheading"]],
    template: function SidenavItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidenavItemComponent_a_0_Template, 5, 7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_Template, 9, 9, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDropdown(ctx.item));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item));
      }
    },
    dependencies: [SidenavItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor],
    styles: [".vex-sidenav-item[_ngcontent-%COMP%] {\n  align-items: center;\n  box-sizing: border-box;\n  color: var(--vex-sidenav-item-color);\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  min-height: var(--vex-sidenav-item-min-height);\n  padding: var(--vex-sidenav-item-padding-vertical) var(--vex-sidenav-item-padding-horizontal);\n  position: relative;\n  text-decoration: none;\n  -webkit-user-select: none;\n          user-select: none;\n  font-weight: var(--vex-sidenav-item-font-weight);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-background-active);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-icon-color-active);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-color-active);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-color-active);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-background-hover);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-icon-color-hover);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-color-hover);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-color-hover);\n}\n.vex-sidenav-item.vex-sidenav-item--open[_ngcontent-%COMP%]   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg) !important;\n}\n\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + (var(--vex-sidenav-item-dropdown-gap) * 0));\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + (var(--vex-sidenav-item-dropdown-gap) * 1));\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + (var(--vex-sidenav-item-dropdown-gap) * 2));\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + (var(--vex-sidenav-item-dropdown-gap) * 3));\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + (var(--vex-sidenav-item-dropdown-gap) * 4));\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + (var(--vex-sidenav-item-dropdown-gap) * 5));\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.vex-sidenav-item__icon[_ngcontent-%COMP%], .vex-sidenav-item__label[_ngcontent-%COMP%], .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--vex-sidenav-item-icon-color);\n  font-size: var(--vex-sidenav-item-icon-size);\n  height: var(--vex-sidenav-item-icon-size);\n  margin-inline-end: var(--vex-sidenav-item-icon-gap);\n  width: var(--vex-sidenav-item-icon-size);\n}\n\n.vex-sidenav-item__label[_ngcontent-%COMP%] {\n  flex: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.vex-sidenav-item__badge[_ngcontent-%COMP%] {\n  flex: none;\n  border-radius: 9999px;\n  font-size: 11px;\n  line-height: 20px;\n  padding: 0 7px;\n  text-align: center;\n  font-weight: 700;\n  margin-inline-start: 0.5rem;\n}\n\n.vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-icon-color);\n  font-size: 18px;\n  height: 18px;\n  line-height: 18px;\n  transform: rotate(0deg) !important;\n  width: 18px;\n  margin-inline-start: 0.5rem;\n}\n\n.vex-sidenav-item__dropdown[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.vex-sidenav-subheading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: var(--vex-sidenav-subheading-color);\n  text-transform: uppercase;\n  white-space: nowrap;\n  font-weight: 600;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-top: 1.5rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n\n\n[_nghost-%COMP%]:first-child   .vex-sidenav-subheading[_ngcontent-%COMP%] {\n  margin-top: -0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDRGQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQUNGO0FBQ0U7RUFDRSxxREFBQTtBQUNKO0FBQ0k7RUFDRSxnREFBQTtBQUNOO0FBRUk7RUFDRSwyQ0FBQTtBQUFOO0FBR0k7RUFDRSwyQ0FBQTtBQUROO0FBS0U7RUFDRSxvREFBQTtBQUhKO0FBS0k7RUFDRSwrQ0FBQTtBQUhOO0FBTUk7RUFDRSwwQ0FBQTtBQUpOO0FBT0k7RUFDRSwwQ0FBQTtBQUxOO0FBVUk7RUFDRSxtQ0FBQTtBQVJOOztBQWNFO0VBQ0UsdURBQUE7RUFDQSwwTEFBQTtBQVhKO0FBa0JJO0VBQ0UsOERBQUE7QUFoQk47QUFrQk07RUFDRSxvREFBQTtBQWhCUjtBQW9CSTtFQUNFLDZEQUFBO0FBbEJOO0FBb0JNO0VBQ0UsbURBQUE7QUFsQlI7O0FBSEU7RUFDRSx1REFBQTtFQUNBLDBMQUFBO0FBTUo7QUFDSTtFQUNFLDhEQUFBO0FBQ047QUFDTTtFQUNFLG9EQUFBO0FBQ1I7QUFHSTtFQUNFLDZEQUFBO0FBRE47QUFHTTtFQUNFLG1EQUFBO0FBRFI7O0FBcEJFO0VBQ0UsdURBQUE7RUFDQSwwTEFBQTtBQXVCSjtBQWhCSTtFQUNFLDhEQUFBO0FBa0JOO0FBaEJNO0VBQ0Usb0RBQUE7QUFrQlI7QUFkSTtFQUNFLDZEQUFBO0FBZ0JOO0FBZE07RUFDRSxtREFBQTtBQWdCUjs7QUFyQ0U7RUFDRSx1REFBQTtFQUNBLDBMQUFBO0FBd0NKO0FBakNJO0VBQ0UsOERBQUE7QUFtQ047QUFqQ007RUFDRSxvREFBQTtBQW1DUjtBQS9CSTtFQUNFLDZEQUFBO0FBaUNOO0FBL0JNO0VBQ0UsbURBQUE7QUFpQ1I7O0FBdERFO0VBQ0UsdURBQUE7RUFDQSwwTEFBQTtBQXlESjtBQWxESTtFQUNFLDhEQUFBO0FBb0ROO0FBbERNO0VBQ0Usb0RBQUE7QUFvRFI7QUFoREk7RUFDRSw2REFBQTtBQWtETjtBQWhETTtFQUNFLG1EQUFBO0FBa0RSOztBQXZFRTtFQUNFLHVEQUFBO0VBQ0EsMExBQUE7QUEwRUo7QUFuRUk7RUFDRSw4REFBQTtBQXFFTjtBQW5FTTtFQUNFLG9EQUFBO0FBcUVSO0FBakVJO0VBQ0UsNkRBQUE7QUFtRU47QUFqRU07RUFDRSxtREFBQTtBQW1FUjs7QUE3REE7OztFQUdFLG1CQUFBO0FBZ0VGOztBQTdEQTtFQUNFLFVBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EseUNBQUE7RUFDQSxtREFBQTtFQUNBLHdDQUFBO0FBZ0VGOztBQTdEQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFnRUY7O0FBN0RBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQWdFRjs7QUE3REE7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQWdFRjs7QUE3REE7RUFDRSxnQkFBQTtBQWdFRjs7QUE3REE7RUFDRSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQUEsb0JBQUE7RUFBQSx1QkFBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0FBZ0VGOztBQTdEQSxnREFBQTtBQUVFO0VBQUE7QUFBQSIsImZpbGUiOiJzaWRlbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmV4LXNpZGVuYXYtaXRlbSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1pbi1oZWlnaHQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tbWluLWhlaWdodCk7XHJcbiAgcGFkZGluZzogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1wYWRkaW5nLXZlcnRpY2FsKSB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBmb250LXdlaWdodDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1mb250LXdlaWdodCk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xyXG5cclxuICAmLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWJhY2tncm91bmQtYWN0aXZlKTtcclxuXHJcbiAgICAudmV4LXNpZGVuYXYtaXRlbV9faWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tY29sb3ItYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tY29sb3ItYWN0aXZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1iYWNrZ3JvdW5kLWhvdmVyKTtcclxuXHJcbiAgICAudmV4LXNpZGVuYXYtaXRlbV9faWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tY29sb3ItaG92ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWNvbG9yLWhvdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWNvbG9yLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYudmV4LXNpZGVuYXYtaXRlbS0tb3BlbiB7XHJcbiAgICAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA2IHtcclxuICA6aG9zdCguaXRlbS1sZXZlbC0jeyRpfSkgLnZleC1zaWRlbmF2LWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKFxyXG4gICAgICB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgK1xyXG4gICAgICB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArXHJcbiAgICAgIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArXHJcbiAgICAgICh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAjeyRpIC0gMX0pXHJcbiAgICApO1xyXG5cclxuICAgICYudmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWFjdGl2ZSk7XHJcblxyXG4gICAgICAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWFjdGl2ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcclxuXHJcbiAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItaG92ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtaXRlbV9faWNvbixcclxuLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsLFxyXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XHJcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LWl0ZW1fX2ljb24ge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XHJcbiAgZm9udC1zaXplOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XHJcbiAgaGVpZ2h0OiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xyXG4gIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XHJcbiAgZmxleDogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1pdGVtX19iYWRnZSB7XHJcbiAgZmxleDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDAgN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIEBhcHBseSBtcy0yO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIEBhcHBseSBtcy0yO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1zdWJoZWFkaW5nIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1zdWJoZWFkaW5nLWNvbG9yKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBAYXBwbHkgdGV4dC14cyBweS0zIHB4LTYgbXQtNjtcclxufVxyXG5cclxuLyoqIElmIGZpcnN0IGl0ZW0gaXMgc3ViaGVhZGluZywgcmVtb3ZlIG1hcmdpbiAqL1xyXG46aG9zdCg6Zmlyc3QtY2hpbGQpIC52ZXgtc2lkZW5hdi1zdWJoZWFkaW5nIHtcclxuICBAYXBwbHkgLW10LTM7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi1pdGVtL3NpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDRGQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQUNGO0FBQ0U7RUFDRSxxREFBQTtBQUNKO0FBQ0k7RUFDRSxnREFBQTtBQUNOO0FBRUk7RUFDRSwyQ0FBQTtBQUFOO0FBR0k7RUFDRSwyQ0FBQTtBQUROO0FBS0U7RUFDRSxvREFBQTtBQUhKO0FBS0k7RUFDRSwrQ0FBQTtBQUhOO0FBTUk7RUFDRSwwQ0FBQTtBQUpOO0FBT0k7RUFDRSwwQ0FBQTtBQUxOO0FBVUk7RUFDRSxtQ0FBQTtBQVJOOztBQWNFO0VBQ0UsdURBQUE7RUFDQSwwTEFBQTtBQVhKO0FBa0JJO0VBQ0UsOERBQUE7QUFoQk47QUFrQk07RUFDRSxvREFBQTtBQWhCUjtBQW9CSTtFQUNFLDZEQUFBO0FBbEJOO0FBb0JNO0VBQ0UsbURBQUE7QUFsQlI7O0FBSEU7RUFDRSx1REFBQTtFQUNBLDBMQUFBO0FBTUo7QUFDSTtFQUNFLDhEQUFBO0FBQ047QUFDTTtFQUNFLG9EQUFBO0FBQ1I7QUFHSTtFQUNFLDZEQUFBO0FBRE47QUFHTTtFQUNFLG1EQUFBO0FBRFI7O0FBcEJFO0VBQ0UsdURBQUE7RUFDQSwwTEFBQTtBQXVCSjtBQWhCSTtFQUNFLDhEQUFBO0FBa0JOO0FBaEJNO0VBQ0Usb0RBQUE7QUFrQlI7QUFkSTtFQUNFLDZEQUFBO0FBZ0JOO0FBZE07RUFDRSxtREFBQTtBQWdCUjs7QUFyQ0U7RUFDRSx1REFBQTtFQUNBLDBMQUFBO0FBd0NKO0FBakNJO0VBQ0UsOERBQUE7QUFtQ047QUFqQ007RUFDRSxvREFBQTtBQW1DUjtBQS9CSTtFQUNFLDZEQUFBO0FBaUNOO0FBL0JNO0VBQ0UsbURBQUE7QUFpQ1I7O0FBdERFO0VBQ0UsdURBQUE7RUFDQSwwTEFBQTtBQXlESjtBQWxESTtFQUNFLDhEQUFBO0FBb0ROO0FBbERNO0VBQ0Usb0RBQUE7QUFvRFI7QUFoREk7RUFDRSw2REFBQTtBQWtETjtBQWhETTtFQUNFLG1EQUFBO0FBa0RSOztBQXZFRTtFQUNFLHVEQUFBO0VBQ0EsMExBQUE7QUEwRUo7QUFuRUk7RUFDRSw4REFBQTtBQXFFTjtBQW5FTTtFQUNFLG9EQUFBO0FBcUVSO0FBakVJO0VBQ0UsNkRBQUE7QUFtRU47QUFqRU07RUFDRSxtREFBQTtBQW1FUjs7QUE3REE7OztFQUdFLG1CQUFBO0FBZ0VGOztBQTdEQTtFQUNFLFVBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EseUNBQUE7RUFDQSxtREFBQTtFQUNBLHdDQUFBO0FBZ0VGOztBQTdEQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFnRUY7O0FBN0RBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQWdFRjs7QUE3REE7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQWdFRjs7QUE3REE7RUFDRSxnQkFBQTtBQWdFRjs7QUE3REE7RUFDRSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQUEsb0JBQUE7RUFBQSx1QkFBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0FBZ0VGOztBQTdEQSxnREFBQTtBQUVFO0VBQUEsb0JBQUE7QUFBQTtBQTRFRixvaVBBQW9pUCIsInNvdXJjZXNDb250ZW50IjpbIi52ZXgtc2lkZW5hdi1pdGVtIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tY29sb3IpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWluLWhlaWdodDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1taW4taGVpZ2h0KTtcclxuICBwYWRkaW5nOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLXBhZGRpbmctdmVydGljYWwpIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWZvbnQtd2VpZ2h0KTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XHJcblxyXG4gICYudmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tYmFja2dyb3VuZC1hY3RpdmUpO1xyXG5cclxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1hY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWNvbG9yLWFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWJhY2tncm91bmQtaG92ZXIpO1xyXG5cclxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1ob3Zlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcclxuICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tY29sb3ItaG92ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tY29sb3ItaG92ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi52ZXgtc2lkZW5hdi1pdGVtLS1vcGVuIHtcclxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIDYge1xyXG4gIDpob3N0KC5pdGVtLWxldmVsLSN7JGl9KSAudmV4LXNpZGVuYXYtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGMoXHJcbiAgICAgIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArXHJcbiAgICAgIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICtcclxuICAgICAgdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpICtcclxuICAgICAgKHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqICN7JGkgLSAxfSlcclxuICAgICk7XHJcblxyXG4gICAgJi52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtYWN0aXZlKTtcclxuXHJcbiAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItYWN0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xyXG5cclxuICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1jb2xvci1ob3Zlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1pdGVtX19pY29uLFxyXG4udmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwsXHJcbi52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcclxuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtaXRlbV9faWNvbiB7XHJcbiAgZmxleDogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcclxuICBmb250LXNpemU6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcclxuICBoZWlnaHQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcclxuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XHJcbiAgd2lkdGg6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcclxuICBmbGV4OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlIHtcclxuICBmbGV4OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZzogMCA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgQGFwcGx5IG1zLTI7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgQGFwcGx5IG1zLTI7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93biB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LXN1YmhlYWRpbmctY29sb3IpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIEBhcHBseSB0ZXh0LXhzIHB5LTMgcHgtNiBtdC02O1xyXG59XHJcblxyXG4vKiogSWYgZmlyc3QgaXRlbSBpcyBzdWJoZWFkaW5nLCByZW1vdmUgbWFyZ2luICovXHJcbjpob3N0KDpmaXJzdC1jaGlsZCkgLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcge1xyXG4gIEBhcHBseSAtbXQtMztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_vex_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__.dropdownAnimation]
    },
    changeDetection: 0
  });
}


/***/ }),

/***/ 43569:
/*!*********************************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/sidenav-user-menu/sidenav-user-menu.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavUserMenuComponent: () => (/* binding */ SidenavUserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover-ref */ 95925);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 15175);











const _c0 = function () {
  return ["/apps/social"];
};
class SidenavUserMenuComponent {
  constructor(popoverRef, authService, snackbar, router) {
    this.popoverRef = popoverRef;
    this.authService = authService;
    this.snackbar = snackbar;
    this.router = router;
  }
  ngOnInit() {}
  close() {
    /** Wait for animation to complete and then close */
    this.authService.logout(localStorage.getItem('dataUser')).subscribe(result => {
      sessionStorage.removeItem('token');
      // sessionStorage.clear();
      // localStorage.clear();
      this.snackbar.open(result.message, 'MERCI', {
        duration: 10000
      });
      this.router.navigate(['/login']);
    });
    setTimeout(() => this.popoverRef.close(), 250);
  }
  static #_ = this.ɵfac = function SidenavUserMenuComponent_Factory(t) {
    return new (t || SidenavUserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SidenavUserMenuComponent,
    selectors: [["vex-sidenav-user-menu"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 2,
    consts: [[1, "vex-user-menu"], ["matRipple", "", "matRippleColor", "rgb(var(--vex-color-primary-600), 0.1)", 1, "vex-user-menu-item", 3, "routerLink", "click"], ["svgIcon", "mat:account_circle", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "vex-user-menu-item__label"], [1, "border-b", "border-divider", "mx-4"], ["matRipple", "", "matRippleColor", "rgb(var(--vex-color-primary-600), 0.1)", 1, "vex-user-menu-item", 3, "click"], ["svgIcon", "mat:logout", 1, "vex-user-menu-item__icon", "icon-sm"]],
    template: function SidenavUserMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_1_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_6_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBarModule],
    styles: [".vex-user-menu[_ngcontent-%COMP%] {\n\n    border-radius: var(--vex-border-radius);\n\n    border-width: 1px;\n\n    border-color: var(--vex-foreground-divider);\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(var(--vex-background-card-rgb) / var(--tw-bg-opacity));\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.vex-user-menu-item[_ngcontent-%COMP%] {\n\n    position: relative;\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    display: flex;\n\n    height: 2.5rem;\n\n    cursor: pointer;\n\n    -webkit-user-select: none;\n\n            user-select: none;\n\n    align-items: center;\n\n    gap: 1rem;\n\n    border-radius: var(--vex-border-radius);\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n\n.vex-user-menu-item[_ngcontent-%COMP%]:hover {\n\n    background-color: rgb(var(--vex-color-primary-600) / 0.1)\n}\n.vex-user-menu-item[_ngcontent-%COMP%]:hover   .vex-user-menu-item__icon[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity))\n}\n\n.vex-user-menu-item__label[_ngcontent-%COMP%] {\n\n    flex: 1 1 auto;\n\n    font-weight: 500;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n\n.vex-user-menu-item__badge[_ngcontent-%COMP%] {\n\n    flex: none;\n\n    border-radius: var(--vex-border-radius);\n\n    background-color: rgb(var(--vex-color-primary-600) / 0.1);\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.25rem;\n\n    padding-bottom: 0.25rem;\n\n    font-size: 0.625rem;\n\n    font-weight: 600;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity))\n}\n\n.vex-user-menu-item__icon[_ngcontent-%COMP%] {\n\n    flex: none;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYtdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLHVDQUFBOztJQUFBLGlCQUFBOztJQUFBLDJDQUFBOztJQUFBLGtCQUFBOztJQUFBLDRFQUFBOztJQUFBLG1CQUFBOztJQUFBLHNCQUFBOztJQUFBLCtFQUFBOztJQUFBLG1HQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsYUFBQTs7SUFBQSxjQUFBOztJQUFBLGVBQUE7O0lBQUEseUJBQUE7O1lBQUEsaUJBQUE7O0lBQUEsbUJBQUE7O0lBQUEsU0FBQTs7SUFBQSx1Q0FBQTs7SUFBQSxvQkFBQTs7SUFBQSxxQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxzQkFBQTs7SUFBQSxnS0FBQTs7SUFBQSx3SkFBQTs7SUFBQSxpTEFBQTs7SUFBQSx3REFBQTs7SUFBQSwwQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7QUFJSTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQU1KOztJQUFBLGNBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsZ0tBQUE7O0lBQUEsd0pBQUE7O0lBQUEsaUxBQUE7O0lBQUEsd0RBQUE7O0lBQUEsMEJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxVQUFBOztJQUFBLHVDQUFBOztJQUFBLHlEQUFBOztJQUFBLG9CQUFBOztJQUFBLHFCQUFBOztJQUFBLG9CQUFBOztJQUFBLHVCQUFBOztJQUFBLG1CQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsVUFBQTs7SUFBQSxnS0FBQTs7SUFBQSx3SkFBQTs7SUFBQSxpTEFBQTs7SUFBQSx3REFBQTs7SUFBQSwwQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6InNpZGVuYXYtdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC11c2VyLW1lbnUge1xyXG4gIEBhcHBseSBiZy1mb3JlZ3JvdW5kIHNoYWRvdy1sZyBib3JkZXIgYm9yZGVyLWRpdmlkZXIgcm91bmRlZCBweS0yO1xyXG59XHJcblxyXG4udmV4LXVzZXItbWVudS1pdGVtIHtcclxuICBAYXBwbHkgcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcHgtMiBteC0yIHB5LTIgcm91bmRlZCBob3ZlcjpiZy1wcmltYXJ5LTYwMC8xMCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCBlYXNlLW91dCBzZWxlY3Qtbm9uZSBoLTEwO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC52ZXgtdXNlci1tZW51LWl0ZW1fX2ljb24ge1xyXG4gICAgICBAYXBwbHkgdGV4dC1wcmltYXJ5LTYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi52ZXgtdXNlci1tZW51LWl0ZW1fX2xhYmVsIHtcclxuICBAYXBwbHkgZmxleC1hdXRvIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGVhc2Utb3V0O1xyXG59XHJcblxyXG4udmV4LXVzZXItbWVudS1pdGVtX19iYWRnZSB7XHJcbiAgQGFwcGx5IHB4LTIgcHktMSByb3VuZGVkIGJnLXByaW1hcnktNjAwLzEwIHRleHQtcHJpbWFyeS02MDAgdGV4dC0yeHMgZm9udC1zZW1pYm9sZCBmbGV4LW5vbmU7XHJcbn1cclxuXHJcbi52ZXgtdXNlci1tZW51LWl0ZW1fX2ljb24ge1xyXG4gIEBhcHBseSBmbGV4LW5vbmUgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi52ZXgtdXNlci1tZW51LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi11c2VyLW1lbnUvc2lkZW5hdi11c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0lBQUEsdUNBQUE7O0lBQUEsaUJBQUE7O0lBQUEsMkNBQUE7O0lBQUEsa0JBQUE7O0lBQUEsNEVBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEsK0VBQUE7O0lBQUEsbUdBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxhQUFBOztJQUFBLGNBQUE7O0lBQUEsZUFBQTs7SUFBQSx5QkFBQTs7WUFBQSxpQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxTQUFBOztJQUFBLHVDQUFBOztJQUFBLG9CQUFBOztJQUFBLHFCQUFBOztJQUFBLG1CQUFBOztJQUFBLHNCQUFBOztJQUFBLGdLQUFBOztJQUFBLHdKQUFBOztJQUFBLGlMQUFBOztJQUFBLHdEQUFBOztJQUFBLDBCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTtBQUlJOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBTUo7O0lBQUEsY0FBQTs7SUFBQSxnQkFBQTs7SUFBQSxnS0FBQTs7SUFBQSx3SkFBQTs7SUFBQSxpTEFBQTs7SUFBQSx3REFBQTs7SUFBQSwwQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFVBQUE7O0lBQUEsdUNBQUE7O0lBQUEseURBQUE7O0lBQUEsb0JBQUE7O0lBQUEscUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsdUJBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxVQUFBOztJQUFBLGdLQUFBOztJQUFBLHdKQUFBOztJQUFBLGlMQUFBOztJQUFBLHdEQUFBOztJQUFBLDBCQUFBOztJQUFBO0FBQUE7QUFvSEYsd3ZFQUF3dkUiLCJzb3VyY2VzQ29udGVudCI6WyIudmV4LXVzZXItbWVudSB7XHJcbiAgQGFwcGx5IGJnLWZvcmVncm91bmQgc2hhZG93LWxnIGJvcmRlciBib3JkZXItZGl2aWRlciByb3VuZGVkIHB5LTI7XHJcbn1cclxuXHJcbi52ZXgtdXNlci1tZW51LWl0ZW0ge1xyXG4gIEBhcHBseSByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBweC0yIG14LTIgcHktMiByb3VuZGVkIGhvdmVyOmJnLXByaW1hcnktNjAwLzEwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGVhc2Utb3V0IHNlbGVjdC1ub25lIGgtMTA7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgLnZleC11c2VyLW1lbnUtaXRlbV9faWNvbiB7XHJcbiAgICAgIEBhcHBseSB0ZXh0LXByaW1hcnktNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnZleC11c2VyLW1lbnUtaXRlbV9fbGFiZWwge1xyXG4gIEBhcHBseSBmbGV4LWF1dG8gZm9udC1tZWRpdW0gdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi52ZXgtdXNlci1tZW51LWl0ZW1fX2JhZGdlIHtcclxuICBAYXBwbHkgcHgtMiBweS0xIHJvdW5kZWQgYmctcHJpbWFyeS02MDAvMTAgdGV4dC1wcmltYXJ5LTYwMCB0ZXh0LTJ4cyBmb250LXNlbWlib2xkIGZsZXgtbm9uZTtcclxufVxyXG5cclxuLnZleC11c2VyLW1lbnUtaXRlbV9faWNvbiB7XHJcbiAgQGFwcGx5IGZsZXgtbm9uZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCBlYXNlLW91dDtcclxufVxyXG5cclxuLnZleC11c2VyLW1lbnUtaXRlbV9fZHJvcGRvd24taWNvbiB7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 46468:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/sidenav.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavComponent: () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 75043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var _sidenav_user_menu_sidenav_user_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-user-menu/sidenav-user-menu.component */ 43569);
/* harmony import */ var _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-modal/search-modal.component */ 64914);
/* harmony import */ var _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav-item/sidenav-item.component */ 86463);
/* harmony import */ var _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-scrollbar/vex-scrollbar.component */ 19844);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ 59147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/navigation/navigation.service */ 20120);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 64952);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vex/config/vex-config.service */ 50376);
/* harmony import */ var _vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover.service */ 92371);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 21021);





















function SidenavComponent_button_8_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-icon", 16);
  }
}
function SidenavComponent_button_8_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-icon", 17);
  }
}
function SidenavComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SidenavComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.toggleCollapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SidenavComponent_button_8_mat_icon_1_Template, 1, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SidenavComponent_button_8_mat_icon_2_Template, 1, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.collapsed);
  }
}
function SidenavComponent_vex_sidenav_item_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "vex-sidenav-item", 18);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("item", item_r7)("level", 0);
  }
}
function SidenavComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SidenavComponent_div_18_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.openProfileMenu(_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 23)(6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("vex-sidenav-user--open", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 5, ctx_r2.userMenuOpen$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r2.user.first_name, " ", ctx_r2.user.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.user.role);
  }
}
class SidenavComponent {
  constructor(navigationService, layoutService, configService, popoverService, dialog, localStorage) {
    this.navigationService = navigationService;
    this.layoutService = layoutService;
    this.configService = configService;
    this.popoverService = popoverService;
    this.dialog = dialog;
    this.localStorage = localStorage;
    this.collapsed = false;
    this.collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
    this.title$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.sidenav.title));
    this.imageUrl$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.sidenav.imageUrl));
    this.showCollapsePin$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.sidenav.showCollapsePin));
    this.userVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.sidenav.user.visible));
    this.searchVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.sidenav.search.visible));
    this.userMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(false);
    this.items$ = this.navigationService.items$;
  }
  ngOnInit() {
    this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__.User(JSON.parse(this.localStorage.getData('dataUser') ?? 'null'));
  }
  collapseOpenSidenav() {
    this.layoutService.collapseOpenSidenav();
  }
  collapseCloseSidenav() {
    this.layoutService.collapseCloseSidenav();
  }
  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
  trackByRoute(index, item) {
    if (item.type === 'link') {
      return item.route;
    }
    return item.label;
  }
  openProfileMenu(origin) {
    this.userMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(this.popoverService.open({
      content: _sidenav_user_menu_sidenav_user_menu_component__WEBPACK_IMPORTED_MODULE_0__.SidenavUserMenuComponent,
      origin,
      offsetY: -8,
      width: origin.clientWidth,
      position: [{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }]
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(popoverRef => popoverRef.afterClosed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(true));
  }
  openSearch() {
    this.dialog.open(_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_1__.SearchModalComponent, {
      panelClass: 'vex-dialog-glossy',
      width: '100%',
      maxWidth: '600px'
    });
  }
  static #_ = this.ɵfac = function SidenavComponent_Factory(t) {
    return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_6__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_7__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_8__.VexPopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: SidenavComponent,
    selectors: [["vex-sidenav"]],
    inputs: {
      collapsed: "collapsed"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 22,
    consts: [[1, "vex-sidenav", "flex", "flex-col", 3, "mouseenter", "mouseleave"], [1, "vex-sidenav-toolbar__container"], [1, "sidenav-toolbar", "flex-none", "flex", "items-center"], ["alt", "Logo", 1, "w-6", "select-none", "flex-none", 3, "src"], [1, "vex-sidenav-toolbar__headline", "flex-auto"], ["class", "vex-sidenav-toolbar__collapse-toggle -mr-4 leading-none flex-none hidden lg:block", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], [1, "vex-sidenav-toolbar__divider"], [1, "flex-1", "flex", "flex-col"], [1, "pt-6", "flex-1"], [3, "item", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "vex-sidenav-footer", "flex", "items-center", "justify-center", "opacity-20", "px-6", "py-6", "select-none", "flex-none"], ["alt", "Logo", 1, "w-8", "select-none", 3, "src"], ["class", "vex-sidenav-user__container flex-none", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "vex-sidenav-toolbar__collapse-toggle", "-mr-4", "leading-none", "flex-none", "hidden", "lg:block", 3, "click"], ["class", "icon-xs", "svgIcon", "mat:radio_button_checked", 4, "ngIf"], ["class", "icon-xs", "svgIcon", "mat:radio_button_unchecked", 4, "ngIf"], ["svgIcon", "mat:radio_button_checked", 1, "icon-xs"], ["svgIcon", "mat:radio_button_unchecked", 1, "icon-xs"], [3, "item", "level"], [1, "vex-sidenav-user__container", "flex-none"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", 1, "vex-sidenav-user", "flex", "items-center", 3, "click"], ["userProfileMenuOriginRef", ""], ["svgIcon", "mat:account_circle", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "vex-sidenav-user__content", "flex-auto"], [1, "vex-sidenav-user__title"], [1, "vex-sidenav-user__subtitle"], ["svgIcon", "mat:arrow_drop_down", 1, "vex-sidenav-user__dropdown-icon", "flex-none"]],
    template: function SidenavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("mouseenter", function SidenavComponent_Template_div_mouseenter_0_listener() {
          return ctx.collapseOpenSidenav();
        })("mouseleave", function SidenavComponent_Template_div_mouseleave_0_listener() {
          return ctx.collapseCloseSidenav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " GAYDEL TISSUS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, SidenavComponent_button_8_Template, 3, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "vex-scrollbar", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, SidenavComponent_vex_sidenav_item_13_Template, 1, 2, "vex-sidenav-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, SidenavComponent_div_18_Template, 11, 7, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("collapsed", ctx.collapsed)("open", ctx.collapsed && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 10, ctx.collapsedOpen$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 12, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 14, ctx.showCollapsePin$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 16, ctx.items$))("ngForTrackBy", ctx.trackByRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 18, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 20, ctx.userVisible$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_3__.VexScrollbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgFor, _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__.SidenavItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe],
    styles: [".vex-sidenav[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-background);\n  color: var(--vex-sidenav-color);\n  height: 100%;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: var(--vex-sidenav-width);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%] {\n  width: var(--vex-sidenav-collapsed-width);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .vex-sidenav-toolbar__headline[_ngcontent-%COMP%], .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .vex-sidenav-toolbar__collapse-toggle[_ngcontent-%COMP%] {\n  opacity: 0;\n  padding-inline-start: var(--vex-sidenav-item-padding-horizontal);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__icon {\n  margin-inline-end: var(--vex-sidenav-item-padding-horizontal);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-subheading, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__badge, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__label, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__title, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__subtitle, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__dropdown-icon, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-search__placeholder, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-search__keybind {\n  opacity: 0;\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user {\n  padding-right: 0.625rem;\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .simplebar-track.simplebar-vertical {\n  visibility: hidden !important;\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-subheading, .vex-sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-item__label {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-item__badge {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav.collapsed.open[_ngcontent-%COMP%] {\n  width: var(--vex-sidenav-width);\n}\n.vex-sidenav.collapsed.open[_ngcontent-%COMP%]   .vex-sidenav-toolbar__collapse-toggle[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav.collapsed.open[_ngcontent-%COMP%]     .vex-sidenav-item__badge {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav[_ngcontent-%COMP%]     .simplebar-track.simplebar-horizontal {\n  visibility: hidden !important;\n}\n\n\n\n.vex-sidenav-toolbar__container[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-background);\n  position: sticky;\n  top: 0px;\n  z-index: 10;\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--vex-sidenav-toolbar-background);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: var(--vex-toolbar-height);\n  white-space: nowrap;\n  width: 100%;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.vex-sidenav-toolbar__headline[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  letter-spacing: 0.025em;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  padding-inline-start: var(--vex-sidenav-item-icon-gap);\n}\n\n.vex-sidenav-toolbar__collapse-toggle[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.vex-sidenav-toolbar__divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--vex-sidenav-section-divider-color);\n}\n\n\n\n.vex-sidenav-user__container[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-toolbar-background);\n  border-color: var(--vex-sidenav-section-divider-color);\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top-width: 1px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.vex-sidenav-user[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--vex-border-radius);\n  padding: 0.375rem;\n  padding-top: 0.5rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n.vex-sidenav-user__image[_ngcontent-%COMP%] {\n  display: block;\n  height: 2.25rem;\n  width: 2.25rem;\n  border-radius: 9999px;\n}\n\n.vex-sidenav-user__content[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n}\n\n.vex-sidenav-user__title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user__subtitle[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  color: rgb(255 255 255 / 0.5);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user__dropdown-icon[_ngcontent-%COMP%] {\n  color: rgb(255 255 255 / 0.5);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user--open[_ngcontent-%COMP%] {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n\n\n.vex-sidenav-search__container[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-toolbar-background);\n  z-index: 10;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.vex-sidenav-search[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  align-items: center;\n  border-radius: var(--vex-border-radius);\n  background-color: rgb(255 255 255 / 0.1);\n  padding: 0.25rem;\n  padding-left: 0.75rem;\n  color: rgb(255 255 255 / 0.3);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-search[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255 255 255 / 0.2);\n  color: rgb(255 255 255 / 0.6);\n}\n\n.vex-sidenav-search__icon[_ngcontent-%COMP%], .vex-sidenav-search__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  height: 1.25rem;\n  width: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.vex-sidenav-search__icon[_ngcontent-%COMP%] {\n  width: var(--vex-sidenav-item-icon-size);\n}\n\n.vex-sidenav-search__placeholder[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  margin-left: var(--vex-sidenav-item-icon-gap);\n}\n\n.vex-sidenav-search__keybind[_ngcontent-%COMP%] {\n  border-radius: var(--vex-border-radius);\n  background-color: rgb(255 255 255 / 0.1);\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLDREQUFBO0VBQ0EsK0JBQUE7QUFDRjtBQUNFO0VBQ0UseUNBQUE7QUFDSjtBQUVNOztFQUVFLFVBQUE7RUFDQSxnRUFBQTtBQUFSO0FBSVE7RUFDRSw2REFBQTtBQUZWO0FBS1E7Ozs7Ozs7O0VBUUUsVUFBQTtBQUhWO0FBT1U7RUFBQTtBQUFBO0FBR0Y7RUFDRSw2QkFBQTtBQUxWO0FBYVE7O0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUlBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUlKO0VBQ0UsK0JBQUE7QUFaTjtBQWVRO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUtFO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQU9OO0VBQ0UsNkJBQUE7QUFuQk47O0FBd0JBLHFCQUFBO0FBQ0E7RUFDRSx5Q0FBQTtFQUVBLGdCQUFBO0VBQUEsUUFBQTtFQUFBLFdBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtBQXRCRjs7QUEwQkU7RUFBQSx5QkFBQTtVQUFBLGlCQUFBO0VBQUEsaUJBQUE7RUFBQSxpQkFBQTtFQUFBLGdCQUFBO0VBQUEsdUJBQUE7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsV0FBQTtFQUNBLG9EQUFBO0FBdEJGOztBQXlCQSxzQkFBQTtBQUNBO0VBQ0UsaURBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSx1QkFBQTtBQXZCRjs7QUEyQkU7RUFBQSxrQkFBQTtFQUFBLGVBQUE7RUFBQSx5QkFBQTtVQUFBLGlCQUFBO0VBQUEsdUNBQUE7RUFBQSxpQkFBQTtFQUFBLG1CQUFBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxjQUFBO0VBQUEsZUFBQTtFQUFBLGNBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxnQkFBQTtFQUFBLDZCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSw2QkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUE7QUFBQTs7QUFHRix3QkFBQTtBQUNBO0VBQ0UsaURBQUE7RUFDQSxXQUFBO0VBQUEscUJBQUE7RUFBQSxzQkFBQTtFQUFBLHVCQUFBO0FBdkJGOztBQTJCRTtFQUFBLGFBQUE7RUFBQSxlQUFBO0VBQUEseUJBQUE7VUFBQSxpQkFBQTtFQUFBLG1CQUFBO0VBQUEsdUNBQUE7RUFBQSx3Q0FBQTtFQUFBLGdCQUFBO0VBQUEscUJBQUE7RUFBQSw2QkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsd0NBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsa0JBQUE7RUFBQSxlQUFBO0VBQUEsY0FBQTtFQUFBO0FBQUE7O0FBREY7RUFFRSx3Q0FBQTtBQXZCRjs7QUEyQkU7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxnQkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSxzREFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSx1Q0FBQTtFQUFBLHdDQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUEiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXgtc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWNvbG9yKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxuICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtd2lkdGgpO1xyXG5cclxuICAmLmNvbGxhcHNlZCB7XHJcbiAgICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtY29sbGFwc2VkLXdpZHRoKTtcclxuXHJcbiAgICAmOm5vdCgub3Blbikge1xyXG4gICAgICAudmV4LXNpZGVuYXYtdG9vbGJhcl9faGVhZGxpbmUsXHJcbiAgICAgIC52ZXgtc2lkZW5hdi10b29sYmFyX19jb2xsYXBzZS10b2dnbGUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9faWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcsXHJcbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlLFxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCxcclxuICAgICAgICAudmV4LXNpZGVuYXYtdXNlcl9fdGl0bGUsXHJcbiAgICAgICAgLnZleC1zaWRlbmF2LXVzZXJfX3N1YnRpdGxlLFxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi11c2VyX19kcm9wZG93bi1pY29uLFxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi1zZWFyY2hfX3BsYWNlaG9sZGVyLFxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi1zZWFyY2hfX2tleWJpbmQge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi11c2VyIHtcclxuICAgICAgICAgIEBhcHBseSBwci0yLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAudmV4LXNpZGVuYXYtc3ViaGVhZGluZyxcclxuICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcclxuICAgICAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmV4LXNpZGVuYXYtaXRlbV9fYmFkZ2Uge1xyXG4gICAgICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1vdXQtc3dpZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtd2lkdGgpO1xyXG5cclxuICAgICAgLnZleC1zaWRlbmF2LXRvb2xiYXJfX2NvbGxhcHNlLXRvZ2dsZSB7XHJcbiAgICAgICAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9fYmFkZ2Uge1xyXG4gICAgICAgICAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCB7XHJcbiAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci1ob3Jpem9udGFsIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiogU0lERU5BViBUT09MQkFSICovXHJcbi52ZXgtc2lkZW5hdi10b29sYmFyX19jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LWJhY2tncm91bmQpO1xyXG5cclxuICBAYXBwbHkgc3RpY2t5IHRvcC0wIHotMTA7XHJcbn1cclxuXHJcbi5zaWRlbmF2LXRvb2xiYXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtdG9vbGJhci1iYWNrZ3JvdW5kKTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IHZhcigtLXZleC10b29sYmFyLWhlaWdodCk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAYXBwbHkgcHktMCBweC02O1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9faGVhZGxpbmUge1xyXG4gIEBhcHBseSB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctd2lkZSBzZWxlY3Qtbm9uZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9fY29sbGFwc2UtdG9nZ2xlIHtcclxuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2Utb3V0LXN3aWZ0O1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9fZGl2aWRlciB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtc2VjdGlvbi1kaXZpZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLyoqIFZFWCBTSURFTkFWIFVTRVIgKi9cclxuLnZleC1zaWRlbmF2LXVzZXJfX2NvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtdG9vbGJhci1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LXNlY3Rpb24tZGl2aWRlci1jb2xvcik7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuXHJcbiAgQGFwcGx5IGJvcmRlci10IHB4LTIgcHktMztcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LXVzZXIge1xyXG4gIEBhcHBseSByZWxhdGl2ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgcm91bmRlZCBob3ZlcjpiZy13aGl0ZS8xMCBzZWxlY3Qtbm9uZSBjdXJzb3ItcG9pbnRlciBwLTEuNSBwdC0yO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdXNlcl9faW1hZ2Uge1xyXG4gIEBhcHBseSB3LTkgaC05IGJsb2NrIHJvdW5kZWQtZnVsbDtcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LXVzZXJfX2NvbnRlbnQge1xyXG4gIEBhcHBseSBwbC0zO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdXNlcl9fdGl0bGUge1xyXG4gIEBhcHBseSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdXNlcl9fc3VidGl0bGUge1xyXG4gIEBhcHBseSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUvNTAgd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi11c2VyX19kcm9wZG93bi1pY29uIHtcclxuICBAYXBwbHkgdGV4dC13aGl0ZS81MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LXVzZXItLW9wZW4ge1xyXG4gIEBhcHBseSBiZy13aGl0ZS8xMDtcclxufVxyXG5cclxuLyoqIFZFWCBTSURFTkFWIFNFQVJDSCAqL1xyXG4udmV4LXNpZGVuYXYtc2VhcmNoX19jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XHJcbiAgQGFwcGx5IHB4LTMgcGItMyB6LTEwO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtc2VhcmNoIHtcclxuICBAYXBwbHkgcm91bmRlZCBiZy13aGl0ZS8xMCB0ZXh0LXdoaXRlLzMwIGhvdmVyOmJnLXdoaXRlLzIwIGhvdmVyOnRleHQtd2hpdGUvNjAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgZmxleCBpdGVtcy1jZW50ZXIgc2VsZWN0LW5vbmUgcC0xIHBsLTM7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2ljb24ge1xyXG4gIEBhcHBseSBpY29uLXNtO1xyXG4gIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1zZWFyY2hfX3BsYWNlaG9sZGVyIHtcclxuICBAYXBwbHkgdGV4dC14cyBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2tleWJpbmQge1xyXG4gIEBhcHBseSBiZy13aGl0ZS8xMCByb3VuZGVkIHRleHQtMnhzIHB4LTIgcHktMSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsNERBQUE7RUFDQSwrQkFBQTtBQUNGO0FBQ0U7RUFDRSx5Q0FBQTtBQUNKO0FBRU07O0VBRUUsVUFBQTtFQUNBLGdFQUFBO0FBQVI7QUFJUTtFQUNFLDZEQUFBO0FBRlY7QUFLUTs7Ozs7Ozs7RUFRRSxVQUFBO0FBSFY7QUFPVTtFQUFBLHVCQUFBO0FBQUE7QUFHRjtFQUNFLDZCQUFBO0FBTFY7QUFhUTs7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQUFBO0FBSUE7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQUFBO0FBSUo7RUFDRSwrQkFBQTtBQVpOO0FBZVE7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQUFBO0FBS0U7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQUFBO0FBT047RUFDRSw2QkFBQTtBQW5CTjs7QUF3QkEscUJBQUE7QUFDQTtFQUNFLHlDQUFBO0VBRUEsZ0JBQUE7RUFBQSxRQUFBO0VBQUEsV0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0FBdEJGOztBQTBCRTtFQUFBLHlCQUFBO1VBQUEsaUJBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUEsZ0JBQUE7RUFBQSx1QkFBQTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLDREQUFBO0VBQ0Esc0RBQUE7QUFEQTs7QUFLQTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLDREQUFBO0FBQUE7O0FBR0Y7RUFDRSxXQUFBO0VBQ0Esb0RBQUE7QUF0QkY7O0FBeUJBLHNCQUFBO0FBQ0E7RUFDRSxpREFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLHVCQUFBO0FBdkJGOztBQTJCRTtFQUFBLGtCQUFBO0VBQUEsZUFBQTtFQUFBLHlCQUFBO1VBQUEsaUJBQUE7RUFBQSx1Q0FBQTtFQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSxzREFBQTtBQUFBOztBQUFBO0VBQUEsd0NBQUE7QUFBQTs7QUFJQTtFQUFBLGNBQUE7RUFBQSxlQUFBO0VBQUEsY0FBQTtFQUFBLHFCQUFBO0FBQUE7O0FBSUE7RUFBQSxxQkFBQTtBQUFBOztBQUlBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxnS0FBQTtFQUFBLHdKQUFBO0VBQUEsaUxBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsc0RBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtFQUFBLGdCQUFBO0VBQUEsNkJBQUE7RUFBQSxnS0FBQTtFQUFBLHdKQUFBO0VBQUEsaUxBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsc0RBQUE7QUFBQTs7QUFJQTtFQUFBLDZCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLHNEQUFBO0FBQUE7O0FBSUE7RUFBQSx3Q0FBQTtBQUFBOztBQUdGLHdCQUFBO0FBQ0E7RUFDRSxpREFBQTtFQUNBLFdBQUE7RUFBQSxxQkFBQTtFQUFBLHNCQUFBO0VBQUEsdUJBQUE7QUF2QkY7O0FBMkJFO0VBQUEsYUFBQTtFQUFBLGVBQUE7RUFBQSx5QkFBQTtVQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUFBQSx1Q0FBQTtFQUFBLHdDQUFBO0VBQUEsZ0JBQUE7RUFBQSxxQkFBQTtFQUFBLDZCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLHNEQUFBO0FBQUE7O0FBQUE7RUFBQSx3Q0FBQTtFQUFBLDZCQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLGVBQUE7RUFBQSxjQUFBO0VBQUEsb0JBQUE7QUFBQTs7QUFERjtFQUVFLHdDQUFBO0FBdkJGOztBQTJCRTtFQUFBLG1CQUFBO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtFQUFBLGdCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLHNEQUFBO0VBQ0EsNkNBQUE7QUFEQTs7QUFLQTtFQUFBLHVDQUFBO0VBQUEsd0NBQUE7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSxnS0FBQTtFQUFBLHdKQUFBO0VBQUEsaUxBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsc0RBQUE7QUFBQTtBQTJHRiw0dVNBQTR1UyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXgtc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWNvbG9yKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxuICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtd2lkdGgpO1xyXG5cclxuICAmLmNvbGxhcHNlZCB7XHJcbiAgICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtY29sbGFwc2VkLXdpZHRoKTtcclxuXHJcbiAgICAmOm5vdCgub3Blbikge1xyXG4gICAgICAudmV4LXNpZGVuYXYtdG9vbGJhcl9faGVhZGxpbmUsXHJcbiAgICAgIC52ZXgtc2lkZW5hdi10b29sYmFyX19jb2xsYXBzZS10b2dnbGUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9faWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcsXHJcbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlLFxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCxcclxuICAgICAgICAudmV4LXNpZGVuYXYtdXNlcl9fdGl0bGUsXHJcbiAgICAgICAgLnZleC1zaWRlbmF2LXVzZXJfX3N1YnRpdGxlLFxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi11c2VyX19kcm9wZG93bi1pY29uLFxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi1zZWFyY2hfX3BsYWNlaG9sZGVyLFxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi1zZWFyY2hfX2tleWJpbmQge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52ZXgtc2lkZW5hdi11c2VyIHtcclxuICAgICAgICAgIEBhcHBseSBwci0yLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAudmV4LXNpZGVuYXYtc3ViaGVhZGluZyxcclxuICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcclxuICAgICAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmV4LXNpZGVuYXYtaXRlbV9fYmFkZ2Uge1xyXG4gICAgICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1vdXQtc3dpZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtd2lkdGgpO1xyXG5cclxuICAgICAgLnZleC1zaWRlbmF2LXRvb2xiYXJfX2NvbGxhcHNlLXRvZ2dsZSB7XHJcbiAgICAgICAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9fYmFkZ2Uge1xyXG4gICAgICAgICAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCB7XHJcbiAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci1ob3Jpem9udGFsIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiogU0lERU5BViBUT09MQkFSICovXHJcbi52ZXgtc2lkZW5hdi10b29sYmFyX19jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LWJhY2tncm91bmQpO1xyXG5cclxuICBAYXBwbHkgc3RpY2t5IHRvcC0wIHotMTA7XHJcbn1cclxuXHJcbi5zaWRlbmF2LXRvb2xiYXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtdG9vbGJhci1iYWNrZ3JvdW5kKTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IHZhcigtLXZleC10b29sYmFyLWhlaWdodCk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAYXBwbHkgcHktMCBweC02O1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9faGVhZGxpbmUge1xyXG4gIEBhcHBseSB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctd2lkZSBzZWxlY3Qtbm9uZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9fY29sbGFwc2UtdG9nZ2xlIHtcclxuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2Utb3V0LXN3aWZ0O1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9fZGl2aWRlciB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtc2VjdGlvbi1kaXZpZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLyoqIFZFWCBTSURFTkFWIFVTRVIgKi9cclxuLnZleC1zaWRlbmF2LXVzZXJfX2NvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtdG9vbGJhci1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LXNlY3Rpb24tZGl2aWRlci1jb2xvcik7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuXHJcbiAgQGFwcGx5IGJvcmRlci10IHB4LTIgcHktMztcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LXVzZXIge1xyXG4gIEBhcHBseSByZWxhdGl2ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgcm91bmRlZCBob3ZlcjpiZy13aGl0ZS8xMCBzZWxlY3Qtbm9uZSBjdXJzb3ItcG9pbnRlciBwLTEuNSBwdC0yO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdXNlcl9faW1hZ2Uge1xyXG4gIEBhcHBseSB3LTkgaC05IGJsb2NrIHJvdW5kZWQtZnVsbDtcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LXVzZXJfX2NvbnRlbnQge1xyXG4gIEBhcHBseSBwbC0zO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdXNlcl9fdGl0bGUge1xyXG4gIEBhcHBseSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtdXNlcl9fc3VidGl0bGUge1xyXG4gIEBhcHBseSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUvNTAgd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi11c2VyX19kcm9wZG93bi1pY29uIHtcclxuICBAYXBwbHkgdGV4dC13aGl0ZS81MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcclxufVxyXG5cclxuLnZleC1zaWRlbmF2LXVzZXItLW9wZW4ge1xyXG4gIEBhcHBseSBiZy13aGl0ZS8xMDtcclxufVxyXG5cclxuLyoqIFZFWCBTSURFTkFWIFNFQVJDSCAqL1xyXG4udmV4LXNpZGVuYXYtc2VhcmNoX19jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XHJcbiAgQGFwcGx5IHB4LTMgcGItMyB6LTEwO1xyXG59XHJcblxyXG4udmV4LXNpZGVuYXYtc2VhcmNoIHtcclxuICBAYXBwbHkgcm91bmRlZCBiZy13aGl0ZS8xMCB0ZXh0LXdoaXRlLzMwIGhvdmVyOmJnLXdoaXRlLzIwIGhvdmVyOnRleHQtd2hpdGUvNjAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgZmxleCBpdGVtcy1jZW50ZXIgc2VsZWN0LW5vbmUgcC0xIHBsLTM7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2ljb24ge1xyXG4gIEBhcHBseSBpY29uLXNtO1xyXG4gIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1zZWFyY2hfX3BsYWNlaG9sZGVyIHtcclxuICBAYXBwbHkgdGV4dC14cyBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XHJcbn1cclxuXHJcbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2tleWJpbmQge1xyXG4gIEBhcHBseSBiZy13aGl0ZS8xMCByb3VuZGVkIHRleHQtMnhzIHB4LTIgcHktMSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 62276:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/mega-menu/mega-menu.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MegaMenuComponent: () => (/* binding */ MegaMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover-ref */ 95925);








function MegaMenuComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMenuComponent_a_14_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", feature_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", feature_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r2.label);
  }
}
function MegaMenuComponent_a_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMenuComponent_a_19_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", page_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r5.label);
  }
}
class MegaMenuComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
    this.features = [{
      icon: 'mat:layers',
      label: 'Dashboard',
      route: '/'
    }, {
      icon: 'mat:assignment',
      label: 'AIO-Table',
      route: '/apps/aio-table'
    }, {
      icon: 'mat:contact_support',
      label: 'Help Center',
      route: '/apps/help-center'
    }, {
      icon: 'mat:contacts',
      label: 'Contacts',
      route: '/apps/contacts/grid'
    }, {
      icon: 'mat:assessment',
      label: 'Scrumboard',
      route: '/apps/scrumboard/1'
    }, {
      icon: 'mat:book',
      label: 'Documentation',
      route: '/documentation'
    }];
    this.pages = [{
      label: 'All-In-One Table',
      route: '/apps/aio-table'
    }, {
      label: 'Authentication',
      route: '/login'
    }, {
      label: 'Components',
      route: '/ui/components/overview'
    }, {
      label: 'Documentation',
      route: '/documentation'
    }, {
      label: 'FAQ',
      route: '/pages/faq'
    }, {
      label: 'Form Elements',
      route: '/ui/forms/form-elements'
    }, {
      label: 'Form Wizard',
      route: '/ui/forms/form-wizard'
    }, {
      label: 'Guides',
      route: '/pages/guides'
    }, {
      label: 'Help Center',
      route: '/apps/help-center'
    }, {
      label: 'Scrumboard',
      route: '/apps/scrumboard'
    }];
  }
  ngOnInit() {}
  close() {
    this.popoverRef.close();
  }
  static #_ = this.ɵfac = function MegaMenuComponent_Factory(t) {
    return new (t || MegaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MegaMenuComponent,
    selectors: [["vex-mega-menu"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 2,
    consts: [[1, "card", "overflow-auto", "flex", "flex-col", "md:flex-row", "sm:mr-6"], [1, "bg-primary-600/10", "p-6", "flex-auto", "max-w-[300px]"], [1, "headline", "mb-4", "text-primary-600"], [1, "caption"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "mt-4", "w-full"], [1, "p-6", "flex-auto", "max-w-[400px]"], [1, "body-2", "m-0"], [1, "mt-4", "grid", "grid-cols-3"], ["class", "text-dark p-3 text-center hover:bg-primary-600/10 hover:text-primary-600 transition duration-400 ease-out-swift rounded block no-underline", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "p-6", "flex-auto", "max-w-[350px]"], [1, "mt-6", "grid", "grid-cols-2", "gap-x-12", "gap-y-4"], ["class", "text-dark body-1 no-underline hover:text-primary-600 transition duration-400 ease-out-swift", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "text-dark", "p-3", "text-center", "hover:bg-primary-600/10", "hover:text-primary-600", "transition", "duration-400", "ease-out-swift", "rounded", "block", "no-underline", 3, "routerLink", "click"], ["color", "primary", 1, "icon-xl", 3, "svgIcon"], [1, "body-2", "mt-2"], [1, "text-dark", "body-1", "no-underline", "hover:text-primary-600", "transition", "duration-400", "ease-out-swift", 3, "routerLink", "click"]],
    template: function MegaMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mega Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Learn More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MegaMenuComponent_a_14_Template, 4, 3, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9)(16, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MegaMenuComponent_a_19_Template, 2, 2, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
    encapsulation: 2
  });
}


/***/ }),

/***/ 6182:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/search/search.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 64952);
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.service */ 63925);













const _c0 = ["searchInput"];
function SearchComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class SearchComponent {
  constructor(layoutService, searchService) {
    this.layoutService = layoutService;
    this.searchService = searchService;
    this.show$ = this.layoutService.searchOpen$;
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl();
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
  }
  ngOnInit() {
    this.searchService.isOpenSubject.next(true);
    this.searchCtrl.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => this.searchService.valueChangesSubject.next(value));
    this.show$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(show => show), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.input?.nativeElement.focus());
  }
  close() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }
  search() {
    this.searchService.submitSubject.next(this.searchCtrl.value);
    this.close();
  }
  ngOnDestroy() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_0__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["vex-search"]],
    viewQuery: function SearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 8,
    consts: [[1, "search", 3, "keyup.escape"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ltr:right-12", "rtl:left-12", "top-12", "absolute", 3, "click"], ["svgIcon", "mat:close"], ["placeholder", "Search...", 1, "search-input", 3, "formControl", "keyup.enter"], ["searchInput", ""], [1, "search-hint"], ["class", "search-overlay", 3, "click", 4, "ngIf"], [1, "search-overlay", 3, "click"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.escape", function SearchComponent_Template_div_keyup_escape_0_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_4_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Hit enter to search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx.show$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx.show$));
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: [".search[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  opacity: 0;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n.search.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input[_ngcontent-%COMP%] {\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  margin: 0px;\n  border-radius: 0px;\n  border-bottom-width: 1px;\n  border-right-width: 0px;\n  border-left-width: 0px;\n  border-top-width: 0px;\n  background-color: transparent;\n  font-weight: 700;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.search-hint[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: right;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-hint-text-rgb) / var(--tw-text-opacity));\n}\n\n.search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  opacity: 0;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGVBQUE7RUFBQSxRQUFBO0VBQUEsU0FBQTtFQUFBLGFBQUE7RUFBQSxXQUFBO0VBQUEsc0JBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFBQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtFQUNBO0FBTEE7QUFPQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFDSjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtFQUFBLHVCQUFBO0VBQUEsc0JBQUE7RUFBQSxxQkFBQTtFQUFBLDZCQUFBO0VBQUEsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtBQUFKOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtFQUFBLG9CQUFBO0VBQUEsaUJBQUE7RUFBQSxlQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsd0VBQUE7QUFERjs7QUFLRTtFQUFBLGVBQUE7RUFBQSxXQUFBO0VBQUEsU0FBQTtFQUFBLFdBQUE7RUFBQSxVQUFBO0VBQ0E7QUFEQSIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICBAYXBwbHkgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBvcGFjaXR5LTA7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XHJcbiAgei1pbmRleDogMTA1MDtcclxuXHJcbiAgJi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgZm9udC1zaXplOiA3dnc7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDc1JTtcclxuICBAYXBwbHkgYm9yZGVyLWIgbS0wIHJvdW5kZWQtbm9uZSBib3JkZXItci0wIGJvcmRlci1sLTAgYm9yZGVyLXQtMCBmb250LWJvbGQgYmctdHJhbnNwYXJlbnQ7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtaGludCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBAYXBwbHkgdGV4dC1iYXNlIHRleHQtcmlnaHQgcHktNCBteC1hdXRvIHRleHQtaGludCBmb250LWJvbGQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtb3ZlcmxheSB7XHJcbiAgQGFwcGx5IGZpeGVkIHctZnVsbCBib3R0b20tMCBsZWZ0LTAgb3BhY2l0eS0wO1xyXG4gIGhlaWdodDogNTB2aDtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3Rvb2xiYXIvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGVBQUE7RUFBQSxRQUFBO0VBQUEsU0FBQTtFQUFBLGFBQUE7RUFBQSxXQUFBO0VBQUEsc0JBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFBQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtFQUNBLGFBQUE7QUFMQTtBQU9BO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtBQUNKOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFBQSxrQkFBQTtFQUFBLHdCQUFBO0VBQUEsdUJBQUE7RUFBQSxzQkFBQTtFQUFBLHFCQUFBO0VBQUEsNkJBQUE7RUFBQSxnQkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0FBQUo7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsb0JBQUE7RUFBQSxpQkFBQTtFQUFBLGVBQUE7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSx3RUFBQTtBQURGOztBQUtFO0VBQUEsZUFBQTtFQUFBLFdBQUE7RUFBQSxTQUFBO0VBQUEsV0FBQTtFQUFBLFVBQUE7RUFDQSxZQUFBO0FBREE7QUE4QkYsNGxFQUE0bEUiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICBAYXBwbHkgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBvcGFjaXR5LTA7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XHJcbiAgei1pbmRleDogMTA1MDtcclxuXHJcbiAgJi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgZm9udC1zaXplOiA3dnc7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDc1JTtcclxuICBAYXBwbHkgYm9yZGVyLWIgbS0wIHJvdW5kZWQtbm9uZSBib3JkZXItci0wIGJvcmRlci1sLTAgYm9yZGVyLXQtMCBmb250LWJvbGQgYmctdHJhbnNwYXJlbnQ7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtaGludCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBAYXBwbHkgdGV4dC1iYXNlIHRleHQtcmlnaHQgcHktNCBteC1hdXRvIHRleHQtaGludCBmb250LWJvbGQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtb3ZlcmxheSB7XHJcbiAgQGFwcGx5IGZpeGVkIHctZnVsbCBib3R0b20tMCBsZWZ0LTAgb3BhY2l0eS0wO1xyXG4gIGhlaWdodDogNTB2aDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 63925:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/search/search.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchService: () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);


class SearchService {
  constructor() {
    this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.valueChanges$ = this.valueChangesSubject.asObservable();
    this.submitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.submit$ = this.submitSubject.asObservable();
    this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isOpen$ = this.isOpenSubject.asObservable();
  }
  static #_ = this.ɵfac = function SearchService_Factory(t) {
    return new (t || SearchService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SearchService,
    factory: SearchService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 60052:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/toolbar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarComponent: () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 75043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var _mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mega-menu/mega-menu.component */ 62276);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.component */ 99373);
/* harmony import */ var _navigation_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/navigation-item/navigation-item.component */ 9208);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/utils/check-router-childs-data */ 39681);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 60839);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 64952);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/config/vex-config.service */ 50376);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/navigation/navigation.service */ 20120);
/* harmony import */ var _vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover.service */ 92371);





















const _c0 = function () {
  return ["/"];
};
function ToolbarComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, ctx_r0.isDesktop$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 6, ctx_r0.title$), " ");
  }
}
function ToolbarComponent_div_7_vex_navigation_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "vex-navigation-item", 12);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r4);
  }
}
function ToolbarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ToolbarComponent_div_7_vex_navigation_item_2_Template, 1, 1, "vex-navigation-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 3, ctx_r1.isDesktop$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, ctx_r1.navigationItems$));
  }
}
function ToolbarComponent_vex_navigation_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "vex-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx_r2.isDesktop$));
  }
}
class ToolbarComponent {
  constructor(layoutService, configService, navigationService, popoverService, router) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.navigationService = navigationService;
    this.popoverService = popoverService;
    this.router = router;
    this.showShadow = false;
    this.navigationItems$ = this.navigationService.items$;
    this.isHorizontalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.layout === 'horizontal'));
    this.isVerticalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.layout === 'vertical'));
    this.isNavbarInToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.navbar.position === 'in-toolbar'));
    this.isNavbarBelowToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.navbar.position === 'below-toolbar'));
    this.userVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.toolbar.user.visible));
    this.title$ = this.configService.select(config => config.sidenav.title);
    this.isDesktop$ = this.layoutService.isDesktop$;
    this.megaMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(false);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.DestroyRef);
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(null), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_14__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => {
      this.showShadow = (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_3__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled ?? false);
    });
  }
  openQuickpanel() {
    this.layoutService.openQuickpanel();
  }
  openSidenav() {
    this.layoutService.openSidenav();
  }
  openMegaMenu(origin) {
    this.megaMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.popoverService.open({
      content: _mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__.MegaMenuComponent,
      origin,
      offsetY: 12,
      position: [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(popoverRef => popoverRef.afterClosed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(true));
  }
  openSearch() {
    this.layoutService.openSearch();
  }
  static #_ = this.ɵfac = function ToolbarComponent_Factory(t) {
    return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_5__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_7__.VexPopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ToolbarComponent,
    selectors: [["vex-toolbar"]],
    hostVars: 2,
    hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("shadow-b", ctx.showShadow);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 21,
    consts: [[1, "toolbar", "text-default", "w-full", "px-6", "flex", "items-center"], ["mat-icon-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:menu"], ["class", "ltr:mr-4 rtl:ml-4 flex items-center", 3, "routerLink", 4, "ngIf"], ["class", "px-6 flex-none flex items-center", 3, "hidden", 4, "ngIf"], [1, "flex-1"], [3, "hidden", 4, "ngIf"], [1, "ltr:mr-4", "rtl:ml-4", "flex", "items-center", 3, "routerLink"], ["alt", "Logo", "src", "assets/img/logo/logo.svg", 1, "w-8", "select-none"], [1, "text-2xl", "font-bold", "tracking-wide", "ltr:pl-4", "rtl:pr-4", "m-0", "select-none"], [1, "px-6", "flex-none", "flex", "items-center"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
    template: function ToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_2_listener() {
          return ctx.openSidenav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ToolbarComponent_a_5_Template, 6, 9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ToolbarComponent_div_7_Template, 4, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ToolbarComponent_vex_navigation_11_Template, 2, 4, "vex-navigation", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("container", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 7, ctx.isVerticalLayout$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 9, ctx.isDesktop$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 11, ctx.isVerticalLayout$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 13, ctx.isVerticalLayout$) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 15, ctx.isNavbarInToolbar$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 17, ctx.isVerticalLayout$) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 19, ctx.isNavbarBelowToolbar$));
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgFor, _navigation_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__.NavigationItemComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  background: var(--vex-toolbar-background);\n  box-sizing: border-box;\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  z-index: var(--vex-toolbar-z-index);\n  border-bottom-width: 1px;\n  --tw-backdrop-blur: blur(8px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: var(--vex-toolbar-height);\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esd0JBQUE7RUFBQSw2QkFBQTtFQUFBLCtRQUFBO1VBQUEsdVFBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXRvb2xiYXItYmFja2dyb3VuZCk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IHZhcigtLXZleC10b29sYmFyLXotaW5kZXgpO1xyXG4gIEBhcHBseSBiYWNrZHJvcC1ibHVyIGJvcmRlci1iO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgaGVpZ2h0OiB2YXIoLS12ZXgtdG9vbGJhci1oZWlnaHQpO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtFQUFBLDZCQUFBO0VBQUEsK1FBQUE7VUFBQSx1UUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7QUFJQSxnNEJBQWc0QiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtdG9vbGJhci1iYWNrZ3JvdW5kKTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogdmFyKC0tdmV4LXRvb2xiYXItei1pbmRleCk7XHJcbiAgQGFwcGx5IGJhY2tkcm9wLWJsdXIgYm9yZGVyLWI7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBoZWlnaHQ6IHZhcigtLXZleC10b29sYmFyLWhlaWdodCk7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 78349:
/*!****************************************************!*\
  !*** ./src/app/layouts/layout/layout.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 33839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _vex_components_vex_sidebar_vex_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-sidebar/vex-sidebar.component */ 60483);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidenav/sidenav.component */ 46468);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/toolbar/toolbar.component */ 60052);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer/footer.component */ 93147);
/* harmony import */ var _components_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/quickpanel/quickpanel.component */ 74132);
/* harmony import */ var _components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/config-panel/config-panel-toggle/config-panel-toggle.component */ 43593);
/* harmony import */ var _components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/config-panel/config-panel.component */ 76426);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-layout/base-layout.component */ 48158);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _components_toolbar_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/toolbar/search/search.component */ 6182);
/* harmony import */ var _vex_components_vex_progress_bar_vex_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vex/components/vex-progress-bar/vex-progress-bar.component */ 6912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 64952);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vex/config/vex-config.service */ 50376);
/* harmony import */ var src_app_core_navigation_navigation_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/navigation/navigation-loader.service */ 78936);





















function LayoutComponent_vex_base_layout_0_vex_footer_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "vex-footer", 12);
  }
}
function LayoutComponent_vex_base_layout_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "vex-base-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "vex-progress-bar")(2, "vex-search");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-sidenav-container", 1)(4, "mat-sidenav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closedStart", function LayoutComponent_vex_base_layout_0_Template_mat_sidenav_closedStart_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.onSidenavClosed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "vex-sidenav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "mat-sidenav", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closedStart", function LayoutComponent_vex_base_layout_0_Template_mat_sidenav_closedStart_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r6.onQuickpanelClosed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "vex-quickpanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "mat-sidenav-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "vex-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "main", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, LayoutComponent_vex_base_layout_0_vex_footer_18_Template, 1, 0, "vex-footer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "vex-config-panel-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("openConfig", function LayoutComponent_vex_base_layout_0_Template_vex_config_panel_toggle_openConfig_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](_r3.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "vex-sidebar", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "vex-config-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const config_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disableClose", !!_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 11, ctx_r0.sidenavDisableClose$))("fixedInViewport", !!_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 13, ctx_r0.sidenavFixedInViewport$))("mode", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 15, ctx_r0.sidenavMode$)) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "side")("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 17, ctx_r0.sidenavOpen$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collapsed", !!_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 19, ctx_r0.sidenavCollapsed$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 21, ctx_r0.quickpanelOpen$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("dark", config_r1.layout === "vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", config_r1.footer.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("invisibleBackdrop", true)("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](22, 23, ctx_r0.configPanelOpen$));
  }
}
class LayoutComponent {
  constructor(layoutService, configService, navigationLoaderService) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.navigationLoaderService = navigationLoaderService;
    this.config$ = this.configService.config$;
    this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
    this.sidenavDisableClose$ = this.layoutService.isDesktop$;
    this.sidenavFixedInViewport$ = this.layoutService.isDesktop$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(isDesktop => !isDesktop));
    this.sidenavMode$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this.layoutService.isDesktop$, this.configService.select(config => config.layout)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([isDesktop, layout]) => !isDesktop || layout === 'vertical' ? 'over' : 'side'));
    this.sidenavOpen$ = this.layoutService.sidenavOpen$;
    this.configPanelOpen$ = this.layoutService.configPanelOpen$;
    this.quickpanelOpen$ = this.layoutService.quickpanelOpen$;
  }
  ngOnInit() {
    this.navigationLoaderService.loadNavigation();
  }
  onSidenavClosed() {
    this.layoutService.closeSidenav();
  }
  onQuickpanelClosed() {
    this.layoutService.closeQuickpanel();
  }
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_10__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_11__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_navigation_navigation_loader_service__WEBPACK_IMPORTED_MODULE_12__.NavigationLoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["vex-layout"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], [1, "vex-layout-sidenav-container"], [3, "disableClose", "fixedInViewport", "mode", "opened", "closedStart"], [3, "collapsed"], ["mode", "over", "position", "end", 1, "vex-layout-quickpanel", 3, "opened", "closedStart"], [1, "vex-layout-sidenav-content"], [1, "vex-toolbar"], [1, "vex-layout-content"], ["class", "vex-footer", 4, "ngIf"], [3, "openConfig"], ["position", "right", 3, "invisibleBackdrop", "opened"], ["configpanel", ""], [1, "vex-footer"]],
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, LayoutComponent_vex_base_layout_0_Template, 24, 25, "vex-base-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx.config$));
      }
    },
    dependencies: [_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_7__.BaseLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.ToolbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_4__.QuickpanelComponent, _components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_5__.ConfigPanelToggleComponent, _vex_components_vex_sidebar_vex_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.VexSidebarComponent, _components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_6__.ConfigPanelComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterOutlet, _components_toolbar_search_search_component__WEBPACK_IMPORTED_MODULE_8__.SearchComponent, _vex_components_vex_progress_bar_vex_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__.VexProgressBarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 74173:
/*!*********************************!*\
  !*** ./src/app/models/roles.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Roles: () => (/* binding */ Roles)
/* harmony export */ });
class Roles {
  constructor(role) {
    this.id = 0;
    this.role_name = '';
    if (role) {
      this.id = role.id ? role.id : 0;
      this.role_name = role.role_name;
    }
  }
}

/***/ }),

/***/ 59147:
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
class User {
  constructor(user) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.password = user.password;
    this.phone = user.phone;
    this.email = user.email;
    this.role = user.role_id && user.role_id.role_name ? user.role_id.role_name : user.role;
    this.status = user.status;
    this.role_id = user.role_id;
    this.site_id = user.site_id;
    this.site = user.site_id ? user.site_id.name : user.site;
  }
}

/***/ }),

/***/ 15175:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/environments/environment */ 81594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 21021);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ 58859);






class AuthService {
  //private API_URL= environment.API_URL;
  constructor(httpClient, router, localStorage, cookieService) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorage = localStorage;
    this.cookieService = cookieService;
  }
  checkLoginStatus() {
    return this.httpClient.get(src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL + '/authenticate');
  }
  //login
  login(data) {
    return this.httpClient.post(src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL + '/login', data, {
      ...this.localStorage.headerCors()
    });
  }
  // logout
  logout(user) {
    return this.httpClient.post(src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL + '/logout', user, {
      ...this.localStorage.getAuthorization()
    });
  }
  // Obtenir l'utilisateur
  getUser() {
    return this.httpClient.get(src_app_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL + '/user', {
      ...this.localStorage.getAuthorization()
    });
  }
  // Réinitialiser le mot de passe
  // resetPassword(oldPassword: string, newPassword: string): Observable<any> {
  //   const requestData = {
  //     old_password: oldPassword,
  //     new_password: newPassword
  //   };
  //   // Faites appel à l'API Laravel pour réinitialiser le mot de passe
  //   return this.httpClient.put(environment.BASE_URL +'/resetPassword', requestData, {... this.localStorage.getAuthorization()});
  // }
  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn() {
    const token = this.localStorage.getAuthorization();
    return !!token; // Cela retournera true si le token est présent, false sinon
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__.CookieService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 21021:
/*!*****************************************************************!*\
  !*** ./src/app/services/local-storage/local-storage.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class LocalStorageService {
  //userToken:any;     // stock les infos et le token
  constructor() {
    this.token = []; // pour recuperer le localStorage
    LocalStorageService.instance = this;
  }
  static getInstance() {
    return LocalStorageService.instance;
  }
  saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getData(key) {
    return localStorage.getItem(key);
  }
  removeData(key) {
    localStorage.removeItem(key);
  }
  clearData() {
    localStorage.clear();
  }
  getAuthorization() {
    this.token = sessionStorage.getItem('token');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    const requestOptions = {
      headers: headers
    };
    return requestOptions;
  }
  headerCors() {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    const requestOptions = {
      headers: headers
    };
    return requestOptions;
  }
  static #_ = this.ɵfac = function LocalStorageService_Factory(t) {
    return new (t || LocalStorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LocalStorageService,
    factory: LocalStorageService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 66401);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 7110);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map