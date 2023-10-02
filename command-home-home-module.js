(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["command-home-home-module"],{

/***/ "6x2h":
/*!*************************************************************!*\
  !*** ./src/app/client1/command/home/home-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "Lt0P");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'listing',
                loadChildren: () => Promise.all(/*! import() | command-screens-listing-listing-module */[__webpack_require__.e("default~command-screens-listing-listing-module~screens-listing-listing-module~screens-status-command~1fe67749"), __webpack_require__.e("common"), __webpack_require__.e("command-screens-listing-listing-module")]).then(__webpack_require__.bind(null, /*! ../../command/screens/listing/listing.module */ "Lvn9")).then((m) => m.ListingPageModule),
            },
            {
                path: 'history',
                loadChildren: () => Promise.all(/*! import() | command-screens-history-history-module */[__webpack_require__.e("common"), __webpack_require__.e("command-screens-history-history-module")]).then(__webpack_require__.bind(null, /*! ../../command/screens/history/history.module */ "W+Ie")).then((m) => m.HistoryModule),
            },
            {
                path: 'history/details/:id',
                loadChildren: () => Promise.all(/*! import() | screens-detailscommand-detailscommand-module */[__webpack_require__.e("default~screens-admin-detailscommand-detailscommand-module~screens-detailscommand-detailscommand-module"), __webpack_require__.e("screens-detailscommand-detailscommand-module")]).then(__webpack_require__.bind(null, /*! ../screens/detailscommand/detailscommand.module */ "Ztkf")).then((m) => m.DetailscommandModule),
            },
            {
                path: '**',
                redirectTo: '/command/listing',
                pathMatch: 'full'
            }
        ],
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "Lt0P":
/*!***************************************************!*\
  !*** ./src/app/client1/command/home/home.page.ts ***!
  \***************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "O6as");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "prIe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_canal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/canal.service */ "ib1Z");
/* harmony import */ var _services_Shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Shared.service */ "Ym5C");






let HomePage = class HomePage {
    constructor(canalService, sharedService) {
        this.canalService = canalService;
        this.sharedService = sharedService;
    }
    ngOnInit() {
        this.sharedService.myVariable$.subscribe((newValue) => {
            this.myVariable = newValue;
        });
        console.log('----->' + this.sharedService.myVariable$.subscribe((newValue) => {
            this.myVariable = newValue;
        }));
    }
};
HomePage.ctorParameters = () => [
    { type: _services_canal_service__WEBPACK_IMPORTED_MODULE_4__["CanalService"] },
    { type: _services_Shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "O6as":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/command/home/home.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"listing\">\n      <!--div class=\"cart-length\">{{10}}</div-->\n      <div class=\"cart-length\">{{myVariable}}</div>\n      <div class=\"example-content\">Panier</div>\n      <ion-icon name=\"d-cart\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"history\">\n      <div>Historique</div>\n      <ion-icon name=\"d-apps\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "Ym5C":
/*!****************************************************!*\
  !*** ./src/app/client1/services/Shared.service.ts ***!
  \****************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let SharedService = class SharedService {
    constructor() {
        this.myVariableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('0');
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.myVariable$ = this.myVariableSubject.asObservable();
    }
    updateCommandToPreparLength(newValue) {
        this.myVariableSubject.next(newValue);
    }
};
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "prIe":
/*!*****************************************************!*\
  !*** ./src/app/client1/command/home/home.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  padding: 10px 0;\n}\nion-tab-bar ion-tab-button ion-icon {\n  font-size: 1.7rem;\n}\n.cart-length {\n  color: red;\n  font-weight: bold;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFLQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYmFyIHtcbiAgcGFkZGluZzogMTBweCAwO1xuXG4gIGlvbi10YWItYnV0dG9uIHtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcnQtbGVuZ3Roe1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuXG59XG4iXX0= */");

/***/ }),

/***/ "ziKE":
/*!*****************************************************!*\
  !*** ./src/app/client1/command/home/home.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "Lt0P");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "6x2h");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ })

}]);
//# sourceMappingURL=command-home-home-module.js.map