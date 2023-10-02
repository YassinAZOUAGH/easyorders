(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-detail-detail-module"],{

/***/ "0m2s":
/*!************************************************************************!*\
  !*** ./src/app/client1/client/screens/detail/detail-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "T6UF");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "Q49t":
/*!****************************************************************!*\
  !*** ./src/app/client1/client/screens/detail/detail.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n}\nion-content .header {\n  background: #6b45bc;\n  border-radius: 0rem 0rem 1rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .header ion-button {\n  height: 60px;\n  width: 60px;\n}\nion-content .header ion-button ion-icon {\n  font-size: 2rem;\n}\nion-content .card {\n  height: 75%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  border-radius: 3rem 3rem 0 0;\n  padding: 2rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  max-width: 200px;\n  max-height: 200px;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .card-title {\n  margin-top: 10%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 2.1rem;\n}\nion-content .card .card-title p {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n}\nion-content .card .card-title p sup {\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n}\nion-content .card .rates {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n}\nion-content .card .about {\n  margin-bottom: 1rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\nion-content .card .about p {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #b9b9b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtBQUFGO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFBTjtBQUVNO0VBQ0UsZUFBQTtBQUFSO0FBS0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBSEo7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFITjtBQU1JO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFKTjtBQU1NO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUpSO0FBT007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUxSO0FBT1E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBTFY7QUFVSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBUk47QUFXSTtFQUNFLG1CQUFBO0FBVE47QUFXTTtFQUNFLGdCQUFBO0FBVFI7QUFZTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVlIiLCJmaWxlIjoiZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLy8tLWJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICAgIGJvcmRlci1yYWRpdXM6IDByZW0gMHJlbSAxcmVtIDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNyZW0gM3JlbSAwIDA7XG4gICAgcGFkZGluZzogMnJlbTtcblxuICAgIC5pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC02LjVyZW07XG4gICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNmZmI4MDA7XG5cbiAgICAgICAgc3VwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmF0ZXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cblxuICAgIC5hYm91dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgY29sb3I6ICNiOWI5Yjk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "T6UF":
/*!**************************************************************!*\
  !*** ./src/app/client1/client/screens/detail/detail.page.ts ***!
  \**************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail.page.html */ "easo");
/* harmony import */ var _detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.page.scss */ "Q49t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/client1/services/cart.service */ "Aj8l");
/* harmony import */ var _services_sub_food_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/sub-food-client.service */ "sKBm");








let DetailPage = class DetailPage {
    constructor(activatedRoute, subFoodService, cartService, toastController, router, route) {
        this.activatedRoute = activatedRoute;
        this.subFoodService = subFoodService;
        this.cartService = cartService;
        this.toastController = toastController;
        this.router = router;
        this.route = route;
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.idReceived = this.router.getCurrentNavigation().extras.state.sendId;
            }
        });
    }
    ngOnInit() {
        // @ts-ignore
        //this.subfood = this.getFoodById(this.id);
        //console.log('====>',this.subfood);
        this.getFoodById(this.id);
        console.log('===>' + this.id);
        console.log('++++>' + this.idReceived);
    }
    getFoodById(id) {
        this.subFoodService.getSubFoodsById(this.id)
            .subscribe(data => {
            this.subfood = data;
            console.log('detail : ', data);
        }, 
        // eslint-disable-next-line @typescript-eslint/no-shadow
        error => {
            console.log(error);
        });
    }
    addItemToCart() {
        const cartitem = {
            id: this.subfood.id,
            name: this.subfood.title,
            price: this.subfood.price,
            image: this.subfood.pic,
            quantity: 1,
        };
        this.cartService.addToCart(cartitem);
        this.showConfirmatioMsg(this.subfood.title);
        // this.router.navigate(['/client1/client/listing']);
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
                position: 'middle',
                color: 'success'
            });
            toast.present();
        });
    }
    showConfirmatioMsg(title) {
        this.presentToast(title + ' a bien été ajouté');
    }
    goBack() {
        // this.router.navigate(['/client1/client/detail', this.idReceived]);
        this.router.navigate(['/client/list-sub-food', this.idReceived]);
    }
};
DetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_sub_food_client_service__WEBPACK_IMPORTED_MODULE_7__["SubFoodClientService"] },
    { type: src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailPage);



