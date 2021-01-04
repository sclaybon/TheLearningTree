(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "HTFn":
/*!*************************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js ***!
  \*************************************************************************************/
/*! exports provided: AngularFireAuthGuard, AngularFireAuthGuardModule, canActivate, customClaims, emailVerified, hasCustomClaim, idTokenResult, isNotAnonymous, loggedIn, redirectLoggedInTo, redirectUnauthorizedTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuard", function() { return AngularFireAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuardModule", function() { return AngularFireAuthGuardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canActivate", function() { return canActivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customClaims", function() { return customClaims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailVerified", function() { return emailVerified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCustomClaim", function() { return hasCustomClaim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idTokenResult", function() { return idTokenResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotAnonymous", function() { return isNotAnonymous; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedIn", function() { return loggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectLoggedInTo", function() { return redirectLoggedInTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectUnauthorizedTo", function() { return redirectUnauthorizedTo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");






/**
 * @fileoverview added by tsickle
 * Generated from: auth-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const ɵ0 = /**
 * @param {?} user
 * @return {?}
 */
user => !!user;
/** @type {?} */
const loggedIn = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ɵ0));
class AngularFireAuthGuard {
    /**
     * @param {?} router
     * @param {?} auth
     */
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.canActivate = (/**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        (next, state) => {
            /** @type {?} */
            const authPipeFactory = (/** @type {?} */ (next.data.authGuardPipe)) || ((/**
             * @return {?}
             */
            () => loggedIn));
            return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), authPipeFactory(next, state), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} can
             * @return {?}
             */
            can => {
                if (typeof can === 'boolean') {
                    return can;
                }
                else if (Array.isArray(can)) {
                    return this.router.createUrlTree(can);
                }
                else {
                    // TODO(EdricChan03): Add tests
                    return this.router.parseUrl(can);
                }
            })));
        });
    }
}
AngularFireAuthGuard.ɵfac = function AngularFireAuthGuard_Factory(t) { return new (t || AngularFireAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
/** @nocollapse */
AngularFireAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
/** @nocollapse */ AngularFireAuthGuard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AngularFireAuthGuard_Factory() { return new AngularFireAuthGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); }, token: AngularFireAuthGuard, providedIn: "any" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }]; }, null); })();
if (false) {}
/** @type {?} */
const canActivate = (/**
 * @param {?} pipe
 * @return {?}
 */
(pipe) => ({
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: pipe }
}));
const ɵ1 = /**
 * @param {?} user
 * @return {?}
 */
user => !!user && !user.isAnonymous;
/** @type {?} */
const isNotAnonymous = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ɵ1));
const ɵ2 = /**
 * @param {?} user
 * @return {?}
 */
(user) => user ? user.getIdTokenResult() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
/** @type {?} */
const idTokenResult = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((ɵ2));
const ɵ3 = /**
 * @param {?} user
 * @return {?}
 */
user => !!user && user.emailVerified;
/** @type {?} */
const emailVerified = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ɵ3));
const ɵ4 = /**
 * @param {?} idTokenResult
 * @return {?}
 */
idTokenResult => idTokenResult ? idTokenResult.claims : [];
/** @type {?} */
const customClaims = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(idTokenResult, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ɵ4)));
/** @type {?} */
const hasCustomClaim = (/**
 * @param {?} claim
 * @return {?}
 */
(claim) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(customClaims, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
 * @param {?} claims
 * @return {?}
 */
claims => claims.hasOwnProperty(claim)))));
/** @type {?} */
const redirectUnauthorizedTo = (/**
 * @param {?} redirect
 * @return {?}
 */
(redirect) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
 * @param {?} loggedIn
 * @return {?}
 */
loggedIn => loggedIn || redirect))));
/** @type {?} */
const redirectLoggedInTo = (/**
 * @param {?} redirect
 * @return {?}
 */
(redirect) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
 * @param {?} loggedIn
 * @return {?}
 */
loggedIn => loggedIn && redirect || true))));

/**
 * @fileoverview added by tsickle
 * Generated from: auth-guard.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireAuthGuardModule {
}
AngularFireAuthGuardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularFireAuthGuardModule });
AngularFireAuthGuardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularFireAuthGuardModule_Factory(t) { return new (t || AngularFireAuthGuardModule)(); }, providers: [AngularFireAuthGuard] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFireAuthGuard]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-auth-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-auth-guard.js.map

/***/ }),

/***/ "MQDv":
/*!*********************************************!*\
  !*** ./src/app/profile/profile.resolver.ts ***!
  \*********************************************/
