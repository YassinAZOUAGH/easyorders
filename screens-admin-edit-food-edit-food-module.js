(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-edit-food-edit-food-module"],{

/***/ "4HSi":
/*!***************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/edit-food/edit-food.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #6b45bc;\n  position: relative;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .header ion-button {\n  height: 60px;\n  width: 60px;\n}\nion-content .header ion-button ion-icon {\n  font-size: 2rem;\n}\nion-content .card {\n  height: 75%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  border-radius: 3rem 3rem 0 0;\n  padding: 2rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .card-title {\n  margin-top: 35%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 2.1rem;\n}\nion-content .card .card-title p {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n}\nion-content .card .card-title p sup {\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n}\nion-content .card .rates {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n}\nion-content .card .about {\n  margin-bottom: 2.5rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\nion-content .card .about p {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #b9b9b9;\n}\n.img {\n  max-width: 300px;\n  height: auto;\n}\n.error-message {\n  background-color: red;\n  color: white;\n}\n.title {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n}\ninput {\n  width: 95%;\n  padding: 12px 20px;\n  margin: 8px 8px;\n  box-sizing: border-box;\n}\n/* Checkbox Styles */\ninput[type=checkbox] {\n  -webkit-appearance: none;\n  outline: none;\n  position: absolute;\n  height: 40px;\n  width: 120px;\n  border: 15px solid var(--body);\n  border-radius: 300px;\n  cursor: pointer;\n  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #fff;\n  /* Toggle Indicator */\n  /* Label */\n  /* Checked Styles */\n}\ninput[type=checkbox]::before {\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  background-color: var(--body);\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  border-radius: 50%;\n  box-shadow: 7px 7px 15px #c3c3c3, 9px 9px 16px rgba(189, 189, 189, 0.6);\n  transition: 0.15s;\n}\ninput[type=checkbox]::after {\n  content: \"Non\";\n  position: absolute;\n  font-size: 20px;\n  top: 9px;\n  right: 15px;\n  color: var(--text-secondary);\n  font-family: \"SF Pro Text\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\ninput[type=checkbox]:checked {\n  background: #0071e3;\n}\n@media (prefers-color-scheme: light) {\n  input[type=checkbox]:checked {\n    box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 10px 10px 15px -10px #0047b9, inset -10px -10px 15px -10px #0047b9;\n  }\n}\ninput[type=checkbox]:checked::before {\n  left: 85px;\n  box-shadow: none;\n}\ninput[type=checkbox]:checked::after {\n  content: \"Oui\";\n  left: 15px;\n  color: #f5f5f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVkaXQtZm9vZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ047QUFDTTtFQUNFLGVBQUE7QUFDUjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUZKO0FBSUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBRk47QUFLSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSE47QUFLTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQU1NO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFKUjtBQU1RO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUpWO0FBU0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVBOO0FBVUk7RUFDRSxxQkFBQTtBQVJOO0FBVU07RUFDRSxnQkFBQTtBQVJSO0FBV007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVRSO0FBZUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFaRjtBQWNBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBWEY7QUFhQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVZGO0FBYUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFWRjtBQWFBLG9CQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpS0FBQTtFQUtBLHFCQUFBO0VBZ0JBLFVBQUE7RUFZQSxtQkFBQTtBQXhDRjtBQWFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVFQUFBO0VBQ0EsaUJBQUE7QUFYSjtBQWVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw4RUFBQTtBQWJKO0FBa0JFO0VBQ0UsbUJBQUE7QUFoQko7QUFrQkk7RUFIRjtJQUlJLG9LQUFBO0VBZko7QUFDRjtBQW9CSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQWxCTjtBQXFCSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQW5CTiIsImZpbGUiOiJlZGl0LWZvb2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgd2lkdGg6IDYwcHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3JlbSAzcmVtIDAgMDtcbiAgICBwYWRkaW5nOiAycmVtO1xuXG4gICAgLmltYWdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTYuNXJlbTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMzUlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNmZmI4MDA7XG5cbiAgICAgICAgc3VwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmF0ZXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cblxuICAgIC5hYm91dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgICBjb2xvcjogI2I5YjliOTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmltZ3tcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmVycm9yLW1lc3NhZ2V7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZiODAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xufVxuXG5pbnB1dHtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCA4cHggO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBDaGVja2JveCBTdHlsZXMgKi9cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHZhcigtLWJvZHkpO1xuICBib3JkZXItcmFkaXVzOiAzMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxODksIDE4OSwgMTg5LCAwLjYpLFxuICAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIGluc2V0IDEwcHggMTBweCAxNXB4IC0xMHB4ICNjM2MzYzMsXG4gIGluc2V0IC0xMHB4IC0xMHB4IDE1cHggLTEwcHggI2ZmZjtcblxuXG4gIC8qIFRvZ2dsZSBJbmRpY2F0b3IgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogN3B4IDdweCAxNXB4ICNjM2MzYzMsIDlweCA5cHggMTZweCByZ2JhKDE4OSwgMTg5LCAxODksIDAuNik7XG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XG4gIH1cblxuICAvKiBMYWJlbCAqL1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJOb25cIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRvcDogOXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC8qIENoZWNrZWQgU3R5bGVzICovXG4gICY6Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogIzAwNzFlMztcblxuICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XG4gICAgICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxODksIDE4OSwgMTg5LCAwLjYpLFxuICAgICAgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxuICAgICAgaW5zZXQgMTBweCAxMHB4IDE1cHggLTEwcHggcmdiKDAsIDcxLCAxODUpLFxuICAgICAgaW5zZXQgLTEwcHggLTEwcHggMTVweCAtMTBweCByZ2IoMCwgNzEsIDE4NSk7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDg1cHg7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiT3VpXCI7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgY29sb3I6ICNmNWY1Zjc7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "4aRl":
/*!*************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/edit-food/edit-food.page.ts ***!
  \*************************************************************************/
/*! exports provided: EditFoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFoodPage", function() { return EditFoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_food_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-food.page.html */ "QITm");
/* harmony import */ var _edit_food_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-food.page.scss */ "4HSi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/client1/services/cart.service */ "Aj8l");
/* harmony import */ var src_app_client1_services_food_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/services/food-admin.service */ "KJOm");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");









