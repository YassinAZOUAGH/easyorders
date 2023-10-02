(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-test-test-module"],{

/***/ "0y12":
/*!********************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/test/test.component.ts ***!
  \********************************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test.component.html */ "uqwB");
/* harmony import */ var _test_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.component.scss */ "Kaii");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_food_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/food-admin.service */ "KJOm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");








let TestComponent = class TestComponent {
    constructor(sanitizer, foodService, router, imageCompress) {
        this.sanitizer = sanitizer;
        this.foodService = foodService;
        this.router = router;
        this.imageCompress = imageCompress;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.imgResultAfterResizeMax = '';
        // eslint-disable-next-line @typescript-eslint/member-ordering
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.food = {
            title: '',
            price: 0,
            image: '',
            description: '',
            published: false,
        };
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
            window.location.reload();
            //this.router.navigate(['client1/admin/listing']);
        }, error => {
            console.log(error);
        });
    }
};
TestComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _services_food_admin_service__WEBPACK_IMPORTED_MODULE_5__["FoodAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"] }
];
TestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test',
        template: _raw_loader_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestComponent);



/***/ }),

/***/ "Kaii":
/*!**********************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/test/test.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 2rem;\n  --padding-end: 2rem;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 3rem;\n}\nion-content .header h1 {\n  font-size: 3rem;\n  font-weight: 600;\n  color: #515151;\n  margin: 0;\n}\nion-content .header .avatar {\n  width: 35px;\n  height: 35px;\n  background-color: #6b45bc;\n  border-radius: 50%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  overflow: hidden;\n}\nion-content .header .avatar ion-img {\n  width: 90%;\n  height: 90%;\n}\nion-content .categories {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1rem;\n}\nion-content .list-header {\n  font-weight: 700;\n  color: #515151;\n  font-size: 1.8rem;\n  margin-bottom: 1.6rem;\n  margin-top: 2.5rem;\n}\nion-content .food-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n}\ninput {\n  width: 95%;\n  padding: 12px 20px;\n  margin: 8px 8px;\n  box-sizing: border-box;\n}\n/* Checkbox Styles */\ninput[type=checkbox] {\n  -webkit-appearance: none;\n  outline: none;\n  position: absolute;\n  height: 40px;\n  width: 120px;\n  border: 15px solid var(--body);\n  border-radius: 300px;\n  cursor: pointer;\n  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #fff;\n  /* Toggle Indicator */\n  /* Label */\n  /* Checked Styles */\n}\ninput[type=checkbox]::before {\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  background-color: var(--body);\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  border-radius: 50%;\n  box-shadow: 7px 7px 15px #c3c3c3, 9px 9px 16px rgba(189, 189, 189, 0.6);\n  transition: 0.15s;\n}\ninput[type=checkbox]::after {\n  content: \"Non\";\n  position: absolute;\n  font-size: 20px;\n  top: 9px;\n  right: 15px;\n  color: var(--text-secondary);\n  font-family: \"SF Pro Text\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\ninput[type=checkbox]:checked {\n  background: #0071e3;\n}\n@media (prefers-color-scheme: light) {\n  input[type=checkbox]:checked {\n    box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #0047b9, inset -10px -10px 15px -10px #0047b9;\n  }\n}\ninput[type=checkbox]:checked::before {\n  left: 85px;\n  box-shadow: none;\n}\ninput[type=checkbox]:checked::after {\n  content: \"Oui\";\n  left: 15px;\n  color: #f5f5f7;\n}\n.btnSave {\n  border-radius: 70%;\n  height: 50px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNOO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQU47QUFFTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQVI7QUFLRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFISjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFMSjtBQVNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBTkY7QUFTQSxvQkFBQTtBQUNBO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUtBQUE7RUFLQSxxQkFBQTtFQWdCQSxVQUFBO0VBWUEsbUJBQUE7QUFwQ0Y7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RUFBQTtFQUNBLGlCQUFBO0FBUEo7QUFXRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEVBQUE7QUFUSjtBQWNFO0VBQ0UsbUJBQUE7QUFaSjtBQWNJO0VBSEY7SUFJSSxvS0FBQTtFQVhKO0FBQ0Y7QUFnQkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFkTjtBQWlCSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQWZOO0FBb0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWpCRiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMnJlbTtcclxuICAtLXBhZGRpbmctZW5kOiAycmVtO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjNTE1MTUxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjQ1YmM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXRlZ29yaWVzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgfVxyXG5cclxuICAubGlzdC1oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjNTE1MTUxO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZm9vZC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCA4cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogQ2hlY2tib3ggU3R5bGVzICovXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHZhcigtLWJvZHkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxODksIDE4OSwgMTg5LCAwLjYpLFxyXG4gIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgaW5zZXQgMTBweCAxMHB4IDE1cHggLTEwcHggI2MzYzNjMyxcclxuICBpbnNldCAtMTBweCAtMTBweCAxNXB4IC0xMHB4ICNmZmY7XHJcblxyXG5cclxuICAvKiBUb2dnbGUgSW5kaWNhdG9yICovXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHkpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDdweCA3cHggMTVweCAjYzNjM2MzLCA5cHggOXB4IDE2cHggcmdiYSgxODksIDE4OSwgMTg5LCAwLjYpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgfVxyXG5cclxuICAvKiBMYWJlbCAqL1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiTm9uXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0b3A6IDlweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLFxyXG4gICAgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC8qIENoZWNrZWQgU3R5bGVzICovXHJcbiAgJjpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDcxZTM7XHJcblxyXG4gICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcclxuICAgICAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTg5LCAxODksIDE4OSwgMC42KSxcclxuICAgICAgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICBpbnNldCAxMHB4IDEwcHggMTVweCAtMTBweCByZ2IoMCwgNzEsIDE4NSksXHJcbiAgICAgIGluc2V0IC0xMHB4IC0xMHB4IDE1cHggLTEwcHggcmdiKDAsIDcxLCAxODUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IDg1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIk91aVwiO1xyXG4gICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICBjb2xvcjogI2Y1ZjVmNztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG5TYXZlIHtcclxuICBib3JkZXItcmFkaXVzOiA3MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "gHwg":
/*!*************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/test/test-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: TestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function() { return TestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.component */ "0y12");




