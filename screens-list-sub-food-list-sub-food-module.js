(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-list-sub-food-list-sub-food-module"],{

/***/ "6Sxk":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/screens/list-sub-food/list-sub-food.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ionContent\">\n  <div class=\"header\">\n\n    <ion-buttons>\n      <ion-button routerLink=\"/client/listing\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"title\">\n      <p> {{ 'LIST_OF' | translate }} {{foood?.title}}</p>\n    </div>\n    <ion-buttons>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" color='light' name=\"d-heart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <!-- FOOD DETAIL CARD -->\n  <div class=\"card\">\n    <div class=\"image\">\n      <ion-img [src]=\"foood?.image\"></ion-img>\n    </div>\n\n    <div class=\"sub-food-list\" >\n      <div class=\"sub-card-list\" *ngFor=\"let item of subFood\">\n        <ion-img [src]=\"item.pic\" (click)=\"addToCart(item.id)\"></ion-img>\n\n        <div class=\"sub-card-content\">\n          <h3 class=\"sub-title\">{{item.title}}</h3>\n          <h2 class=\"sub-subtitle\"><sup>$</sup>{{item.price|number:'1.2'}}</h2>\n\n        </div>\n        <ion-buttons slot=\"start\" class=\"sub-ion-buttons\" (click)=\"addThisToCart(item.id,item.title, item.price, item.pic)\">\n          <ion-button class=\"sub-ion-button\">\n            <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "7qB4":
/*!**************************************************************************************!*\
  !*** ./src/app/client1/client/screens/list-sub-food/list-sub-food-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ListSubFoodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubFoodRoutingModule", function() { return ListSubFoodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_sub_food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-sub-food.page */ "XSYl");




const routes = [
    {
        path: '',
        component: _list_sub_food_page__WEBPACK_IMPORTED_MODULE_3__["ListSubFoodPage"]
    }
];
let ListSubFoodRoutingModule = class ListSubFoodRoutingModule {
};
ListSubFoodRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListSubFoodRoutingModule);



/***/ }),

/***/ "Ihoe":
/*!************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/button/button.module.ts ***!
  \************************************************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.component */ "unJc");
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

/***/ "JGT0":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/components-admin/button/button.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand=\"block\">\n  <ng-content></ng-content>\n</ion-button>");

/***/ }),

/***/ "NK88":
/*!*****************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/button/button.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --box-shadow: none;\n  --border-radius: 1.8rem;\n  --background: #6b45bc;\n  text-transform: initial;\n  font-size: 1.2rem;\n  font-weight: 600;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUVBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEuOHJlbTtcbiAgLS1iYWNrZ3JvdW5kOiAjNmI0NWJjO1xuXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "P7mM":
/*!******************************************************************************!*\
  !*** ./src/app/client1/client/screens/list-sub-food/list-sub-food.module.ts ***!
  \******************************************************************************/
/*! exports provided: ListSubFoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubFoodModule", function() { return ListSubFoodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _list_sub_food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-sub-food-routing.module */ "7qB4");
/* harmony import */ var _list_sub_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-sub-food.page */ "XSYl");
/* harmony import */ var src_app_client1_admin_components_admin_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/admin/components-admin/badge/badge.module */ "ej3e");
/* harmony import */ var src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/admin/components-admin/button/button.module */ "Ihoe");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










let ListSubFoodModule = class ListSubFoodModule {
};
ListSubFoodModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_sub_food_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListSubFoodRoutingModule"],
            src_app_client1_admin_components_admin_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        ],
        declarations: [_list_sub_food_page__WEBPACK_IMPORTED_MODULE_6__["ListSubFoodPage"]],
    })
], ListSubFoodModule);



/***/ }),

/***/ "XSYl":
/*!****************************************************************************!*\
  !*** ./src/app/client1/client/screens/list-sub-food/list-sub-food.page.ts ***!
  \****************************************************************************/
/*! exports provided: ListSubFoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubFoodPage", function() { return ListSubFoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_sub_food_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-sub-food.page.html */ "6Sxk");
/* harmony import */ var _list_sub_food_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-sub-food.page.scss */ "s5JP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/client1/services/cart.service */ "Aj8l");
/* harmony import */ var src_app_client1_services_food_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/services/food-client.service */ "8POb");
/* harmony import */ var _services_sub_food_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/sub-food-client.service */ "sKBm");









