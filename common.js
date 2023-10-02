(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+nw8":
/*!**********************************************************************!*\
  !*** ./src/app/client1/client/components/badge/badge.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".badge {\n  margin-right: 1rem;\n  background: #6b45bc;\n  color: #fff;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.6rem;\n  border-radius: 1rem;\n}\n.badge ion-icon {\n  margin-right: 0.3rem;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuXG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "/24w":
/*!***************************************************************!*\
  !*** ./src/app/client1/services/commandsToPrepare.service.ts ***!
  \***************************************************************/
/*! exports provided: CommandsToPrepareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsToPrepareService", function() { return CommandsToPrepareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let CommandsToPrepareService = class CommandsToPrepareService {
    constructor(http) {
        this.http = http;
        //private apiUrl = 'http://192.168.0.246:8080/api/command/commandsToPrepare';
        this.apiUrl = 'https://oafish-orange-production.up.railway.app/api/command/commandsToPrepare/';
        this.refreshInterval = 5000; // Temps d'actualisation en millisecondes (ici, toutes les 5 secondes)
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.notificationSound = new Audio('assets/audio/songOrder.mp3');
        this.previousData = [];
        this.userIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0); // initialiser avec une valeur par défaut de type number
        this.allCommandReceivedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allCommandReceived$ = this.userIdSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(userId => this.allCommandsByUserId(userId)));
    }
    allCommandsByUserId(userId) {
        const url = `${this.apiUrl}/getByUser/${userId}`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(url)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            this.allCommandReceivedSubject.next(data);
            this.previousData = data; // Mise à jour des données précédentes
        }));
    }
    allCommandsInversedByUserId(userId) {
        const url = `${this.apiUrl}/ordres-inverse/${userId}`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(url)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            this.allCommandReceivedSubject.next(data);
            this.previousData = data; // Mise à jour des données précédentes
        }));
    }
    deleteCommand(id) {
        const url = `${this.apiUrl}/deleteCommand/${id}`;
        return this.http.delete(url).pipe(
        // Mettez à jour la liste des commandes locales en filtrant la commande supprimée
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.previousData = this.previousData.filter((command) => command.id !== id);
        }));
    }
    /*deleteCommande(commandeId: number): Observable<any> {
      const deleteUrl = `${this.apiUrl}${commandeId}`;
      return this.http.delete<any>(deleteUrl);
    }*/
    // eslint-disable-next-line @typescript-eslint/member-ordering
    create(data) {
        return this.http.post(`${this.apiUrl}`, data);
    }
};
CommandsToPrepareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommandsToPrepareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CommandsToPrepareService);



/***/ }),

/***/ "0UoZ":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/cart-item/cart-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart-item.component.html */ "1HkW");
/* harmony import */ var _cart_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-item.component.scss */ "3YFI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CartItemComponent = class CartItemComponent {
    constructor() {
        this.increase = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.decrease = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
};
CartItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    increase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    decrease: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
CartItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-item',
        template: _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartItemComponent);



/***/ }),

/***/ "1HkW":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/components-admin/cart-item/cart-item.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cart-item\">\n  <div class=\"image\">\n    <ion-img [src]=\"item.image\"></ion-img>\n  </div>\n\n  <div class=\"description\">\n    <h3>{{item.name}}</h3>\n    <p><sup>$</sup>{{item.price | number:'1.2'}}</p>\n  </div>\n\n  <div class=\"actions\">\n    <ion-buttons>\n      <ion-button (click)=\"increase.emit()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"counter\">{{item.quantity}}</div>\n    <ion-buttons>\n      <ion-button (click)=\"decrease.emit()\">\n        <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n</div>");

/***/ }),

/***/ "3YCr":
/*!**********************************************************************!*\
  !*** ./src/app/client1/client/components/button/button.component.ts ***!
  \**********************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./button.component.html */ "AbMf");
/* harmony import */ var _button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component.scss */ "tsvR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ButtonComponent = class ButtonComponent {
    constructor() { }
    ngOnInit() { }
};
ButtonComponent.ctorParameters = () => [];
ButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-button',
        template: _raw_loader_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ButtonComponent);



/***/ }),

