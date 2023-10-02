(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-revenus-revenus-module"],{

/***/ "1QLJ":
/*!***********************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/revenus/revenus.module.ts ***!
  \***********************************************************************/
/*! exports provided: RevenusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenusModule", function() { return RevenusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _revenus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./revenus-routing.module */ "kkzM");
/* harmony import */ var _revenus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./revenus.component */ "isMs");
/* harmony import */ var src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/badge/badge.module */ "WJ7A");
/* harmony import */ var src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/button/button.module */ "Iyou");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-image-compress */ "0jJR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









// @ts-ignore


let RevenusModule = class RevenusModule {
};
RevenusModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _revenus_routing_module__WEBPACK_IMPORTED_MODULE_5__["RevenusRoutingModule"],
            src_app_client1_client_components_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
        ],
        providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__["NgxImageCompressService"]],
        declarations: [_revenus_component__WEBPACK_IMPORTED_MODULE_6__["RevenusComponent"]],
    })
], RevenusModule);



/***/ }),

/***/ "dw+f":
/*!**************************************************************!*\
  !*** ./src/app/client1/services/commandAutoAdmin.service.ts ***!
  \**************************************************************/
/*! exports provided: CommandAutoAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandAutoAdminService", function() { return CommandAutoAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let CommandAutoAdminService = class CommandAutoAdminService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://oafish-orange-production.up.railway.app/api/admin/commands/';
        //private apiUrl = 'http://192.168.0.246:8080/api/admin/commands/';
        this.refreshInterval = 5000; // Temps d'actualisation en millisecondes (ici, toutes les 5 secondes)
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.notificationSound = new Audio('assets/audio/songOrder.mp3');
        this.currentNumberOfCommandes = 0;
        this.previousCommandes = [];
        this.previousData = [];
        this.allCommandReceivedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allCommandReceivedInOrderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.commandReceivedTodaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.commandReceivedYesterdaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.commandReceivedThisWeekSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.commandReceivedThisMonthSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /*-----------------------*/
        this.allSumPricecommandSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sumPricecommandTodaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sumPricecommandYesterdaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sumPricecommandThisWeekSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sumPricecommandThisMonthSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.deleteCommandSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allCommandReceived$ = this.allCommandReceivedSubject.asObservable();
        this.allCommandReceivedInOrder$ = this.allCommandReceivedInOrderSubject.asObservable();
        this.commandReceivedToday$ = this.commandReceivedTodaySubject.asObservable();
        this.commandReceivedYesterday$ = this.commandReceivedYesterdaySubject.asObservable();
        this.commandReceivedThisWeek$ = this.commandReceivedThisWeekSubject.asObservable();
        this.commandReceivedThisMonth$ = this.commandReceivedThisMonthSubject.asObservable();
        /*-----------------------*/
        this.allSumPricecommand$ = this.allSumPricecommandSubject.asObservable();
        this.sumPricecommandToday$ = this.sumPricecommandTodaySubject.asObservable();
        this.sumPricecommandYesterday$ = this.sumPricecommandYesterdaySubject.asObservable();
        this.sumPricecommandThisWeek$ = this.sumPricecommandThisWeekSubject.asObservable();
        this.sumPricecommandThisMonth$ = this.sumPricecommandThisMonthSubject.asObservable();
        this.deleteCommand$ = this.deleteCommandSubject.asObservable();
        this.startPolling();
    }
    startPolling() {
        this.allCommandReceived$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'ordre-inverse')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.allCommandReceivedSubject.next(data)));
        this.allCommandReceivedInOrder$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'getAll')), 
        //scan((acc, val) => val), // Utilisez scan pour accumuler les nouvelles données
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
        }));
        this.commandReceivedToday$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'added-today')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            this.commandReceivedTodaySubject.next(data);
            if (this.dataHasChanged(data)) {
                this.sendNotification(data); // Envoyer la notification uniquement si les données ont changé
            }
            this.previousData = data; // Mise à jour des données précédentes
            ;
        }));
        this.commandReceivedYesterday$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'added-yesterday')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.commandReceivedYesterdaySubject.next(data)));
        this.commandReceivedThisWeek$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'added-this-week')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.commandReceivedThisWeekSubject.next(data)));
        this.commandReceivedThisMonth$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'added-this-mounth')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.commandReceivedThisMonthSubject.next(data)));
        /*------------------------*/
        this.allSumPricecommand$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'somme-prix-total')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.allSumPricecommandSubject.next(data)));
        this.sumPricecommandToday$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'sum-price-today')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.sumPricecommandTodaySubject.next(data)));
        this.sumPricecommandYesterday$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'sum-price-yesterday')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.sumPricecommandYesterdaySubject.next(data)));
        // @ts-ignore
        this.sumPricecommandThisWeek$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'sum-price-thisweek')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.sumPricecommandThisWeekSubject.next(data)));
        this.sumPricecommandThisMonth$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.refreshInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.get(this.apiUrl + 'sum-price-thismounth')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.sumPricecommandThisMonthSubject.next(data)));
    }
    dataHasChanged(newData) {
        // Comparaison des nouvelles données avec les données précédentes
        return JSON.stringify(newData) !== JSON.stringify(this.previousData);
    }
    sendNotification(data) {
        if (data.length > 0) {
            this.notificationSound.play();
        }
    }
    // Nouvelle méthode pour effectuer une requête HTTP DELETE
    // eslint-disable-next-line @typescript-eslint/member-ordering
    deleteCommande(commandeId) {
        const deleteUrl = `${this.apiUrl}/${commandeId}`;
        return this.http.delete(deleteUrl);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    getAllCommandesReceived() {
        return this.allCommandReceived$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    getAllCommandesReceivedInOrder() {
        return this.allCommandReceivedInOrder$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    commandReceivedToday() {
        return this.commandReceivedToday$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    commandReceivedYesterday() {
        return this.commandReceivedYesterday$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    commandReceivedThisWeek() {
        return this.commandReceivedThisWeek$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    commandReceivedThisMonth() {
        return this.commandReceivedThisMonth$;
    }
    /*---------------------------*/
    // eslint-disable-next-line @typescript-eslint/member-ordering
    allSumPricecommand() {
        return this.allSumPricecommand$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    sumPricecommandToday() {
        return this.sumPricecommandToday$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    sumPricecommandYesterday() {
        return this.sumPricecommandYesterday$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    sumPricecommandThisWeek() {
        return this.sumPricecommandThisWeek$;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    sumPricecommandThisMonth() {
        return this.sumPricecommandThisMonth$;
    }
    emitNotification() {
        this.allCommandReceivedInOrderSubject.next(); // Émettre une notification aux composants qui s'y abonnent
    }
};
CommandAutoAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommandAutoAdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CommandAutoAdminService);



/***/ }),

/***/ "isMs":
/*!**************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/revenus/revenus.component.ts ***!
  \**************************************************************************/
/*! exports provided: RevenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenusComponent", function() { return RevenusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_revenus_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./revenus.component.html */ "wwUf");
/* harmony import */ var _revenus_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revenus.component.scss */ "yyVE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_commandAutoAdmin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/commandAutoAdmin.service */ "dw+f");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let RevenusComponent = class RevenusComponent {
    constructor(autoService, router, platform) {
        this.autoService = autoService;
        this.router = router;
        this.platform = platform;
        this.getAllCommandesReceived = null;
        this.commandReceivedToday = null;
        this.commandReceivedYesterday = null;
        this.commandReceivedThisWeek = null;
        this.commandReceivedThisMonth = null;
        this.isMobile = this.platform.is('mobile');
    }
    ngOnInit() {
        this.autoService.getAllCommandesReceived().subscribe((data) => {
            this.getAllCommandesReceived = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        this.autoService.commandReceivedToday().subscribe((data) => {
            this.commandReceivedToday = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        this.autoService.commandReceivedYesterday().subscribe((data) => {
            this.commandReceivedYesterday = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        this.autoService.commandReceivedThisWeek().subscribe((data) => {
            this.commandReceivedThisWeek = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        this.autoService.commandReceivedThisMonth().subscribe((data) => {
            this.commandReceivedThisMonth = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        /*--------------------------------*/
        this.autoService.allSumPricecommand().subscribe((data) => {
            this.allSumPricecommand = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        this.autoService.sumPricecommandToday().subscribe((data) => {
            this.sumPricecommandToday = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        this.autoService.sumPricecommandYesterday().subscribe((data) => {
            this.sumPricecommandYesterday = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        this.autoService.sumPricecommandThisWeek().subscribe((data) => {
            this.sumPricecommandThisWeek = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        this.autoService.sumPricecommandThisMonth().subscribe((data) => {
            this.sumPricecommandThisMonth = data; // Mettez à jour les données dès qu'elles sont disponibles ou mises à jour
        }, (error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }
    goToDetailsCommands(id) {
        console.log(id);
    }
    ouvrirModal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('this is the ID', id);
            this.router.navigate(['admin/commands/details', id]);
        });
    }
};
RevenusComponent.ctorParameters = () => [
    { type: _services_commandAutoAdmin_service__WEBPACK_IMPORTED_MODULE_4__["CommandAutoAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
RevenusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-revenus',
        template: _raw_loader_revenus_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_revenus_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RevenusComponent);



/***/ }),

/***/ "kkzM":
/*!*******************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/revenus/revenus-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RevenusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenusRoutingModule", function() { return RevenusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _revenus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revenus.component */ "isMs");




const routes = [
    {
        path: '',
        component: _revenus_component__WEBPACK_IMPORTED_MODULE_3__["RevenusComponent"]
    }
];
let RevenusRoutingModule = class RevenusRoutingModule {
};
RevenusRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RevenusRoutingModule);



/***/ }),

/***/ "wwUf":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/revenus/revenus.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isMobile\">\n<ion-content class=\"ion-padding\">\n  <div class=\"container1\">\n    <div class=\"flex-item\">Vos revenus\n      <ion-button>\n        <ion-icon name=\"cash\"></ion-icon>\n        <ion-icon name=\"logo-usd\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n  <div class=\"div1\"><strong>Aujourd'hui</strong>\n    <p>Commandes: {{commandReceivedToday ? commandReceivedToday.length : 0}}  </p>\n    <p> Gains: {{sumPricecommandToday|number:'1.2'}} <sup>€</sup></p>\n  </div>\n  <div class=\"container\">\n    <div class=\"div3\"><strong>Hier</strong>\n      <p>Commandes: {{commandReceivedYesterday ? commandReceivedYesterday.length : 0}}</p>\n      <p> Gains: {{sumPricecommandYesterday|number:'1.2'}} <sup>€</sup></p>\n    </div>\n    <div class=\"div4\"><strong>Semaine</strong>\n      <p>Commandes: {{commandReceivedThisWeek ? commandReceivedThisWeek.length : 0}}</p>\n      <p> Gains: {{sumPricecommandThisWeek|number:'1.2'}} <sup>€</sup></p>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"div3\"><strong>Mois</strong>\n      <p>Commandes: {{commandReceivedThisMonth ? commandReceivedThisMonth.length : 0}} </p>\n      <p> Gains: {{sumPricecommandThisMonth|number:'1.2'}} <sup>€</sup></p>\n    </div>\n\n    <div class=\"div4\"><strong>Total</strong>\n\n      <p>Commandes: {{getAllCommandesReceived ? getAllCommandesReceived.length : 0}}</p>\n      <p> Gains: {{allSumPricecommand|number:'1.2'}} <sup>€</sup></p>\n    </div>\n  </div>\n\n  <div class=\"flex-item\">Dernières commandes</div>\n  <ul class=\"custom-list\">\n\n    <li class=\"flex-container\" *ngFor=\"let element of getAllCommandesReceived\" (click)=\"ouvrirModal(element.id)\">\n      <div class=\"item item-id\">#{{ element.id }}</div>\n      <div class=\"item item-price\">{{ element.price }} €</div>\n      <div class=\"item item-contents\">   {{ element.contents.length > 120 ? (element.contents | slice:0:120) + '...' : element.contents }}</div>\n      <div class=\"item item-date\">{{ element.table }}</div>\n      <div class=\"item item-time\">{{ element.date }} {{ element.time }}</div>\n      <br><br><br><br>\n    </li>\n  </ul>\n</ion-content>\n</div>\n\n<div class=\"versionPc\" *ngIf=\"!isMobile\">\n\n  <ion-content class=\"ion-padding\">\n    <div class=\"container1\">\n      <div class=\"flex-item\">Vos revenus\n        <ion-button>\n          <ion-icon name=\"cash\"></ion-icon>\n          <ion-icon name=\"logo-usd\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n    <div class=\"div1\"><strong>Aujourd'hui</strong>\n      <p>Commandes: {{commandReceivedToday ? commandReceivedToday.length : 0}}  </p>\n      <p> Gains: {{sumPricecommandToday|number:'1.2'}} <sup>€</sup></p>\n    </div>\n    <div class=\"container\">\n      <div class=\"div3\"><strong>Hier</strong>\n        <p>Commandes: {{commandReceivedYesterday ? commandReceivedYesterday.length : 0}}</p>\n        <p> Gains: {{sumPricecommandYesterday|number:'1.2'}} <sup>€</sup></p>\n      </div>\n      <div class=\"div4\"><strong>Semaine</strong>\n        <p>Commandes: {{commandReceivedThisWeek ? commandReceivedThisWeek.length : 0}}</p>\n        <p> Gains: {{sumPricecommandThisWeek|number:'1.2'}} <sup>€</sup></p>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"div3\"><strong>Mois</strong>\n        <p>Commandes: {{commandReceivedThisMonth ? commandReceivedThisMonth.length : 0}} </p>\n        <p> Gains: {{sumPricecommandThisMonth|number:'1.2'}} <sup>€</sup></p>\n      </div>\n\n      <div class=\"div4\"><strong>Total</strong>\n\n        <p>Commandes: {{getAllCommandesReceived ? getAllCommandesReceived.length : 0}}</p>\n        <p> Gains: {{allSumPricecommand|number:'1.2'}} <sup>€</sup></p>\n      </div>\n    </div>\n\n    <div class=\"flex-item\">Dernières commandes</div>\n    <ul class=\"custom-list\">\n\n      <li class=\"flex-container\" *ngFor=\"let element of getAllCommandesReceived\" (click)=\"ouvrirModal(element.id)\">\n        <div class=\"item item-id\">#{{ element.id }}</div>\n        <div class=\"item item-price\">{{ element.price }} €</div>\n        <div class=\"item item-contents\">   {{ element.contents.length > 120 ? (element.contents | slice:0:120) + '...' : element.contents }}</div>\n        <div class=\"item item-date\">{{ element.table }}</div>\n        <div class=\"item item-time\">{{ element.date }} {{ element.time }}</div>\n        <br><br><br><br>\n      </li>\n    </ul>\n  </ion-content>\n</div>\n");

/***/ }),

/***/ "yyVE":
/*!****************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/revenus/revenus.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.ion-padding {\n  height: 800px;\n  /* Réinitialisation des styles par défaut des listes */\n  /* Style des éléments <li> dans la liste */\n  /* Style au survol d'un élément <li> */\n  /* Style des div dans les éléments <li> */\n  /* Styles spécifiques pour chaque div */\n}\n.ion-padding .container {\n  display: flex;\n}\n.ion-padding .div1 {\n  flex: 1;\n  padding: 10px;\n  padding: 1.6rem 2rem;\n  background: #f3f3f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 1rem;\n  width: 95%;\n  height: 160px;\n  margin-bottom: 0.5rem;\n  margin-top: 1.5rem;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n}\n.ion-padding .div3, .ion-padding .div4 {\n  flex: 1;\n  padding: 1.8rem 1rem;\n  background: #f3f3f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 1rem;\n  width: 100%;\n  height: 160px;\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n}\n.ion-padding .flex-item {\n  margin-left: 5%;\n  /* Espace entre les textes (ajustez selon vos besoins) */\n  font-weight: 700;\n  color: #515151;\n  font-size: 1.8rem;\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n  text-align: center;\n}\n.ion-padding .p {\n  font-size: 12px;\n}\n.ion-padding ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.ion-padding ul li {\n  background-color: rgba(231, 222, 222, 0.47);\n  font-size: 18px;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transition: background-color 0.3s ease;\n  display: flex;\n  /* Utilisation de Flexbox */\n  justify-content: center;\n  /* Centrer horizontalement */\n  align-items: center;\n  /* Centrer verticalement */\n  position: relative;\n  /* Permettre le positionnement absolu des éléments enfants */\n}\n.ion-padding ul li:hover {\n  background-color: #ffbf80;\n  cursor: pointer;\n}\n.ion-padding .item {\n  padding: 8px;\n  border-radius: 5px;\n  margin: 5px;\n  color: #0d0d0d;\n  font-size: 14px;\n  flex: 0 0 32%;\n  /* Taille de chaque élément (ajustez selon vos besoins) */\n  position: absolute;\n  /* Positionnement absolu */\n}\n.ion-padding .item-id {\n  top: 0%;\n  left: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.ion-padding .item-price {\n  background-color: rgba(58, 241, 7, 0.76);\n  top: 0%;\n  right: 0;\n  box-shadow: 0 5px 9px rgba(58, 241, 7, 0.76);\n}\n.ion-padding .item-contents {\n  top: 30%;\n  /* Au milieu verticalement */\n  left: 50%;\n  /* Au milieu horizontalement */\n  transform: translate(-50%, -50%);\n  /* Centrage précis au milieu */\n  width: 70%;\n  height: 70%;\n  text-align: center;\n}\n.ion-padding .item-date {\n  bottom: 0;\n  left: 0;\n}\n.ion-padding .item-time {\n  bottom: 0;\n  right: 0;\n}\n.versionPc {\n  margin: auto;\n  width: 800px;\n  /* Vous pouvez ajuster la largeur */\n  height: 700px;\n  /* Vous pouvez ajuster la hauteur */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJldmVudXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsYUFBQTtFQTZEQSxzREFBQTtFQU9BLDBDQUFBO0VBaUJBLHNDQUFBO0VBTUEseUNBQUE7RUFhQSx1Q0FBQTtBQWpHRjtBQU5FO0VBQ0UsYUFBQTtBQVFKO0FBSkU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUVBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUVBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBSUo7QUFERTtFQUNFLE9BQUE7RUFHQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQWlCLHdEQUFBO0VBQ2pCLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFJRTtFQUNFLGVBQUE7QUFGSjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUpKO0FBUUU7RUFFRSwyQ0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQWUsMkJBQUE7RUFDZix1QkFBQTtFQUF5Qiw0QkFBQTtFQUN6QixtQkFBQTtFQUFxQiwwQkFBQTtFQUNyQixrQkFBQTtFQUFvQiw0REFBQTtBQUp4QjtBQVFFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBTko7QUFVRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFBZSx5REFBQTtFQUNmLGtCQUFBO0VBQW9CLDBCQUFBO0FBUHhCO0FBWUU7RUFFRSxPQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0FBWEo7QUFlRTtFQUNFLHdDQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw0Q0FBQTtBQWJKO0FBaUJFO0VBRUUsUUFBQTtFQUFVLDRCQUFBO0VBQ1YsU0FBQTtFQUFXLDhCQUFBO0VBQ1gsZ0NBQUE7RUFBa0MsOEJBQUE7RUFDbEMsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWJKO0FBa0JFO0VBRUUsU0FBQTtFQUNBLE9BQUE7QUFqQko7QUFvQkU7RUFFRSxTQUFBO0VBQ0EsUUFBQTtBQW5CSjtBQXdCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQWMsbUNBQUE7RUFDZCxhQUFBO0VBQWUsbUNBQUE7QUFuQmpCIiwiZmlsZSI6InJldmVudXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaW9uLXBhZGRpbmcge1xuICBoZWlnaHQ6IDgwMHB4O1xuICAvKiBSw6lpbml0aWFsaXNhdGlvbiBkZXMgc3R5bGVzIHBhciBkw6lmYXV0IGRlcyBsaXN0ZXMgKi9cbiAgLyogU3R5bGUgZGVzIMOpbMOpbWVudHMgPGxpPiBkYW5zIGxhIGxpc3RlICovXG4gIC8qIFN0eWxlIGF1IHN1cnZvbCBkJ3VuIMOpbMOpbWVudCA8bGk+ICovXG4gIC8qIFN0eWxlIGRlcyBkaXYgZGFucyBsZXMgw6lsw6ltZW50cyA8bGk+ICovXG4gIC8qIFN0eWxlcyBzcMOpY2lmaXF1ZXMgcG91ciBjaGFxdWUgZGl2ICovXG59XG4uaW9uLXBhZGRpbmcgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW9uLXBhZGRpbmcgLmRpdjEge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nOiAxLjZyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG4uaW9uLXBhZGRpbmcgLmRpdjMsIC5pb24tcGFkZGluZyAuZGl2NCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDEuOHJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG4uaW9uLXBhZGRpbmcgLmZsZXgtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgLyogRXNwYWNlIGVudHJlIGxlcyB0ZXh0ZXMgKGFqdXN0ZXogc2Vsb24gdm9zIGJlc29pbnMpICovXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNTE1MTUxO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pb24tcGFkZGluZyAucCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5pb24tcGFkZGluZyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5pb24tcGFkZGluZyB1bCBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAyMjIsIDIyMiwgMC40Nyk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogVXRpbGlzYXRpb24gZGUgRmxleGJveCAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogQ2VudHJlciBob3Jpem9udGFsZW1lbnQgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogQ2VudHJlciB2ZXJ0aWNhbGVtZW50ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogUGVybWV0dHJlIGxlIHBvc2l0aW9ubmVtZW50IGFic29sdSBkZXMgw6lsw6ltZW50cyBlbmZhbnRzICovXG59XG4uaW9uLXBhZGRpbmcgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjgwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW9uLXBhZGRpbmcgLml0ZW0ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXg6IDAgMCAzMiU7XG4gIC8qIFRhaWxsZSBkZSBjaGFxdWUgw6lsw6ltZW50IChhanVzdGV6IHNlbG9uIHZvcyBiZXNvaW5zKSAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIFBvc2l0aW9ubmVtZW50IGFic29sdSAqL1xufVxuLmlvbi1wYWRkaW5nIC5pdGVtLWlkIHtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5pb24tcGFkZGluZyAuaXRlbS1wcmljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDI0MSwgNywgMC43Nik7XG4gIHRvcDogMCU7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2hhZG93OiAwIDVweCA5cHggcmdiYSg1OCwgMjQxLCA3LCAwLjc2KTtcbn1cbi5pb24tcGFkZGluZyAuaXRlbS1jb250ZW50cyB7XG4gIHRvcDogMzAlO1xuICAvKiBBdSBtaWxpZXUgdmVydGljYWxlbWVudCAqL1xuICBsZWZ0OiA1MCU7XG4gIC8qIEF1IG1pbGlldSBob3Jpem9udGFsZW1lbnQgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8qIENlbnRyYWdlIHByw6ljaXMgYXUgbWlsaWV1ICovXG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW9uLXBhZGRpbmcgLml0ZW0tZGF0ZSB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbi5pb24tcGFkZGluZyAuaXRlbS10aW1lIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLnZlcnNpb25QYyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwMHB4O1xuICAvKiBWb3VzIHBvdXZleiBhanVzdGVyIGxhIGxhcmdldXIgKi9cbiAgaGVpZ2h0OiA3MDBweDtcbiAgLyogVm91cyBwb3V2ZXogYWp1c3RlciBsYSBoYXV0ZXVyICovXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=screens-admin-revenus-revenus-module.js.map