let EditFoodPage = class EditFoodPage {
    constructor(activatedRoute, foodService, cartService, toastCtrl, router, route, imageCompress, el, renderer) {
        this.activatedRoute = activatedRoute;
        this.foodService = foodService;
        this.cartService = cartService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.route = route;
        this.imageCompress = imageCompress;
        this.el = el;
        this.renderer = renderer;
        this.maxWidth = 400;
        this.maxHeight = 400;
        this.message = '';
        this.imgResultAfterResizeMax = '';
        this.imageError = false;
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.timestamp = Date.now();
    }
    ngOnInit() {
        this.getFoodById(this.id);
        //this.imgResultAfterResizeMax=this.food.image;
    }
    getFoodById(id) {
        this.foodService.getFoodsById(this.id)
            .subscribe(data => {
            this.food = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    addItemToCart() {
        const cartitem = {
            id: this.food.id,
            name: this.food.title,
            price: this.food.price,
            image: this.imgResultAfterResizeMax,
            quantity: 1,
        };
        this.cartService.addToCart(cartitem);
        this.presentToast();
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
            this.router.navigate(['/admin/listing']);
        });
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
            title: this.food.title,
            price: this.food.price,
            image: this.imgResultAfterResizeMax,
            description: this.food.description,
            published: this.food.published,
        };
        this.foodService.update(this.id, data)
            .subscribe(response => {
            console.log(response);
            this.message = response.message ? response.message : 'This element was updated successfully!';
            this.confirmationEdit();
            window.location.reload();
        }, error => {
            console.log(error);
        });
        this.router.navigate(['/admin/listing']);
    }
    checkImageDimensions() {
        const imageElement = this.imageElement.nativeElement;
        if (imageElement.height > 400 || imageElement.height > 400) {
            // alert('l\'image est trop grand, Veuillez choisir la hauteur Max 400px et largeur Max 400px');
            this.imageError = true;
        }
    }
};
EditFoodPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_client1_services_food_admin_service__WEBPACK_IMPORTED_MODULE_7__["FoodAdminService"] },
    { type: src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_8__["NgxImageCompressService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
EditFoodPage.propDecorators = {
    imageElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['imageElement', { static: false },] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    maxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EditFoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-food',
        template: _raw_loader_edit_food_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_food_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditFoodPage);



/***/ }),

/***/ "9cZU":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/edit-food/edit-food-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EditFoodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFoodRoutingModule", function() { return EditFoodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-food.page */ "4aRl");




const routes = [
    {
        path: '',
        component: _edit_food_page__WEBPACK_IMPORTED_MODULE_3__["EditFoodPage"]
    }
];
let EditFoodRoutingModule = class EditFoodRoutingModule {
};
EditFoodRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditFoodRoutingModule);



/***/ }),

/***/ "EhuW":
/*!*******************************************************!*\
  !*** ./projects/resize-image/ResizeImageDirective.ts ***!
  \*******************************************************/
