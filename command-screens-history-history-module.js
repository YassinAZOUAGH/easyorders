(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["command-screens-history-history-module"],{

/***/ "Fmtl":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/command/screens/history/history.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ionContent\">\n  <div class=\"header\">\n\n    <ion-buttons>\n      <ion-button routerLink=\"/command/listing\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"orderHistory\">\n      <p> L'historique des commandes</p>\n    </div>\n    <ion-buttons>\n      <ion-button>\n        <ion-icon slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  <br>\n  <ul class=\"custom-list\">\n\n    <li class=\"flex-container\" *ngFor=\"let element of getAllCommandesReceived\" (click)=\"goToDetailsCommand(element.id)\">\n      <div class=\"item item-id\">#{{ element.id }}</div>\n      <div class=\"item item-price\">{{ element.price }} €</div>\n      <div class=\"item item-contents\">   {{ element.contents.length > 120 ? (element.contents | slice:0:120) + '...' : element.contents }}</div>\n      <div class=\"item item-date\">{{ element.table }}</div>\n      <div class=\"item item-time\">{{ element.date }} {{ element.time }}</div>\n      <br><br><br><br>\n    </li>\n\n  </ul>\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "PMuC":
/*!***************************************************************************!*\
  !*** ./src/app/client1/command/screens/history/history-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: HistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryRoutingModule", function() { return HistoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.component */ "QrVd");




const routes = [
    {
        path: '',
        component: _history_component__WEBPACK_IMPORTED_MODULE_3__["HistoryComponent"]
    }
];
let HistoryRoutingModule = class HistoryRoutingModule {
};
HistoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryRoutingModule);



/***/ }),

/***/ "QrVd":
/*!**********************************************************************!*\
  !*** ./src/app/client1/command/screens/history/history.component.ts ***!
  \**********************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.component.html */ "Fmtl");
/* harmony import */ var _history_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.component.scss */ "rgtg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_commandAuto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/commandAuto.service */ "yVDZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_commandsToPrepare_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/commandsToPrepare.service */ "/24w");
/* harmony import */ var _services_canal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/canal.service */ "ib1Z");








let HistoryComponent = class HistoryComponent {
    constructor(autoService, router, commandsToPrepareService, canalService) {
        this.autoService = autoService;
        this.router = router;
        this.commandsToPrepareService = commandsToPrepareService;
        this.canalService = canalService;
        this.getAllCommandesReceived = null;
    }
    ngOnInit() {
        this.getAllCommands(this.canalService.getUserIdFoCommand());
    }
    getAllCommands(userId) {
        this.commandsToPrepareService.allCommandsInversedByUserId(userId).subscribe((data) => {
            this.getAllCommandesReceived = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }
    goToDetailsCommand(id) {
        this.router.navigate(['command/history/details/', id]);
    }
};
HistoryComponent.ctorParameters = () => [
    { type: _services_commandAuto_service__WEBPACK_IMPORTED_MODULE_4__["CommandAutoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_commandsToPrepare_service__WEBPACK_IMPORTED_MODULE_6__["CommandsToPrepareService"] },
    { type: _services_canal_service__WEBPACK_IMPORTED_MODULE_7__["CanalService"] }
];
HistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoryComponent);



/***/ }),

/***/ "W+Ie":
/*!*******************************************************************!*\
  !*** ./src/app/client1/command/screens/history/history.module.ts ***!
  \*******************************************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "PMuC");
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.component */ "QrVd");







let HistoryModule = class HistoryModule {
};
HistoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryRoutingModule"],
        ],
        declarations: [_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"]],
    })
], HistoryModule);



/***/ }),

