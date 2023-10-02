(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-add-food-add-food-module"],{

/***/ "/F5L":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/add-food/add-food-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddFoodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFoodRoutingModule", function() { return AddFoodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_food_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-food.component */ "SePo");




const routes = [
    {
        path: '',
        component: _add_food_component__WEBPACK_IMPORTED_MODULE_3__["AddFoodComponent"]
    }
];
let AddFoodRoutingModule = class AddFoodRoutingModule {
};
AddFoodRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddFoodRoutingModule);



/***/ }),

/***/ "7fZn":
/*!*************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/add-food/add-food.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddFoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFoodModule", function() { return AddFoodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-food-routing.module */ "/F5L");
/* harmony import */ var src_app_client1_admin_components_admin_cart_item_cart_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/client1/admin/components-admin/cart-item/cart-item.module */ "90tW");
/* harmony import */ var src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/admin/components-admin/button/button.module */ "Ihoe");
/* harmony import */ var _add_food_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-food.component */ "SePo");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










let AddFoodModule = class AddFoodModule {
};
AddFoodModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_food_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddFoodRoutingModule"],
            src_app_client1_admin_components_admin_cart_item_cart_item_module__WEBPACK_IMPORTED_MODULE_6__["CartItemModule"],
            src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        ],
        declarations: [_add_food_component__WEBPACK_IMPORTED_MODULE_8__["AddFoodComponent"]],
        exports: [
            _add_food_component__WEBPACK_IMPORTED_MODULE_8__["AddFoodComponent"]
        ]
    })
], AddFoodModule);



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

/***/ "SePo":
/*!****************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/add-food/add-food.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFoodComponent", function() { return AddFoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_food_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-food.component.html */ "SwVQ");
/* harmony import */ var _add_food_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-food.component.scss */ "cd3p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_food_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/food-admin.service */ "KJOm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_servicesAuth/token-storage.service */ "1LJi");










