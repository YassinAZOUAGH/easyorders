(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["command-screens-listing-listing-module"],{

/***/ "/Rsk":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/command/screens/listing/listing-command-page.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- HEADER -->\n  <div class=\"header\">\n    <h1>{{getAllCommandesReceived?.length}} Orders</h1>\n    <div class=\"avatar\">\n      <ion-img src=\"assets\\images\\face.png\"></ion-img>\n    </div>\n  </div>\n  <!-- PRODUCTS -->\n  <div class=\"food-list\">\n\n    <app-command-card *ngFor=\"let command of getAllCommandesReceived\" [item]=\"command\"  (click)=\"deleteThisOrder(command.id)\"></app-command-card>\n    <!--app-command-card *ngFor=\"let command of getAllCommandesReceived\" [item]=\"command\" (click)=\"showLoadingAlert()\"></app-command-card-->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "7Ezd":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/command/screens/listing/listing-command-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListingCommandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingCommandPage", function() { return ListingCommandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listing_command_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listing-command-page.component.html */ "/Rsk");
/* harmony import */ var _listing_command_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing-command-page.component.scss */ "yVrW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_commandsToPrepare_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/commandsToPrepare.service */ "/24w");
/* harmony import */ var _services_canal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/canal.service */ "ib1Z");
/* harmony import */ var _services_Shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/Shared.service */ "Ym5C");








let ListingCommandPage = class ListingCommandPage {
    constructor(commandsToPrepareService, alertCtrl, canalService, sharedService) {
        this.commandsToPrepareService = commandsToPrepareService;
        this.alertCtrl = alertCtrl;
        this.canalService = canalService;
        this.sharedService = sharedService;
        this.getAllCommandesReceived = null;
        this.notificationSound = new Audio('assets/audio/songOrder.mp3');
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.loading = false; // Variable pour gérer l'affichage de l'indicateur de chargement
    }
    ngOnInit() {
        this.getParamsURL();
        this.getData(this.canalService.getUserIdFoCommand());
    }
    getParamsURL() {
        // Obtenir l'URL complète
        const url = window.location.href;
        // Obtenir les paramètres de l'URL
        const params = new URLSearchParams(new URL(url).search);
        this.userId = params.get('user');
        console.log('valeur de userIdCommand : ' + this.userId); // Affiche 'valeur'
        this.canalService.setUserIdFoCommand(this.userId);
    }
    getData(userId) {
        this.commandsToPrepareService.allCommandsByUserId(userId).subscribe((data) => {
            this.getAllCommandesReceived = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
            this.updateSharedVariable(this.getAllCommandesReceived.length);
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }
    deleteThisOrder(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Remove',
                message: 'Vous avez traité cette commande?',
                buttons: [
                    {
                        text: 'No',
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.deleteCommande(id);
                        }
                    },
                ],
            });
            alert.present();
        });
    }
    deleteCommande(commandeId) {
        this.commandsToPrepareService.deleteCommand(commandeId).subscribe(() => {
            //this.getData(this.canalService.getUserId()); // Mettez à jour les données après la suppression de la commande
            //console.log('Commande supprimée avec succès !');
        }, (error) => {
            console.error('Erreur lors de la suppression de la commande:', error);
        });
        this.showLoadingAlert();
    }
    updateSharedVariable(newValue) {
        this.sharedService.updateCommandToPreparLength(newValue);
    }
    showLoadingAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: '<div class="centered-alert"><ion-spinner name="crescent"></ion-spinner></div>',
                backdropDismiss: false,
            });
            yield alert.present();
            // Simulez une opération asynchrone (par exemple, une requête HTTP)
            setTimeout(() => {
                alert.dismiss(); // Fermez l'alerte après la fin de l'opération
            }, 3000); // Simulez une opération de 3 secondes (remplacez par votre logique réelle)
        });
    }
};
ListingCommandPage.ctorParameters = () => [
    { type: _services_commandsToPrepare_service__WEBPACK_IMPORTED_MODULE_5__["CommandsToPrepareService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_canal_service__WEBPACK_IMPORTED_MODULE_6__["CanalService"] },
    { type: _services_Shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] }
];
ListingCommandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listing',
        template: _raw_loader_listing_command_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listing_command_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListingCommandPage);