/***/ "3YFI":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/cart-item/cart-item.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart-item {\n  background: #f3f3f3;\n  padding: 1.5rem 1rem;\n  border-radius: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  width: 95%;\n  margin-left: 5%;\n  position: relative;\n}\n.cart-item .image {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  margin-right: 1.2rem;\n  position: absolute;\n  left: -5%;\n  top: 50%;\n  transform: translateY(-50%);\n  box-shadow: 10px 10px 10px 0px #c5c5c5;\n}\n.cart-item .description {\n  flex: 1;\n  margin-left: 28%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.cart-item .description h3 {\n  font-weight: 600;\n  color: #1f1f1f;\n}\n.cart-item .description p {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #ffb800;\n  margin: 0.5rem 0;\n}\n.cart-item .description p sup {\n  font-size: 0.8rem;\n  margin-right: 2px;\n}\n.cart-item .actions {\n  border: 1px solid #c7c7c7;\n  border-radius: 2rem;\n}\n.cart-item .actions .counter {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #6b45bc;\n}\n.cart-item .actions ion-button {\n  --background: #fff;\n  --box-shadow: 0px 2px 10px grey;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  height: 35px;\n  width: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhcnQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QUFDSjtBQUVFO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQU47QUFHSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQURSO0FBTUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBSko7QUFNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUpOO0FBT0k7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtBQU5OIiwiZmlsZSI6ImNhcnQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTUlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAwcHggI2M1YzVjNTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tbGVmdDogMjglO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMxZjFmMWY7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogI2ZmYjgwMDtcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XG5cbiAgICAgIHN1cCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWN0aW9ucyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M3YzdjNztcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuXG4gICAgLmNvdW50ZXIge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICM2YjQ1YmM7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTBweCBncmV5O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "5+VV":
/*!************************************************************!*\
  !*** ./src/app/client1/services/category-admin.service.ts ***!
  \************************************************************/
/*! exports provided: CategoryAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAdminService", function() { return CategoryAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const baseUrl = 'http://192.168.0.246:8080/api/admin/categories';
const baseUrl = 'https://oafish-orange-production.up.railway.app/api/admin/categories';
let CategoryAdminService = class CategoryAdminService {
    constructor(http) {
        this.http = http;
        this.categories = [];
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    getCategoriesById(id) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/${id}`);
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
    findByTitle(title) {
        return this.http.get(`${baseUrl}?title=${title}`);
    }
};
CategoryAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryAdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CategoryAdminService);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "8POb":
/*!*********************************************************!*\
  !*** ./src/app/client1/services/food-client.service.ts ***!
  \*********************************************************/
/*! exports provided: FoodClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodClientService", function() { return FoodClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const baseUrl = 'http://192.168.0.246:8080/api/client/foods';
const baseUrl = 'https://oafish-orange-production.up.railway.app/api/client/foods';
//const urlBublished = 'http://192.168.0.246:8080/api/client/foods/published';
const urlBublished = 'https://oafish-orange-production.up.railway.app/api/client/foods/published';
let FoodClientService = class FoodClientService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    getAllFoodUserPublished(idUser) {
        return this.http.get(`${baseUrl}/user/${idUser}`);
    }
    getAllPublished() {
        return this.http.get(urlBublished);
    }
    getFoodsById(id) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/${id}`);
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
    findByTitle(idUser, title) {
        return this.http.get(`${baseUrl}/user/${idUser}/?title=${title}`);
    }
};
FoodClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FoodClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], FoodClientService);



/***/ }),

/***/ "90tW":
/*!******************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/cart-item/cart-item.module.ts ***!
  \******************************************************************************/
/*! exports provided: CartItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemModule", function() { return CartItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-item.component */ "0UoZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CartItemModule = class CartItemModule {
};
CartItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"]],
    })
], CartItemModule);



/***/ }),

/***/ "AbMf":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/components/button/button.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand=\"block\">\n  <ng-content></ng-content>\n</ion-button>");

/***/ }),

/***/ "Aj8l":
/*!**************************************************!*\
  !*** ./src/app/client1/services/cart.service.ts ***!
  \**************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let CartService = class CartService {
    constructor() {
        this.items$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([
        /*{
          id: 1,
          name: 'Sea Food',
          price: 12,
          image: 'assets/images/foods/seafood-dishes.png',
          quantity: 1,
        },*/
        ]);
    }
    getCart() {
        return this.items$.asObservable();
    }
    addToCart(newItem) {
        this.items$.next([...this.items$.getValue(), newItem]);
    }
    removeItem(id) {
        this.items$.next(this.items$.getValue().filter((item) => item.id !== id));
    }
    clearCart() {
        this.items$.next([]);
    }
    changeQty(quantity, id) {
        const items = this.items$.getValue();
        const index = items.findIndex((item) => item.id === id);
        items[index].quantity += quantity;
        this.items$.next(items);
    }
    getTotalAmount() {
        return this.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((items) => {
            let total = 0;
            items.forEach((item) => {
                total += item.quantity * item.price;
            });
            return total;
        }));
    }
};
CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CartService);



/***/ }),

/***/ "Cmzq":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/components/badge/badge.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"badge\">\n  <ion-icon [name]=\"icon\"></ion-icon> {{text}}\n</div>");

/***/ }),

/***/ "FlPx":
/*!********************************************************************!*\
  !*** ./src/app/client1/client/components/badge/badge.component.ts ***!
  \********************************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_badge_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./badge.component.html */ "Cmzq");
