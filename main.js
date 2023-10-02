(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+kxF":
/*!********************************************************!*\
  !*** ./src/app/client1/services/authGoogle.service.ts ***!
  \********************************************************/
/*! exports provided: AuthGoogleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGoogleService", function() { return AuthGoogleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let AuthGoogleService = class AuthGoogleService {
    constructor(http) {
        this.http = http;
        this.googleClientId = '916196459844-b294aev0adu089na90kubash7usn66un.apps.googleusercontent.com';
        //private googleRedirectUri = 'http://localhost:4200/admin';
        this.googleRedirectUri = 'https://smarteasyorders.com/admin';
    }
    signInWithGoogle() {
        // eslint-disable-next-line max-len
        const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${this.googleClientId}&redirect_uri=${this.googleRedirectUri}&response_type=token&scope=openid%20email%20profile`;
        window.location.href = authUrl;
    }
    // Gérez la réponse de redirection et obtenez le token d'accès
    handleGoogleCallback() {
        return new Promise((resolve, reject) => {
            const token = window.location.hash.split('=')[1];
            if (token) {
                resolve(token);
            }
            else {
                reject('Token not found.');
            }
        });
    }
};
AuthGoogleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthGoogleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthGoogleService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yassi\Documents\GitHub\AppMobileRestaurant\app-food-delivery\app-food-delivery-Frontkend\src\main.ts */"zUnb");


/***/ }),

/***/ "0jJR":
/*!**************************************************!*\
  !*** ./projects/ngx-image-compress/src/index.ts ***!
  \**************************************************/
/*! exports provided: NgxImageCompressService, DOC_ORIENTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "igMy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxImageCompressService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgxImageCompressService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOC_ORIENTATION", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DOC_ORIENTATION"]; });




/***/ }),

/***/ "1LJi":
/*!****************************************************************!*\
  !*** ./src/app/client1/_servicesAuth/token-storage.service.ts ***!
  \****************************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
};
TokenStorageService.ctorParameters = () => [];
TokenStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "31Hj":
/*!***************************************************************************!*\
  !*** ./projects/ngx-image-compress/src/lib/ngx-image-compress.service.ts ***!
  \***************************************************************************/
/*! exports provided: NgxImageCompressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxImageCompressService", function() { return NgxImageCompressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _image_compress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-compress */ "J+vP");
/* harmony import */ var _models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/DOC_ORIENTATION */ "ncaX");




let NgxImageCompressService = class NgxImageCompressService {
    constructor(rendererFactory) {
        this.DOC_ORIENTATION = _models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_3__["DOC_ORIENTATION"];
        this.render = rendererFactory.createRenderer(null, null);
    }
    /**
     * helper to evaluate the compression rate
     * @param imgString the image in base64 string format
     */
    byteCount(image) {
        return _image_compress__WEBPACK_IMPORTED_MODULE_2__["ImageCompress"].byteCount(image);
    }
    /**
     * Get the correct Orientation value from image tags
     */
    getOrientation(file) {
        return _image_compress__WEBPACK_IMPORTED_MODULE_2__["ImageCompress"].getOrientation(file);
    }
    /**
     * return a promise with the new image data and image orientation
     * Nothing happen if no file have been selected
     */
    uploadFile() {
        return _image_compress__WEBPACK_IMPORTED_MODULE_2__["ImageCompress"].uploadFile(this.render, false);
    }
    /**
     * return a promise with an array of image data and image orientation
     * Nothing happen if no files have been selected
     */
    uploadMultipleFiles() {
        return _image_compress__WEBPACK_IMPORTED_MODULE_2__["ImageCompress"].uploadFile(this.render, true);
    }
    /**
     * return a promise with the new image data and image orientation
     * the promise will reject if no file have been selected
     */
    uploadFileOrReject() {
        return _image_compress__WEBPACK_IMPORTED_MODULE_2__["ImageCompress"].uploadFile(this.render, false, true);
    }
    /**
     * return a promise with an array of image data and image orientation
     * the promise will reject if no files have been selected
     */
    uploadMultipleFilesOrReject() {
        return _image_compress__WEBPACK_IMPORTED_MODULE_2__["ImageCompress"].uploadFile(this.render, true, true);
    }
    /**
   * perform a compression from the given DataUrl (string), provided by the uploadFile, or uploadMultipleFiles method
   *
   *
   | Parameter   | Type   | Description                                                                       |
   | ----------- | ------ | --------------------------------------------------------------------------------- |
   | image       | string | DataUrl (string) representing the image                                           |
   | orientation | number | EXIF Orientation value using the DOC_ORIENTATION enum value                       |
   | ratio       | number | Maximum scale factor as a percentage (optional, default: 50) <sup>[1](#fn1)</sup> |
   | quality     | number | JPEG quality factor as a percentage (optional, default: 50) <sup>[2](#fn2)</sup>  |
   | maxwidth    | number | Maximum width in pixels if you need to resize (optional, default: 0 - no resize)  |
   | maxheight   | number | Maximum height in pixels if you need to resize (optional, default: 0 - no resize) |
   */
    compressFile(image, orientation, ratio = 50, quality = 50, maxWidth = 0, maxHeight = 0) {
        return _image_compress__WEBPACK_IMPORTED_MODULE_2__["ImageCompress"].compress(image, orientation, this.render, ratio, quality, maxWidth, maxHeight);
    }
    /**
     * Most simple function to use here.
     * Perform an upload and return an image dataUrl (string format) with a maximum size, given in *MegaBytes*
     * If the size can't be reached, the best that can be reached will be returned in promise *rejection*
     * Put debugMode to true if you have some trouble to print some help using console.debug
     */
    uploadAndGetImageWithMaxSize(maxSizeMb = 1, debugMode = false) {
        return _image_compress__WEBPACK_IMPORTED_MODULE_2__["ImageCompress"].getImageMaxSize(maxSizeMb, debugMode, this.render);
    }
};
NgxImageCompressService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] }
];
NgxImageCompressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], NgxImageCompressService);



/***/ }),

