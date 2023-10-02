(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-profil-profil-module"],{

/***/ "5uX2":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/profil/profil.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"versionMobile\" *ngIf=\"isMobile\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <div class=\"header\">\n        <ion-title>Profil</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\">\n\n\n\n          <ion-card>\n            <ion-card-header>\n              <!--ion-card-title>Votre informations</ion-card-title-->\n\n              <img\n                src=\"assets/icon/icon_profil2.jpg\"\n                class=\"profile-img-card\"\n              />\n\n            </ion-card-header>\n            <ion-card-content>\n\n\n              <div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n                <header class=\"jumbotron\">\n                  <!--p>\n                    <strong>Id:</strong>\n                    {{ currentUser.id }}\n                  </p-->\n\n                  <h3>\n                    <strong>Nom:</strong> {{ currentUser.username }}\n                  </h3>\n                </header>\n                <!--p>\n                  <strong>Token:</strong>\n                  {{ currentUser.accessToken.substring(0, 20) }} ...\n                  {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n                </p-->\n                <br>\n                <p>\n                  <strong>Email:</strong>\n                  {{ currentUser.email }}\n                </p>\n                <br>\n              </div>\n\n              <ng-template #loggedOut>\n                Please login.\n              </ng-template>\n            </ion-card-content>\n          </ion-card>\n\n\n          <ion-button color=\"danger\" expand=\"full\" (click)=\"logout()\" routerLink=\"\">logout</ion-button>\n\n\n\n\n  </ion-content>\n</div>\n\n\n<div class=\"versionPc\" *ngIf=\"!isMobile\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <div class=\"header\">\n        <ion-title>Profil</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" size-md=\"6\">\n          <ion-card>\n            <ion-card-header>\n              <!--ion-card-title>Votre informations</ion-card-title-->\n\n              <img\n                src=\"assets/icon/icon_profil2.jpg\"\n                class=\"profile-img-card\"\n              />\n\n            </ion-card-header>\n            <ion-card-content>\n\n\n              <div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n                <header class=\"jumbotron\">\n                  <!--p>\n                    <strong>Id:</strong>\n                    {{ currentUser.id }}\n                  </p-->\n\n                  <h3>\n                    <strong>Nom:</strong> {{ currentUser.username }}\n                  </h3>\n                </header>\n                <!--p>\n                  <strong>Token:</strong>\n                  {{ currentUser.accessToken.substring(0, 20) }} ...\n                  {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n                </p-->\n                <br>\n                <p>\n                  <strong>Email:</strong>\n                  {{ currentUser.email }}\n                </p>\n                <br>\n              </div>\n\n              <ng-template #loggedOut>\n                Please login.\n              </ng-template>\n            </ion-card-content>\n          </ion-card>\n          <ion-button color=\"danger\" expand=\"full\" (click)=\"logout()\" routerLink=\"\">logout</ion-button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n</div>\n");

/***/ }),

