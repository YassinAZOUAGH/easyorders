(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-home-home-module"],{

/***/ "/gNd":
/*!************************************************************!*\
  !*** ./src/app/client1/client/home/home-routing.module.ts ***!
  \************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "px2A");




// @ts-ignore
const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'menu',
                loadChildren: () => Promise.all(/*! import() | screens-listing-listing-module */[__webpack_require__.e("default~command-screens-listing-listing-module~screens-listing-listing-module~screens-status-command~1fe67749"), __webpack_require__.e("common"), __webpack_require__.e("screens-listing-listing-module")]).then(__webpack_require__.bind(null, /*! ../screens/listing/listing.module */ "Z+eU")).then((m) => m.ListingPageModule),
                data: { canal: 'Online', user: '5' } // Ajoutez les paramètres de requête ici
            },
            {
                path: 'cart',
                loadChildren: () => Promise.all(/*! import() | screens-cart-cart-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-cart-cart-module")]).then(__webpack_require__.bind(null, /*! ../screens/cart/cart.module */ "EPCR")).then((m) => m.CartPageModule),
            },
            {
                path: 'detail/:id',
                loadChildren: () => Promise.all(/*! import() | screens-detail-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-detail-detail-module")]).then(__webpack_require__.bind(null, /*! ../screens/detail/detail.module */ "dYJb")).then((m) => m.DetailPageModule),
            },
            {
                path: 'statuscommand',
                loadChildren: () => Promise.all(/*! import() | screens-status-command-status-command-module */[__webpack_require__.e("default~command-screens-listing-listing-module~screens-listing-listing-module~screens-status-command~1fe67749"), __webpack_require__.e("screens-status-command-status-command-module")]).then(__webpack_require__.bind(null, /*! ../screens/status-command/status-command.module */ "2EFn")).then((m) => m.StatusCommandModule),
            },
            {
                path: 'list-sub-food/:id',
                loadChildren: () => Promise.all(/*! import() | screens-list-sub-food-list-sub-food-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-list-sub-food-list-sub-food-module")]).then(__webpack_require__.bind(null, /*! ../screens/list-sub-food/list-sub-food.module */ "P7mM")).then((m) => m.ListSubFoodModule),
            },
            {
                path: '**',
                redirectTo: `/client/menu`,
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

/***/ "JM6j":
/*!****************************************************!*\
  !*** ./src/app/client1/client/home/home.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  padding: 10px 0;\n}\nion-tab-bar ion-tab-button ion-icon {\n  font-size: 1.7rem;\n}\n.cart-length {\n  color: yellowgreen;\n  font-weight: bold;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFLQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XG4gIHBhZGRpbmc6IDEwcHggMDtcblxuICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgfVxuICB9XG59XG5cbi5jYXJ0LWxlbmd0aHtcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuXG59XG4iXX0= */");

/***/ }),

/***/ "RQM8":
/*!****************************************************!*\
  !*** ./src/app/client1/client/home/home.module.ts ***!
  \****************************************************/
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
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "px2A");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "/gNd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "Ylfw":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/home/home.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button (click)=\"goToMenu()\">\n      <div class=\"example-content\">{{ 'MENU_TAB' | translate }}</div>\n      <ion-icon name=\"d-apps\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cart\">\n      <div class=\"example-content\">{{ 'CART_TAB' | translate }}</div>\n\n      <div class=\"cart-length\" *ngIf=\"(cartItems$|async).length\">{{(cartItems$|async).length}}</div>\n      <ion-icon name=\"d-cart\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"statuscommand\">\n      <div class=\"example-content\">{{ 'STATUS_TAB' | translate }}</div>\n      <div class=\"cart-length\" *ngIf=\"(commandItems$|async).length\">{{(commandItems$|async).length}}</div>\n      <ion-icon name=\"d-time-forward\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "jmJh":
/*!************************************************************!*\
  !*** ./src/app/client1/services/status-command.service.ts ***!
  \************************************************************/
/*! exports provided: StatusCommandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCommandService", function() { return StatusCommandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let StatusCommandService = class StatusCommandService {
    constructor() {
        this.items$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([
        /*{
          id: 1,
          name: 'name command 1',
          price: 10,
        },*/
        ]);
    }
    getCommand() {
        return this.items$.asObservable();
    }
    addToCommand(newItem) {
        this.items$.next([...this.items$.getValue(), newItem]);
    }
    clearCart() {
        this.items$.next([]);
    }
    removeItem(id) {
        this.items$.next(this.items$.getValue().filter((item) => item.id !== id));
    }
};
StatusCommandService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], StatusCommandService);



/***/ }),

/***/ "px2A":
/*!**************************************************!*\
  !*** ./src/app/client1/client/home/home.page.ts ***!
  \**************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "Ylfw");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "JM6j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart.service */ "Aj8l");
/* harmony import */ var _services_status_command_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/status-command.service */ "jmJh");
/* harmony import */ var _services_canal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/canal.service */ "ib1Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let HomePage = class HomePage {
    constructor(cartService, statusCommandService, canalService, router, route) {
        this.cartService = cartService;
        this.statusCommandService = statusCommandService;
        this.canalService = canalService;
        this.router = router;
        this.route = route;
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
    }
    ngOnInit() {
        this.cartItems$ = this.cartService.getCart();
        this.commandItems$ = this.statusCommandService.getCommand();
    }
    goToMenu() {
        this.userId = this.canalService.getUserId();
        this.canal = this.canalService.getCanal();
        const queryParams = { canal: this.canal, user: this.userId };
        this.router.navigate(['/client/menu'], { queryParams });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _services_status_command_service__WEBPACK_IMPORTED_MODULE_6__["StatusCommandService"] },
    { type: _services_canal_service__WEBPACK_IMPORTED_MODULE_7__["CanalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=client-home-home-module.js.map