const routes = [
    {
        path: '',
        component: _test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"]
    }
];
let TestRoutingModule = class TestRoutingModule {
};
TestRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestRoutingModule);



/***/ }),

/***/ "jkd7":
/*!*****************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/test/test.module.ts ***!
  \*****************************************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-routing.module */ "gHwg");
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.component */ "0y12");
/* harmony import */ var src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/badge/badge.module */ "WJ7A");
/* harmony import */ var src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/button/button.module */ "Iyou");









let TestModule = class TestModule {
};
TestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestRoutingModule"],
            src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
        ],
        declarations: [_test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"]],
    })
], TestModule);



/***/ }),

/***/ "uqwB":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/test/test.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- HEADER -->\n  <div class=\"header\">\n    <h2>Ajouter un element</h2>\n    <div class=\"avatar\">\n      <ion-img src=\"assets\\images\\face.png\"></ion-img>\n    </div>\n  </div>\n\n  <div class=\"submit-form\">\n    <div class=\"form-group\">\n      <label>Titre</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\" required [(ngModel)]=\"food.title\"\n             name=\"title\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Prix</label>\n      <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Price\" required [(ngModel)]=\"food.price\"\n             name=\"title\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Image</label>\n      <br>\n      <!--img [src]=\"avatarURL\" height=\"200\" *ngIf=\"avatarURL\">\n      <input #file type=\"file\" accept='image/*' [hidden]=\"true\" (change)=\"changeAvatar(file.files)\"/>\n      <i class=\"btn material-icons\" (mousedown)=\"file.click();\">chose</i-->\n\n        <button (click)=\"uploadAndReturnWithMaxSize()\">\n          Veuillez choisir une image\n        </button>\n        <img *ngIf=\"imgResultAfterResizeMax\" [src]=\"imgResultAfterResizeMax\" alt=\"test\"/>\n\n    </div>\n\n\n    <div class=\"form-group\">\n      <label>Description</label>\n      <input class=\"form-control\" id=\"description\" placeholder=\"Description\" required [(ngModel)]=\"food.description\"\n             name=\"description\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"cell\">\n        <label class=\"label\">\n          Disponible\n        </label>\n      </div>\n      <input type=\"checkbox\" [(ngModel)]=\"food.published\">\n    </div>\n    <br><br><br><br>\n\n\n      <ion-button (click)=\"saveFood()\" class=\"btnSave\" color=\"success\" [routerLink]=\"'/client1/admin/listing'\">Save</ion-button>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=screens-admin-test-test-module.js.map