/***/ }),

/***/ "7uh/":
/*!***************************************************************************!*\
  !*** ./src/app/client1/command/screens/listing/listing-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageRoutingModule", function() { return ListingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _listing_command_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing-command-page.component */ "7Ezd");




const routes = [
    {
        path: '',
        component: _listing_command_page_component__WEBPACK_IMPORTED_MODULE_3__["ListingCommandPage"]
    }
];
let ListingPageRoutingModule = class ListingPageRoutingModule {
};
ListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListingPageRoutingModule);



/***/ }),

/***/ "Lvn9":
/*!*******************************************************************!*\
  !*** ./src/app/client1/command/screens/listing/listing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageModule", function() { return ListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listing-routing.module */ "7uh/");
/* harmony import */ var _listing_command_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing-command-page.component */ "7Ezd");
/* harmony import */ var src_app_client1_client_components_category_item_category_item_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/category-item/category-item.module */ "vjGy");
/* harmony import */ var src_app_client1_client_components_food_card_food_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/food-card/food-card.module */ "4E68");
/* harmony import */ var _components_command_card_command_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/command-card/command-card.module */ "aUr/");










let ListingPageModule = class ListingPageModule {
};
ListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListingPageRoutingModule"],
            src_app_client1_client_components_category_item_category_item_module__WEBPACK_IMPORTED_MODULE_7__["CategoryItemModule"],
            src_app_client1_client_components_food_card_food_card_module__WEBPACK_IMPORTED_MODULE_8__["FoodCardModule"],
            _components_command_card_command_card_module__WEBPACK_IMPORTED_MODULE_9__["CommandCardModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_listing_command_page_component__WEBPACK_IMPORTED_MODULE_6__["ListingCommandPage"]],
    })
], ListingPageModule);



/***/ }),

/***/ "RjCg":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/command/components/command-card/command-card.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CommandCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCardComponent", function() { return CommandCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_command_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./command-card.component.html */ "ccMG");
/* harmony import */ var _command_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command-card.component.scss */ "pKS3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let CommandCardComponent = class CommandCardComponent {
    constructor(alertCtrl, router) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
};
CommandCardComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CommandCardComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
CommandCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-command-card',
        template: _raw_loader_command_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_command_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommandCardComponent);



/***/ }),

/***/ "aUr/":
/*!********************************************************************************!*\
  !*** ./src/app/client1/command/components/command-card/command-card.module.ts ***!
  \********************************************************************************/
/*! exports provided: CommandCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCardModule", function() { return CommandCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _command_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command-card.component */ "RjCg");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CommandCardModule = class CommandCardModule {
};
CommandCardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_command_card_component__WEBPACK_IMPORTED_MODULE_3__["CommandCardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_command_card_component__WEBPACK_IMPORTED_MODULE_3__["CommandCardComponent"]],
    })
], CommandCardModule);



/***/ }),

/***/ "ccMG":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/command/components/command-card/command-card.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div class=\"card\" (click)=\"clicked.emit()\"-->\n<div class=\"card\" (click)=\"clicked.emit()\">\n  <h2>{{item.table}}</h2>\n\n  <div class=\"card-content\">\n    <h3 class=\"title\">{{item.contents}}</h3>\n    <h2 class=\"subtitle\"><sup>$</sup>{{item.price|number:'1.2'}}</h2>\n    <button class=\"button\">Delete</button>\n    <!--ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </-ion-buttons-->\n  </div>\n</div>\n");

/***/ }),

