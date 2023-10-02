(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~command-screens-listing-listing-module~screens-listing-listing-module~screens-status-command~1fe67749"],{

/***/ "4E68":
/*!*************************************************************************!*\
  !*** ./src/app/client1/client/components/food-card/food-card.module.ts ***!
  \*************************************************************************/
/*! exports provided: FoodCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCardModule", function() { return FoodCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _food_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-card.component */ "Oi9e");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let FoodCardModule = class FoodCardModule {
};
FoodCardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_food_card_component__WEBPACK_IMPORTED_MODULE_3__["FoodCardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_food_card_component__WEBPACK_IMPORTED_MODULE_3__["FoodCardComponent"]],
    })
], FoodCardModule);



/***/ }),

/***/ "8gkv":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/components/food-card/food-card.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div class=\"card\" (click)=\"clicked.emit()\"-->\n<div class=\"card\" (click)=\"clicked.emit()\">\n  <ion-img [src]=\"item.image\"></ion-img>\n\n  <div class=\"card-content\">\n    <h3 class=\"title\">{{item.title}}</h3>\n    <!--h2 class=\"subtitle\">{{item.price|number:'1.2'}}<sup>€</sup></h2-->\n    <h2 class=\"subtitle\">{{minPrice}}<sup>€</sup> - {{maxPrice}}<sup>€</sup> </h2>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "AxL/":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/components/category-item/category-item.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div class=\"wrapper\" [ngClass]=\"item.active ? 'active' : ''\">\n  <div class=\"image-card\">\n    <ion-img [src]=\"item.image\"></ion-img>\n  </div>\n\n  <p class=\"ion-no-margin\">{{item.label}}</p>\n</div-->\n");

/***/ }),

/***/ "Oi9e":
/*!****************************************************************************!*\
  !*** ./src/app/client1/client/components/food-card/food-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: FoodCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCardComponent", function() { return FoodCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_food_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./food-card.component.html */ "8gkv");
/* harmony import */ var _food_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-card.component.scss */ "RMr0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_sub_food_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/sub-food-client.service */ "sKBm");







let FoodCardComponent = class FoodCardComponent {
    constructor(alertCtrl, router, subFoodService) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.subFoodService = subFoodService;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    addToCart() {
        window.alert('Add to cart ok !');
    }
    ngOnInit() {
        //this.getMaxAndMin(this.item.id);
    }
};
FoodCardComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_sub_food_client_service__WEBPACK_IMPORTED_MODULE_6__["SubFoodClientService"] }
];
FoodCardComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
FoodCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-food-card',
        template: _raw_loader_food_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_food_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FoodCardComponent);



/***/ }),

/***/ "RMr0":
/*!******************************************************************************!*\
  !*** ./src/app/client1/client/components/food-card/food-card.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  padding: 0rem 1rem;\n  background: #f3f3f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 2.5rem;\n  margin-bottom: 1.5rem;\n  width: 100%;\n  height: 90%;\n}\n.card .card-content {\n  text-align: center;\n}\n.card .card-content .title {\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: 0.2rem;\n  color: #1d1d1d;\n}\n.card .card-content .subtitle {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #ffb800;\n  margin-top: 0;\n}\n.card .card-content .subtitle sup {\n  font-size: 1rem;\n  margin-right: 2px;\n  color: #ffb800;\n}\n.card .card-content ion-buttons {\n  position: absolute;\n  bottom: -1rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.card .card-content ion-buttons ion-button {\n  --background: #6b45bc;\n  font-weight: 700;\n  color: #fff;\n  width: 45px;\n  height: 45px;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZvb2QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUY7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBTjtBQUdJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBRE47QUFHTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFEUjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBSE47QUFLTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhSIiwiZmlsZSI6ImZvb2QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgLy93aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MCU7XG5cbiAgLmNhcmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgICAgIGNvbG9yOiAjMWQxZDFkO1xuICAgIH1cblxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogI2ZmYjgwMDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAgIHN1cCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgIGNvbG9yOiAjZmZiODAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1idXR0b25zIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTFyZW07XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "eWds":
/*!************************************************************************************!*\
  !*** ./src/app/client1/client/components/category-item/category-item.component.ts ***!
  \************************************************************************************/
/*! exports provided: CategoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemComponent", function() { return CategoryItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category-item.component.html */ "AxL/");
/* harmony import */ var _category_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-item.component.scss */ "gs9x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CategoryItemComponent = class CategoryItemComponent {
};
CategoryItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CategoryItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-item',
        template: _raw_loader_category_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryItemComponent);



/***/ }),

/***/ "gs9x":
/*!**************************************************************************************!*\
  !*** ./src/app/client1/client/components/category-item/category-item.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.wrapper .image-card {\n  background-color: #f3f3f3;\n  padding: 0.8rem;\n  border-radius: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.wrapper .image-card ion-img {\n  opacity: 0.8;\n}\n.wrapper p {\n  color: #c7c7c7;\n}\n.wrapper.active .image-card {\n  background-color: #6b45bc;\n}\n.wrapper.active p {\n  color: #1d1d1d;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhdGVnb3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBR0U7RUFDRSxjQUFBO0FBREo7QUFNRTtFQUNFLHlCQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUpKIiwiZmlsZSI6ImNhdGVnb3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuaW1hZ2UtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICAgIGlvbi1pbWcge1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjYzdjN2M3O1xuICB9XG59XG5cbi53cmFwcGVyLmFjdGl2ZSB7XG4gIC5pbWFnZS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI0NWJjO1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICMxZDFkMWQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuIl19 */");

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



/***/ }),

/***/ "vjGy":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/client/components/category-item/category-item.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoryItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemModule", function() { return CategoryItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _category_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-item.component */ "eWds");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CategoryItemModule = class CategoryItemModule {
};
CategoryItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_category_item_component__WEBPACK_IMPORTED_MODULE_3__["CategoryItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_category_item_component__WEBPACK_IMPORTED_MODULE_3__["CategoryItemComponent"]],
    })
], CategoryItemModule);



/***/ })

}]);
//# sourceMappingURL=default~command-screens-listing-listing-module~screens-listing-listing-module~screens-status-command~1fe67749.js.map