/*! exports provided: ResizeImageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeImageDirective", function() { return ResizeImageDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ResizeImageDirective = class ResizeImageDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.maxWidth = 50;
        this.maxHeight = 50;
    }
    ngAfterViewInit() {
        const imageElement = this.el.nativeElement;
        if (imageElement.width > this.maxWidth || imageElement.height > this.maxHeight) {
            const aspectRatio = imageElement.width / imageElement.height;
            let newWidth = this.maxWidth;
            let newHeight = this.maxHeight;
            if (aspectRatio > 1) {
                newHeight = newWidth / aspectRatio;
            }
            else {
                newWidth = newHeight * aspectRatio;
            }
            this.renderer.setStyle(imageElement, 'width', newWidth + 'px');
            this.renderer.setStyle(imageElement, 'height', newHeight + 'px');
        }
    }
};
ResizeImageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
ResizeImageDirective.propDecorators = {
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ResizeImageDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appResizeImage]'
    })
], ResizeImageDirective);



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

/***/ "QITm":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/edit-food/edit-food.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"header\">\n\n    <ion-buttons>\n      <ion-button routerLink=\"/admin/listing\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"title\">\n      <p> Edit category: {{food?.title}}</p>\n    </div>\n    <ion-buttons>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" color='light' name=\"d-heart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <!-- FOOD DETAIL CARD -->\n  <div class=\"card\">\n    <div class=\"image\">\n      <ion-img [src]=\"food?.image\"></ion-img>\n    </div>\n\n\n    <br><br><br><br><br><br>\n    <div class=\"submit-form\" *ngIf=\"food\">\n      <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"title\" required [(ngModel)]=\"food.title\"\n               name=\"title\"/>\n      </div>\n\n      <!--div class=\"form-group\">\n        <label>Price</label>\n        <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Price\" required [(ngModel)]=\"food.price\"\n               name=\"title\"/>\n      </div-->\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input class=\"form-control\" id=\"description\" placeholder=\"Description\" required [(ngModel)]=\"food.description\"\n               name=\"description\"/>\n      </div>\n\n\n      <div class=\"form-group\">\n        <div class=\"cell\">\n          <label class=\"label\">\n            Disponible\n          </label>\n        </div>\n        <input type=\"checkbox\" [(ngModel)]=\"food.published\">\n      </div>\n\n      <br><br><br><br>\n\n      <div>\n        <label>Modifier l'image</label>\n        <br>\n        <button (click)=\"uploadAndReturnWithMaxSize()\">\n          Veuillez choisir une image\n        </button>\n\n\n        <br><br>\n        <!--img src=\"assets/images/foods/tajin.png\" appResizeImage [maxWidth]=\"50\" [maxHeight]=\"50\"-->\n\n        <div class=\"img\">\n          <div *ngIf=\"!this.imgResultAfterResizeMax ; then content1 else content2\"></div>\n\n          <ng-template #content1>\n            <img #imageElement [src]=\"food.image\"  (load)=\"checkImageDimensions()\">\n            <div *ngIf=\"imageError\" class=\"error-message\">L'image est trop grande !</div>\n\n\n          </ng-template>\n\n          <ng-template #content2>\n                 <img #imageElement [src]=\"this.imgResultAfterResizeMax\"  (load)=\"checkImageDimensions()\">\n            <div *ngIf=\"imageError\" class=\"error-message\">L'image est trop grande !</div>\n\n          </ng-template>\n        </div>\n\n      </div>\n\n      <ion-button (click)=\"updateFood()\" expand=\"full\" color=\"success\">Update</ion-button>\n\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "QUh0":
/*!***************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/edit-food/edit-food.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditFoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFoodModule", function() { return EditFoodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-food-routing.module */ "9cZU");
/* harmony import */ var _edit_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-food.page */ "4aRl");
/* harmony import */ var src_app_client1_admin_components_admin_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/admin/components-admin/badge/badge.module */ "ej3e");
/* harmony import */ var src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/admin/components-admin/button/button.module */ "Ihoe");
/* harmony import */ var _projects_resize_image_ResizeImageDirective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../projects/resize-image/ResizeImageDirective */ "EhuW");










let EditFoodModule = class EditFoodModule {
};
EditFoodModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_food_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditFoodRoutingModule"],
            src_app_client1_admin_components_admin_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_edit_food_page__WEBPACK_IMPORTED_MODULE_6__["EditFoodPage"], _projects_resize_image_ResizeImageDirective__WEBPACK_IMPORTED_MODULE_9__["ResizeImageDirective"]],
    })
], EditFoodModule);



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
//# sourceMappingURL=screens-admin-edit-food-edit-food-module.js.map