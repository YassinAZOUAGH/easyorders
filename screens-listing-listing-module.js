(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-listing-listing-module"],{

/***/ "37VR":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/client/screens/listing/listing-client-page.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-content {\n  --padding-start: 1.5rem;\n  --padding-end: 1.5rem;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\nion-content .header h1 {\n  font-size: 3rem;\n  font-weight: 600;\n  color: #515151;\n  margin: 0;\n}\nion-content .header .avatar {\n  width: 55px;\n  height: 55px;\n  background-color: #f2f2f2;\n  border-radius: 50%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  overflow: hidden;\n}\nion-content .header .avatar ion-img {\n  width: 90%;\n  height: 90%;\n}\nion-content .categories {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1rem;\n}\nion-content .list-header {\n  font-weight: 700;\n  color: #515151;\n  font-size: 1.8rem;\n  margin-bottom: 1.6rem;\n}\nion-content .food-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n}\nion-searchbar {\n  --box-shadow: none;\n  --background: #f3f3f3;\n  --border-radius: 1.2rem;\n  --placeholder-font-weight: 600;\n  --placeholder-opacity: 0.2;\n  padding: 0;\n  margin-bottom: 1rem;\n}\n.scrolling-wrapper {\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.scrolling-wrapper .card {\n  display: inline-block;\n  padding: 0.99rem;\n  border-radius: 1.5rem;\n  margin-bottom: 0rem;\n  width: 30%;\n  height: 150px;\n  text-align: center;\n}\n.scrolling-wrapper .card ion-img {\n  width: 90px;\n  height: 90px;\n}\n.scrolling-wrapper .card:active {\n  background-color: #9ec4e8;\n  /* Nouvelle couleur de fond lorsqu'il est cliqué */\n}\n.search {\n  display: flex;\n  justify-content: space-between;\n}\n.search_icon {\n  max-height: 60px;\n  max-width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3RpbmctY2xpZW50LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtBQUVGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFFTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUFOO0FBRU07RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUFSO0FBS0U7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FBSEo7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFKSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQU5KO0FBVUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0FBUkY7QUFhQTtFQUNFLGFBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFiRjtBQWVFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBYko7QUFnQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWROO0FBa0JFO0VBQ0UseUJBQUE7RUFBMkIsa0RBQUE7QUFmL0I7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFsQkY7QUFvQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFqQkYiLCJmaWxlIjoibGlzdGluZy1jbGllbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDEuNXJlbTtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5pb24tY29udGVudCAuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzUxNTE1MTtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLmhlYWRlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWNvbnRlbnQgLmhlYWRlciAuYXZhdGFyIGlvbi1pbWcge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC1nYXA6IDFyZW07XG59XG5pb24tY29udGVudCAubGlzdC1oZWFkZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzUxNTE1MTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcbn1cbmlvbi1jb250ZW50IC5mb29kLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxcmVtO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIC0tYm9yZGVyLXJhZGl1czogMS4ycmVtO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC4yO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uc2Nyb2xsaW5nLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5zY3JvbGxpbmctd3JhcHBlciAuY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC45OXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2Nyb2xsaW5nLXdyYXBwZXIgLmNhcmQgaW9uLWltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uc2Nyb2xsaW5nLXdyYXBwZXIgLmNhcmQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYzRlODtcbiAgLyogTm91dmVsbGUgY291bGV1ciBkZSBmb25kIGxvcnNxdSdpbCBlc3QgY2xpcXXDqSAqL1xufVxuXG4uc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2VhcmNoX2ljb24ge1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICBtYXgtd2lkdGg6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "Vzms":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/screens/listing/listing-client-page.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- HEADER -->\n  <div class=\"header\">\n    <h1>{{ 'MENU' | translate }}</h1>\n    <ion-item  class=\"langueOption\">\n      <!--ion-label>Choisir votre langue</ion-label-->\n      <ion-select value=\"en\" (ionChange)=\"onLanguageChange($event)\">\n        <ion-select-option value=\"fr\">Fr</ion-select-option>\n        <ion-select-option value=\"en\">En</ion-select-option>\n        <ion-select-option value=\"es\">es</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </div>\n\n  <!-- SEARCHBAR >\n  <app-searchbar></app-searchbar-->\n  <ion-searchbar [(ngModel)]=\"title\" (ionChange)=\"searchTitle()\"></ion-searchbar>\n  <!-- CATEGORY -->\n <div class=\"scrolling-wrapper\">\n   <div class=\"card\" (click)=\"searchAllByCategory()\">\n     <ion-img src=\"assets\\images\\icons\\all.png\"></ion-img>\n     <p class=\"ion-no-margin\">{{ 'ALL' | translate }}</p>\n   </div>\n\n    <div class=\"card\" *ngFor=\"let categorie of categories\" (click)=\"searchByCategory(categorie.title)\">\n      <ion-img [src]=\"categorie.image\" ></ion-img>\n      <p class=\"ion-no-margin\">{{categorie.title}}</p>\n    </div>\n\n   </div>\n\n  <!-- PRODUCTS -->\n  <h1 class=\"list-header\">{{ 'LIST_HEADER' | translate }}</h1>\n  <div class=\"food-list\">\n    <app-food-card *ngFor=\"let food of foods\" [item]=\"food\" (clicked)=\"goToDetailPage(food.id)\"></app-food-card>\n  </div>\n\n  <div *ngIf=\"!foods || foods.length === 0\">\n    Aucun aliment trouvé.\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "XXd1":
/*!*************************************************************!*\
  !*** ./src/app/client1/services/category-client.service.ts ***!
  \*************************************************************/
/*! exports provided: CategoryClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryClientService", function() { return CategoryClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const baseUrl = 'http://192.168.0.246:8080/api/client/categories';
const baseUrl = 'https://oafish-orange-production.up.railway.app/api/client/categories';
let CategoryClientService = class CategoryClientService {
    constructor(http) {
        this.http = http;
        this.categories = [];
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    getCategoryByUserIdAll(id) {
        return this.http.get(`${baseUrl}/user/${id}`);
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
CategoryClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CategoryClientService);



/***/ }),

/***/ "Z+eU":
/*!******************************************************************!*\
  !*** ./src/app/client1/client/screens/listing/listing.module.ts ***!
  \******************************************************************/
/*! exports provided: ListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageModule", function() { return ListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listing-routing.module */ "k78i");
/* harmony import */ var _listing_client_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing-client-page.component */ "tP1w");
/* harmony import */ var src_app_client1_client_components_category_item_category_item_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/category-item/category-item.module */ "vjGy");
/* harmony import */ var src_app_client1_client_components_food_card_food_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/food-card/food-card.module */ "4E68");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