let ListSubFoodPage = class ListSubFoodPage {
    constructor(activatedRoute, foodService, subFoodService, cartService, router, route, alertCtrl, toastController) {
        this.activatedRoute = activatedRoute;
        this.foodService = foodService;
        this.subFoodService = subFoodService;
        this.cartService = cartService;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.message = '';
        //subFood?: SubFood[];
        //subFood: SubFood[];
        //food: Food[] = [];
        this.subFood = [];
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        console.log('----->', this.id);
        // @ts-ignore
        this.getFoodById(this.id);
        this.getSubFoodsByParent(this.id);
    }
    getFoodById(id) {
        this.foodService.getFoodsById(this.id)
            .subscribe(data => {
            this.foood = data;
            console.log('parentFood is: ', data);
        }, error => {
            console.log(error);
        });
    }
    getSubFoodsByParent(id) {
        this.subFoodService.getAllSubFoodByFood(id)
            .subscribe(data => {
            this.subFood = data;
            console.log('list-sub-food', data);
        }, error => {
            console.log(error);
        });
    }
    addToCart(id) {
        // this.router.navigate(['/client1/client/detail', id]);
        const navigationExtras = {
            state: {
                sendId: this.id
            }
        };
        this.router.navigate(['/client/detail', id], navigationExtras);
    }
    addItemToCart(id) {
        console.log('add to cart express worked', id);
    }
    addThisToCart(idd, title, pprice, pic) {
        const cartitem = {
            id: idd,
            name: title,
            price: pprice,
            image: pic,
            quantity: 1,
        };
        this.cartService.addToCart(cartitem);
        this.showConfirmatioMsg(title);
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
        this.presentToast(title + ' a bien été ajouté à votre panier.');
    }
};
ListSubFoodPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_client1_services_food_client_service__WEBPACK_IMPORTED_MODULE_7__["FoodClientService"] },
    { type: _services_sub_food_client_service__WEBPACK_IMPORTED_MODULE_8__["SubFoodClientService"] },
    { type: src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
ListSubFoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-sub-food',
        template: _raw_loader_list_sub_food_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_sub_food_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListSubFoodPage);



/***/ }),

/***/ "bqAc":
/*!***************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/badge/badge.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".badge {\n  margin-right: 1rem;\n  background: #6b45bc;\n  color: #fff;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.6rem;\n  border-radius: 1rem;\n}\n.badge ion-icon {\n  margin-right: 0.3rem;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuXG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "ej3e":
/*!**********************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/badge/badge.module.ts ***!
  \**********************************************************************/
/*! exports provided: BadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeModule", function() { return BadgeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge.component */ "kbQ9");
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

/***/ "kbQ9":
/*!*************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/badge/badge.component.ts ***!
  \*************************************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_badge_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./badge.component.html */ "xrLk");
/* harmony import */ var _badge_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge.component.scss */ "bqAc");
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