/***/ "4iW5":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/register/register.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n\n  <div class=\"versionMobile\" *ngIf=\"isMobile\">\n    <div class=\"col-md-12\">\n      <div class=\"card card-container\">\n        <img\n          id=\"profile-img\"\n          src=\"assets/icon/icon_profil.jpg\"\n          class=\"profile-img-card\"\n        />\n        <form\n          *ngIf=\"!isSuccessful\"\n          name=\"form\"\n          (ngSubmit)=\"f.form.valid && onSubmit()\"\n          #f=\"ngForm\"\n          novalidate\n        >\n          <div class=\"form-field\">\n            <label [ngClass]=\"focused ? 'label-focused' : ''\">{{ 'USERNAME' | translate }}</label>\n            <input type=\"Text\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n\n                   class=\"form-control\"\n                   name=\"username\"\n                   [(ngModel)]=\"form.username\"\n                   required\n                   minlength=\"3\"\n                   maxlength=\"20\"\n                   #username=\"ngModel\"\n            />\n            <div class=\"alert-danger\" *ngIf=\"username.errors && f.submitted\">\n              <div *ngIf=\"username.errors.required\">{{ 'USERNAME_REQUIRED' | translate }}</div>\n              <div *ngIf=\"username.errors.minlength\">\n                {{ 'USERNAME_MIN_CARACTER' | translate }}\n              </div>\n              <div *ngIf=\"username.errors.maxlength\">\n                {{ 'USERNAME_MAX_CARACTER' | translate }}\n              </div>\n            </div>\n          </div>\n          <div class=\"form-field\">\n            <label [ngClass]=\"focused ? 'label-focused' : ''\">Email</label>\n            <input type=\"email\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n                   name=\"email\"\n                   [(ngModel)]=\"form.email\"\n                   required\n                   email\n                   #email=\"ngModel\"\n            />\n            <div class=\"alert-danger\" *ngIf=\"email.errors && f.submitted\">\n              <div *ngIf=\"email.errors.required\">{{ 'EMAIL_REQUIRED' | translate }}</div>\n              <div *ngIf=\"email.errors.email\">\n                {{ 'EMAIL_VALID' | translate }}\n              </div>\n            </div>\n          </div>\n          <div class=\"form-field\">\n            <label [ngClass]=\"focused ? 'label-focused' : ''\">{{ 'PASSWORD' | translate }}</label>\n            <input type=\"password\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n                   name=\"password\"\n                   [(ngModel)]=\"form.password\"\n                   required\n                   minlength=\"6\"\n                   #password=\"ngModel\"\n            />\n            <div class=\"alert-danger\" *ngIf=\"password.errors && f.submitted\">\n              <div *ngIf=\"password.errors.required\">{{ 'PASSWORD_REQUIRED' | translate }}</div>\n              <div *ngIf=\"password.errors.minlength\">\n                {{ 'PASSWORD_MIN_CARACTER' | translate }}\n              </div>\n            </div>\n          </div>\n\n          <ion-button expand='block' type=\"submit\">\n            {{ 'SINGUP' | translate }}\n          </ion-button>\n\n          <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n            {{ 'SIGNUP_FAILED' | translate }}!<br/>{{ errorMessage }}\n          </div>\n        </form>\n\n        <div class=\"alert-success\" *ngIf=\"isSuccessful\">\n          {{ 'REGISTRATION_SUCCESSFUL' | translate }}\n        </div>\n\n        <p class=\"backToLogin\">{{ 'ALREADY_HAVE_ACCOUNT' | translate }}  <a routerLink=\"/\">{{ 'LOGIN' | translate }}</a>\n        </p>\n\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"versionPc\" *ngIf=\"!isMobile\">\n    <div class=\"col-md-12\">\n      <div class=\"card card-container\">\n        <img\n          id=\"profile-img\"\n          src=\"assets/icon/icon_profil.jpg\"\n          class=\"profile-img-card\"\n        />\n        <form\n          *ngIf=\"!isSuccessful\"\n          name=\"form\"\n          (ngSubmit)=\"f.form.valid && onSubmit()\"\n          #f=\"ngForm\"\n          novalidate\n        >\n          <div class=\"form-field\">\n            <label [ngClass]=\"focused ? 'label-focused' : ''\">{{ 'USERNAME' | translate }}</label>\n            <input type=\"Text\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n\n                   class=\"form-control\"\n                   name=\"username\"\n                   [(ngModel)]=\"form.username\"\n                   required\n                   minlength=\"3\"\n                   maxlength=\"20\"\n                   #username=\"ngModel\"\n            />\n            <div class=\"alert-danger\" *ngIf=\"username.errors && f.submitted\">\n              <div *ngIf=\"username.errors.required\">{{ 'USERNAME_REQUIRED' | translate }}</div>\n              <div *ngIf=\"username.errors.minlength\">\n                {{ 'USERNAME_MIN_CARACTER' | translate }}\n              </div>\n              <div *ngIf=\"username.errors.maxlength\">\n                {{ 'USERNAME_MAX_CARACTER' | translate }}\n              </div>\n            </div>\n          </div>\n          <div class=\"form-field\">\n            <label [ngClass]=\"focused ? 'label-focused' : ''\">Email</label>\n            <input type=\"email\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n                   name=\"email\"\n                   [(ngModel)]=\"form.email\"\n                   required\n                   email\n                   #email=\"ngModel\"\n            />\n            <div class=\"alert-danger\" *ngIf=\"email.errors && f.submitted\">\n              <div *ngIf=\"email.errors.required\">{{ 'EMAIL_REQUIRED' | translate }}</div>\n              <div *ngIf=\"email.errors.email\">\n                {{ 'EMAIL_VALID' | translate }}\n              </div>\n            </div>\n          </div>\n          <div class=\"form-field\">\n            <label [ngClass]=\"focused ? 'label-focused' : ''\">{{ 'PASSWORD' | translate }}</label>\n            <input type=\"password\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n                   name=\"password\"\n                   [(ngModel)]=\"form.password\"\n                   required\n                   minlength=\"6\"\n                   #password=\"ngModel\"\n            />\n            <div class=\"alert-danger\" *ngIf=\"password.errors && f.submitted\">\n              <div *ngIf=\"password.errors.required\">{{ 'PASSWORD_REQUIRED' | translate }}</div>\n              <div *ngIf=\"password.errors.minlength\">\n                {{ 'PASSWORD_MIN_CARACTER' | translate }}\n              </div>\n            </div>\n          </div>\n\n          <ion-button expand='block' type=\"submit\">\n            {{ 'SINGUP' | translate }}\n          </ion-button>\n\n          <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n            {{ 'SIGNUP_FAILED' | translate }}!<br/>{{ errorMessage }}\n          </div>\n        </form>\n\n        <div class=\"alert-success\" *ngIf=\"isSuccessful\">\n          {{ 'REGISTRATION_SUCCESSFUL' | translate }}\n        </div>\n\n        <p class=\"backToLogin\">{{ 'ALREADY_HAVE_ACCOUNT' | translate }}  <a routerLink=\"/\">{{ 'LOGIN' | translate }}</a>\n        </p>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C/ZB":
/*!**********************************************************************!*\
  !*** ./src/app/client1/page-not-found/page-not-found.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".empty-command {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #c7c7c7;\n  text-align: center;\n}\n.empty-command ion-icon {\n  font-size: 8rem;\n}\n.empty-command p {\n  font-size: 1.8rem;\n}\n.title {\n  font-weight: 700;\n  color: #1f1f1f;\n  margin-bottom: 2rem;\n  padding-left: 1.6rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7QUFESjtBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBRkYiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktY29tbWFuZCB7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNjN2M3Yzc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA4cmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFmMWYxZjtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMS42cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "CFcS":
/*!*************************************************************************!*\
  !*** ./src/app/client1/page-not-found/page-not-found-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PageNotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutingModule", function() { return PageNotFoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
/*{
  path:'',
  component: LoginComponent,
},*/
];
let PageNotFoundRoutingModule = class PageNotFoundRoutingModule {
};
PageNotFoundRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageNotFoundRoutingModule);



/***/ }),

/***/ "FkdX":
/*!********************************************************************!*\
  !*** ./src/app/client1/page-not-found/page-not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "X00W");
/* harmony import */ var _page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component.scss */ "C/ZB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
PageNotFoundComponent.ctorParameters = () => [];
PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-not-found',
        template: _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "G/vE":