let ListingPageModule = class ListingPageModule {
};
ListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListingPageRoutingModule"],
            src_app_client1_client_components_category_item_category_item_module__WEBPACK_IMPORTED_MODULE_7__["CategoryItemModule"],
            src_app_client1_client_components_food_card_food_card_module__WEBPACK_IMPORTED_MODULE_8__["FoodCardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        ],
        declarations: [_listing_client_page_component__WEBPACK_IMPORTED_MODULE_6__["ListingClientPage"]],
    })
], ListingPageModule);



/***/ }),

/***/ "k78i":
/*!**************************************************************************!*\
  !*** ./src/app/client1/client/screens/listing/listing-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ListingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageRoutingModule", function() { return ListingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _listing_client_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing-client-page.component */ "tP1w");




const routes = [
    {
        path: '',
        component: _listing_client_page_component__WEBPACK_IMPORTED_MODULE_3__["ListingClientPage"]
    }
];
let ListingPageRoutingModule = class ListingPageRoutingModule {
};
ListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListingPageRoutingModule);



/***/ }),

/***/ "tP1w":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/client/screens/listing/listing-client-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListingClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingClientPage", function() { return ListingClientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listing_client_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listing-client-page.component.html */ "Vzms");
/* harmony import */ var _listing_client_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing-client-page.component.scss */ "37VR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_client1_services_food_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/client1/services/food-client.service */ "8POb");
/* harmony import */ var _services_category_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/category-client.service */ "XXd1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_canal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/canal.service */ "ib1Z");
/* harmony import */ var _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_servicesAuth/token-storage.service */ "1LJi");







// @ts-ignore



let ListingClientPage = class ListingClientPage {
    constructor(foodService, categoryService, router, translate, canalService, token) {
        this.foodService = foodService;
        this.categoryService = categoryService;
        this.router = router;
        this.translate = translate;
        this.canalService = canalService;
        this.token = token;
        this.categories = [];
        this.foods = [];
        this.title = '';
        this.all = 'All';
        translate.setDefaultLang('en');
    }
    ngOnInit() {
        this.getParamsURL();
        this.getAllCategories();
        this.getAllPublishedFoods();
    }
    getParamsURL() {
        // Obtenir l'URL complète
        const url = window.location.href;
        // Obtenir les paramètres de l'URL
        const params = new URLSearchParams(new URL(url).search);
        // Obtenir la valeur du paramètre 'param'
        this.canal = params.get('canal');
        this.userId = params.get('user');
        console.log('valeur de canal: ' + this.canal); // Affiche 'valeur'
        console.log('valeur de userid : ' + this.userId); // Affiche 'valeur'
        this.canalService.setCanal(this.canal);
        this.canalService.setUserId(this.userId);
    }
    getAllPublishedFoods() {
        this.foodService.getAllFoodUserPublished(this.userId)
            .subscribe(data => {
            this.foods = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    getAllCategories() {
        this.categoryService.getCategoryByUserIdAll(this.canalService.getUserId())
            .subscribe(data => {
            this.categories = data;
            console.log('Categories: ', data);
        }, error => {
            console.log(error);
        });
    }
    goToDetailPage(id) {
        //this.router.navigate(['/client1/client/detail', id]);
        this.router.navigate(['/client/list-sub-food', id]);
    }
    searchTitle() {
        this.foodService.findByTitle(this.userId, this.title)
            .subscribe(data => {
            this.foods = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    test() {
        console.log('test btn');
    }
    searchAllByCategory() {
        this.getAllPublishedFoods();
    }
    searchByCategory(title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.foodService.findByTitle(this.userId, title)
                .subscribe(data => {
                this.foods = data;
                console.log(data);
            }, error => {
                console.log(error);
            });
        });
    }
    onLanguageChange(event) {
        this.translate.use(event.detail.value);
        //console.log(event.detail.value); // the value of the selected option
    }
};
ListingClientPage.ctorParameters = () => [
    { type: src_app_client1_services_food_client_service__WEBPACK_IMPORTED_MODULE_5__["FoodClientService"] },
    { type: _services_category_client_service__WEBPACK_IMPORTED_MODULE_6__["CategoryClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_canal_service__WEBPACK_IMPORTED_MODULE_8__["CanalService"] },
    { type: _servicesAuth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"] }
];
ListingClientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listing',
        template: _raw_loader_listing_client_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listing_client_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListingClientPage);



/***/ })

}]);
//# sourceMappingURL=screens-listing-listing-module.js.map