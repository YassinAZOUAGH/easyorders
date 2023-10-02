(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-list-sub-food-list-sub-food-module"],{

/***/ "DiXE":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/list-sub-food/list-sub-food.module.ts ***!
  \***********************************************************************************/
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
/* harmony import */ var _list_sub_food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-sub-food-routing.module */ "EWMn");
/* harmony import */ var _list_sub_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-sub-food.page */ "HCNC");
/* harmony import */ var src_app_client1_admin_components_admin_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/admin/components-admin/badge/badge.module */ "ej3e");
/* harmony import */ var src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/admin/components-admin/button/button.module */ "Ihoe");









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
        ],
        declarations: [_list_sub_food_page__WEBPACK_IMPORTED_MODULE_6__["ListSubFoodPage"]],
    })
], ListSubFoodModule);



/***/ }),

/***/ "EWMn":
/*!*******************************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/list-sub-food/list-sub-food-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListSubFoodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubFoodRoutingModule", function() { return ListSubFoodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_sub_food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-sub-food.page */ "HCNC");




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

/***/ "HCNC":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/list-sub-food/list-sub-food.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ListSubFoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubFoodPage", function() { return ListSubFoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_sub_food_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-sub-food.page.html */ "OjBb");
/* harmony import */ var _list_sub_food_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-sub-food.page.scss */ "vPoZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/client1/services/cart.service */ "Aj8l");
/* harmony import */ var src_app_client1_services_food_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/services/food-admin.service */ "KJOm");
/* harmony import */ var _services_sub_food_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/sub-food-admin.service */ "WGBS");









let ListSubFoodPage = class ListSubFoodPage {
    constructor(activatedRoute, foodService, subFoodService, cartService, toastCtrl, router, route, alertCtrl) {
        this.activatedRoute = activatedRoute;
        this.foodService = foodService;
        this.subFoodService = subFoodService;
        this.cartService = cartService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.foods = [];
        this.message = '';
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getFoodById(this.id);
        this.getSubFoodsByParent(this.id);
    }
    getSubFoodsByParent(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.subFoodService.getAllSubFoodByFood(id)
                .subscribe(data => {
                this.subFood = data;
                console.log('list-sub-food', data);
            }, error => {
                console.log(error);
            });
        });
    }
    getFoodById(id) {
        this.foodService.getFoodsById(this.id)
            .subscribe(data => {
            this.food = data;
            console.log('parentFood is: ', data);
        }, error => {
            console.log(error);
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Food added to the cart',
                mode: 'ios',
                duration: 1000,
                position: 'bottom',
                color: 'success'
            });
            toast.present();
            // @ts-ignore
            this.router.navigate(['/admin/listing']);
        });
    }
    confirmationEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Updated successfully!',
                mode: 'ios',
                duration: 1000,
                position: 'bottom',
                color: 'success'
            });
            toast.present();
            // @ts-ignore
            this.router.navigate(['admin/listing']);
        });
    }
    removeFood(idFood) {
        this.subFoodService.delete(idFood)
            .subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    editSubFood(id) {
        console.log('edit' + id);
    }
    deleteSubFood(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Remove',
                message: 'Are you sure you want to remove?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.removeFood(id);
                            window.location.reload();
                        }
                    },
                    {
                        text: 'No',
                    },
                ],
            });
            alert.present();
        });
    }
    editItem(id) {
        //this.router.navigate(['/client1/admin/edit-sub-food', id]);
        const navigationExtras = {
            state: {
                sendId: this.id
            }
        };
        this.router.navigate(['/admin/edit-sub-food', id], navigationExtras);
    }
    addSubItem() {
        this.router.navigate(['/admin/add-sub-food', this.id]);
        //window.alert('your are in id'+ id +'& title: '+title);
    }
};
ListSubFoodPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_client1_services_food_admin_service__WEBPACK_IMPORTED_MODULE_7__["FoodAdminService"] },
    { type: _services_sub_food_admin_service__WEBPACK_IMPORTED_MODULE_8__["SubFoodAdminService"] },
    { type: src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ListSubFoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-sub-food',
        template: _raw_loader_list_sub_food_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_sub_food_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListSubFoodPage);



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

/***/ "OjBb":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/list-sub-food/list-sub-food.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ionContent\">\n  <div class=\"header\">\n\n    <ion-buttons>\n      <ion-button routerLink=\"/admin/listing\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"title\">\n      <p> List of {{food?.title}}</p>\n    </div>\n    <ion-buttons>\n      <ion-button (click)=\"addSubItem()\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <!-- FOOD DETAIL CARD -->\n  <div class=\"card\">\n    <div class=\"image\">\n      <ion-img [src]=\"food?.image\"></ion-img>\n    </div>\n\n    <br><br><br><br><br><br>\n\n    <div class=\"sub-food-list\">\n      <div class=\"sub-card-list\" *ngFor=\"let item of subFood\">\n        <ion-img [src]=\"item.pic\"></ion-img>\n\n        <div class=\"sub-card-content\">\n          <h3 class=\"sub-title\">{{item.title}}</h3>\n          <h2 class=\"sub-subtitle\">{{item.price|number:'1.2'}} <sup>€</sup></h2>\n\n          <ion-buttons slot=\"start\" class=\"sub-ion-buttons\">\n            <ion-button (click)=\"deleteSubFood(item.id)\" class=\"sub-ion-button\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n\n            <ion-button (click)=\"editItem(item.id)\" class=\"sub-ion-button\">\n              <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

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