/*!*********************************************************!*\
  !*** ./src/app/client1/signup/signup-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "NUIx");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "iEHl");





const routes = [
    {
        path: 'singup',
        component: _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    },
];
let SignupRoutingModule = class SignupRoutingModule {
};
SignupRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupRoutingModule);



/***/ }),

/***/ "J+vP":
/*!***************************************************************!*\
  !*** ./projects/ngx-image-compress/src/lib/image-compress.ts ***!
  \***************************************************************/
/*! exports provided: ImageCompress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCompress", function() { return ImageCompress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/DOC_ORIENTATION */ "ncaX");


class ImageCompress {
}
ImageCompress.getOrientation = (file) => new Promise((resolve, reject) => {
    try {
        const reader = new FileReader();
        reader.onload = () => {
            const view = new DataView(reader.result);
            if (!view.byteLength) {
                return resolve(_models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].NotDefined);
            }
            if (view.getUint16(0, false) !== 0xffd8) {
                return resolve(_models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].NotDefined);
            }
            const length = view.byteLength;
            let offset = 2;
            while (offset < length) {
                const marker = view.getUint16(offset, false);
                offset += 2;
                if (marker === 0xffe1) {
                    if (view.getUint32((offset += 2), false) !== 0x45786966) {
                        return resolve(_models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].NotJpeg);
                    }
                    const little = view.getUint16((offset += 6), false) === 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    const tags = view.getUint16(offset, little);
                    offset += 2;
                    for (let i = 0; i < tags; i++) {
                        if (view.getUint16(offset + i * 12, little) === 0x0112) {
                            return resolve(view.getUint16(offset + i * 12 + 8, little));
                        }
                    }
                }
                else if ((marker & 0xff00) !== 0xff00) {
                    break;
                }
                else {
                    offset += view.getUint16(offset, false);
                }
            }
            return resolve(_models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].NotJpeg);
        };
        reader.readAsArrayBuffer(file);
    }
    catch (e) {
        return reject(_models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].Default);
    }
});
ImageCompress.uploadFile = (render, multiple = true, rejectOnCancel = false) => new Promise(function (resolve, reject) {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    Promise.resolve(isSafari)
        .then(onlyNative => {
        if (onlyNative) {
            return ImageCompress.generateUploadInputNative(window.document, multiple, rejectOnCancel);
        }
        else {
            return ImageCompress.generateUploadInputRenderer(render, multiple, rejectOnCancel);
        }
    })
        .then((filesList) => {
        const files = filesList ? Array.from(filesList) : [];
        const orientationPromises = files.map(file => ImageCompress.getOrientation(file));
        const readerPromises = files.map(file => ImageCompress.fileToDataURL(file));
        let orientationsResult = [];
        Promise.all(orientationPromises)
            .then((orientations) => {
            orientationsResult = orientations;
            return Promise.all(readerPromises);
        })
            .then(readerResult => {
            const resultArray = readerResult.map((parsedFile, index) => ({
                image: parsedFile.dataUrl,
                orientation: orientationsResult[index],
                fileName: parsedFile.fileName,
            }));
            if (multiple) {
                resolve(resultArray);
            }
            else {
                resolve(resultArray[0]);
            }
        });
    })
        .catch(err => reject(err));
});
ImageCompress.fileToDataURL = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            //myReader.onloadend = (progressEvent: ProgressEvent<FileReader>)
            resolve({ dataUrl: e.target.result, fileName: file.name });
        };
        try {
            reader.readAsDataURL(file);
        }
        catch (e) {
            reject(`ngx-image-compress - probably no file have been selected: ${e}`);
        }
    });
};
ImageCompress.generateUploadInputRenderer = (render, multiple = true, rejectOnCancel = false) => {
    let lock = false;
    return new Promise((resolve, reject) => {
        const inputElement = render.createElement('input');
        render.setStyle(inputElement, 'display', 'none');
        render.setProperty(inputElement, 'type', 'file');
        render.setProperty(inputElement, 'accept', 'image/*');
        if (multiple) {
            render.setProperty(inputElement, 'multiple', 'true');
        }
        render.listen(inputElement, 'click', ($event) => {
            $event.target.value = '';
        });
        render.listen(inputElement, 'change', $event => {
            lock = true;
            const files = $event.target.files;
            resolve(files);
        });
        if (rejectOnCancel) {
            window.addEventListener('focus', () => {
                setTimeout(() => {
                    if (!lock) {
                        reject(new Error('file upload on blur - no file selected'));
                    }
                }, 300);
            }, { once: true });
        }
        inputElement.click();
    });
};
ImageCompress.generateUploadInputNative = (documentNativeApi, multiple = true, rejectOnCancel = false) => {
    let lock = false;
    return new Promise((resolve, reject) => {
        const inputElement = documentNativeApi.createElement('input');
        inputElement.id = 'upload-input' + new Date();
        inputElement.style.display = 'none';
        inputElement.setAttribute('type', 'file');
        if (multiple) {
            inputElement.setAttribute('multiple', 'true');
        }
        documentNativeApi.body.appendChild(inputElement);
        inputElement.addEventListener('change', () => {
            lock = true;
            resolve(inputElement.files);
            documentNativeApi.body.removeChild(documentNativeApi.getElementById(inputElement.id));
        }, { once: true });
        if (rejectOnCancel) {
            window.addEventListener('focus', () => {
                setTimeout(() => {
                    if (!lock && documentNativeApi.getElementById(inputElement.id)) {
                        reject(new Error('file upload on blur - no file selected'));
                        documentNativeApi.body.removeChild(documentNativeApi.getElementById(inputElement.id));
                    }
                }, 300);
            }, { once: true });
        }
        // open file select box
        inputElement.click();
    });
};
ImageCompress.compress = (imageDataUrlSource, orientation, render, ratio = 50, quality = 50, maxwidth = 0, maxheight = 0) => new Promise(function (resolve, reject) {
    quality = quality / 100;
    ratio = ratio / 100;
    const sourceImage = new Image();
    // important for safari: we need to wait for onload event
    sourceImage.onload = () => {
        const canvas = render.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return reject(`No canvas context available`);
        }
        let w = sourceImage.naturalWidth;
        let h = sourceImage.naturalHeight;
        if (!CSS.supports('image-orientation', 'from-image')) {
            if (orientation === _models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].Right || orientation === _models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].Left) {
                const t = w;
                w = h;
                h = t;
            }
        }
        let xratio = maxwidth ? maxwidth / w : 1;
        let yratio = maxheight ? maxheight / h : 1;
        ratio = Math.min(ratio, xratio, yratio);
        canvas.width = w * ratio;
        canvas.height = h * ratio;
        const TO_RADIANS = Math.PI / 180;
        if (CSS.supports('image-orientation', 'from-image') || orientation === _models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].Up) {
            ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
        }
        else if (orientation === _models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].Right) {
            ctx.save();
            ctx.rotate(90 * TO_RADIANS);
            ctx.translate(0, -canvas.width);
            ctx.drawImage(sourceImage, 0, 0, canvas.height, canvas.width);
            ctx.restore();
        }
        else if (orientation === _models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].Left) {
            ctx.save();
            ctx.rotate(-90 * TO_RADIANS);
            ctx.translate(-canvas.width, 0);
            ctx.drawImage(sourceImage, 0, 0, canvas.height, canvas.width);
            ctx.restore();
        }
        else if (orientation === _models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"].Down) {
            ctx.save();
            ctx.rotate(180 * TO_RADIANS);
            ctx.translate(-canvas.width, -canvas.height);
            ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
            ctx.restore();
        }
        else {
            // no orientation value found - same as default UP
            ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
        }
        const mime = imageDataUrlSource.substr(5, imageDataUrlSource.split(';')[0].length - 5);
        // TODO test on mime
        const result = canvas.toDataURL(mime, quality);
        resolve(result);
    };
    sourceImage.onerror = e => reject(e);
    sourceImage.src = imageDataUrlSource;
});
ImageCompress.byteCount = (imgString) => encodeURI(imgString).split(/%..|./).length - 1;
ImageCompress.getImageMaxSize = (maxSizeMb, debugMode, render) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const MAX_TRIES = 10;
    const bytesToMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);
    if (debugMode) {
        console.debug('NgxImageCompress - Opening upload window');
    }
    let myFile = (yield ImageCompress.uploadFile(render, false));
    let compressedFile;
    for (let i = 0; i < MAX_TRIES; i++) {
        const previousSize = ImageCompress.byteCount(myFile.image);
        compressedFile = yield ImageCompress.compress(myFile.image, myFile.orientation, render, 50, 100);
        const newSize = ImageCompress.byteCount(compressedFile);
        console.debug('NgxImageCompress -', 'Compression from', bytesToMB(previousSize), 'MB to', bytesToMB(newSize), 'MB');
        if (newSize >= previousSize) {
            if (i === 0) {
                if (debugMode) {
                    console.debug('NgxImageCompress -', "File can't be reduced at all - returning the original", bytesToMB(previousSize), 'MB large');
                }
                throw myFile.image;
            }
            else {
                if (debugMode) {
                    console.debug('NgxImageCompress -', "File can't be reduced more - returning the best we can, which is ", bytesToMB(previousSize), 'MB large');
                }
                throw myFile.image;
            }
        }
        else {
            if (newSize < maxSizeMb * 1024 * 1024) {
                if (debugMode) {
                    console.debug('NgxImageCompress -', 'Here your file', bytesToMB(newSize), 'MB large');
                }
                return compressedFile;
            }
            else if (i === 9) {
                if (debugMode) {
                    console.debug('NgxImageCompress -', "File can't reach the desired size after", MAX_TRIES, 'tries. Returning file ', bytesToMB(previousSize), 'MB large');
                }
                throw myFile.image;
            }
        }
        if (debugMode) {
            console.debug('NgxImageCompress -', 'Reached', bytesToMB(newSize), 'MB large. Trying another time after', i + 1, 'times');
        }
        myFile.image = compressedFile;
    }
    if (debugMode) {
        console.debug('NgxImageCompress - Unexpected error');
    }
    throw '';
});


