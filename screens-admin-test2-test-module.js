(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-test2-test-module"],{

/***/ "AYy1":
/*!******************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/test2/test.module.ts ***!
  \******************************************************************/
/*! exports provided: Test2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2Module", function() { return Test2Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-routing.module */ "Usw8");
/* harmony import */ var _test2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test2.component */ "JR3P");
/* harmony import */ var src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/badge/badge.module */ "WJ7A");
/* harmony import */ var src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/button/button.module */ "Iyou");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









// @ts-ignore


let Test2Module = class Test2Module {
};
Test2Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["Test2RoutingModule"],
            src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
        ],
        providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__["NgxImageCompressService"]],
        declarations: [_test2_component__WEBPACK_IMPORTED_MODULE_6__["Test2Component"]],
    })
], Test2Module);



/***/ }),

/***/ "Gz8Q":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/test2/test2.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isMobile\">\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <div class=\"header\">\n      <ion-title>Vos liens à partager</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Lien pour vos Clients</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Copiez ce lien et partagez-le avec vos clients pour qu'ils puissent commander en ligne\n            <ion-icon name=\"arrow-forward\" class=\"animated-arrow\" (click)=\"goToClientPage()\"></ion-icon>\n\n            <br><br>\n            <p>{{ urlClient }}</p>\n            <ion-button color=\"primary\" (click)=\"copyUrLClient()\">Copier</ion-button>\n             </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Lien pour vos préparateurs de commandes</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Copiez ce lien et partagez-le avec votre préparateur de commandes\n            <ion-icon name=\"arrow-forward\" class=\"animated-arrow\" (click)=\"goToPrepareCommand()\"></ion-icon>\n\n            <br><br>\n            <h3>{{ urlPreparCommand }}</h3>\n            <ion-button color=\"primary\" (click)=\"copyUrLPreparCommand()\">Copier</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <!--ion-col size=\"12\" size-md=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Vos codes QR</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Vous recevrez par e-mail vos codes QR pour vos tables dans les 24 heures suivant votre inscription\n          </ion-card-content>\n        </ion-card>\n      </ion-col-->\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n</div>\n<div class=\"versionPc\" *ngIf=\"!isMobile\">\n\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <div class=\"header\">\n        <ion-title>Vos liens à partager</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" size-md=\"6\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Lien pour vos Clients</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Copiez ce lien et partagez-le avec vos clients pour qu'ils puissent commander en ligne\n              <ion-icon name=\"arrow-forward\" class=\"animated-arrow\" (click)=\"goToClientPage()\"></ion-icon>\n\n              <br><br>\n              <p>{{ urlClient }}</p>\n              <ion-button color=\"primary\" (click)=\"copyUrLClient()\">Copier</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" size-md=\"6\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Lien pour vos préparateurs de commandes</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Copiez ce lien et partagez-le avec votre préparateur de commandes\n              <ion-icon name=\"arrow-forward\" class=\"animated-arrow\" (click)=\"goToPrepareCommand()\"></ion-icon>\n\n              <br><br>\n              <h3>{{ urlPreparCommand }}</h3>\n              <ion-button color=\"primary\" (click)=\"copyUrLPreparCommand()\">Copier</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <!--ion-col size=\"12\" size-md=\"6\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Vos codes QR</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Vous recevrez par e-mail vos codes QR pour vos tables dans les 24 heures suivant votre inscription\n            </ion-card-content>\n          </ion-card>\n        </ion-col-->\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n</div>\n");

/***/ }),

/***/ "JR3P":
/*!**********************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/test2/test2.component.ts ***!
  \**********************************************************************/
/*! exports provided: Test2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2Component", function() { return Test2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test2_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test2.component.html */ "Gz8Q");
/* harmony import */ var _test2_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test2.component.scss */ "ewst");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_servicesAuth/token-storage.service */ "1LJi");
/* harmony import */ var _services_canal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/canal.service */ "ib1Z");








let Test2Component = class Test2Component {
    constructor(router, toastController, token, canalService, platform) {
        this.router = router;
        this.toastController = toastController;
        this.token = token;
        this.canalService = canalService;
        this.platform = platform;
        this.isMobile = this.platform.is('mobile');
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
        this.setUserId();
        this.urlClient = 'https://smarteasyorders.com/client/menu?canal=Online&user=' + this.currentUser.id;
        this.urlPreparCommand = ' https://smarteasyorders.com/command/listing?user=' + this.currentUser.id;
    }
    goToClientPage() {
        const navigationExtras = {
            queryParams: { canal: 'Online', user: this.currentUser.id }
        };
        this.router.navigate(['/client/menu'], navigationExtras);
    }
    setUserId() {
        console.log('valeur de userid: ' + this.currentUser.id); // Affiche 'valeur'
        this.canalService.setUserId(this.currentUser.id);
    }
    goToPrepareCommand() {
        const navigationExtras = {
            queryParams: { user: this.currentUser.id }
        };
        this.router.navigate(['/command/listing'], navigationExtras);
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
                position: 'middle',
                color: 'success',
                cssClass: 'ion-text-center'
            });
            toast.present();
        });
    }
    copyUrLClient() {
        const textArea = document.createElement('textarea');
        textArea.value = this.urlClient;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('Texte copié :', this.urlClient);
        this.presentToast('Copier');
    }
    copyUrLPreparCommand() {
        const textArea = document.createElement('textarea');
        textArea.value = this.urlPreparCommand;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('Texte copié :', this.urlPreparCommand);
        this.presentToast('Copier');
    }
};
Test2Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
    { type: _services_canal_service__WEBPACK_IMPORTED_MODULE_7__["CanalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
Test2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test2',
        template: _raw_loader_test2_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test2_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Test2Component);



/***/ }),