/***/ "rgtg":
/*!************************************************************************!*\
  !*** ./src/app/client1/command/screens/history/history.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-content {\n  --background: rgba(217, 213, 224, 0.52);\n  padding: 2rem;\n  position: relative;\n  /* Réinitialisation des styles par défaut des listes */\n  /* Réinitialisation des styles par défaut des listes */\n  /* Style des éléments <li> dans la liste */\n  /* Style au survol d'un élément <li> */\n  /* Style des div dans les éléments <li> */\n  /* Styles spécifiques pour chaque div */\n}\nion-content .header {\n  background: #6b45bc;\n  border-radius: 0rem 0rem 1rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  padding: 0rem 0.5rem;\n}\nion-content .header .orderHistory {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n  text-align: center;\n}\nion-content .header .ion-button {\n  height: 60px;\n  width: 60px;\n}\nion-content .header .ion-button .ion-icon {\n  font-size: 2rem;\n}\nion-content ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nion-content ul li {\n  background-color: white;\n  font-size: 18px;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transition: background-color 0.3s ease;\n  display: flex;\n  /* Utilisation de Flexbox */\n  justify-content: center;\n  /* Centrer horizontalement */\n  align-items: center;\n  /* Centrer verticalement */\n  position: relative;\n  /* Permettre le positionnement absolu des éléments enfants */\n}\nion-content ul li:hover {\n  background-color: #ffbf80;\n  cursor: pointer;\n}\nion-content .item {\n  padding: 8px;\n  border-radius: 5px;\n  margin: 5px;\n  color: #0d0d0d;\n  font-size: 14px;\n  flex: 0 0 32%;\n  /* Taille de chaque élément (ajustez selon vos besoins) */\n  position: absolute;\n  /* Positionnement absolu */\n}\nion-content .item-id {\n  top: 0%;\n  left: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\nion-content .item-price {\n  background-color: rgba(58, 241, 7, 0.76);\n  top: 0%;\n  right: 0;\n  box-shadow: 0 5px 9px rgba(58, 241, 7, 0.76);\n}\nion-content .item-contents {\n  top: 30%;\n  /* Au milieu verticalement */\n  left: 50%;\n  /* Au milieu horizontalement */\n  transform: translate(-50%, -50%);\n  /* Centrage précis au milieu */\n  width: 70%;\n  height: 70%;\n  text-align: center;\n}\nion-content .item-date {\n  bottom: 0;\n  left: 0;\n}\nion-content .item-time {\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsdUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUE4QkEsc0RBQUE7RUFDQSxzREFBQTtFQU9BLDBDQUFBO0VBaUJBLHNDQUFBO0VBTUEseUNBQUE7RUFhQSx1Q0FBQTtBQWxFRjtBQU5FO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBUUo7QUFOSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBUU47QUFMSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBT047QUFMTTtFQUNFLGVBQUE7QUFPUjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFKO0FBSUU7RUFFRSx1QkFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQWUsMkJBQUE7RUFDZix1QkFBQTtFQUF5Qiw0QkFBQTtFQUN6QixtQkFBQTtFQUFxQiwwQkFBQTtFQUNyQixrQkFBQTtFQUFvQiw0REFBQTtBQUF4QjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBRko7QUFNRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFBZSx5REFBQTtFQUNmLGtCQUFBO0VBQW9CLDBCQUFBO0FBSHhCO0FBUUU7RUFFRSxPQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0FBUEo7QUFXRTtFQUNFLHdDQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw0Q0FBQTtBQVRKO0FBYUU7RUFFRSxRQUFBO0VBQVUsNEJBQUE7RUFDVixTQUFBO0VBQVcsOEJBQUE7RUFDWCxnQ0FBQTtFQUFrQyw4QkFBQTtFQUNsQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVEo7QUFhRTtFQUVFLFNBQUE7RUFDQSxPQUFBO0FBWko7QUFlRTtFQUVFLFNBQUE7RUFDQSxRQUFBO0FBZEoiLCJmaWxlIjoiaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIxNywgMjEzLCAyMjQsIDAuNTIpO1xuICBwYWRkaW5nOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIFLDqWluaXRpYWxpc2F0aW9uIGRlcyBzdHlsZXMgcGFyIGTDqWZhdXQgZGVzIGxpc3RlcyAqL1xuICAvKiBSw6lpbml0aWFsaXNhdGlvbiBkZXMgc3R5bGVzIHBhciBkw6lmYXV0IGRlcyBsaXN0ZXMgKi9cbiAgLyogU3R5bGUgZGVzIMOpbMOpbWVudHMgPGxpPiBkYW5zIGxhIGxpc3RlICovXG4gIC8qIFN0eWxlIGF1IHN1cnZvbCBkJ3VuIMOpbMOpbWVudCA8bGk+ICovXG4gIC8qIFN0eWxlIGRlcyBkaXYgZGFucyBsZXMgw6lsw6ltZW50cyA8bGk+ICovXG4gIC8qIFN0eWxlcyBzcMOpY2lmaXF1ZXMgcG91ciBjaGFxdWUgZGl2ICovXG59XG5pb24tY29udGVudCAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzZiNDViYztcbiAgYm9yZGVyLXJhZGl1czogMHJlbSAwcmVtIDFyZW0gMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwcmVtIDAuNXJlbTtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIgLm9yZGVySGlzdG9yeSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmYjgwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmhlYWRlciAuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5pb24tY29udGVudCAuaGVhZGVyIC5pb24tYnV0dG9uIC5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbmlvbi1jb250ZW50IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgdWwgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBVdGlsaXNhdGlvbiBkZSBGbGV4Ym94ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBDZW50cmVyIGhvcml6b250YWxlbWVudCAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBDZW50cmVyIHZlcnRpY2FsZW1lbnQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBQZXJtZXR0cmUgbGUgcG9zaXRpb25uZW1lbnQgYWJzb2x1IGRlcyDDqWzDqW1lbnRzIGVuZmFudHMgKi9cbn1cbmlvbi1jb250ZW50IHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmY4MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWNvbnRlbnQgLml0ZW0ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXg6IDAgMCAzMiU7XG4gIC8qIFRhaWxsZSBkZSBjaGFxdWUgw6lsw6ltZW50IChhanVzdGV6IHNlbG9uIHZvcyBiZXNvaW5zKSAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIFBvc2l0aW9ubmVtZW50IGFic29sdSAqL1xufVxuaW9uLWNvbnRlbnQgLml0ZW0taWQge1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuaW9uLWNvbnRlbnQgLml0ZW0tcHJpY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCAyNDEsIDcsIDAuNzYpO1xuICB0b3A6IDAlO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMCA1cHggOXB4IHJnYmEoNTgsIDI0MSwgNywgMC43Nik7XG59XG5pb24tY29udGVudCAuaXRlbS1jb250ZW50cyB7XG4gIHRvcDogMzAlO1xuICAvKiBBdSBtaWxpZXUgdmVydGljYWxlbWVudCAqL1xuICBsZWZ0OiA1MCU7XG4gIC8qIEF1IG1pbGlldSBob3Jpem9udGFsZW1lbnQgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8qIENlbnRyYWdlIHByw6ljaXMgYXUgbWlsaWV1ICovXG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuaXRlbS1kYXRlIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuaW9uLWNvbnRlbnQgLml0ZW0tdGltZSB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59Il19 */");

/***/ }),

