(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-components-admin-add-category-add-category-module"],{

/***/ "6WH2":
/*!*****************************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/add-category/add-category.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .header {\n  background: #6b45bc;\n  border-radius: 0rem 0rem 1rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n  width: 100%;\n  margin-bottom: 10%;\n}\nion-content .header ion-button {\n  height: 60px;\n  width: 60px;\n}\nion-content .header ion-button ion-icon {\n  font-size: 2rem;\n}\nion-content p {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #ffb800;\n}\nion-content .form-group {\n  --padding-start: 2rem;\n  --padding-end: 2rem;\n  padding-left: 3%;\n  margin-bottom: 5%;\n}\nion-content .categories {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1rem;\n}\nion-content .list-header {\n  font-weight: 700;\n  color: #515151;\n  font-size: 1.8rem;\n  margin-bottom: 1.6rem;\n  margin-top: 2.5rem;\n}\nion-content .food-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n}\ninput {\n  width: 95%;\n  padding: 12px 20px;\n  margin: 8px 8px;\n  box-sizing: border-box;\n}\n/* Checkbox Styles */\ninput[type=checkbox] {\n  -webkit-appearance: none;\n  outline: none;\n  position: absolute;\n  height: 40px;\n  width: 120px;\n  border: 15px solid var(--body);\n  border-radius: 300px;\n  cursor: pointer;\n  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #fff;\n  /* Toggle Indicator */\n  /* Label */\n  /* Checked Styles */\n}\ninput[type=checkbox]::before {\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  background-color: var(--body);\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  border-radius: 50%;\n  box-shadow: 7px 7px 15px #c3c3c3, 9px 9px 16px rgba(189, 189, 189, 0.6);\n  transition: 0.15s;\n}\ninput[type=checkbox]::after {\n  content: \"Non\";\n  position: absolute;\n  font-size: 20px;\n  top: 9px;\n  right: 15px;\n  color: var(--text-secondary);\n  font-family: \"SF Pro Text\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\ninput[type=checkbox]:checked {\n  background: #0071e3;\n}\n@media (prefers-color-scheme: light) {\n  input[type=checkbox]:checked {\n    box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #0047b9, inset -10px -10px 15px -10px #0047b9;\n  }\n}\ninput[type=checkbox]:checked::before {\n  left: 85px;\n  box-shadow: none;\n}\ninput[type=checkbox]:checked::after {\n  content: \"Oui\";\n  left: 15px;\n  color: #f5f5f7;\n}\n.btnSave {\n  border-radius: 100%;\n  height: 50px;\n  width: 200px;\n  position: relative;\n  left: 25%;\n  margin-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUhOO0FBS007RUFDRSxlQUFBO0FBSFI7QUFRRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTko7QUFTRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUEo7QUFVRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFSSjtBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBVEo7QUFZRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFWSjtBQWVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBWkY7QUFlQSxvQkFBQTtBQUNBO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUtBQUE7RUFLQSxxQkFBQTtFQWdCQSxVQUFBO0VBWUEsbUJBQUE7QUExQ0Y7QUFlRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RUFBQTtFQUNBLGlCQUFBO0FBYko7QUFpQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDhFQUFBO0FBZko7QUFvQkU7RUFDRSxtQkFBQTtBQWxCSjtBQW9CSTtFQUhGO0lBSUksb0tBQUE7RUFqQko7QUFDRjtBQXNCSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQXBCTjtBQXVCSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQXJCTjtBQTBCQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBdkJGIiwiZmlsZSI6ImFkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvLy0tcGFkZGluZy1zdGFydDogMnJlbTtcclxuICAvLy0tcGFkZGluZy1lbmQ6IDJyZW07XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzZiNDViYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDByZW0gMHJlbSAxcmVtIDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICNmZmI4MDA7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMnJlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcmllcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzUxNTE1MTtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvb2QtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDhweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBDaGVja2JveCBTdHlsZXMgKi9cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBib3JkZXI6IDE1cHggc29saWQgdmFyKC0tYm9keSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE4OSwgMTg5LCAxODksIDAuNiksXHJcbiAgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCBpbnNldCAxMHB4IDEwcHggMTVweCAtMTBweCAjYzNjM2MzLFxyXG4gIGluc2V0IC0xMHB4IC0xMHB4IDE1cHggLTEwcHggI2ZmZjtcclxuXHJcblxyXG4gIC8qIFRvZ2dsZSBJbmRpY2F0b3IgKi9cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogN3B4IDdweCAxNXB4ICNjM2MzYzMsIDlweCA5cHggMTZweCByZ2JhKDE4OSwgMTg5LCAxODksIDAuNik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxuICB9XHJcblxyXG4gIC8qIExhYmVsICovXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJOb25cIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsXHJcbiAgICBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLyogQ2hlY2tlZCBTdHlsZXMgKi9cclxuICAmOmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNzFlMztcclxuXHJcbiAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xyXG4gICAgICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxODksIDE4OSwgMTg5LCAwLjYpLFxyXG4gICAgICAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIGluc2V0IDEwcHggMTBweCAxNXB4IC0xMHB4IHJnYigwLCA3MSwgMTg1KSxcclxuICAgICAgaW5zZXQgLTEwcHggLTEwcHggMTVweCAtMTBweCByZ2IoMCwgNzEsIDE4NSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgbGVmdDogODVweDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiT3VpXCI7XHJcbiAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjZjVmNWY3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0blNhdmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */");

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

/***/ "ImGD":
/*!***************************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/add-category/add-category.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-category.component.html */ "uR3C");
/* harmony import */ var _add_category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category.component.scss */ "6WH2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_category_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/category-admin.service */ "5+VV");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");