let AddFoodComponent = class AddFoodComponent {
    constructor(sanitizer, foodService, router, imageCompress, location, token) {
        this.sanitizer = sanitizer;
        this.foodService = foodService;
        this.router = router;
        this.imageCompress = imageCompress;
        this.location = location;
        this.token = token;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.imgResultAfterResizeMax = '';
        // eslint-disable-next-line @typescript-eslint/member-ordering
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.food = {
            title: '',
            price: null,
            image: '',
            description: '',
            published: true,
        };
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
    }
    onFileSelect(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile.name);
    }
    changeAvatar(files) {
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            console.log('Only images are supported.');
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.avatarURL = reader.result;
            console.log('the data is', this.avatarURL); // data 64 bit
        };
    }
    showImage() {
        console.log('testok');
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.avatarURL}`);
        console.log('this is image', this.imageSource);
    }
    uploadAndReturnWithMaxSize() {
        return this.imageCompress.uploadAndGetImageWithMaxSize(1, true).then((result) => {
            this.imgResultAfterResizeMax = result;
            console.log('-->', result);
        }, (result) => {
            console.error('The compression algorithm didn\'t succed! The best size we can do is', this.imageCompress.byteCount(result), 'bytes');
            this.imgResultAfterResizeMax = result;
        });
    }
    saveFood() {
        const data = {
            title: this.food.title,
            price: this.food.price,
            image: this.imgResultAfterResizeMax,
            description: this.food.description,
            published: this.food.published,
        };
        this.foodService.create(data)
            .subscribe(response => {
            console.log(response);
            //this.router.navigate(['client1/admin/listing']);
            window.location.reload();
        }, error => {
            console.log(error);
        });
        this.location.back();
    }
    onBlur(event) {
        const value = event.target.value;
        if (!value) {
            this.focused = false;
        }
    }
};
AddFoodComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _services_food_admin_service__WEBPACK_IMPORTED_MODULE_4__["FoodAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_6__["NgxImageCompressService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"] }
];
AddFoodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-food',
        template: _raw_loader_add_food_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_food_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddFoodComponent);



/***/ }),

/***/ "SwVQ":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/add-food/add-food.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ionContent\">\n  <div class=\"header\">\n\n    <ion-buttons>\n      <ion-button routerLink=\"/admin/listing\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n\n\n    </ion-buttons>\n    <div class=\"title\">\n      <p>Ajouter un catégorie\n      <p>\n    </div>\n\n    <ion-button>\n      Save\n    </ion-button>\n  </div>\n  <br>\n  <div class=\"submit-form\">\n    <div class=\"form-group\">\n      <label>Titre</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\" required [(ngModel)]=\"food.title\"\n             name=\"title\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Prix</label>\n      <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Price\" required [(ngModel)]=\"food.price\"\n             name=\"title\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Image</label>\n      <br>\n      <button (click)=\"uploadAndReturnWithMaxSize()\">\n        Veuillez choisir une image\n      </button>\n      <img *ngIf=\"imgResultAfterResizeMax\" [src]=\"imgResultAfterResizeMax\" alt=\"test\"/>\n\n    </div>\n\n\n    <div class=\"form-group\">\n      <label>Description</label>\n      <input class=\"form-control\" id=\"description\" placeholder=\"Description\" required [(ngModel)]=\"food.description\"\n             name=\"description\"/>\n    </div>\n\n    <div class=\"form-group\">\n\n      <label class=\"label\">\n        Disponible\n      </label>\n\n      <input type=\"checkbox\" [(ngModel)]=\"food.published\">\n    </div>\n    <br><br>\n    <ion-button  expand='block' (click)=\"saveFood()\" class=\"btnSave\" color=\"success\">Save</ion-button>\n  </div>\n\n\n  <!--form\n    name=\"form\"\n    (ngSubmit)=\"f.form.valid && saveFood()\"\n    #f=\"ngForm\"\n    novalidate\n  >\n    <div class=\"form-field\">\n      <label [ngClass]=\"focused ? 'label-focused' : ''\">Name</label>\n      <input type=\"Text\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n             name=\"Name\"\n             [(ngModel)]=\"food.title\"\n             required\n             #name=\"ngModel\"\n      />\n      <div\n        class=\"alert alert-danger\"\n        role=\"alert\"\n        *ngIf=\"name.errors && f.submitted\"\n      >\n        USERNAME_REQUIRED\n      </div>\n    </div>\n\n    <div class=\"form-field\">\n      <label [ngClass]=\"focused ? 'label-focused' : ''\">Description</label>\n      <input type=\"Text\" (focus)=\"focused = true\" (blur)=\"onBlur($event)\"\n             name=\"Name\"\n             [(ngModel)]=\"food.description\"\n             required\n             #Description=\"ngModel\"\n      />\n      <div\n        class=\"alert alert-danger\"\n        role=\"alert\"\n        *ngIf=\"Description.errors && f.submitted\"\n      >\n        Description_REQUIRED\n      </div>\n    </div>\n\n    <div class=\"inline-container\">\n      <label for=\"disponible\">Disponible</label>\n      <input type=\"checkbox\" id=\"disponible\" [(ngModel)]=\"food.published\" name=\"disponible\">\n    </div>\n\n    <div class=\"form-field\">\n      <label [ngClass]=\"focused ? 'label-focused' : ''\">Image</label>\n      <br><br>\n      <button (click)=\"uploadAndReturnWithMaxSize()\">\n        Veuillez choisir une image\n      </button>\n      <img *ngIf=\"imgResultAfterResizeMax\" [src]=\"imgResultAfterResizeMax\" alt=\"test\"/>\n\n    </div>\n    <ion-button expand='block' type=\"submit\">\n      Save\n    </ion-button>\n\n    <ion-button (click)=\"saveFood()\" class=\"btnSave\" color=\"success\">Save</ion-button>\n\n\n  </form-->\n</ion-content>\n");

/***/ }),

/***/ "cd3p":
/*!******************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/add-food/add-food.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-content {\n  position: relative;\n}\nion-content .header {\n  background: #6b45bc;\n  border-radius: 0rem 0rem 1rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 0.5rem;\n  width: 100%;\n}\nion-content .header ion-button ion-icon {\n  font-size: 2rem;\n}\ninput {\n  width: 95%;\n  padding: 12px 20px;\n  margin: 8px 8px;\n  box-sizing: border-box;\n}\n/* Checkbox Styles */\ninput[type=checkbox] {\n  -webkit-appearance: none;\n  outline: none;\n  position: absolute;\n  height: 40px;\n  width: 120px;\n  border: 15px solid var(--body);\n  border-radius: 300px;\n  cursor: pointer;\n  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #fff;\n  /* Toggle Indicator */\n  /* Label */\n  /* Checked Styles */\n}\ninput[type=checkbox]::before {\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  background-color: var(--body);\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  border-radius: 50%;\n  box-shadow: 7px 7px 15px #c3c3c3, 9px 9px 16px rgba(189, 189, 189, 0.6);\n  transition: 0.15s;\n}\ninput[type=checkbox]::after {\n  content: \"Non\";\n  position: absolute;\n  font-size: 20px;\n  top: 9px;\n  right: 15px;\n  color: var(--text-secondary);\n  font-family: \"SF Pro Text\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\ninput[type=checkbox]:checked {\n  background: #0071e3;\n}\n@media (prefers-color-scheme: light) {\n  input[type=checkbox]:checked {\n    box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #0047b9, inset -10px -10px 15px -10px #0047b9;\n  }\n}\ninput[type=checkbox]:checked::before {\n  left: 85px;\n  box-shadow: none;\n}\ninput[type=checkbox]:checked::after {\n  content: \"Oui\";\n  left: 15px;\n  color: #f5f5f7;\n}\n.btnSave {\n  border-radius: 70%;\n  height: 50px;\n  width: 80px;\n}\n.image {\n  border-radius: 70%;\n  height: 50px;\n  width: 200px;\n}\n.title {\n  font-weight: 700;\n  color: #ffb800;\n  font-size: 1.2rem;\n  margin-right: 25%;\n}\nform .forgot-password-link {\n  text-decoration: none;\n  display: inline-block;\n  width: 100%;\n  text-align: right;\n  font-weight: 600;\n  font-size: 14px;\n  color: #4a4a4a;\n}\nform app-button {\n  display: block;\n  margin-top: 3rem;\n}\n.alert-danger {\n  color: red;\n  padding-top: 48px;\n  text-align: center;\n}\n.form-field {\n  position: relative;\n  margin-bottom: 1rem;\n  height: 50px;\n}\n.form-field .label {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  padding: 0 0.25rem;\n  color: #939fab;\n  font-size: 1rem;\n  transition: 0.3s;\n  padding-left: 20px;\n}\n.form-field input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  font-size: 17px;\n  font-weight: 600;\n  border: 2px solid #e7ebee;\n  border-radius: 10px;\n  outline: none;\n  padding: 1rem;\n  background: none;\n  z-index: 1;\n  color: #171c25;\n}\n.form-field input:focus {\n  border-color: #fa578e;\n}\n.form-field .label-focused {\n  top: -0.4rem;\n  left: 0.8rem;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #fff;\n  z-index: 10;\n}\n.inline-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 30px;\n  margin-bottom: 40px;\n}\n.inline-container label {\n  margin: 0;\n  /* Réinitialiser les marges du label */\n}\n.inline-container input[type=checkbox] {\n  margin: 65%;\n  /* Réinitialiser les marges de la case à cocher */\n  order: 2;\n  /* Réorganiser l'ordre pour placer la case à cocher à droite */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1mb29kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0FBRUY7QUFBRTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUlNO0VBQ0UsZUFBQTtBQUZSO0FBU0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFORjtBQVNBLG9CQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpS0FBQTtFQUtBLHFCQUFBO0VBZ0JBLFVBQUE7RUFhQSxtQkFBQTtBQXJDRjtBQVNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVFQUFBO0VBQ0EsaUJBQUE7QUFQSjtBQVdFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw4RUFBQTtBQVRKO0FBZUU7RUFDRSxtQkFBQTtBQWJKO0FBZUk7RUFIRjtJQUlJLG9LQUFBO0VBWko7QUFDRjtBQWlCSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQWZOO0FBa0JJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBaEJOO0FBcUJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWxCRjtBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFsQkY7QUFxQkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBbEJGO0FBeUJFO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF0Qko7QUF5QkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUF2Qko7QUEyQkE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXhCRjtBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBeEJGO0FBMEJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBeEJKO0FBNEJFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQTFCSjtBQTZCRTtFQUNFLHFCQUFBO0FBM0JKO0FBOEJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUE1Qko7QUFnQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUE3QkY7QUFnQ0E7RUFDRSxTQUFBO0VBQVcsc0NBQUE7QUE1QmI7QUErQkE7RUFDRSxXQUFBO0VBQWEsaURBQUE7RUFDYixRQUFBO0VBQVUsOERBQUE7QUExQloiLCJmaWxlIjoiYWRkLWZvb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICBib3JkZXItcmFkaXVzOiAwcmVtIDByZW0gMXJlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLmhlYWRlciBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBDaGVja2JveCBTdHlsZXMgKi9cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IDE1cHggc29saWQgdmFyKC0tYm9keSk7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE4OSwgMTg5LCAxODksIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgaW5zZXQgMTBweCAxMHB4IDE1cHggLTEwcHggI2MzYzNjMywgaW5zZXQgLTEwcHggLTEwcHggMTVweCAtMTBweCAjZmZmO1xuICAvKiBUb2dnbGUgSW5kaWNhdG9yICovXG4gIC8qIExhYmVsICovXG4gIC8qIENoZWNrZWQgU3R5bGVzICovXG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiA3cHggN3B4IDE1cHggI2MzYzNjMywgOXB4IDlweCAxNnB4IHJnYmEoMTg5LCAxODksIDE4OSwgMC42KTtcbiAgdHJhbnNpdGlvbjogMC4xNXM7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIk5vblwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdG9wOiA5cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjMDA3MWUzO1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XG4gICAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTg5LCAxODksIDE4OSwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCBpbnNldCAxMHB4IDEwcHggMTVweCAtMTBweCAjMDA0N2I5LCBpbnNldCAtMTBweCAtMTBweCAxNXB4IC0xMHB4ICMwMDQ3Yjk7XG4gIH1cbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGxlZnQ6IDg1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiT3VpXCI7XG4gIGxlZnQ6IDE1cHg7XG4gIGNvbG9yOiAjZjVmNWY3O1xufVxuXG4uYnRuU2F2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDcwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogODBweDtcbn1cblxuLmltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNzAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmI4MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDI1JTtcbn1cblxuZm9ybSAuZm9yZ290LXBhc3N3b3JkLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGE0YTRhO1xufVxuZm9ybSBhcHAtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLXRvcDogNDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmZvcm0tZmllbGQgLmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xuICB0b3A6IDFyZW07XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbiAgY29sb3I6ICM5MzlmYWI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmZvcm0tZmllbGQgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTdlYmVlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogIzE3MWMyNTtcbn1cbi5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmE1NzhlO1xufVxuLmZvcm0tZmllbGQgLmxhYmVsLWZvY3VzZWQge1xuICB0b3A6IC0wLjRyZW07XG4gIGxlZnQ6IDAuOHJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmlubGluZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5pbmxpbmUtY29udGFpbmVyIGxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICAvKiBSw6lpbml0aWFsaXNlciBsZXMgbWFyZ2VzIGR1IGxhYmVsICovXG59XG5cbi5pbmxpbmUtY29udGFpbmVyIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgbWFyZ2luOiA2NSU7XG4gIC8qIFLDqWluaXRpYWxpc2VyIGxlcyBtYXJnZXMgZGUgbGEgY2FzZSDDoCBjb2NoZXIgKi9cbiAgb3JkZXI6IDI7XG4gIC8qIFLDqW9yZ2FuaXNlciBsJ29yZHJlIHBvdXIgcGxhY2VyIGxhIGNhc2Ugw6AgY29jaGVyIMOgIGRyb2l0ZSAqL1xufSJdfQ== */");

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



/***/ })

}]);
//# sourceMappingURL=screens-admin-add-food-add-food-module.js.map