/***/ "pKS3":
/*!*************************************************************************************!*\
  !*** ./src/app/client1/command/components/command-card/command-card.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  width: 100%;\n  padding: 0.2rem 0.5rem;\n  background: #f3f3f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 2.5rem;\n  margin-bottom: 0.6rem;\n}\n.card .card-content {\n  text-align: center;\n}\n.card .card-content .title {\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #1d1d1d;\n}\n.card .card-content .button {\n  background-color: rgba(255, 0, 0, 0.37);\n  font-size: 1.2rem;\n  border-radius: 1.5rem;\n}\n.card .card-content .subtitle {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #ffb800;\n  margin-top: 0;\n}\n.card .card-content .subtitle sup {\n  font-size: 1rem;\n  margin-right: 2px;\n  color: #ffb800;\n}\n.card .card-content ion-buttons {\n  position: absolute;\n  bottom: -1rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.card .card-content ion-buttons ion-button {\n  --background: #6b45bc;\n  font-weight: 700;\n  color: #fff;\n  width: 45px;\n  height: 45px;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbW1hbmQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFBTjtBQUVJO0VBQ0UsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQU47QUFJSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUZOO0FBSU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRlI7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUpOO0FBTU07RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKUiIsImZpbGUiOiJjb21tYW5kLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xuXG4gIC5jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAvL21hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgICAgIGNvbG9yOiAjMWQxZDFkO1xuICAgIH1cbiAgICAuYnV0dG9ue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzcpO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG5cbiAgICB9XG5cbiAgICAuc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNmZmI4MDA7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgICBzdXAge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICBjb2xvcjogI2ZmYjgwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tYnV0dG9ucyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0xcmVtO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "yVrW":
/*!*************************************************************************************!*\
  !*** ./src/app/client1/command/screens/listing/listing-command-page.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 2rem;\n  --padding-end: 2rem;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 3rem;\n}\nion-content .header h1 {\n  font-size: 3rem;\n  font-weight: 600;\n  color: #515151;\n  margin: 0;\n}\nion-content .header .avatar {\n  width: 35px;\n  height: 35px;\n  background-color: #6b45bc;\n  border-radius: 50%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  overflow: hidden;\n}\nion-content .header .avatar ion-img {\n  width: 90%;\n  height: 90%;\n}\nion-content .categories {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1rem;\n}\nion-content .list-header {\n  font-weight: 700;\n  color: #515151;\n  font-size: 1.8rem;\n  margin-bottom: 1.6rem;\n  margin-top: 2.5rem;\n}\nion-content .food-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n}\nion-searchbar {\n  --box-shadow: none;\n  --background: #f3f3f3;\n  --border-radius: 1.2rem;\n  --placeholder-font-weight: 600;\n  --placeholder-opacity: 0.2;\n  padding: 0;\n  margin-bottom: 2rem;\n}\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.wrapper .image-card {\n  background-color: #f3f3f3;\n  padding: 0.8rem;\n  border-radius: 1.5rem;\n  margin-bottom: 0.5rem;\n  width: 100%;\n  height: 100%;\n}\n.wrapper .image-card ion-img {\n  opacity: 0.9;\n  width: 100%;\n  height: 100%;\n}\n.wrapper p {\n  color: #c7c7c7;\n}\n.centered-alert {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.spinner-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3RpbmctY29tbWFuZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDTjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUFOO0FBRU07RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUFSO0FBS0U7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FBSEo7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBTEo7QUFTQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQSjtBQVNJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUE47QUFXRTtFQUNFLGNBQUE7QUFUSjtBQWNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBWEY7QUFjQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVhGIiwiZmlsZSI6Imxpc3RpbmctY29tbWFuZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDJyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDJyZW07XG5cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM1MTUxNTE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLmF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjQ1YmM7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICBpb24taW1nIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhdGVnb3JpZXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLWdhcDogMXJlbTtcbiAgfVxuXG4gIC5saXN0LWhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzUxNTE1MTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICB9XG5cbiAgLmZvb2QtbGlzdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6IDFyZW07XG4gIH1cbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAtLWJvcmRlci1yYWRpdXM6IDEuMnJlbTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNjAwO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuMjtcblxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuaW1hZ2UtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpb24taW1nIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjYzdjN2M3O1xuICB9XG59XG5cblxuLmNlbnRlcmVkLWFsZXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=command-screens-listing-listing-module.js.map