/***/ }),

/***/ "Kl89":
/*!*******************************************************!*\
  !*** ./src/app/client1/_servicesAuth/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const AUTH_API = 'http://192.168.0.246:8080/api/auth/';
const AUTH_API = 'https://oafish-orange-production.up.railway.app/api/auth/';
const httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(username, password) {
        return this.http.post(AUTH_API + 'signin', {
            username,
            password
        }, httpOptions);
    }
    register(username, email, password) {
        return this.http.post(AUTH_API + 'signup', {
            username,
            email,
            password
        }, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "LYbw":
/*!*******************************************************!*\
  !*** ./src/app/client1/login/login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup/signup.component */ "NUIx");




const routes = [
    /*{
      path:'',
      component: LoginComponent,
    },*/
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-home-admin-home-admin-module */ "admin-home-admin-home-admin-module").then(__webpack_require__.bind(null, /*! ../admin/home-admin/home-admin.module */ "/hBO")).then((m) => m.HomeAdminPageModule),
    },
    {
        path: 'client',
        loadChildren: () => Promise.all(/*! import() | client-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("client-home-home-module")]).then(__webpack_require__.bind(null, /*! ../client/home/home.module */ "RQM8")).then((m) => m.HomePageModule),
    },
    {
        path: 'command',
        loadChildren: () => Promise.all(/*! import() | command-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("command-home-home-module")]).then(__webpack_require__.bind(null, /*! ../command/home/home.module */ "ziKE")).then((m) => m.HomePageModule),
    },
    {
        path: 'singup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
    },
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginRoutingModule);



/***/ }),

/***/ "NFUa":
/*!*************************************************!*\
  !*** ./src/app/client1/signup/signup.module.ts ***!
  \*************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.component */ "NUIx");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-routing.module */ "G/vE");







 // Ou ReactiveFormsModule pour les formulaires réactifs
let SignupModule = class SignupModule {
};
SignupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        exports: [
            _signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
        ],
        declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]]
    })
], SignupModule);



/***/ }),

/***/ "NUIx":
/*!****************************************************!*\
  !*** ./src/app/client1/signup/signup.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "YNdI");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.scss */ "g/uR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/client.service */ "rMbE");







