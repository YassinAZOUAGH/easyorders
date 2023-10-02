(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-status-command-status-command-module"],{

/***/ "0dMQ":
/*!**********************************************************************************!*\
  !*** ./src/app/client1/client/components/command-item/command-item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CommandItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandItemComponent", function() { return CommandItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_command_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./command-item.component.html */ "MF9h");
/* harmony import */ var _command_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command-item.component.scss */ "ppbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CommandItemComponent = class CommandItemComponent {
};
CommandItemComponent.propDecorators = {
    itemCommand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CommandItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-command-item',
        template: _raw_loader_command_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_command_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommandItemComponent);



/***/ }),

/***/ "2EFn":
/*!********************************************************************************!*\
  !*** ./src/app/client1/client/screens/status-command/status-command.module.ts ***!
  \********************************************************************************/
/*! exports provided: StatusCommandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCommandModule", function() { return StatusCommandModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _status_command_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-command-routing.module */ "9r8S");
/* harmony import */ var _status_command_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status-command.component */ "itpm");
/* harmony import */ var src_app_client1_client_components_category_item_category_item_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/category-item/category-item.module */ "vjGy");
/* harmony import */ var src_app_client1_client_components_food_card_food_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/food-card/food-card.module */ "4E68");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_command_item_command_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/command-item/command-item.component */ "0dMQ");











let StatusCommandModule = class StatusCommandModule {
};
StatusCommandModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _status_command_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatusCommandRoutingModule"],
            src_app_client1_client_components_category_item_category_item_module__WEBPACK_IMPORTED_MODULE_7__["CategoryItemModule"],
            src_app_client1_client_components_food_card_food_card_module__WEBPACK_IMPORTED_MODULE_8__["FoodCardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        ],
        declarations: [_status_command_component__WEBPACK_IMPORTED_MODULE_6__["StatusCommandComponent"], _components_command_item_command_item_component__WEBPACK_IMPORTED_MODULE_10__["CommandItemComponent"]],
    })
], StatusCommandModule);



/***/ }),

/***/ "9r8S":
/*!****************************************************************************************!*\
  !*** ./src/app/client1/client/screens/status-command/status-command-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: StatusCommandRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCommandRoutingModule", function() { return StatusCommandRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _status_command_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-command.component */ "itpm");




const routes = [
    {
        path: '',
        component: _status_command_component__WEBPACK_IMPORTED_MODULE_3__["StatusCommandComponent"]
    }
];
let StatusCommandRoutingModule = class StatusCommandRoutingModule {
};
StatusCommandRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatusCommandRoutingModule);



/***/ }),

/***/ "MF9h":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/components/command-item/command-item.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cart-item\">\n  <div class=\"description\">\n    <h3>{{itemCommand.name}}</h3>\n    <p>Prix: {{itemCommand.price | number:'1.2'}}<sup>€</sup></p>\n    <h2>{{itemCommand.status}}</h2>\n  </div>\n</div>\n");

/***/ }),

/***/ "Nu0R":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/screens/status-command/status-command.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <h3 class=\"title\" *ngIf=\"(commandItems$|async).length\">Vous avez {{(commandItems$|async).length}} commandes</h3>\n\n  <!-- CART ITEMS -->\n  <ion-list lines=\"none\">\n    <ion-item-sliding *ngFor=\"let item of commandItems$|async\">\n      <ion-item>\n        <app-command-item [itemCommand]=\"item\"></app-command-item>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <!-- EMPTY CART -->\n  <div class=\"empty-command\" *ngIf=\"!(commandItems$|async).length\">\n    <p>{{ 'NOORDERYET' | translate }}</p>\n    <h6>{{ 'STATUSCOMMAND' | translate }}</h6>\n  </div>\n\n  <!-- CHECKOUT BUTTON -->\n  <!--app-button *ngIf=\"(cartItems$|async).length\" (click)=\"confirmeCommande()\">\n    Payer: <span>{{totalAmount$|async|number:'1.2'}} <sup>€</sup></span>\n  </app-button-->\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--ion-content class=\"ion-padding\">\n\n  < Commande component template -->\n  <!--div class=\"commande-container\">\n    <button (click)=\"showModal()\">Passer une commande</button>\n\n    <div class=\"modal\" *ngIf=\"isModalVisible\">\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n        <h2>Votre commande est en cours de préparation....</h2>\n        <p>Merci d'avoir passé votre commande !</p>\n        <p>Nous préparons actuellement votre commande et vous la livrerons bientôt.</p>\n      </div>\n    </div>\n  </div>\n\n  < Commande component template >\n  <div class=\"commande-container\">\n    <button (click)=\"showCommand()\">showCommand</button>\n\n    <button (click)=\"setCommandePret()\" [ngClass]=\"{'commande-btn-pret': commandeStatus === 'pret'}\">\n      {{ commandeStatus === 'pret' ? 'Prêt' : 'Passer une commande' }}\n    </button>\n\n    <div class=\"modal\" *ngIf=\"commandeStatus === 'en_cours'\">\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"setCommandePret()\">&times;</span>\n        <h2>Votre commande est en cours de préparation</h2>\n        <p>Merci d'avoir passé votre commande !</p>\n        <p>Nous préparons actuellement votre commande et vous la livrerons bientôt.</p>\n      </div>\n    </div>\n\n  <div>\n    {{command}} est {{commandeStatus}}\n  </div>\n  </div>\n</ion-content-->\n");