/* harmony import */ var _badge_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge.component.scss */ "+nw8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BadgeComponent = class BadgeComponent {
};
BadgeComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BadgeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-badge',
        template: _raw_loader_badge_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_badge_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BadgeComponent);



/***/ }),

/***/ "Iyou":
/*!*******************************************************************!*\
  !*** ./src/app/client1/client/components/button/button.module.ts ***!
  \*******************************************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.component */ "3YCr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ButtonModule = class ButtonModule {
};
ButtonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]],
    })
], ButtonModule);



/***/ }),

/***/ "KJOm":
/*!********************************************************!*\
  !*** ./src/app/client1/services/food-admin.service.ts ***!
  \********************************************************/
/*! exports provided: FoodAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAdminService", function() { return FoodAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const baseUrl = 'http://192.168.0.246:8080/api/admin/foods';
const baseUrl = 'https://oafish-orange-production.up.railway.app/api/admin/foods';
//const urlBublished = 'http://192.168.0.246:8080/api/admin/foods/published';
const urlBublished = 'https://oafish-orange-production.up.railway.app/api/admin/foods/published';
let FoodAdminService = class FoodAdminService {
    constructor(http) {
        this.http = http;
    }
    getAllFoodsUser() {
        return this.http.get(baseUrl);
    }
    getAllPublished() {
        return this.http.get(urlBublished);
    }
    getFoodsById(id) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/${id}`);
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
    findByTitle(title) {
        return this.http.get(`${baseUrl}?title=${title}`);
    }
};
FoodAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FoodAdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], FoodAdminService);



/***/ }),

/***/ "WGBS":
/*!************************************************************!*\
  !*** ./src/app/client1/services/sub-food-admin.service.ts ***!
  \************************************************************/
/*! exports provided: SubFoodAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFoodAdminService", function() { return SubFoodAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const baseUrl = 'http://192.168.0.246:8080/api/admin/subfoods';
const baseUrl = 'https://oafish-orange-production.up.railway.app/api/admin/subfoods';
//const baseUrl2 = 'http://192.168.0.246:8080/api/admin/subfoods/list';
const baseUrl2 = 'https://oafish-orange-production.up.railway.app/api/admin/subfoods/list';
let SubFoodAdminService = class SubFoodAdminService {
    constructor(http) {
        this.http = http;
    }
    getAllSubFoodByFood(foodId) {
        return this.http.get(`${baseUrl}/all/${foodId}`);
    }
    create(foodId, data) {
        return this.http.post(`${baseUrl}/${foodId}`, data);
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    findByParentFood(food) {
        return this.http.get(`${baseUrl2}?food=${food}`);
    }
    getSubFoodsById(foodId, subFoodId) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/foods/${foodId}/subfoods/${subFoodId}`);
    }
    getAllSubCommand(food) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/${food}`);
    }
    get(id) {
        // @ts-ignore
        return this.http.get(`${baseUrl}/${id}`);
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
SubFoodAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubFoodAdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubFoodAdminService);



/***/ }),

/***/ "WJ7A":
/*!*****************************************************************!*\
  !*** ./src/app/client1/client/components/badge/badge.module.ts ***!
  \*****************************************************************/
/*! exports provided: BadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeModule", function() { return BadgeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge.component */ "FlPx");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let BadgeModule = class BadgeModule {
};
BadgeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeComponent"]],
    })
], BadgeModule);



/***/ }),

/***/ "Zcj0":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "ib1Z":
/*!***************************************************!*\
  !*** ./src/app/client1/services/canal.service.ts ***!
  \***************************************************/
/*! exports provided: CanalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanalService", function() { return CanalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CanalService = class CanalService {
    getCommandToPrepareLength() {
        return this.commandToPrepareLength;
    }
    setCommandToPrepareLength(value) {
        this.commandToPrepareLength = value;
    }
    getUserIdFoCommand() {
        return this.userIdFoCommand;
    }
    setUserIdFoCommand(value) {
        this.userIdFoCommand = value;
    }
    setCanal(value) {
        this.canalValue = value;
    }
    getCanal() {
        return this.canalValue;
    }
    getUserId() {
        return this.userId;
    }
    setUserId(value) {
        this.userId = value;
    }
};
CanalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CanalService);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "spDm":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "W6o/");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "tsvR":
/*!************************************************************************!*\
  !*** ./src/app/client1/client/components/button/button.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --box-shadow: none;\n  --border-radius: 1.8rem;\n  --background: #6b45bc;\n  text-transform: initial;\n  font-size: 1.2rem;\n  font-weight: 600;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUVBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEuOHJlbTtcbiAgLS1iYWNrZ3JvdW5kOiAjNmI0NWJjO1xuXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=common.js.map