let SignupComponent = class SignupComponent {
    //email: string;
    //password: string;
    constructor(router, fb, clientService) {
        this.router = router;
        this.fb = fb;
        this.clientService = clientService;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.formGrp = this.fb.group({
            // email: ['techyaura@gmail.com', [Validators.required]],
            //  password: ['techyaura', [Validators.required]]
            //  },
            //    {
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    }
    login() {
        if (this.formGrp.valid) {
            console.log(this.formGrp.value);
            console.log('----', this.formGrp.get('email').value);
            // this.router.navigate(['/dashboard']);
        }
        else {
            console.log('cant be empty');
        }
    }
    saveClient() {
        const data = {
            name: this.formGrp.get('name').value,
            phone: this.formGrp.get('phone').value,
            email: this.formGrp.get('email').value,
            password: this.formGrp.get('password').value,
        };
        this.clientService.create(data)
            .subscribe(response => {
            console.log(response);
            window.location.reload();
            //this.router.navigate(['client1/admin/listing']);
        }, error => {
            console.log(error);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TVoR":
/*!***********************************************************************!*\
  !*** ./projects/ngx-image-compress/src/lib/models/upload-response.ts ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n<!--app-login></app-login-->\n");

/***/ }),

/***/ "X00W":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/page-not-found/page-not-found.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"empty-command\">\n    <h1>404 - Page Not Found</h1>\n    <p>The requested page could not be found.</p>\n  </div>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "YNdI":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/signup/signup.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <!--ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"backbtn\" routerLink=\"/welcome\" routerDirection=\"back\">\n        <img src=\"../../assets/back.svg\" />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar-->\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"ion-padding container\">\n    <h1>Sign Up</h1>\n\n    <div class=\"form-container\">\n      <form [formGroup]=\"formGrp\" (ngSubmit)=\"saveClient()\">\n        <ion-item>\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" formControlName=\"password\" required></ion-input>\n          <ion-icon name=\"eye\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-button expand=\"block\" class=\"main-button\"type=\"submit\">Sing up</ion-button>\n      </form>\n\n      <div class=\"sign-up\">\n        You have already an account?\n        <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/login\" routerDirection=\"forward\">\n          Sign In\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Z5wB":
/*!****************************************************!*\
  !*** ./src/app/client1/login/login.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.profile-img-card {\n  width: 150px;\n  height: 150px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\nh1 {\n  margin-top: 0.5rem;\n  margin-bottom: 10px;\n  font-size: 32px;\n  font-weight: 700;\n}\n\nh3 {\n  color: #939fab;\n  font-weight: 60;\n}\n\n.welcome {\n  color: #939fab;\n  font-weight: 60;\n  text-align: justify;\n}\n\n.footer-content {\n  text-align: center;\n}\n\nform .forgot-password-link {\n  text-decoration: none;\n  display: inline-block;\n  width: 100%;\n  text-align: right;\n  font-weight: 600;\n  font-size: 14px;\n  color: #4a4a4a;\n}\n\nform app-button {\n  display: block;\n  margin-top: 3rem;\n}\n\n.footer-text {\n  text-align: center;\n  font-size: 17px;\n  margin-top: 50%;\n}\n\n.footer-text a {\n  text-decoration: none;\n  font-weight: 600;\n  color: #fa578e;\n}\n\n.alert-danger {\n  color: red;\n  padding-top: 48px;\n  text-align: center;\n}\n\n.notSingUpYet {\n  color: red;\n  padding-top: 15px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.goToRegisterPage {\n  margin-top: 20px;\n}\n\n.form-field {\n  position: relative;\n  margin-bottom: 1rem;\n  height: 50px;\n}\n\n.form-field label {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  padding: 0 0.25rem;\n  color: #939fab;\n  font-size: 1rem;\n  transition: 0.3s;\n}\n\n.form-field input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  font-size: 17px;\n  font-weight: 600;\n  border: 2px solid #e7ebee;\n  border-radius: 10px;\n  outline: none;\n  padding: 1rem;\n  background: none;\n  z-index: 1;\n  color: #171c25;\n}\n\n.form-field input:focus {\n  border-color: #fa578e;\n}\n\n.form-field .label-focused {\n  top: -0.4rem;\n  left: 0.8rem;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #fff;\n  z-index: 10;\n}\n\nion-button {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --background: linear-gradient(\n      90deg,\n      rgba(250, 87, 142, 1) 0%,\n      rgba(254, 171, 142, 1) 100%\n  );\n  height: 48px;\n  font-size: 1rem;\n  color: #fff;\n  margin-bottom: 0.5rem;\n  text-transform: initial;\n}\n\n.btnGoogle {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --background: #ebeef4;\n  height: 48px;\n  font-size: 1rem;\n  color: #123681;\n  margin-bottom: 0.7rem;\n  text-transform: initial;\n}\n\n.btnGoogle ion-icon {\n  margin-right: 0.5rem;\n}\n\n.versionPc {\n  margin: auto;\n  width: 600px;\n  /* Vous pouvez ajuster la largeur */\n  height: 600px;\n  /* Vous pouvez ajuster la hauteur */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBR0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQU1FO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUpKOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUxGOztBQU9FO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFTQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFBYyxVQUFBO0VBQ1osaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTkY7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBUEo7O0FBVUU7RUFDRSxxQkFBQTtBQVJKOztBQVdFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFUSjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQTs7OztHQUFBO0VBS0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQVZGOztBQVlFO0VBQ0Usb0JBQUE7QUFWSjs7QUFjQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQWMsbUNBQUE7RUFDZCxhQUFBO0VBQWUsbUNBQUE7QUFUakIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICBjb2xvcjogIzkzOWZhYjtcclxuICBmb250LXdlaWdodDogNjA7XHJcbn1cclxuXHJcbi53ZWxjb21le1xyXG4gIGNvbG9yOiAjOTM5ZmFiO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRlbnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuZm9ybSB7XHJcblxyXG5cclxuICAuZm9yZ290LXBhc3N3b3JkLWxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICB9XHJcblxyXG4gIGFwcC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbi10b3A6IDUwJTtcclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmYTU3OGU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2Vye1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4ubm90U2luZ1VwWWV0e2NvbG9yOiByZWQ7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDt9XHJcblxyXG5cclxuLmdvVG9SZWdpc3RlclBhZ2V7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuMjVyZW07XHJcbiAgICBjb2xvcjogIzkzOWZhYjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3ZWJlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6ICMxNzFjMjU7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmYTU3OGU7XHJcbiAgfVxyXG5cclxuICAubGFiZWwtZm9jdXNlZCB7XHJcbiAgICB0b3A6IC0wLjRyZW07XHJcbiAgICBsZWZ0OiAwLjhyZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICA5MGRlZyxcclxuICAgICAgcmdiYSgyNTAsIDg3LCAxNDIsIDEpIDAlLFxyXG4gICAgICByZ2JhKDI1NCwgMTcxLCAxNDIsIDEpIDEwMCVcclxuICApO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcblxyXG4uYnRuR29vZ2xle1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWJlZWY0O1xyXG5cclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjMTIzNjgxO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udmVyc2lvblBje1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNjAwcHg7IC8qIFZvdXMgcG91dmV6IGFqdXN0ZXIgbGEgbGFyZ2V1ciAqL1xyXG4gIGhlaWdodDogNjAwcHg7IC8qIFZvdXMgcG91dmV6IGFqdXN0ZXIgbGEgaGF1dGV1ciAqL1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "tF4M");
/* harmony import */ var _client1_login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./client1/login/login.module */ "y8W6");
/* harmony import */ var _client1_signup_signup_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./client1/signup/signup.module */ "NFUa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _client1_page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./client1/page-not-found/page-not-found.module */ "qfOs");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _client1_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./client1/_helpers/auth.interceptor */ "hTbs");
// @ts-ignore








// @ts-ignore











// Fonction pour charger les fichiers de traduction
// eslint-disable-next-line @typescript-eslint/naming-convention,prefer-arrow/prefer-arrow-functions
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            /*TranslateModule.forRoot({
              loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json'),
                deps: [HttpClient]
              }
            }),*/
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                }
            }),
            _client1_login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginModule"], _client1_signup_signup_module__WEBPACK_IMPORTED_MODULE_13__["SignupModule"], _client1_page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundModule"]
        ],
        providers: [
            _client1_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["authInterceptorProviders"],
            ngx_image_compress__WEBPACK_IMPORTED_MODULE_8__["NgxImageCompressService"],
            _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_11__["Stripe"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_16__["GooglePlus"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aR2k":
/*!****************************************************************!*\
  !*** ./projects/ngx-image-compress/src/lib/models/data-url.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "g/uR":
/*!******************************************************!*\
  !*** ./src/app/client1/signup/signup.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.container h1 {\n  margin-top: 0;\n}\n\n.backbtn {\n  margin-left: 20px;\n}\n\n.form-container {\n  margin-top: 48px;\n}\n\n.form-container ion-item {\n  --padding-start: 0;\n  --border-color: #DADADA;\n}\n\n.form-container ion-item ion-label {\n  color: #A6A6A6;\n}\n\n.form-container ion-item ion-icon {\n  margin-top: auto;\n  color: #c6cbd4;\n}\n\n.form-container ion-button {\n  margin-top: 48px;\n}\n\n.sign-up {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sign-up ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw0QkFBQTtBQUFGOztBQUlBO0VBQ0UsMkJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7QUFERiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIHdpbGwgcmVtb3ZlIGlPUyBIZWFkZXIgTGluZVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gUmVtb3ZpbmcgQW5kcm9pZCBIZWFkZXIgTGluZVxyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyIGgxIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uYmFja2J0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNDhweDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1ib3JkZXItY29sb3I6ICNEQURBREE7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIGNvbG9yOiAjQTZBNkE2O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgY29sb3I6ICNjNmNiZDQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA0OHB4O1xyXG59XHJcblxyXG4uc2lnbi11cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2lnbi11cCBpb24tYnV0dG9uIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "hTbs":
/*!******************************************************!*\
  !*** ./src/app/client1/_helpers/auth.interceptor.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_servicesAuth/token-storage.service */ "1LJi");




const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
// const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            // for Spring Boot back-end
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            // for Node.js Express back-end
            // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "iEHl":
/*!**************************************************!*\
  !*** ./src/app/client1/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "w5QV");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "Z5wB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authGoogle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authGoogle.service */ "+kxF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_servicesAuth/token-storage.service */ "1LJi");
/* harmony import */ var _servicesAuth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_servicesAuth/auth.service */ "Kl89");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let LoginComponent = class LoginComponent {
    constructor(router, authGoogleService, authService, translate, tokenStorage, platform) {
        this.router = router;
        this.authGoogleService = authGoogleService;
        this.authService = authService;
        this.translate = translate;
        this.tokenStorage = tokenStorage;
        this.platform = platform;
        this.form = {
            username: null,
            password: null
        };
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.distance = 0;
        this.opt = 'signin';
        //translate.setDefaultLang('en');
        // Initialiser le service de traduction
        translate.setDefaultLang('fr'); // Langue par défaut
        // translate.use('fr'); // Utiliser la langue spécifiée
        this.isMobile = this.platform.is('mobile');
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
        }
        this.authGoogleService.handleGoogleCallback()
            .then(token => {
            console.log('this is the Token d\'accès /->:', token);
            // Ici, vous pouvez envoyer le token d'authentification au Backend
            this.router.navigate(['/dashboard']);
        })
            .catch(error => {
            console.error('Erreur lors de la récupération du token:', error);
        });
    }
    signInWithGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authGoogleService.signInWithGoogle();
        });
    }
    onLanguageChange(event) {
        this.translate.use(event.detail.value);
        //console.log(event.detail.value); // the value of the selected option
    }
    login() {
        this.router.navigate(['/dashboard']);
    }
    /* ---------------------- Login ------------------------*/
    onSubmit() {
        const { username, password } = this.form;
        this.authService.login(username, password).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.router.navigate(['/admin']);
            //this.reloadPage();
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
        this.router.navigate(['/dashboard']);
    }
    /*****************************************************/
    onBlur(event) {
        const value = event.target.value;
        if (!value) {
            this.focused = false;
        }
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    onTouchStart(event) {
        this.startY = event.touches[0].clientY;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    onTouchMove(event) {
        const currentY = event.touches[0].clientY;
        this.distance = Math.abs(currentY - this.startY);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    onTouchEnd(event) {
        if (this.distance >= 400) {
            // L'utilisateur a glissé d'une distance de 5 cm ou plus
            window.location.reload();
        }
        // Réinitialisez la distance
        this.distance = 0;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_authGoogle_service__WEBPACK_IMPORTED_MODULE_5__["AuthGoogleService"] },
    { type: _servicesAuth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] }
];
LoginComponent.propDecorators = {
    onTouchStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:touchstart', ['$event'],] }],
    onTouchMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:touchmove', ['$event'],] }],
    onTouchEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:touchend', ['$event'],] }]
};
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "igMy":
/*!*******************************************************!*\
  !*** ./projects/ngx-image-compress/src/public-api.ts ***!
  \*******************************************************/
/*! exports provided: NgxImageCompressService, DOC_ORIENTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_image_compress_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-image-compress.service */ "31Hj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxImageCompressService", function() { return _lib_ngx_image_compress_service__WEBPACK_IMPORTED_MODULE_0__["NgxImageCompressService"]; });