/***/ "vPoZ":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/list-sub-food/list-sub-food.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n}\nion-content .header {\n  background: #6b45bc;\n  border-radius: 0rem 0rem 1rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .header ion-button {\n  height: 60px;\n  width: 60px;\n}\nion-content .header ion-button ion-icon {\n  font-size: 2rem;\n}\nion-content .card {\n  height: 75%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  border-radius: 3rem 3rem 0 0;\n  padding: 2rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .card-title {\n  margin-top: 35%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 2.1rem;\n}\nion-content .card .card-title p {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n}\nion-content .card .card-title p sup {\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n}\nion-content .card .rates {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n}\nion-content .card .about {\n  margin-bottom: 2.5rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\nion-content .card .about p {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #b9b9b9;\n}\n.title {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n}\ninput {\n  width: 95%;\n  padding: 12px 20px;\n  margin: 8px 8px;\n  box-sizing: border-box;\n}\n.sub-food-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  position: center;\n  max-width: 100%;\n  /* Set the width to 300 pixels */\n  max-height: 10%;\n}\n/*ion-img {\n  width: 90%;\n  height: 90%;\n}*/\n.sub-card-list {\n  width: 100%;\n  padding: 1.6rem 2rem;\n  background: #f3f3f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 2.5rem;\n  margin-top: -2rem;\n  margin-bottom: 30%;\n}\n.sub-card-list ion-buttons {\n  position: absolute;\n  bottom: -1rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.sub-card-list ion-buttons ion-button {\n  --background: #6b45bc;\n  font-weight: 700;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n.sub-card-content {\n  text-align: center;\n}\n.sub-card-content .sub-title {\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: 0.2rem;\n  color: #1d1d1d;\n}\n.sub-card-content .sub-subtitle {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #ffb800;\n  margin-top: 0;\n}\n.sub-card-content .sub-subtitle sub-sup {\n  font-size: 1rem;\n  margin-right: 2px;\n  color: #ffb800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3Qtc3ViLWZvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQUE7QUFBRjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBQUo7QUFFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQU47QUFFTTtFQUNFLGVBQUE7QUFBUjtBQUtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUhKO0FBS0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBSE47QUFNSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSk47QUFNTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU9NO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMUjtBQU9RO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUxWO0FBVUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVJOO0FBV0k7RUFDRSxxQkFBQTtBQVROO0FBV007RUFDRSxnQkFBQTtBQVRSO0FBWU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVZSO0FBaUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBZEY7QUFpQkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFkRjtBQWlCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFBaUIsZ0NBQUE7RUFDakIsZUFBQTtBQWJGO0FBZ0JBOzs7RUFBQTtBQUtBO0VBQ0UsV0FBQTtFQUVBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZkY7QUFnQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFkSjtBQWdCSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWROO0FBbUJBO0VBQ0Usa0JBQUE7QUFoQkY7QUFrQkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBaEJKO0FBbUJFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBakJKO0FBbUJJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWpCTiIsImZpbGUiOiJsaXN0LXN1Yi1mb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLy8tLWJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICAgIGJvcmRlci1yYWRpdXM6IDByZW0gMHJlbSAxcmVtIDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNyZW0gM3JlbSAwIDA7XG4gICAgcGFkZGluZzogMnJlbTtcblxuICAgIC5pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC02LjVyZW07XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cblxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDM1JTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZmZiODAwO1xuXG4gICAgICAgIHN1cCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJhdGVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG5cbiAgICAuYWJvdXQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgY29sb3I6ICNiOWI5Yjk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZiODAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc3ViLWZvb2QtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDFyZW07XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTsgLyogU2V0IHRoZSB3aWR0aCB0byAzMDAgcGl4ZWxzICovXG4gIG1heC1oZWlnaHQ6IDEwJTtcbn1cblxuLyppb24taW1nIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG59Ki9cblxuLnN1Yi1jYXJkLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcblxuICBwYWRkaW5nOiAxLjZyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XG4gIG1hcmdpbi10b3A6IC0ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAzMCU7XG4gIGlvbi1idXR0b25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMXJlbTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cblxuLnN1Yi1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLnN1Yi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gICAgY29sb3I6ICMxZDFkMWQ7XG4gIH1cblxuICAuc3ViLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZiODAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICBzdWItc3VwIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgY29sb3I6ICNmZmI4MDA7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */");

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
//# sourceMappingURL=screens-admin-list-sub-food-list-sub-food-module.js.map