/***/ "s5JP":
/*!******************************************************************************!*\
  !*** ./src/app/client1/client/screens/list-sub-food/list-sub-food.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  padding: 2rem;\n  position: relative;\n}\nion-content .header {\n  background: #6b45bc;\n  border-radius: 0rem 0rem 1rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .header ion-button {\n  height: 60px;\n  width: 60px;\n}\nion-content .header ion-button ion-icon {\n  font-size: 2rem;\n}\nion-content .card {\n  height: 70%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0%;\n  border-radius: 3rem 3rem 0 3rem;\n  padding: 2rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .card-title {\n  margin-top: 35%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 2.1rem;\n}\nion-content .card .card-title p {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n}\nion-content .card .card-title p sup {\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n}\nion-content .card .rates {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n}\nion-content .card .about {\n  margin-bottom: 2.5rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\nion-content .card .about p {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #b9b9b9;\n}\n.title {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n  text-align: center;\n}\ninput {\n  width: 95%;\n  padding: 12px 20px;\n  margin: 8px 8px;\n  box-sizing: border-box;\n}\n.sub-food-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  position: center;\n  max-width: 100%;\n  /* Set the width to 300 pixels */\n  max-height: 10%;\n}\n/*ion-img {\n  width: 90%;\n  height: 90%;\n}*/\n.sub-card-list {\n  padding: 1.6rem 2rem;\n  background: #f3f3f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 2.5rem;\n  margin-bottom: 0.1rem;\n  bottom: -25%;\n  margin-bottom: 1.9rem;\n}\n.sub-card-list ion-buttons {\n  position: absolute;\n  bottom: -1rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.sub-card-list ion-buttons ion-button {\n  --background: #6b45bc;\n  font-weight: 700;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n.sub-card-content {\n  text-align: center;\n}\n.sub-card-content .sub-title {\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: 0.2rem;\n  color: #1d1d1d;\n}\n.sub-card-content .sub-subtitle {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #ffb800;\n  margin-top: 0;\n}\n.sub-card-content .sub-subtitle sub-sup {\n  font-size: 1rem;\n  margin-right: 2px;\n  color: #ffb800;\n}\n.custom-toast {\n  --background: rgba(0, 255, 34, 0.4);\n  /* Remplacez la couleur par celle de votre choix */\n  --color: #ffffff;\n  /* Couleur du texte */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3Qtc3ViLWZvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUFKO0FBRUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUFOO0FBRU07RUFDRSxlQUFBO0FBQVI7QUFLRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSwrQkFBQTtFQUNBLGFBQUE7QUFMSjtBQU9JO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUxOO0FBUUk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQU5OO0FBUU07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBTlI7QUFTTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUFI7QUFTUTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFQVjtBQVlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFWTjtBQWFJO0VBQ0UscUJBQUE7QUFYTjtBQWFNO0VBQ0UsZ0JBQUE7QUFYUjtBQWNNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFaUjtBQW1CQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBaEJGO0FBbUJBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBaEJGO0FBbUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUFpQixnQ0FBQTtFQUNqQixlQUFBO0FBZkY7QUFrQkE7OztFQUFBO0FBS0E7RUFFRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7QUFsQkY7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFqQko7QUFtQkk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFqQk47QUFzQkE7RUFDRSxrQkFBQTtBQW5CRjtBQXFCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFuQko7QUFzQkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFwQko7QUFzQkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBcEJOO0FBeUJBO0VBQ0UsbUNBQUE7RUFBcUMsa0RBQUE7RUFDckMsZ0JBQUE7RUFBa0IscUJBQUE7QUFwQnBCIiwiZmlsZSI6Imxpc3Qtc3ViLWZvb2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAvLy0tYmFja2dyb3VuZDogIzZiNDViYztcbiAgcGFkZGluZzogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gICAgYm9yZGVyLXJhZGl1czogMHJlbSAwcmVtIDFyZW0gMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgd2lkdGg6IDYwcHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMCU7XG4gICAgLy9ib3R0b206IC0zMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNyZW0gM3JlbSAwIDNyZW07XG4gICAgcGFkZGluZzogMnJlbTtcblxuICAgIC5pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC02LjVyZW07XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cblxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDM1JTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZmZiODAwO1xuXG4gICAgICAgIHN1cCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJhdGVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG5cbiAgICAuYWJvdXQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgY29sb3I6ICNiOWI5Yjk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZiODAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCA4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zdWItZm9vZC1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMXJlbTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiBTZXQgdGhlIHdpZHRoIHRvIDMwMCBwaXhlbHMgKi9cbiAgbWF4LWhlaWdodDogMTAlO1xufVxuXG4vKmlvbi1pbWcge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbn0qL1xuXG4uc3ViLWNhcmQtbGlzdCB7XG4gIC8vd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuNnJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xuICBib3R0b206IC0yNSU7XG5cbiAgbWFyZ2luLWJvdHRvbTogMS45cmVtO1xuICBpb24tYnV0dG9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTFyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG5cbi5zdWItY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC5zdWItdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICAgIGNvbG9yOiAjMWQxZDFkO1xuICB9XG5cbiAgLnN1Yi1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmYjgwMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgc3ViLXN1cCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgIGNvbG9yOiAjZmZiODAwO1xuICAgIH1cbiAgfVxufVxuXG4uY3VzdG9tLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMzQsIDAuNCk7IC8qIFJlbXBsYWNleiBsYSBjb3VsZXVyIHBhciBjZWxsZSBkZSB2b3RyZSBjaG9peCAqL1xuICAtLWNvbG9yOiAjZmZmZmZmOyAvKiBDb3VsZXVyIGR1IHRleHRlICovXG59XG4iXX0= */");

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

/***/ "unJc":
/*!***************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/button/button.component.ts ***!
  \***************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./button.component.html */ "JGT0");
/* harmony import */ var _button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component.scss */ "NK88");
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

/***/ "xrLk":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/components-admin/badge/badge.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"badge\">\n  <ion-icon [name]=\"icon\"></ion-icon> {{text}}\n</div>");

/***/ })

}]);
//# sourceMappingURL=screens-list-sub-food-list-sub-food-module.js.map