/***/ }),

/***/ "itpm":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/client/screens/status-command/status-command.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StatusCommandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCommandComponent", function() { return StatusCommandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_command_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status-command.component.html */ "Nu0R");
/* harmony import */ var _status_command_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-command.component.scss */ "wDJW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_status_command_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/status-command.service */ "jmJh");





let StatusCommandComponent = class StatusCommandComponent {
    constructor(statusCommandService) {
        this.statusCommandService = statusCommandService;
        this.commandeStatus = 'en_cours';
        this.command = [];
        this.myCommand = '';
    }
    ngOnInit() {
        this.commandItems$ = this.statusCommandService.getCommand();
    }
};
StatusCommandComponent.ctorParameters = () => [
    { type: _services_status_command_service__WEBPACK_IMPORTED_MODULE_4__["StatusCommandService"] }
];
StatusCommandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-status-command',
        template: _raw_loader_status_command_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_status_command_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StatusCommandComponent);



/***/ }),

/***/ "ppbP":
/*!************************************************************************************!*\
  !*** ./src/app/client1/client/components/command-item/command-item.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart-item {\n  background: #f3f3f3;\n  padding: 1.5rem 1rem;\n  border-radius: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  position: center;\n  width: 100%;\n  margin-bottom: 5%;\n}\n.cart-item .image {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  margin-right: 1.2rem;\n  position: absolute;\n  left: -5%;\n  top: 50%;\n  transform: translateY(-50%);\n  box-shadow: 10px 10px 10px 0px #c5c5c5;\n}\n.cart-item .description {\n  flex: 1;\n  margin-left: 6%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n}\n.cart-item .description h3 {\n  font-weight: 400;\n  color: #1f1f1f;\n}\n.cart-item .description p {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #ffb800;\n  margin: 0.5rem 0;\n}\n.cart-item .description p sup {\n  font-size: 0.8rem;\n  margin-right: 2px;\n}\n.cart-item .description h2 {\n  font-size: large;\n  margin-right: 2px;\n  color: #1cbf23;\n  font-size: 1.3rem;\n  font-weight: 1000;\n}\n.cart-item .actions {\n  border: 1px solid #c7c7c7;\n  border-radius: 2rem;\n}\n.cart-item .actions .counter {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #6b45bc;\n}\n.cart-item .actions ion-button {\n  --background: #fff;\n  --box-shadow: 0px 2px 10px grey;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  height: 35px;\n  width: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbW1hbmQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0FBQ0o7QUFFRTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBQUo7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRE47QUFHTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSE47QUFRRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTk47QUFTSTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0FBUk4iLCJmaWxlIjoiY29tbWFuZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuXHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNSU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDBweCAjYzVjNWM1O1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgY29sb3I6ICMxZjFmMWY7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogI2ZmYjgwMDtcclxuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuXHJcbiAgICAgIHN1cCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICBjb2xvcjogIzFjYmYyMztcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3Rpb25zIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG5cclxuICAgIC5jb3VudGVyIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogIzZiNDViYztcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTBweCBncmV5O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcblxyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "wDJW":
/*!*************************************************************************************!*\
  !*** ./src/app/client1/client/screens/status-command/status-command.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".empty-command {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #c7c7c7;\n  text-align: center;\n}\n.empty-command ion-icon {\n  font-size: 8rem;\n}\n.empty-command p {\n  font-size: 1.8rem;\n}\n.title {\n  font-weight: 700;\n  color: #1f1f1f;\n  margin-bottom: 2rem;\n  padding-left: 1.6rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0YXR1cy1jb21tYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBR0U7RUFDRSxpQkFBQTtBQURKO0FBS0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFGRiIsImZpbGUiOiJzdGF0dXMtY29tbWFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXB0eS1jb21tYW5kIHtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2M3YzdjNztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDhyZW07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMWYxZjFmO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjZyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=screens-status-command-status-command-module.js.map