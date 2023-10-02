(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-edit-sub-food-edit-sub-food-module"],{

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

/***/ "KXoU":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/edit-sub-food/edit-sub-food.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #6b45bc;\n  position: relative;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .header ion-button {\n  height: 60px;\n  width: 60px;\n}\nion-content .header ion-button ion-icon {\n  font-size: 2rem;\n}\nion-content .card {\n  height: 75%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  border-radius: 3rem 3rem 0 0;\n  padding: 2rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .card-title {\n  margin-top: 35%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 2.1rem;\n}\nion-content .card .card-title p {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n}\nion-content .card .card-title p sup {\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n}\nion-content .card .rates {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n}\nion-content .card .about {\n  margin-bottom: 2.5rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\nion-content .card .about p {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #b9b9b9;\n}\n.title {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n}\ninput {\n  width: 95%;\n  padding: 12px 20px;\n  margin: 8px 8px;\n  box-sizing: border-box;\n}\n/* Checkbox Styles */\ninput[type=checkbox] {\n  -webkit-appearance: none;\n  outline: none;\n  position: absolute;\n  height: 40px;\n  width: 120px;\n  border: 15px solid var(--body);\n  border-radius: 300px;\n  cursor: pointer;\n  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #fff;\n  /* Toggle Indicator */\n  /* Label */\n  /* Checked Styles */\n}\ninput[type=checkbox]::before {\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  background-color: var(--body);\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  border-radius: 50%;\n  box-shadow: 7px 7px 15px #c3c3c3, 9px 9px 16px rgba(189, 189, 189, 0.6);\n  transition: 0.15s;\n}\ninput[type=checkbox]::after {\n  content: \"Non\";\n  position: absolute;\n  font-size: 20px;\n  top: 9px;\n  right: 15px;\n  color: var(--text-secondary);\n  font-family: \"SF Pro Text\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\ninput[type=checkbox]:checked {\n  background: #0071e3;\n}\n@media (prefers-color-scheme: light) {\n  input[type=checkbox]:checked {\n    box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #0047b9, inset -10px -10px 15px -10px #0047b9;\n  }\n}\ninput[type=checkbox]:checked::before {\n  left: 85px;\n  box-shadow: none;\n}\ninput[type=checkbox]:checked::after {\n  content: \"Oui\";\n  left: 15px;\n  color: #f5f5f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVkaXQtc3ViLWZvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNOO0FBQ007RUFDRSxlQUFBO0FBQ1I7QUFJRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUFGSjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUZOO0FBS0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUhOO0FBS007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBSFI7QUFNTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSlI7QUFNUTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFKVjtBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFQTjtBQVVJO0VBQ0UscUJBQUE7QUFSTjtBQVVNO0VBQ0UsZ0JBQUE7QUFSUjtBQVdNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFUUjtBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQWJGO0FBZ0JBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBYkY7QUFpQkEsb0JBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlLQUFBO0VBS0EscUJBQUE7RUFnQkEsVUFBQTtFQVlBLG1CQUFBO0FBNUNGO0FBaUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVFQUFBO0VBQ0EsaUJBQUE7QUFmSjtBQW1CRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEVBQUE7QUFqQko7QUFzQkU7RUFDRSxtQkFBQTtBQXBCSjtBQXNCSTtFQUhGO0lBSUksb0tBQUE7RUFuQko7QUFDRjtBQXdCSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQXRCTjtBQXlCSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQXZCTiIsImZpbGUiOiJlZGl0LXN1Yi1mb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNyZW0gM3JlbSAwIDA7XG4gICAgcGFkZGluZzogMnJlbTtcblxuICAgIC5pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC02LjVyZW07XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cblxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDM1JTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZmZiODAwO1xuXG4gICAgICAgIHN1cCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJhdGVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG5cbiAgICAuYWJvdXQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgY29sb3I6ICNiOWI5Yjk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZiODAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbi8qIENoZWNrYm94IFN0eWxlcyAqL1xuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IDE1cHggc29saWQgdmFyKC0tYm9keSk7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE4OSwgMTg5LCAxODksIDAuNiksXG4gIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgaW5zZXQgMTBweCAxMHB4IDE1cHggLTEwcHggI2MzYzNjMyxcbiAgaW5zZXQgLTEwcHggLTEwcHggMTVweCAtMTBweCAjZmZmO1xuXG5cbiAgLyogVG9nZ2xlIEluZGljYXRvciAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiA3cHggN3B4IDE1cHggI2MzYzNjMywgOXB4IDlweCAxNnB4IHJnYmEoMTg5LCAxODksIDE4OSwgMC42KTtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcbiAgfVxuXG4gIC8qIExhYmVsICovXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIk5vblwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdG9wOiA5cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIixcbiAgICBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLyogQ2hlY2tlZCBTdHlsZXMgKi9cbiAgJjpjaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3MWUzO1xuXG4gICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgICAgIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE4OSwgMTg5LCAxODksIDAuNiksXG4gICAgICAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXG4gICAgICBpbnNldCAxMHB4IDEwcHggMTVweCAtMTBweCByZ2IoMCwgNzEsIDE4NSksXG4gICAgICBpbnNldCAtMTBweCAtMTBweCAxNXB4IC0xMHB4IHJnYigwLCA3MSwgMTg1KTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgbGVmdDogODVweDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJPdWlcIjtcbiAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICBjb2xvcjogI2Y1ZjVmNztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

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

/***/ "RIrs":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/edit-sub-food/edit-sub-food.page.ts ***!
  \*********************************************************************************/
/*! exports provided: EditSubFoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubFoodPage", function() { return EditSubFoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_sub_food_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-sub-food.page.html */ "yOMm");
/* harmony import */ var _edit_sub_food_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-sub-food.page.scss */ "KXoU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_sub_food_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/sub-food-admin.service */ "WGBS");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");