/* harmony import */ var _lib_models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models/DOC_ORIENTATION */ "ncaX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOC_ORIENTATION", function() { return _lib_models_DOC_ORIENTATION__WEBPACK_IMPORTED_MODULE_1__["DOC_ORIENTATION"]; });

/* harmony import */ var _lib_models_upload_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/upload-response */ "TVoR");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_models_data_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/data-url */ "aR2k");
/* empty/unused harmony star reexport *//*
 * Public API Surface of ngx-image-compress
 */






/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "n9B2":
/*!********************************************************!*\
  !*** ./src/app/client1/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "4iW5");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss */ "ttcH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicesAuth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_servicesAuth/auth.service */ "Kl89");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let RegisterComponent = class RegisterComponent {
    constructor(authService, platform) {
        this.authService = authService;
        this.platform = platform;
        this.form = {
            username: null,
            email: null,
            password: null
        };
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
        this.isMobile = this.platform.is('mobile');
    }
    ngOnInit() {
    }
    onSubmit() {
        const { username, email, password } = this.form;
        this.authService.register(username, email, password).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
    onBlur(event) {
        const value = event.target.value;
        if (!value) {
            this.focused = false;
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _servicesAuth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "ncaX":
/*!***********************************************************************!*\
  !*** ./projects/ngx-image-compress/src/lib/models/DOC_ORIENTATION.ts ***!
  \***********************************************************************/
/*! exports provided: DOC_ORIENTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOC_ORIENTATION", function() { return DOC_ORIENTATION; });
/**
 * EXIF tag standard reference
 *
 * Tag Name: Orientation
 * Tag ID: 0x0112
 * Writable: int16u
 * Group: IFD0
 * Values:
 1 = Horizontal (normal)
 2 = Mirror horizontal
 3 = Rotate 180
 4 = Mirror vertical
 5 = Mirror horizontal and rotate 270 CW
 6 = Rotate 90 CW
 7 = Mirror horizontal and rotate 90 CW
 8 = Rotate 270 CW
 */
var DOC_ORIENTATION;
(function (DOC_ORIENTATION) {
    DOC_ORIENTATION[DOC_ORIENTATION["Up"] = 1] = "Up";
    DOC_ORIENTATION[DOC_ORIENTATION["Down"] = 3] = "Down";
    DOC_ORIENTATION[DOC_ORIENTATION["Right"] = 6] = "Right";
    DOC_ORIENTATION[DOC_ORIENTATION["Left"] = 8] = "Left";
    DOC_ORIENTATION[DOC_ORIENTATION["UpMirrored"] = 2] = "UpMirrored";
    DOC_ORIENTATION[DOC_ORIENTATION["DownMirrored"] = 4] = "DownMirrored";
    DOC_ORIENTATION[DOC_ORIENTATION["LeftMirrored"] = 5] = "LeftMirrored";
    DOC_ORIENTATION[DOC_ORIENTATION["RightMirrored"] = 7] = "RightMirrored";
    DOC_ORIENTATION[DOC_ORIENTATION["Default"] = 0] = "Default";
    DOC_ORIENTATION[DOC_ORIENTATION["NotJpeg"] = -1] = "NotJpeg";
    DOC_ORIENTATION[DOC_ORIENTATION["NotDefined"] = -2] = "NotDefined";
})(DOC_ORIENTATION || (DOC_ORIENTATION = {}));


/***/ }),

/***/ "qfOs":
/*!*****************************************************************!*\
  !*** ./src/app/client1/page-not-found/page-not-found.module.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found.component */ "FkdX");
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found-routing.module */ "CFcS");







