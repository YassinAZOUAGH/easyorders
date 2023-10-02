(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-settings-settings-module"],{

/***/ "5Ucl":
/*!*************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/settings/settings.module.ts ***!
  \*************************************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "WKgY");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.component */ "Hzk7");
/* harmony import */ var src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/badge/badge.module */ "WJ7A");
/* harmony import */ var src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/button/button.module */ "Iyou");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









// @ts-ignore


let SettingsModule = class SettingsModule {
};
SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsRoutingModule"],
            src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
        ],
        providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__["NgxImageCompressService"]],
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]],
    })
], SettingsModule);



/***/ }),

/***/ "Go4o":
/*!******************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/settings/settings.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* welcome.component.css */\n/* Style général de la page */\ndiv {\n  text-align: center;\n  margin: 20px;\n}\nh2 {\n  font-size: 24px;\n  margin-bottom: 20px;\n}\nform {\n  max-width: 400px;\n  margin: 0 auto;\n}\n/* Style des étiquettes et des champs de saisie */\nlabel {\n  display: block;\n  margin-bottom: 5px;\n}\nselect, input[type=number] {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n}\n/* Style des options de la liste déroulante */\nselect {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-repeat: no-repeat;\n  background-position: right center;\n}\n/* Style des boutons radio */\ninput[type=radio] {\n  margin-right: 5px;\n}\n/* Bouton de soumission */\nbutton[type=submit] {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 18px;\n  cursor: pointer;\n}\nbutton[type=submit]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQiwwQkFBQTtBQUVBLDZCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUEsaURBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUVBLDZDQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFFQSw0QkFBQTtFQUNBLGlDQUFBO0FBQUY7QUFHQSw0QkFBQTtBQUNBO0VBQ0UsaUJBQUE7QUFBRjtBQUdBLHlCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0FBQUYiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiB3ZWxjb21lLmNvbXBvbmVudC5jc3MgKi9cbi8qIFN0eWxlIGfDqW7DqXJhbCBkZSBsYSBwYWdlICovXG5kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmZvcm0ge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogU3R5bGUgZGVzIMOpdGlxdWV0dGVzIGV0IGRlcyBjaGFtcHMgZGUgc2Fpc2llICovXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbnNlbGVjdCwgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBTdHlsZSBkZXMgb3B0aW9ucyBkZSBsYSBsaXN0ZSBkw6lyb3VsYW50ZSAqL1xuc2VsZWN0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbn1cblxuLyogU3R5bGUgZGVzIGJvdXRvbnMgcmFkaW8gKi9cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi8qIEJvdXRvbiBkZSBzb3VtaXNzaW9uICovXG5idXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b25bdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbn0iXX0= */");

/***/ }),

/***/ "Hzk7":
/*!****************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/settings/settings.component.ts ***!
  \****************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "WxP/");
/* harmony import */ var _settings_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component.scss */ "Go4o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_servicesAuth/token-storage.service */ "1LJi");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/settings.service */ "Iy21");






let SettingsComponent = class SettingsComponent {
    constructor(token, settingsService) {
        this.token = token;
        this.settingsService = settingsService;
        // Propriétés pour stocker les données sélectionnées par l'utilisateur
        this.selectedLanguage = 'fr';
        this.selectedCurrency = 'euro';
        this.selectedBusiness = 'hotel';
        this.numRooms = 0;
        this.numTables = 0;
        // Options pour la nature de l'entreprise
        this.businessOptions = [
            { label: 'Restaurant', value: 'restaurant' },
            { label: 'Café', value: 'cafe' },
            { label: 'Hôtel', value: 'hotel' }
        ];
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
    }
    // Méthode pour gérer la soumission du formulaire
    onSubmit() {
        // Vous pouvez envoyer les données au backend ou effectuer d'autres actions ici
        console.log('Données soumises :', {
            selectedLanguage: this.selectedLanguage,
            selectedCurrency: this.selectedCurrency,
            selectedBusiness: this.selectedBusiness,
            numRooms: this.numRooms,
            numTables: this.numTables
        });
        const data = {
            language: this.selectedLanguage,
            currency: this.selectedCurrency,
            natureCompany: this.selectedBusiness,
            tableRoomNumber: this.numRooms,
        };
        this.settingsService.create(data)
            .subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
            console.log('Votre settings est pas enregistré');
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }
];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsComponent);



/***/ }),

/***/ "Iy21":
/*!******************************************************!*\
  !*** ./src/app/client1/services/settings.service.ts ***!
  \******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const baseUrl = 'http://192.168.0.246:8080/api/admin/settings';
const baseUrl = 'https://oafish-orange-production.up.railway.app/api/admin/categories';
let SettingsService = class SettingsService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(baseUrl);
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
};
SettingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SettingsService);



/***/ }),

/***/ "WKgY":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/settings/settings-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "Hzk7");




const routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsRoutingModule);



/***/ }),

/***/ "WxP/":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/settings/settings.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Bienvenue {{ currentUser.username }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h2>Dernière étape pour commencer!</h2>\n  <p>Pour mieux vous aider, veuillez choisir les informations qui conviennent votre business</p>\n  <ion-list>\n    <!-- Langue -->\n    <ion-item>\n      <ion-label>Langue</ion-label>\n      <ion-select [(ngModel)]=\"selectedLanguage\">\n        <ion-select-option value=\"fr\">Français</ion-select-option>\n        <ion-select-option value=\"en\">Anglais</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- Devise -->\n    <ion-item>\n      <ion-label>Devise</ion-label>\n      <ion-select [(ngModel)]=\"selectedCurrency\">\n        <ion-select-option value=\"euro\">\n          <ion-icon slot=\"start\" name=\"euro-outline\"></ion-icon>Euro\n        </ion-select-option>\n        <ion-select-option value=\"dollar\">\n          <ion-icon slot=\"start\" name=\"dollar-outline\"></ion-icon>Dollar\n        </ion-select-option>\n        <ion-select-option value=\"dirham\">\n          <ion-icon slot=\"start\" name=\"logo-usd\"></ion-icon>Dirham Marocain\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- Nature de l'entreprise -->\n    <ion-item>\n      <ion-label>Nature de l'entreprise</ion-label>\n      <ion-radio-group [(ngModel)]=\"selectedBusiness\">\n        <ion-item>\n          <ion-label>Restaurant</ion-label>\n          <ion-radio value=\"restaurant\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Café</ion-label>\n          <ion-radio value=\"café\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Hôtel</ion-label>\n          <ion-radio value=\"hotel\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-item>\n\n    <br>\n    <!-- Champs de saisie conditionnels -->\n    <ion-item *ngIf=\"selectedBusiness === 'hotel'\">\n      <ion-label position=\"stacked\">Combien de chambres avez-vous ?</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"numRooms\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"selectedBusiness === 'restaurant' || selectedBusiness === 'café'\">\n      <ion-label position=\"stacked\">Combien de tables avez-vous ?</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"numTables\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"full\" (click)=\"onSubmit()\">Confirmer</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=screens-admin-settings-settings-module.js.map