let EditSubFoodPage = class EditSubFoodPage {
    constructor(activatedRoute, subFoodService, toastCtrl, router, route, imageCompress) {
        this.activatedRoute = activatedRoute;
        this.subFoodService = subFoodService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.route = route;
        this.imageCompress = imageCompress;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.message = '';
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.imgResultAfterResizeMax = '';
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.imageError = false;
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.idReceived = this.router.getCurrentNavigation().extras.state.sendId;
            }
        });
    }
    ngOnInit() {
        // @ts-ignore
        //this.subFoods = this.getSubFoodById(this.id);
        //console.log('===<>',this.idReceived);
        console.log('idReceived from food', this.idReceived);
        console.log('id subfood', this.id);
        this.getSubFoodById(this.idReceived, this.id);
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
    updateFood() {
        const data = {
            title: this.subFood.title,
            price: this.subFood.price,
            pic: this.imgResultAfterResizeMax,
            description: this.subFood.description,
            published: this.subFood.published,
        };
        this.subFoodService.update(this.id, data)
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            this.message = response.message ? response.message : 'This element was updated successfully!';
            window.location.reload();
            this.confirmationEdit();
            localStorage.setItem('keyId', this.idReceived.toString());
            //this.router.navigate(['/admin/list-sub-food/', this.idReceived]);
        }), error => {
            console.log(error);
        });
        window.history.back();
    }
    confirmationEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Updated successfully!',
                mode: 'ios',
                duration: 5000,
                position: 'bottom',
                color: 'success'
            });
            toast.present();
            //this.router.navigate(['client1/admin/listing']);
        });
    }
    getSubFoodById(idFood, idSubFood) {
        this.subFoodService.getSubFoodsById(this.idReceived, this.id)
            .subscribe(data => {
            this.subFood = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    goBack() {
        const storedNumberString = localStorage.getItem('keyId');
        const storedNumber = parseInt(storedNumberString, 10);
        this.router.navigate(['/admin/list-sub-food', storedNumber]);
        sessionStorage.removeItem('keyId');
    }
    checkImageDimensions() {
        const imageElement = this.imageElement.nativeElement;
        if (imageElement.height > 400 || imageElement.height > 400) {
            // alert('l\'image est trop grand, Veuillez choisir la hauteur Max 400px et largeur Max 400px');
            this.imageError = true;
        }
    }
};
EditSubFoodPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_sub_food_admin_service__WEBPACK_IMPORTED_MODULE_6__["SubFoodAdminService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"] }
];
EditSubFoodPage.propDecorators = {
    imageElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['imageElement', { static: false },] }]
};
EditSubFoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-sub-food',
        template: _raw_loader_edit_sub_food_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_sub_food_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditSubFoodPage);