/***/ "yVDZ":
/*!*********************************************************!*\
  !*** ./src/app/client1/services/commandAuto.service.ts ***!
  \*********************************************************/
/*! exports provided: CommandAutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandAutoService", function() { return CommandAutoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let CommandAutoService = class CommandAutoService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://oafish-orange-production.up.railway.app/api/command/commands/';
        //private apiUrl = 'http://192.168.0.246:8080/api/command/commands/';
        this.refreshInterval = 5000; // Temps d'actualisation en millisecondes (ici, toutes les 5 secondes)
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.notificationSound = new Audio('assets/audio/songOrder.mp3');
        this.currentNumberOfCommandes = 0;
        this.previousCommandes = [];
        this.allCommandReceivedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allCommandReceivedInOrderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.commandReceivedTodaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.commandReceivedYesterdaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.commandReceivedThisWeekSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.commandReceivedThisMonthSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /*-----------------------*/
        this.allSumPricecommandSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sumPricecommandTodaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sumPricecommandYesterdaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sumPricecommandThisWeekSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sumPricecommandThisMonthSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.deleteCommandSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allCommandReceived$ = this.allCommandReceivedSubject.asObservable();
        this.allCommandReceivedInOrder$ = this.allCommandReceivedInOrderSubject.asObservable();
        this.commandReceivedToday$ = this.commandReceivedTodaySubject.asObservable();
        this.commandReceivedYesterday$ = this.commandReceivedYesterdaySubject.asObservable();
        this.commandReceivedThisWeek$ = this.commandReceivedThisWeekSubject.asObservable();
        this.commandReceivedThisMonth$ = this.commandReceivedThisMonthSubject.asObservable();
        /*-----------------------*/
        this.allSumPricecommand$ = this.allSumPricecommandSubject.asObservable();
        this.sumPricecommandToday$ = this.sumPricecommandTodaySubject.asObservable();
        this.sumPricecommandYesterday$ = this.sumPricecommandYesterdaySubject.asObservable();
        this.sumPricecommandThisWeek$ = this.sumPricecommandThisWeekSubject.asObservable();
        this.sumPricecommandThisMonth$ = this.sumPricecommandThisMonthSubject.asObservable();
        this.deleteCommand$ = this.deleteCommandSubject.asObservable();
        this.startPolling();
    }
    startPolling() {
        this.allCommandReceived$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'ordre-inverse')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.allCommandReceivedSubject.next(data)));
        this.allCommandReceivedInOrder$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'getAll')), 
        //scan((acc, val) => val), // Utilisez scan pour accumuler les nouvelles données
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
        }));
        /*this.commandReceivedToday$ = interval(this.refreshInterval).pipe(
          startWith(0),
          switchMap(() => this.http.get<any[]>(this.apiUrl + 'added-today')),
          tap((data) => this.commandReceivedTodaySubject.next(data))
        );*/
        this.commandReceivedToday$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'added-today')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            this.commandReceivedTodaySubject.next(data); // Émettez la nouvelle commande
            if (data.length > 0) {
                this.notificationSound.play(); // Envoyez une notification
            }
        }));
        this.commandReceivedYesterday$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'added-yesterday')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.commandReceivedYesterdaySubject.next(data)));
        this.commandReceivedThisWeek$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'added-this-week')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.commandReceivedThisWeekSubject.next(data)));
        this.commandReceivedThisMonth$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'added-this-mounth')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.commandReceivedThisMonthSubject.next(data)));
        /*------------------------*/
        this.allSumPricecommand$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'somme-prix-total')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.allSumPricecommandSubject.next(data)));
        this.sumPricecommandToday$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'sum-price-today')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.sumPricecommandTodaySubject.next(data)));
        this.sumPricecommandYesterday$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'sum-price-yesterday')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.sumPricecommandYesterdaySubject.next(data)));
        // @ts-ignore
        this.sumPricecommandThisWeek$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'sum-price-thisweek')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.sumPricecommandThisWeekSubject.next(data)));
        this.sumPricecommandThisMonth$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'sum-price-thismounth')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.sumPricecommandThisMonthSubject.next(data)));
    }
    // Nouvelle méthode pour effectuer une requête HTTP DELETE
    // eslint-disable-next-line @typescript-eslint/member-ordering
    deleteCommande(commandeId) {
        const deleteUrl = `${this.apiUrl}/${commandeId}`;
        return this.http.delete(deleteUrl);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    getAllCommandesReceived() {
        return this.allCommandReceived$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    getAllCommandesReceivedInOrder() {
        return this.allCommandReceivedInOrder$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    commandReceivedToday() {
        return this.commandReceivedToday$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    commandReceivedYesterday() {
        return this.commandReceivedYesterday$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    commandReceivedThisWeek() {
        return this.commandReceivedThisWeek$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    commandReceivedThisMonth() {
        return this.commandReceivedThisMonth$;
    }
    /*---------------------------*/
    // eslint-disable-next-line @typescript-eslint/member-ordering
    allSumPricecommand() {
        return this.allSumPricecommand$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    sumPricecommandToday() {
        return this.sumPricecommandToday$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    sumPricecommandYesterday() {
        return this.sumPricecommandYesterday$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    sumPricecommandThisWeek() {
        return this.sumPricecommandThisWeek$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    sumPricecommandThisMonth() {
        return this.sumPricecommandThisMonth$;
    }
};
CommandAutoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommandAutoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CommandAutoService);



/***/ })

}]);
//# sourceMappingURL=command-screens-history-history-module.js.map