/***/ "Usw8":
/*!**************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/test2/test-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: Test2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2RoutingModule", function() { return Test2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test2.component */ "JR3P");




const routes = [
    {
        path: '',
        component: _test2_component__WEBPACK_IMPORTED_MODULE_3__["Test2Component"]
    }
];
let Test2RoutingModule = class Test2RoutingModule {
};
Test2RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Test2RoutingModule);



/***/ }),

/***/ "ewst":
/*!************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/test2/test2.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nh2 {\n  text-align: center;\n  color: #0f8ff8;\n  padding: 0 20px;\n  font-size: 20px;\n  font-weight: bold;\n}\nion-toolbar {\n  text-align: center;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  margin-right: 0;\n}\nion-card {\n  margin: 10px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px #3c0a0a;\n}\nion-card img {\n  width: 50px;\n  height: 50px;\n}\nion-card-header {\n  text-align: center;\n}\nion-card-title {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\nion-card-content {\n  text-align: center;\n  color: #666;\n  padding: 0 20px;\n}\nion-content {\n  --ion-padding-bottom: 20px;\n  height: 1000px;\n}\nion-text-center {\n  text-align: center;\n}\n/* src/app/app.component.scss */\n.animated-arrow {\n  animation: colorChange 3s infinite;\n  /* Appliquer l'animation 'colorChange' avec une durée de 3 secondes en boucle */\n  font-size: 1.5rem;\n  /* Taille personnalisée pour l'icône */\n}\n@keyframes colorChange {\n  0% {\n    color: red;\n    /* Couleur au début de l'animation */\n  }\n  25% {\n    color: blue;\n    /* Couleur à 25% de l'animation */\n  }\n  50% {\n    color: green;\n    /* Couleur à 50% de l'animation */\n  }\n  75% {\n    color: orange;\n    /* Couleur à 75% de l'animation */\n  }\n  100% {\n    color: red;\n    /* Couleur à la fin de l'animation */\n  }\n}\n.versionPc {\n  margin: auto;\n  width: 900px;\n  /* Vous pouvez ajuster la largeur */\n  height: 900px;\n  /* Vous pouvez ajuster la hauteur */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRlc3QyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUdBO0VBQ0Usa0JBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBR0E7RUFDRSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFERjtBQUlBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0FBREY7QUFJQSwrQkFBQTtBQUVBO0VBQ0Usa0NBQUE7RUFBb0MsK0VBQUE7RUFDcEMsaUJBQUE7RUFBbUIsc0NBQUE7QUFBckI7QUFJQTtFQUNFO0lBQ0UsVUFBQTtJQUFZLG9DQUFBO0VBQWQ7RUFFQTtJQUNFLFdBQUE7SUFBYSxpQ0FBQTtFQUNmO0VBQ0E7SUFDRSxZQUFBO0lBQWMsaUNBQUE7RUFFaEI7RUFBQTtJQUNFLGFBQUE7SUFBZSxpQ0FBQTtFQUdqQjtFQURBO0lBQ0UsVUFBQTtJQUFZLG9DQUFBO0VBSWQ7QUFDRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFBYyxtQ0FBQTtFQUNkLGFBQUE7RUFBZSxtQ0FBQTtBQUlqQiIsImZpbGUiOiJ0ZXN0Mi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzBmOGZmODtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4ICMzYzBhMGE7XG59XG5cbmlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNjY2O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogMTAwMHB4O1xufVxuXG5pb24tdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzICovXG4uYW5pbWF0ZWQtYXJyb3cge1xuICBhbmltYXRpb246IGNvbG9yQ2hhbmdlIDNzIGluZmluaXRlO1xuICAvKiBBcHBsaXF1ZXIgbCdhbmltYXRpb24gJ2NvbG9yQ2hhbmdlJyBhdmVjIHVuZSBkdXLDqWUgZGUgMyBzZWNvbmRlcyBlbiBib3VjbGUgKi9cbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIC8qIFRhaWxsZSBwZXJzb25uYWxpc8OpZSBwb3VyIGwnaWPDtG5lICovXG59XG5cbkBrZXlmcmFtZXMgY29sb3JDaGFuZ2Uge1xuICAwJSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICAvKiBDb3VsZXVyIGF1IGTDqWJ1dCBkZSBsJ2FuaW1hdGlvbiAqL1xuICB9XG4gIDI1JSB7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgLyogQ291bGV1ciDDoCAyNSUgZGUgbCdhbmltYXRpb24gKi9cbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICAvKiBDb3VsZXVyIMOgIDUwJSBkZSBsJ2FuaW1hdGlvbiAqL1xuICB9XG4gIDc1JSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICAvKiBDb3VsZXVyIMOgIDc1JSBkZSBsJ2FuaW1hdGlvbiAqL1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgLyogQ291bGV1ciDDoCBsYSBmaW4gZGUgbCdhbmltYXRpb24gKi9cbiAgfVxufVxuLnZlcnNpb25QYyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDkwMHB4O1xuICAvKiBWb3VzIHBvdXZleiBhanVzdGVyIGxhIGxhcmdldXIgKi9cbiAgaGVpZ2h0OiA5MDBweDtcbiAgLyogVm91cyBwb3V2ZXogYWp1c3RlciBsYSBoYXV0ZXVyICovXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=screens-admin-test2-test-module.js.map