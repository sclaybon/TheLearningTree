(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"],{

/***/ "Illq":
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".onboarding-header-text {\n  font-size: 40px;\n  color: #525252;\n}\n\n.onboarding-secondary-text {\n  font-size: 25px;\n  color: rgba(82, 82, 82, 0.425);\n}\n\n.split-pane {\n  padding: 5%;\n  height: 50%;\n}\n\n.spacer {\n  height: 20px;\n}\n\n.center {\n  margin: 0 !important;\n}\n\n.fullHeight {\n  max-height: 100% !important;\n  margin: 0 !important;\n}\n\nion-grid {\n  height: 100vh;\n  background: linear-gradient(to bottom, white, #5ddfc1);\n}\n\nion-grid ion-row {\n  height: 50%;\n}\n\nion-grid ion-row ion-col {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBSUE7RUFFSSxlQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0FBSko7O0FBT0E7RUFDSSxvQkFBQTtBQUpKOztBQU9BO0VBQ0ksMkJBQUE7RUFDQSxvQkFBQTtBQUpKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLHNEQUFBO0FBSko7O0FBTUk7RUFDRSxXQUFBO0FBSk47O0FBTU07RUFDSSxZQUFBO0FBSlYiLCJmaWxlIjoic3JjL2FwcC9vbmJvYXJkaW5nL29uYm9hcmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9uYm9hcmRpbmctaGVhZGVyLXRleHQge1xuXG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XG5cbn1cblxuLm9uYm9hcmRpbmctc2Vjb25kYXJ5LXRleHQge1xuXG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuNDI1KTtcblxufVxuXG4uc3BsaXQtcGFuZXtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBcbn1cblxuLnNwYWNlciB7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmZ1bGxIZWlnaHQge1xuICAgIG1heC1oZWlnaHQ6MTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjowICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNWRkZmMxKSA7XG5cbiAgICBpb24tcm93IHtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH0iXX0= */");

/***/ }),

/***/ "QKJs":
/*!***********************************************!*\
  !*** ./src/app/onboarding/onboarding.page.ts ***!
  \***********************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./onboarding.page.html */ "bcPs");
/* harmony import */ var _onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding.page.scss */ "Illq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let OnboardingPage = class OnboardingPage {
    constructor() { }
    ngOnInit() {
    }
};
OnboardingPage.ctorParameters = () => [];
OnboardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-onboarding',
        template: _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OnboardingPage);



/***/ }),

/***/ "bcPs":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-app>\n    <ion-content fullscreen scroll-y=\"false\">\n      <ion-slides>\n        <ion-slide>\n            <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <img class=\"fullHeight\" [src]=\"'assets/trees.png'\">\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <span class=\"onboarding-header-text\">Welcome To The Learning Tree</span> <br>\n                    <div class=\"spacer\"></div>\n                    <span class=\"onboarding-secondary-text\">Teaching The Next Generation of Leaders</span> <br>\n                    <div class=\"spacer\"></div>\n                    <ion-button color=\"secondary\" [routerLink]=\"['/sign-in']\" expand=\"block\" > Skip </ion-button>\n                  </ion-col>\n                </ion-row> \n              </ion-grid>           \n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"slide\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <img class=\"fullHeight\" [src]=\"'assets/forest.png'\">\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>\n                      <span class=\"onboarding-header-text\" >Customized Learning</span> <br>\n                      <div class=\"spacer\"></div>\n                      <span class=\"onboarding-secondary-text\">The Ultimate ACT Training</span> <br>\n                      <span class=\"onboarding-secondary-text\">K-12 Learning Inventory</span> <br>\n                      <span class=\"onboarding-secondary-text\">Fast, Fun, and User-Friendly</span> <br>\n                      <div class=\"spacer\"></div>\n                      <ion-button color=\"secondary\" [routerLink]=\"['/sign-in']\" expand=\"block\" > Continue </ion-button>\n                    </ion-col>\n                  </ion-row> \n                </ion-grid>            \n              </div>\n        </ion-slide>\n    </ion-slides>\n    </ion-content>\n  </ion-app>\n\n  <style>\n    ion-slides {\n      height: 100%;\n    }\n\n    .swiper-slide {\n      display: block;\n    }\n\n    .swiper-slide h2 {\n      margin-top: 2.8rem;\n    }\n\n    .swiper-slide img {\n      max-height: 50%;\n      max-width: 80%;\n      margin: 60px 0 40px;\n      pointer-events: none;\n    }\n\n    b {\n      font-weight: 500;\n    }\n\n    p {\n      padding: 0 40px;\n      font-size: 14px;\n      line-height: 1.5;\n      color: var(--ion-color-step-600, #60646b);\n    }\n\n    p b {\n      color: var(--ion-text-color, #000000);\n    }\n  </style>\n\n</ion-content>\n");

/***/ }),

/***/ "eQKf":
/*!*********************************************************!*\
  !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OnboardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function() { return OnboardingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding.page */ "QKJs");




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
    }
];
let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {
};
OnboardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingPageRoutingModule);



/***/ }),

/***/ "tSXo":
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.module.ts ***!
  \*************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-routing.module */ "eQKf");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding.page */ "QKJs");







let OnboardingPageModule = class OnboardingPageModule {
};
OnboardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]
        ],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
    })
], OnboardingPageModule);



/***/ })

}]);
//# sourceMappingURL=onboarding-onboarding-module-es2015.js.map