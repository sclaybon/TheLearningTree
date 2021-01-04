(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"], {
    /***/
    "FuQ6":
    /*!*******************************************!*\
      !*** ./src/app/sign-in/sign-in.module.ts ***!
      \*******************************************/

    /*! exports provided: SignInPageModule */

    /***/
    function FuQ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInPageModule", function () {
        return SignInPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _sign_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sign-in.page */
      "WawN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]
      }];

      var SignInPageModule = function SignInPageModule() {
        _classCallCheck(this, SignInPageModule);
      };

      SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]]
      })], SignInPageModule);
      /***/
    },

    /***/
    "P3na":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function P3na(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content class=\"sign-in-content\">\n  <ion-row>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col>\n      <!-- <img [src]=\"'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png'\"> -->\n      <img [src]=\"'assets/Logo_Transparent.png'\">\n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n  </ion-row>\n  <div class=\"spacer\"></div>\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"signInWithEmail()\">\n    <ion-list class=\"inputs-list transparentBackground\" lines=\"full\" >\n      \n      <ion-item class=\"input-item\">\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\" color=\"transparent\">\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\n          <div class=\"error-message\" *ngIf=\"signInForm.get('email').hasError(validation.type) && (signInForm.get('email').dirty || signInForm.get('email').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item class=\"input-item\">\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\" *ngIf=\"signInForm.get('password').hasError(validation.type) && (signInForm.get('password').dirty || signInForm.get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      \n    </ion-list>\n\n    <ion-button  color=\"secondary\" class=\"sign-in-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!signInForm.valid\"> Sign In</ion-button>\n    <div class=\"error-container\" *ngIf=\"submitError\">\n      <div class=\"error-message\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ submitError }}</span>\n      </div>\n    </div>\n    <ion-row>\n      <ion-col size=\"4\"> <hr class=\"sign-in-hr\"> </ion-col>\n      <ion-col size=\"4\" > <span class=\"sign-in-text\"> or </span></ion-col>\n      <ion-col size=\"4\"> <hr class=\"sign-in-hr\"> </ion-col>\n    </ion-row>\n    <ion-button color=\"secondary\" class=\"sign-up-btn button-outline\" [routerLink]=\"['/sign-up']\" expand=\"block\" > Sign Up </ion-button>\n  </form>\n\n  <!-- <div class=\"social-auth-options\">\n    <p class=\"options-divider\">Or</p>\n    <ion-button class=\"social-auth-btn\" color=\"primary\" expand=\"block\" (click)=\"facebookSignIn()\">Facebook Sign In</ion-button>\n    <ion-button class=\"social-auth-btn google-auth-btn\" color=\"danger\" expand=\"block\" (click)=\"googleSignIn()\">Google Sign In</ion-button>\n    <ion-button class=\"social-auth-btn twitter-auth-btn\" color=\"secondary\" expand=\"block\" (click)=\"twitterSignIn()\">Twitter Sign In</ion-button>\n  </div> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "WawN":
    /*!*****************************************!*\
      !*** ./src/app/sign-in/sign-in.page.ts ***!
      \*****************************************/

    /*! exports provided: SignInPage */

    /***/
    function WawN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInPage", function () {
        return SignInPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sign-in.page.html */
      "P3na");
      /* harmony import */


      var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-in.page.scss */
      "i5US");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "0+S0");

      var SignInPage = /*#__PURE__*/function () {
        function SignInPage(angularFire, router, ngZone, authService) {
          var _this = this;

          _classCallCheck(this, SignInPage);

          this.angularFire = angularFire;
          this.router = router;
          this.ngZone = ngZone;
          this.authService = authService;
          this.validation_messages = {
            'email': [{
              type: 'required',
              message: 'Email is required.'
            }, {
              type: 'pattern',
              message: 'Enter a valid email.'
            }],
            'password': [{
              type: 'required',
              message: 'Password is required.'
            }, {
              type: 'minlength',
              message: 'Password must be at least 6 characters long.'
            }]
          };
          this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]))
          }); // Get firebase authentication redirect result invoken when using signInWithRedirect()
          // signInWithRedirect() is only used when client is in web but not desktop

          this.authRedirectResult = this.authService.getRedirectResult().subscribe(function (result) {
            if (result.user) {
              _this.redirectLoggedUserToProfilePage();
            } else if (result.error) {
              _this.submitError = result.error;
            }
          });
        } // Once the auth provider finished the authentication flow, and the auth redirect completes,
        // redirect the user to the profile page


        _createClass(SignInPage, [{
          key: "redirectLoggedUserToProfilePage",
          value: function redirectLoggedUserToProfilePage() {
            var _this2 = this;

            // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
            // That's why we need to wrap the router navigation call inside an ngZone wrapper
            this.ngZone.run(function () {
              _this2.router.navigate(['profile']);
            });
          }
        }, {
          key: "signInWithEmail",
          value: function signInWithEmail() {
            var _this3 = this;

            this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password']).then(function (user) {
              // navigate to user profile
              _this3.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              _this3.submitError = error.message;
            });
          }
        }, {
          key: "facebookSignIn",
          value: function facebookSignIn() {
            var _this4 = this;

            this.authService.signInWithFacebook().then(function (result) {
              if (result.additionalUserInfo) {
                _this4.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
              } // This gives you a Facebook Access Token. You can use it to access the Facebook API.
              // const token = result.credential.accessToken;
              // The signed-in user info is in result.user;


              _this4.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              // Handle Errors here.
              console.log(error);
            });
          }
        }, {
          key: "googleSignIn",
          value: function googleSignIn() {
            var _this5 = this;

            this.authService.signInWithGoogle().then(function (result) {
              if (result.additionalUserInfo) {
                _this5.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
              } // This gives you a Google Access Token. You can use it to access the Google API.
              // const token = result.credential.accessToken;
              // The signed-in user info is in result.user;


              _this5.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              // Handle Errors here.
              console.log(error);
            });
          }
        }, {
          key: "twitterSignIn",
          value: function twitterSignIn() {
            var _this6 = this;

            this.authService.signInWithTwitter().then(function (result) {
              if (result.additionalUserInfo) {
                _this6.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
              } // This gives you a Twitter Access Token. You can use it to access the Twitter API.
              // const token = result.credential.accessToken;
              // The signed-in user info is in result.user;


              _this6.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              // Handle Errors here.
              console.log(error);
            });
          }
        }]);

        return SignInPage;
      }();

      SignInPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]
        }];
      };

      SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]])], SignInPage);
      /***/
    },

    /***/
    "i5US":
    /*!*******************************************!*\
      !*** ./src/app/sign-in/sign-in.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function i5US(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sign-in-content {\n  --ion-background-color:linear-gradient(#5ddfc1, #ffffff 50%);\n  text-align: center;\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.sign-in-content .transparentBackground {\n  background-color: #00000000;\n}\n.sign-in-content ion-item {\n  --ion-text-color: #757575;\n  --border-color: #757575;\n}\n.sign-in-content .auth-title {\n  font-weight: bold;\n  margin-bottom: 64px;\n  letter-spacing: 0.6px;\n}\n.sign-in-content .social-auth-options .options-divider {\n  text-align: center;\n}\n.sign-in-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.sign-in-content .error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.sign-in-content .error-container .error-message ion-icon {\n  font-size: 16px;\n  -webkit-padding-end: 8px;\n          padding-inline-end: 8px;\n}\n.sign-in-content .sign-in-btn {\n  margin: 16px 0px;\n}\n.sign-in-content .sign-up-btn {\n  margin: 16px 0px;\n}\n.sign-in-content .sign-in-hr {\n  background-color: var(--ion-color-medium);\n}\n.sign-in-content .sign-in-text {\n  color: var(--ion-color-medium);\n}\n.sign-in-content .spacer {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDREQUFBO0VBWUEsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVhGO0FBSEU7RUFDRSwyQkFBQTtBQUtKO0FBRkU7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0FBSUo7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUpKO0FBUUk7RUFDQSxrQkFBQTtBQU5KO0FBV0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFUTjtBQWNJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFaTjtBQWNNO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUFaUjtBQWlCRTtFQUNFLGdCQUFBO0FBZko7QUFrQkU7RUFDRSxnQkFBQTtBQWhCSjtBQW1CRTtFQUNFLHlDQUFBO0FBakJKO0FBb0JFO0VBQ0UsOEJBQUE7QUFsQko7QUFxQkU7RUFDRSxZQUFBO0FBbkJKIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLWluLWNvbnRlbnQge1xuXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6bGluZWFyLWdyYWRpZW50KCM1ZGRmYzEsICNmZmZmZmYgNTAlKTtcblxuICAudHJhbnNwYXJlbnRCYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDBcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0taW9uLXRleHQtY29sb3I6ICM3NTc1NzU7XG4gICAgLS1ib3JkZXItY29sb3I6ICM3NTc1NzU7XG4gIH1cbiAgXG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG5cbiAgLmF1dGgtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICB9XG5cbiAgLnNvY2lhbC1hdXRoLW9wdGlvbnMge1xuICAgIC5vcHRpb25zLWRpdmlkZXIge1xuICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5pbnB1dHMtbGlzdCB7XG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLmVycm9yLWNvbnRhaW5lciB7XG4gICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNpZ24taW4tYnRuIHtcbiAgICBtYXJnaW46IDE2cHggMHB4O1xuICB9XG5cbiAgLnNpZ24tdXAtYnRuIHtcbiAgICBtYXJnaW46IDE2cHggMHB4O1xuICB9XG5cbiAgLnNpZ24taW4taHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG5cbiAgLnNpZ24taW4tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG5cbiAgLnNwYWNlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=sign-in-sign-in-module-es5.js.map