/***/ }),

/***/ "dYJb":
/*!****************************************************************!*\
  !*** ./src/app/client1/client/screens/detail/detail.module.ts ***!
  \****************************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-routing.module */ "0m2s");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "T6UF");
/* harmony import */ var src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/badge/badge.module */ "WJ7A");
/* harmony import */ var src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/button/button.module */ "Iyou");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










let DetailPageModule = class DetailPageModule {
};
DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"],
            src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]],
    })
], DetailPageModule);



/***/ }),

/***/ "easo":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/screens/detail/detail.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"header\">\n    <ion-buttons>\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" color='light' name=\"d-heart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <!-- FOOD DETAIL CARD -->\n  <div class=\"card\">\n    <div class=\"image\">\n      <ion-img [src]=\"subfood?.pic\"></ion-img>\n    </div>\n\n    <div class=\"card-content\">\n      <div class=\"card-title\">\n        <h1 class=\"ion-no-margin\">{{subfood?.title}}</h1>\n        <p class=\"ion-no-margin\">{{subfood?.price | number: '1.2'}}<sup>€</sup></p>\n      </div>\n    </div>\n\n    <div class=\"rates\">\n      <app-badge icon=\"d-time-forward\" text=\"30m\"></app-badge>\n      <app-badge icon=\"star-outline\" text=\"4.5\"></app-badge>\n    </div>\n\n    <div class=\"about\">\n      <h1>{{ 'DESCRIPTION' | translate }}</h1>\n      <p>{{subfood?.description}}</p>\n    </div>\n\n    <app-button (click)=\"addItemToCart()\"  (click)=\"goBack()\">{{ 'ADDTOCART' | translate }}</app-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "sKBm":
/*!*************************************************************!*\
  !*** ./src/app/client1/services/sub-food-client.service.ts ***!
  \*************************************************************/
/*! exports provided: SubFoodClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFoodClientService", function() { return SubFoodClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const baseUrl = 'http://192.168.0.246:8080/api/client/subfoods';
const baseUrl = 'https://oafish-orange-production.up.railway.app/api/client/subfoods';
//const baseUrl2 = 'http://192.168.0.246:8080/api/client/subfoods/list';
const baseUrl2 = 'https://oafish-orange-production.up.railway.app/api/client/subfoods/list';
let SubFoodClientService = class SubFoodClientService {
    constructor(http) {
        this.http = http;
    }
    getAllSubFoodByFood(foodId) {
        return this.http.get(`${baseUrl}/all/${foodId}`);
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    findByParentFood(food) {
        return this.http.get(`${baseUrl2}?food=${food}`);
    }
    getSubFoodsById(id) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/${id}`);
    }
    getAllSubCommand(food) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/${food}`);
    }
    get(id) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/${id}`);
    }
    create(data) {
        return this.http.post(baseUrl, data);
    }
    update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
    deleteAll() {
        return this.http.delete(baseUrl);
    }
    findByTitle(title) {
        return this.http.get(`${baseUrl}?title=${title}`);
    }
    deleteFoodsByFoodValue(foodValue) {
        return this.http.delete(`${baseUrl}/deleteAllByParents/${foodValue}`);
    }
    getMaxPrice(foodValue) {
        return this.http.get(`${baseUrl}/max-price/${foodValue}`);
    }
    getMinPrice(foodValue) {
        return this.http.get(`${baseUrl}/min-price/${foodValue}`);
    }
};
SubFoodClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubFoodClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubFoodClientService);



/***/ })

}]);
//# sourceMappingURL=screens-detail-detail-module.js.map