/***/ }),

/***/ "aWuB":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/edit-sub-food/edit-sub-food.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EditSubFoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubFoodModule", function() { return EditSubFoodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_sub_food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-sub-food-routing.module */ "ebXd");
/* harmony import */ var _edit_sub_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-sub-food.page */ "RIrs");
/* harmony import */ var src_app_client1_admin_components_admin_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/admin/components-admin/badge/badge.module */ "ej3e");
/* harmony import */ var src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/admin/components-admin/button/button.module */ "Ihoe");









let EditSubFoodModule = class EditSubFoodModule {
};
EditSubFoodModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_sub_food_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditSubFoodRoutingModule"],
            src_app_client1_admin_components_admin_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
        ],
        declarations: [_edit_sub_food_page__WEBPACK_IMPORTED_MODULE_6__["EditSubFoodPage"]],
    })
], EditSubFoodModule);



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

/***/ "ebXd":
/*!*******************************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/edit-sub-food/edit-sub-food-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditSubFoodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubFoodRoutingModule", function() { return EditSubFoodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_sub_food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-sub-food.page */ "RIrs");




const routes = [
    {
        path: '',
        component: _edit_sub_food_page__WEBPACK_IMPORTED_MODULE_3__["EditSubFoodPage"]
    }
];
let EditSubFoodRoutingModule = class EditSubFoodRoutingModule {
};
EditSubFoodRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditSubFoodRoutingModule);



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

/***/ "xrLk":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/components-admin/badge/badge.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"badge\">\n  <ion-icon [name]=\"icon\"></ion-icon> {{text}}\n</div>");

/***/ }),

/***/ "yOMm":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/edit-sub-food/edit-sub-food.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"header\">\n\n    <ion-buttons>\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"title\">\n      <!--center><p> You are going to modify \" {{food.title}} \"</p></center-->\n     <p> You are going to modify \"{{subFood?.title}}\"</p>\n    </div>\n    <ion-buttons>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" color='light' name=\"d-heart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <!-- FOOD DETAIL CARD -->\n  <div class=\"card\">\n    <div class=\"image\">\n      <ion-img [src]=\"subFood?.pic\"></ion-img>\n    </div>\n\n    <br><br><br><br><br><br>\n    <div class=\"submit-form\" *ngIf=\"subFood\">\n\n      <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\" required [(ngModel)]=\"subFood.title\"\n               name=\"title\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Price</label>\n        <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Price\" required [(ngModel)]=\"subFood.price\"\n               name=\"price\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input class=\"form-control\" id=\"description\" placeholder=\"Description\" required\n               [(ngModel)]=\"subFood.description\" name=\"description\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"cell\">\n          <label class=\"label\">\n            Disponible\n          </label>\n        </div>\n        <input type=\"checkbox\" [(ngModel)]=\"subFood.published\">\n      </div>\n\n      <br><br><br><br>\n\n      <div>\n        <label>Modifier l'image</label>\n        <br>\n        <button (click)=\"uploadAndReturnWithMaxSize()\">\n          Veuillez choisir une image\n        </button>\n\n\n        <br><br>\n        <!--img src=\"assets/images/foods/tajin.png\" appResizeImage [maxWidth]=\"50\" [maxHeight]=\"50\"-->\n\n        <div class=\"img\">\n          <div *ngIf=\"!this.imgResultAfterResizeMax ; then content1 else content2\"></div>\n\n          <ng-template #content1>\n            <img #imageElement [src]=\"this.subFood.pic\"  (load)=\"checkImageDimensions()\">\n            <div *ngIf=\"imageError\" class=\"error-message\">L'image est trop grande !</div>\n\n\n          </ng-template>\n\n          <ng-template #content2>\n            <img #imageElement [src]=\"this.imgResultAfterResizeMax\"  (load)=\"checkImageDimensions()\">\n            <div *ngIf=\"imageError\" class=\"error-message\">L'image est trop grande !</div>\n\n          </ng-template>\n        </div>\n\n      </div>\n\n\n        <ion-button (click)=\"updateFood()\" color=\"success\">Update</ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=screens-admin-edit-sub-food-edit-sub-food-module.js.map