let PageNotFoundModule = class PageNotFoundModule {
};
PageNotFoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        exports: [
            _page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
        ],
        declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]]
    })
], PageNotFoundModule);



/***/ }),

/***/ "rMbE":
/*!****************************************************!*\
  !*** ./src/app/client1/services/client.service.ts ***!
  \****************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const baseUrl = 'http://192.168.0.246:8080/api/client';
const baseUrl = 'https://oafish-orange-production.up.railway.app/api/client';
let ClientService = class ClientService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    getClientId(id) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/${id}`);
    }
    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
    create(data) {
        return this.http.post(baseUrl, data);
    }
    update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    findByName(title) {
        return this.http.get(`${baseUrl}?name=${name}`);
    }
};
ClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ClientService);



/***/ }),

/***/ "ttcH":
/*!**********************************************************!*\
  !*** ./src/app/client1/register/register.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-img-card {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n  margin-top: 30px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  margin-top: 15%;\n  margin-bottom: 10px;\n  font-size: 32px;\n  font-weight: 700;\n}\n\nh3 {\n  color: #939fab;\n  font-weight: 600;\n}\n\nform {\n  margin-top: 2rem;\n  padding-right: 5%;\n  padding-left: 5%;\n}\n\nform .forgot-password-link {\n  text-decoration: none;\n  display: inline-block;\n  width: 100%;\n  text-align: right;\n  font-weight: 600;\n  font-size: 14px;\n  color: #4a4a4a;\n}\n\nform app-button {\n  display: block;\n  margin-top: 3rem;\n}\n\n.footer-text {\n  text-align: center;\n  font-size: 17px;\n  margin-top: 50%;\n}\n\n.footer-text a {\n  text-decoration: none;\n  font-weight: 600;\n  color: #fa578e;\n}\n\n.alert-danger {\n  color: red;\n  padding-top: 48px;\n  text-align: center;\n}\n\n.alert-success {\n  color: green;\n  text-align: center;\n  font-size: 35px;\n  font-weight: bold;\n}\n\n.alert-warning {\n  color: #ee3b3b;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.backToLogin {\n  margin-top: 20px;\n  padding-left: 5%;\n}\n\n.form-field {\n  position: relative;\n  margin-bottom: 1rem;\n  height: 50px;\n}\n\n.form-field label {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  padding: 0 0.25rem;\n  color: #939fab;\n  font-size: 1rem;\n  transition: 0.3s;\n}\n\n.form-field input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  font-size: 17px;\n  font-weight: 600;\n  border: 2px solid #e7ebee;\n  border-radius: 10px;\n  outline: none;\n  padding: 1rem;\n  background: none;\n  z-index: 1;\n  color: #171c25;\n}\n\n.form-field input:focus {\n  border-color: #fa578e;\n}\n\n.form-field .label-focused {\n  top: -0.4rem;\n  left: 0.8rem;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #fff;\n  z-index: 10;\n}\n\nion-button {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --background: linear-gradient(\n      90deg,\n      rgba(250, 87, 142, 1) 0%,\n      rgba(254, 171, 142, 1) 100%\n  );\n  height: 48px;\n  font-size: 1rem;\n  color: #fff;\n  margin-bottom: 0.5rem;\n  text-transform: initial;\n}\n\n.btnGoogle {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --background: #ebeef4;\n  height: 48px;\n  font-size: 1rem;\n  color: #123681;\n  margin-bottom: 0.7rem;\n  text-transform: initial;\n}\n\n.btnGoogle ion-icon {\n  margin-right: 0.5rem;\n}\n\n.versionPc {\n  margin: auto;\n  width: 500px;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBR0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBTUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxxQkFBQTtBQUpKOztBQU9FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFMSjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQTs7OztHQUFBO0VBS0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQU5GOztBQVFFO0VBQ0Usb0JBQUE7QUFOSjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVJGIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6ICM5MzlmYWI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG5cclxuICAuZm9yZ290LXBhc3N3b3JkLWxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICB9XHJcblxyXG4gIGFwcC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbi10b3A6IDUwJTtcclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmYTU3OGU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2Vye1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uYWxlcnQtc3VjY2Vzc3tcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFsZXJ0LXdhcm5pbmd7XHJcbiAgY29sb3I6ICNlZTNiM2I7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJhY2tUb0xvZ2lue1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG4uZm9ybS1maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG4gICAgdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xyXG4gICAgY29sb3I6ICM5MzlmYWI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlN2ViZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiAjMTcxYzI1O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmE1NzhlO1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsLWZvY3VzZWQge1xyXG4gICAgdG9wOiAtMC40cmVtO1xyXG4gICAgbGVmdDogMC44cmVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgOTBkZWcsXHJcbiAgICAgIHJnYmEoMjUwLCA4NywgMTQyLCAxKSAwJSxcclxuICAgICAgcmdiYSgyNTQsIDE3MSwgMTQyLCAxKSAxMDAlXHJcbiAgKTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxufVxyXG5cclxuLmJ0bkdvb2dsZXtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI2ViZWVmNDtcclxuXHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzEyMzY4MTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi52ZXJzaW9uUGMge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _client1_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client1/login/login.component */ "iEHl");
/* harmony import */ var _client1_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client1/register/register.component */ "n9B2");