let AddCategoryComponent = class AddCategoryComponent {
    constructor(categoryService, router, imageCompress) {
        this.categoryService = categoryService;
        this.router = router;
        this.imageCompress = imageCompress;
        this.imgResultAfterResizeMax = '';
        // eslint-disable-next-line @typescript-eslint/member-ordering
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.category = {
            title: '',
            image: '',
            published: true,
        };
    }
    ngOnInit() {
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
            title: this.category.title,
            image: this.imgResultAfterResizeMax,
            published: this.category.published,
        };
        this.categoryService.create(data)
            .subscribe(response => {
            console.log(response);
            window.location.reload();
            //this.router.navigate(['client1/admin/listing']);
        }, error => {
            console.log(error);
        });
    }
};
AddCategoryComponent.ctorParameters = () => [
    { type: _services_category_admin_service__WEBPACK_IMPORTED_MODULE_5__["CategoryAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_6__["NgxImageCompressService"] }
];
AddCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-category',
        template: _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddCategoryComponent);



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

/***/ "qR0j":
/*!************************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/add-category/add-category.module.ts ***!
  \************************************************************************************/
/*! exports provided: AddCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryModule", function() { return AddCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-category-routing.module */ "sd1X");
/* harmony import */ var src_app_client1_admin_components_admin_cart_item_cart_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/client1/admin/components-admin/cart-item/cart-item.module */ "90tW");
/* harmony import */ var src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/admin/components-admin/button/button.module */ "Ihoe");
/* harmony import */ var _add_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-category.component */ "ImGD");









let AddCategoryModule = class AddCategoryModule {
};
AddCategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCategoryRoutingModule"],
            src_app_client1_admin_components_admin_cart_item_cart_item_module__WEBPACK_IMPORTED_MODULE_6__["CartItemModule"],
            src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        ],
        declarations: [_add_category_component__WEBPACK_IMPORTED_MODULE_8__["AddCategoryComponent"]],
    })
], AddCategoryModule);



/***/ }),

/***/ "sd1X":
/*!********************************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/add-category/add-category-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AddCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryRoutingModule", function() { return AddCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category.component */ "ImGD");




const routes = [
    {
        path: '',
        component: _add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"]
    }
];
let AddCategoryRoutingModule = class AddCategoryRoutingModule {
};
AddCategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCategoryRoutingModule);



/***/ }),

/***/ "uR3C":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/components-admin/add-category/add-category.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"header\">\n\n    <ion-buttons>\n      <ion-button routerLink=\"/admin/listing\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"title\">\n      <p> Add category</p>\n    </div>\n    <ion-buttons>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" color='light' name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div class=\"submit-form\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Name\" required [(ngModel)]=\"category.title\"\n             name=\"title\"/>\n    </div>\n\n\n    <div class=\"form-group\">\n      <label>Image</label>\n      <br>\n      <button (click)=\"uploadAndReturnWithMaxSize()\">\n        Veuillez choisir une image\n      </button>\n      <img *ngIf=\"imgResultAfterResizeMax\" [src]=\"imgResultAfterResizeMax\" alt=\"\"/>\n\n    </div>\n    <div class=\"form-group\">\n      <div class=\"cell\">\n        <label class=\"label\">\n          Disponible\n        </label>\n      </div>\n      <input type=\"checkbox\" [(ngModel)]=\"category.published\">\n      <!--input type=\"checkbox\"-->\n    </div>\n    <ion-button class=\"btnSave\" (click)=\"saveFood()\" color=\"success\" [routerLink]=\"'/admin/listing'\">Save</ion-button>\n\n  </div>\n\n\n</ion-content>\n\n\n\n\n");

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
//# sourceMappingURL=admin-components-admin-add-category-add-category-module.js.map