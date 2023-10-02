(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-home-admin-home-admin-module"],{

/***/ "/hBO":
/*!***************************************************************!*\
  !*** ./src/app/client1/admin/home-admin/home-admin.module.ts ***!
  \***************************************************************/
/*! exports provided: HomeAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminPageModule", function() { return HomeAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "TXkE");
/* harmony import */ var _home_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-admin-routing.module */ "SHPn");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let HomeAdminPageModule = class HomeAdminPageModule {
};
HomeAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomeAdminPageModule);



/***/ }),

/***/ "6SEZ":
/*!***************************************************************!*\
  !*** ./src/app/client1/admin/home-admin/home-admin.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  padding: 10px 0;\n}\nion-tab-bar ion-tab-button ion-icon {\n  font-size: 1.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFFSTtFQUNFLGlCQUFBO0FBQU4iLCJmaWxlIjoiaG9tZS1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XG4gIHBhZGRpbmc6IDEwcHggMDtcblxuICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "MDQP":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/home-admin/home-admin.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"listing\">\n      <div class=\"example-content\">{{ 'MENU_TAB' | translate }}</div>\n      <ion-icon name=\"d-apps\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"revenus\">\n      <div class=\"example-content\">{{ 'INCOME_TAB' | translate }}</div>\n      <ion-icon name=\"bar-chart-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"test2\">\n      <div class=\"example-content\">{{ 'Link_TAB' | translate }}</div>\n      <ion-icon name=\"link\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profil\">\n      <div class=\"example-content\">Profil</div>\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-tab-button>\n\n    <!--ion-tab-button tab=\"contact\">\n      <div class=\"example-content\">Contact</div>\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-tab-button-->\n\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "SHPn":
/*!***********************************************************************!*\
  !*** ./src/app/client1/admin/home-admin/home-admin-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "TXkE");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'menu',
                loadChildren: () => Promise.all(/*! import() | screens-admin-listing-admin-listing-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-listing-admin-listing-admin-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/listing-admin/listing-admin.module */ "2ck9")).then((m) => m.ListingAdminPageModule),
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() | screens-admin-add-food-add-food-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-add-food-add-food-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/add-food/add-food.module */ "7fZn")).then((m) => m.AddFoodModule),
            },
            {
                path: 'edit/:id',
                loadChildren: () => Promise.all(/*! import() | screens-admin-edit-food-edit-food-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-edit-food-edit-food-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/edit-food/edit-food.module */ "QUh0")).then((m) => m.EditFoodModule),
            },
            {
                path: 'add-sub-food/:id',
                loadChildren: () => Promise.all(/*! import() | screens-admin-add-sub-food-add-sub-food-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-add-sub-food-add-sub-food-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/add-sub-food/add-sub-food.module */ "Pp1q")).then((m) => m.AddSubFoodModule),
            },
            {
                path: 'edit-sub-food/:id',
                loadChildren: () => Promise.all(/*! import() | screens-admin-edit-sub-food-edit-sub-food-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-edit-sub-food-edit-sub-food-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/edit-sub-food/edit-sub-food.module */ "aWuB")).then((m) => m.EditSubFoodModule),
            },
            {
                path: 'list-sub-food/:id',
                loadChildren: () => Promise.all(/*! import() | screens-admin-list-sub-food-list-sub-food-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-list-sub-food-list-sub-food-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/list-sub-food/list-sub-food.module */ "DiXE")).then((m) => m.ListSubFoodModule),
            },
            {
                path: 'add-category',
                loadChildren: () => Promise.all(/*! import() | admin-components-admin-add-category-add-category-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-components-admin-add-category-add-category-module")]).then(__webpack_require__.bind(null, /*! ../../admin/components-admin/add-category/add-category.module */ "qR0j")).then((m) => m.AddCategoryModule),
            },
            {
                path: 'test',
                loadChildren: () => Promise.all(/*! import() | screens-admin-test-test-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-test-test-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/test/test.module */ "jkd7")).then((m) => m.TestModule),
            },
            {
                path: 'test2',
                loadChildren: () => Promise.all(/*! import() | screens-admin-test2-test-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-test2-test-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/test2/test.module */ "AYy1")).then((m) => m.Test2Module),
            },
            {
                path: 'revenus',
                loadChildren: () => Promise.all(/*! import() | screens-admin-revenus-revenus-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-revenus-revenus-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/revenus/revenus.module */ "1QLJ")).then((m) => m.RevenusModule),
            },
            {
                path: 'commands/details/:id',
                loadChildren: () => Promise.all(/*! import() | screens-admin-detailscommand-detailscommand-module */[__webpack_require__.e("default~screens-admin-detailscommand-detailscommand-module~screens-detailscommand-detailscommand-module"), __webpack_require__.e("screens-admin-detailscommand-detailscommand-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/detailscommand/detailscommand.module */ "Jz6t")).then((m) => m.DetailscommandModule),
            },
            {
                path: 'profil',
                loadChildren: () => Promise.all(/*! import() | screens-admin-profil-profil-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-profil-profil-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/profil/profil.module */ "FYV5")).then((m) => m.ProfilModule),
            },
            {
                path: 'contact',
                loadChildren: () => Promise.all(/*! import() | screens-admin-contact-contact-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-contact-contact-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/contact/contact.module */ "BfvT")).then((m) => m.ContactModule),
            },
            {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() | screens-admin-settings-settings-module */[__webpack_require__.e("common"), __webpack_require__.e("screens-admin-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ../screens-admin/settings/settings.module */ "5Ucl")).then((m) => m.SettingsModule),
            },
            {
                path: '**',
                redirectTo: '/admin/menu',
                pathMatch: 'full'
            },
        ],
    },
];
// @ts-ignore
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "TXkE":
/*!*******************************************************!*\
  !*** ./src/app/client1/admin/home-admin/home.page.ts ***!
  \*******************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-admin.page.html */ "MDQP");
/* harmony import */ var _home_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-admin.page.scss */ "6SEZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=admin-home-admin-home-admin-module.js.map