/***/ "B2EX":
/*!**************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/profil/profil.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nh2 {\n  text-align: center;\n  color: #0f8ff8;\n  padding: 0 20px;\n  font-size: 20px;\n  font-weight: bold;\n}\nion-toolbar {\n  text-align: center;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  margin-right: 0;\n}\nion-card {\n  border-radius: 10px;\n  box-shadow: 0 4px 8px #5a0a0a;\n}\nion-card img {\n  width: 50px;\n  height: 50px;\n}\nion-card-header {\n  text-align: center;\n}\nion-card-header .profile-img-card {\n  width: 150px;\n  height: 150px;\n}\nion-card-title {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\nion-card-content {\n  text-align: center;\n  color: #666;\n  padding: 0 20px;\n  width: 100%;\n}\nion-content {\n  height: 1000px;\n}\nion-text-center {\n  text-align: center;\n}\n/* src/app/app.component.scss */\n.animated-arrow {\n  animation: colorChange 3s infinite;\n  /* Appliquer l'animation 'colorChange' avec une durée de 3 secondes en boucle */\n  font-size: 1.5rem;\n  /* Taille personnalisée pour l'icône */\n}\n@keyframes colorChange {\n  0% {\n    color: red;\n    /* Couleur au début de l'animation */\n  }\n  25% {\n    color: blue;\n    /* Couleur à 25% de l'animation */\n  }\n  50% {\n    color: green;\n    /* Couleur à 50% de l'animation */\n  }\n  75% {\n    color: orange;\n    /* Couleur à 75% de l'animation */\n  }\n  100% {\n    color: red;\n    /* Couleur à la fin de l'animation */\n  }\n}\n.versionPc {\n  margin: auto;\n  width: 600px;\n  /* Vous pouvez ajuster la largeur */\n  height: 600px;\n  /* Vous pouvez ajuster la hauteur */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2ZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBRjtBQUdBO0VBRUUsbUJBQUE7RUFDQSw2QkFBQTtBQURGO0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZGO0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBSUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUZKO0FBTUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBSEY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSkY7QUFRQTtFQUNFLGNBQUE7QUFMRjtBQVdBO0VBQ0Usa0JBQUE7QUFSRjtBQVdBLCtCQUFBO0FBRUE7RUFDRSxrQ0FBQTtFQUFvQywrRUFBQTtFQUNwQyxpQkFBQTtFQUFtQixzQ0FBQTtBQVByQjtBQVdBO0VBQ0U7SUFDRSxVQUFBO0lBQVksb0NBQUE7RUFQZDtFQVNBO0lBQ0UsV0FBQTtJQUFhLGlDQUFBO0VBTmY7RUFRQTtJQUNFLFlBQUE7SUFBYyxpQ0FBQTtFQUxoQjtFQU9BO0lBQ0UsYUFBQTtJQUFlLGlDQUFBO0VBSmpCO0VBTUE7SUFDRSxVQUFBO0lBQVksb0NBQUE7RUFIZDtBQUNGO0FBT0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUFjLG1DQUFBO0VBQ2QsYUFBQTtFQUFlLG1DQUFBO0FBSGpCIiwiZmlsZSI6InByb2ZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzBmOGZmODtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAjNWEwYTBhO1xufVxuXG5pb24tY2FyZCBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY2FyZC1oZWFkZXIgLnByb2ZpbGUtaW1nLWNhcmQge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY2NjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMDBweDtcbn1cblxuaW9uLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyAqL1xuLmFuaW1hdGVkLWFycm93IHtcbiAgYW5pbWF0aW9uOiBjb2xvckNoYW5nZSAzcyBpbmZpbml0ZTtcbiAgLyogQXBwbGlxdWVyIGwnYW5pbWF0aW9uICdjb2xvckNoYW5nZScgYXZlYyB1bmUgZHVyw6llIGRlIDMgc2Vjb25kZXMgZW4gYm91Y2xlICovXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICAvKiBUYWlsbGUgcGVyc29ubmFsaXPDqWUgcG91ciBsJ2ljw7RuZSAqL1xufVxuXG5Aa2V5ZnJhbWVzIGNvbG9yQ2hhbmdlIHtcbiAgMCUge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgLyogQ291bGV1ciBhdSBkw6lidXQgZGUgbCdhbmltYXRpb24gKi9cbiAgfVxuICAyNSUge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIC8qIENvdWxldXIgw6AgMjUlIGRlIGwnYW5pbWF0aW9uICovXG4gIH1cbiAgNTAlIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgLyogQ291bGV1ciDDoCA1MCUgZGUgbCdhbmltYXRpb24gKi9cbiAgfVxuICA3NSUge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgLyogQ291bGV1ciDDoCA3NSUgZGUgbCdhbmltYXRpb24gKi9cbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIC8qIENvdWxldXIgw6AgbGEgZmluIGRlIGwnYW5pbWF0aW9uICovXG4gIH1cbn1cbi52ZXJzaW9uUGMge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2MDBweDtcbiAgLyogVm91cyBwb3V2ZXogYWp1c3RlciBsYSBsYXJnZXVyICovXG4gIGhlaWdodDogNjAwcHg7XG4gIC8qIFZvdXMgcG91dmV6IGFqdXN0ZXIgbGEgaGF1dGV1ciAqL1xufSJdfQ== */");

/***/ }),

/***/ "FYV5":
/*!*********************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/profil/profil.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilModule", function() { return ProfilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profil-routing.module */ "hXDQ");
/* harmony import */ var _profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profil.component */ "w0jh");
/* harmony import */ var src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/badge/badge.module */ "WJ7A");
/* harmony import */ var src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/button/button.module */ "Iyou");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









// @ts-ignore


let ProfilModule = class ProfilModule {
};
ProfilModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profil_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilRoutingModule"],
            src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
        ],
        providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__["NgxImageCompressService"]],
        declarations: [_profil_component__WEBPACK_IMPORTED_MODULE_6__["ProfilComponent"]],
    })
], ProfilModule);



/***/ }),

/***/ "hXDQ":
/*!*****************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/profil/profil-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilRoutingModule", function() { return ProfilRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profil.component */ "w0jh");




const routes = [
    {
        path: '',
        component: _profil_component__WEBPACK_IMPORTED_MODULE_3__["ProfilComponent"]
    }
];
let ProfilRoutingModule = class ProfilRoutingModule {
};
ProfilRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilRoutingModule);



/***/ }),

/***/ "w0jh":
/*!************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/profil/profil.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profil.component.html */ "5uX2");
/* harmony import */ var _profil_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil.component.scss */ "B2EX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_servicesAuth/token-storage.service */ "1LJi");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");








let ProfilComponent = class ProfilComponent {
    constructor(router, toastController, token, platform) {
        this.router = router;
        this.toastController = toastController;
        this.token = token;
        this.platform = platform;
        this.urlClient = 'https://smarteasyorders.com/client/listing?canal=Online';
        this.urlPreparCommand = ' https://smarteasyorders.com/command/listing';
        this.isMobile = this.platform.is('mobile');
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
    }
    goToClientPage() {
        const navigationExtras = {
            queryParams: { canal: 'Online' }
        };
        this.router.navigate(['/client'], navigationExtras);
        //this.router.navigate(['/client/listing?canal=Online']);
    }
    goToPrepareCommand() {
        this.router.navigate(['/command']);
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
    /*logout(): void {
      this.token.signOut();
      window.location.reload();
      this.router.navigate(['/']);
    }*/
    logout() {
        // Simulate an async operation (e.g., API call) with a delay using RxJS
        const asyncOperation = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(new Promise(resolve => {
            setTimeout(() => {
                // After the delay, reload the page
                this.token.signOut();
                window.location.reload();
                // After the reload, navigate to the home page
                this.router.navigate(['/']);
                resolve(); // Complete the async operation
            }, 1000); // Simulated delay of 1 second
        }));
    }
};
ProfilComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
ProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profil',
        template: _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profil_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilComponent);



/***/ })

}]);
//# sourceMappingURL=screens-admin-profil-profil-module.js.map