const routes = [
    { path: 'login', component: _client1_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _client1_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | app-client1-admin-home-admin-home-admin-module */ "admin-home-admin-home-admin-module").then(__webpack_require__.bind(null, /*! ../app/client1/admin/home-admin/home-admin.module */ "/hBO")).then((m) => m.HomeAdminPageModule),
    },
    {
        path: 'client',
        loadChildren: () => Promise.all(/*! import() | app-client1-client-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("client-home-home-module")]).then(__webpack_require__.bind(null, /*! ../app/client1/client/home/home.module */ "RQM8")).then((m) => m.HomePageModule),
    },
    {
        path: 'command',
        loadChildren: () => Promise.all(/*! import() | app-client1-command-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("command-home-home-module")]).then(__webpack_require__.bind(null, /*! ../app/client1/command/home/home.module */ "ziKE")).then((m) => m.HomePageModule),
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        /*imports: [
          RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
        ],*/
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "w5QV":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n\n  <div *ngIf=\"isMobile\">\n  <div class=\"header\">\n    <h1>{{ 'WELCOME' | translate }}</h1>\n    <ion-item class=\"langueOption\">\n      <!--ion-label>Choisir votre langue</ion-label-->\n      <ion-select value=\"fr\" (ionChange)=\"onLanguageChange($event)\">\n        <ion-select-option value=\"fr\">Fr</ion-select-option>\n        <ion-select-option value=\"en\">En</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  <p class=\"welcome\">{{ 'SING_IN_TO_CONTINUE' | translate }}!</p>\n\n\n  <img\n    id=\"profile-img\"\n    src=\"assets/icon/icon_profil.jpg\"\n    class=\"profile-img-card\"\n  />\n  <form\n    *ngIf=\"!isLoggedIn\"\n    name=\"form\"\n    (ngSubmit)=\"f.form.valid && onSubmit()\"\n    #f=\"ngForm\"\n    novalidate\n  >\n\n    <div class=\"form-field\">\n      <label [ngClass]=\"focused ? 'label-focused' : ''\">{{ 'USERNAME' | translate }}</label>\n      <input type=\"Text\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n             name=\"username\"\n             [(ngModel)]=\"form.username\"\n             required\n             #username=\"ngModel\"\n      />\n      <div\n        class=\"alert alert-danger\"\n        role=\"alert\"\n        *ngIf=\"username.errors && f.submitted\"\n      >\n        {{ 'USERNAME_REQUIRED' | translate }}\n      </div>\n    </div>\n\n\n    <div class=\"form-field\">\n      <label [ngClass]=\"focused ? 'label-focused' : ''\">{{ 'PASSWORD' | translate }}</label>\n      <input type=\"password\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n             name=\"password\"\n             [(ngModel)]=\"form.password\"\n             required\n             minlength=\"6\"\n             #password=\"ngModel\"\n      />\n      <div\n        class=\"alert alert-danger\"\n        role=\"alert\"\n        *ngIf=\"password.errors && f.submitted\"\n      >\n        <div *ngIf=\"password.errors.required\">{{ 'PASSWORD_REQUIRED' | translate }}</div>\n        <div *ngIf=\"password.errors.minlength\">\n          {{ 'PASSWORD_MIN_CARACTER' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <a routerLink=\"#\" class=\"forgot-password-link\">{{ 'FORGOT_PASSWORD' | translate }} ?     </a>\n\n    <ion-button expand='block' type=\"submit\">\n      {{ 'LOGIN' | translate }}\n    </ion-button>\n\n    <!--ion-button class=\"btnGoogle\" expand='block' (click)=\"signInWithGoogle()\">\n      <ion-icon name='logo-google'></ion-icon>\n      {{ 'CONNECT_WITH_GOOGLE' | translate }}\n    </ion-button-->\n\n\n    <div class=\"form-group\">\n      <div\n        class=\"notSingUpYet\"\n        role=\"alert\"\n        *ngIf=\"f.submitted && isLoginFailed\"\n      >\n        {{ 'NOT_REGISTRED_YET' | translate }}\n      </div>\n    </div>\n\n  </form>\n  <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n    <br>\n    {{ 'ALREADY_CONNECTED' | translate }}\n    <br>\n    <a href=\"/admin\">{{ 'ACCESS_TO_COSTUMER_SPACE' | translate }}</a>\n  </div>\n\n  <p class=\"goToRegisterPage\"> {{ 'DO_NOT_HAVE_AN_ACCOUNT_YET' | translate }} ? <a routerLink=\"/register\">{{ 'SINGUP' | translate }}</a></p>\n\n  </div>\n  <div class=\"versionPc\" *ngIf=\"!isMobile\">\n    <div class=\"header\">\n      <h1>{{ 'WELCOME' | translate }}</h1>\n      <ion-item class=\"langueOption\">\n        <!--ion-label>Choisir votre langue</ion-label-->\n        <ion-select value=\"fr\" (ionChange)=\"onLanguageChange($event)\">\n          <ion-select-option value=\"fr\">Fr</ion-select-option>\n          <ion-select-option value=\"en\">En</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <p class=\"welcome\">{{ 'SING_IN_TO_CONTINUE' | translate }}!</p>\n\n\n    <img\n      id=\"profile-img\"\n      src=\"assets/icon/icon_profil.jpg\"\n      class=\"profile-img-card\"\n    />\n    <form\n      *ngIf=\"!isLoggedIn\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n\n      <div class=\"form-field\">\n        <label [ngClass]=\"focused ? 'label-focused' : ''\">{{ 'USERNAME' | translate }}</label>\n        <input type=\"Text\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n               name=\"username\"\n               [(ngModel)]=\"form.username\"\n               required\n               #username=\"ngModel\"\n        />\n        <div\n          class=\"alert alert-danger\"\n          role=\"alert\"\n          *ngIf=\"username.errors && f.submitted\"\n        >\n          {{ 'USERNAME_REQUIRED' | translate }}\n        </div>\n      </div>\n\n\n      <div class=\"form-field\">\n        <label [ngClass]=\"focused ? 'label-focused' : ''\">{{ 'PASSWORD' | translate }}</label>\n        <input type=\"password\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n               name=\"password\"\n               [(ngModel)]=\"form.password\"\n               required\n               minlength=\"6\"\n               #password=\"ngModel\"\n        />\n        <div\n          class=\"alert alert-danger\"\n          role=\"alert\"\n          *ngIf=\"password.errors && f.submitted\"\n        >\n          <div *ngIf=\"password.errors.required\">{{ 'PASSWORD_REQUIRED' | translate }}</div>\n          <div *ngIf=\"password.errors.minlength\">\n            {{ 'PASSWORD_MIN_CARACTER' | translate }}\n          </div>\n        </div>\n      </div>\n\n      <a routerLink=\"#\" class=\"forgot-password-link\">{{ 'FORGOT_PASSWORD' | translate }} ?     </a>\n\n      <ion-button expand='block' type=\"submit\">\n        {{ 'LOGIN' | translate }}\n      </ion-button>\n\n      <!--ion-button class=\"btnGoogle\" expand='block' (click)=\"signInWithGoogle()\">\n        <ion-icon name='logo-google'></ion-icon>\n        {{ 'CONNECT_WITH_GOOGLE' | translate }}\n      </ion-button-->\n\n\n      <div class=\"form-group\">\n        <div\n          class=\"notSingUpYet\"\n          role=\"alert\"\n          *ngIf=\"f.submitted && isLoginFailed\"\n        >\n          {{ 'NOT_REGISTRED_YET' | translate }}\n        </div>\n      </div>\n\n    </form>\n    <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n      <br>\n      {{ 'ALREADY_CONNECTED' | translate }}\n      <br>\n      <a href=\"/admin\">{{ 'ACCESS_TO_COSTUMER_SPACE' | translate }}</a>\n    </div>\n\n    <p class=\"goToRegisterPage\"> {{ 'DO_NOT_HAVE_AN_ACCOUNT_YET' | translate }} ? <a routerLink=\"/register\">{{ 'SINGUP' | translate }}</a></p>\n\n  </div>\n\n</ion-content>\n<footer>\n  <div class=\"footer-content\">\n    <p>&copy; 2023 SmartEasyOrders. All rights reserved.</p>\n  </div>\n</footer>\n");

/***/ }),

/***/ "y8W6":
/*!***********************************************!*\
  !*** ./src/app/client1/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "iEHl");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "LYbw");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register/register.component */ "n9B2");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
        ],
        exports: [
            _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        ],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]]
    })
], LoginModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map