/*! exports provided: ProfilePageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageResolver", function() { return ProfilePageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-auth.service */ "0+S0");



let ProfilePageResolver = class ProfilePageResolver {
    constructor(firebaseAuthService) {
        this.firebaseAuthService = firebaseAuthService;
    }
    resolve() {
        return this.firebaseAuthService.getProfileDataSource();
    }
};
ProfilePageResolver.ctorParameters = () => [
    { type: _firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] }
];
ProfilePageResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"]])
], ProfilePageResolver);



/***/ }),

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "ncJE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.resolver */ "MQDv");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");









const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["redirectUnauthorizedTo"])(['sign-in']);
const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        resolve: {
            data: _profile_resolver__WEBPACK_IMPORTED_MODULE_7__["ProfilePageResolver"]
        }
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]],
        providers: [_profile_resolver__WEBPACK_IMPORTED_MODULE_7__["ProfilePageResolver"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase-auth.service */ "0+S0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _avatar_modal_avatar_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../avatar-modal/avatar-modal.page */ "3k/G");








let ProfilePage = class ProfilePage {
    constructor(router, route, authService, modalController) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.route.data
            .subscribe((result) => {
            this.user = result['data'];
        }, (err) => { });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _avatar_modal_avatar_modal_page__WEBPACK_IMPORTED_MODULE_7__["AvatarModalPage"]
            });
            return yield modal.present();
        });
    }
    signOut() {
        this.authService.signOut().subscribe(() => {
            // Sign-out successful.
            this.router.navigate(['sign-in']);
        }, (error) => {
            console.log('signout error', error);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], ProfilePage);



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"sign-in\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile-content\">\n  <ion-row class=\"user-details-wrapper\">\n    <ion-col size=\"6\" class=\"user-image-wrapper\">\n      <img class=\"user-image\" [src]=\"user.image\">\n    </ion-col>\n    <ion-col class=\"user-info-wrapper\" size=\"12\">\n      <h3>{{user.name}}</h3>\n      <p>{{user.description}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <h4>Mobile</h4>\n      <p>\n        {{user.phoneNumber}}\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4>Email</h4>\n      <p>\n        {{user.email}}\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4>Auth Provider</h4>\n      <p>\n        {{user.provider}}\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"signOut()\">Sign out</ion-button>\n      <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"openModal()\">Modal</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content> -->\n\n<!-- <ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"sign-in\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div class=\"container\">\n    <div class=\"split-pane-profile\">\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"3\" class=\"parent\">\n          <img class=\"child\" (click)=\"openModal()\" [src]=\"'assets/avatar_test.png'\">\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"6\">\n          <h3 class=\"profile-header-text\">Hi, Demarcus</h3>\n          <p class=\"profile-secondary-text\">\"The secret of getting ahead is getting started\" ~ Mark Twain</p>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-card>\n      <ion-row>\n        <ion-col size=\"2\" class=\"parent\">\n            <ion-icon class=\"child icon-style\" color=\"medium\" name=\"star\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-card-content>\n            Take the greatness assessment to unlock your potential\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      \n    </ion-card>\n    \n  </div>\n  \n\n</ion-content>");

/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: 100vh;\n}\n\n.split-pane-profile {\n  height: 30%;\n  background-color: #5ddfc1;\n}\n\n.spacer {\n  height: 20px;\n}\n\n.profile-header-text {\n  font-size: 25px;\n  color: black;\n}\n\n.profile-secondary-text {\n  font-size: 15px;\n  color: white;\n}\n\n.parent {\n  position: relative;\n}\n\n.child {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.icon-style {\n  padding: 10px;\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLGFBQUE7QUFERjs7QUFLQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VBRUUsZUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFPQTtFQUVFLGVBQUE7RUFDQSxZQUFBO0FBTEY7O0FBU0E7RUFDRSxrQkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcblxuICBoZWlnaHQ6IDEwMHZoO1xuXG59XG5cbi5zcGxpdC1wYW5lLXByb2ZpbGV7XG4gIGhlaWdodDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM1ZGRmYzE7XG59XG5cbi5zcGFjZXIge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5wcm9maWxlLWhlYWRlci10ZXh0IHtcblxuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG5cbn1cblxuLnByb2ZpbGUtc2Vjb25kYXJ5LXRleHQge1xuXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxufVxuXG4ucGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hpbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pY29uLXN0eWxlIHtcbiAgcGFkZGluZzoxMHB4O1xuICBmb250LXNpemU6IDUwcHg7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map