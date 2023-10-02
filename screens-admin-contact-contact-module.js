(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-contact-contact-module"],{

/***/ "7qBD":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/contact/contact.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"submitForm()\">\n  <ion-item>\n    <ion-label position=\"floating\">Nom</ion-label>\n    <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"formData.name\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">E-mail</ion-label>\n    <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"formData.email\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Sujet</ion-label>\n    <ion-input type=\"text\" name=\"subject\" [(ngModel)]=\"formData.subject\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Message</ion-label>\n    <ion-textarea name=\"message\" [(ngModel)]=\"formData.message\" required></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"full\" type=\"submit\">Envoyer</ion-button>\n</form>\n");

/***/ }),

/***/ "7yiU":
/*!****************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/contact/contact.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "BfvT":
/*!***********************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/contact/contact.module.ts ***!
  \***********************************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "Y5I/");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.component */ "ep1E");
/* harmony import */ var src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/badge/badge.module */ "WJ7A");
/* harmony import */ var src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/button/button.module */ "Iyou");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









// @ts-ignore


let ContactModule = class ContactModule {
};
ContactModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactRoutingModule"],
            src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
        ],
        providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__["NgxImageCompressService"]],
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]],
    })
], ContactModule);



/***/ }),

/***/ "Y5I/":
/*!*******************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/contact/contact-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "ep1E");




const routes = [
    {
        path: '',
        component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }
];
let ContactRoutingModule = class ContactRoutingModule {
};
ContactRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactRoutingModule);



/***/ }),

/***/ "ep1E":
/*!**************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/contact/contact.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "7qBD");
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.scss */ "7yiU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/contact.service */ "tt4t");






let ContactComponent = class ContactComponent {
    constructor(fb, contactService) {
        this.fb = fb;
        this.contactService = contactService;
        this.formData = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };
    }
    submitForm() {
        this.contactService.sendContactForm(this.formData).subscribe(response => {
            console.log('E-mail envoyé avec succès :', response);
            // Réinitialiser le formulaire après l'envoi
        }, error => {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"] }
];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactComponent);



/***/ }),

/***/ "tt4t":
/*!*****************************************************!*\
  !*** ./src/app/client1/services/contact.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://192.168.0.246:8080/api/client/contact/';
    }
    sendContactForm(data) {
        return this.http.post(this.apiUrl + 'send-email', data);
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactService);



/***/ })

}]);
//# sourceMappingURL=screens-admin-contact-contact-module.js.map