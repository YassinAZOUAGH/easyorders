(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-cart-cart-module"],{

/***/ "EPCR":
/*!************************************************************!*\
  !*** ./src/app/client1/client/screens/cart/cart.module.ts ***!
  \************************************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "gQvV");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "ewK2");
/* harmony import */ var src_app_client1_client_components_cart_item_cart_item_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/client/components/cart-item/cart-item.module */ "vCUy");
/* harmony import */ var src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/client/components/button/button.module */ "Iyou");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"],
            src_app_client1_client_components_cart_item_cart_item_module__WEBPACK_IMPORTED_MODULE_7__["CartItemModule"],
            src_app_client1_client_components_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]],
        exports: [
            _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
        ]
    })
], CartPageModule);



/***/ }),

/***/ "L7wr":
/*!****************************************************************************!*\
  !*** ./src/app/client1/client/components/cart-item/cart-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart-item.component.html */ "QbVg");
/* harmony import */ var _cart_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-item.component.scss */ "roUB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CartItemComponent = class CartItemComponent {
    constructor() {
        this.increase = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.decrease = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
};
CartItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    increase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    decrease: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
CartItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-item',
        template: _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartItemComponent);



/***/ }),

/***/ "NieQ":
/*!************************************************************!*\
  !*** ./src/app/client1/services/command-client.service.ts ***!
  \************************************************************/
/*! exports provided: CommandClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandClientService", function() { return CommandClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//const baseUrl = 'http://192.168.0.246:8080/api/client/commands';
const baseUrl = 'https://oafish-orange-production.up.railway.app/api/client/commands';
let CommandClientService = class CommandClientService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    getCommandsById(id) {
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
    getElementsAjoutesAujourdhui() {
        return this.http.get(`${baseUrl}/added-today`);
    }
    getElementsAjoutesHier() {
        return this.http.get(`${baseUrl}/added-yesterday`);
    }
    getElementsAjoutesCetteSemaine() {
        return this.http.get(`${baseUrl}/added-this-week`);
    }
    getElementsAjoutesCeMois() {
        return this.http.get(`${baseUrl}/added-this-mounth`);
    }
    getElementsAjoutesTotal() {
        return this.http.get(`${baseUrl}/getAll`);
    }
    getElementsAjoutesOrdreDecroissant() {
        return this.http.get(`${baseUrl}/ordre-inverse`);
    }
    getSommePrixAujourdhui() {
        return this.http.get(`${baseUrl}/sum-price-today`);
    }
    getSommePrixHier() {
        return this.http.get(`${baseUrl}/sum-price-yesterday`);
    }
    getSommePrixCetteSemaine() {
        return this.http.get(`${baseUrl}/sum-price-thisweek`);
    }
    getSommePrixCeMois() {
        return this.http.get(`${baseUrl}/sum-price-thismounth`);
    }
    getSommePrixTotal() {
        return this.http.get(`${baseUrl}/somme-prix-total`);
    }
};
CommandClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommandClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CommandClientService);



/***/ }),

/***/ "QbVg":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/components/cart-item/cart-item.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cart-item\">\n  <div class=\"image\">\n    <ion-img [src]=\"item.image\"></ion-img>\n  </div>\n\n  <div class=\"description\">\n    <h3>{{item.name}}</h3>\n    <p><sup>€</sup>{{item.price | number:'1.2'}}</p>\n  </div>\n\n  <div class=\"actions\">\n    <ion-buttons>\n      <ion-button (click)=\"increase.emit()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"counter\">{{item.quantity}}</div>\n    <ion-buttons>\n      <ion-button (click)=\"decrease.emit()\">\n        <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n</div>\n");

/***/ }),

/***/ "SIyE":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/client/screens/cart/cart.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <h3 class=\"title\" *ngIf=\"(cartItems$|async).length\">{{(cartItems$|async).length}} {{ 'ITEMS_IN_CART' | translate }}</h3>\n\n  <!-- CART ITEMS -->\n  <ion-list lines=\"none\">\n    <ion-item-sliding *ngFor=\"let item of cartItems$|async\">\n      <ion-item>\n        <app-cart-item [item]=\"item\" (increase)=\"onIncrease(item)\" (decrease)=\"onDecrease(item)\"></app-cart-item>\n      </ion-item>\n\n      <ion-item-options side='end'>\n\n        <ion-item-option (click)=\"removeFromCart(item)\">\n          <ion-icon name='trash-outline' size='large' color='danger'></ion-icon>\n        </ion-item-option>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n  <!-- EMPTY CART -->\n  <div class=\"empty-cart\" *ngIf=\"!(cartItems$|async).length\">\n    <ion-icon name=\"d-cart\"></ion-icon>\n    <p>{{ 'EmtyCart' | translate }}</p>\n  </div>\n\n  <!-- CHECKOUT BUTTON -->\n  <!--app-button *ngIf=\"(cartItems$|async).length\" (click)=\"confirmeCommande()\">\n    Payer: <span>{{totalAmount$|async|number:'1.2'}} <sup>€</sup></span>\n  </app-button-->\n\n  <!--app-button *ngIf=\"(cartItems$|async).length\" (click)=\"payByCard2()\">\n    {{ 'PAY_BY_CART' | translate }} <span>{{totalAmount$|async|number:'1.2'}} <sup>€</sup></span>\n  </app-button-->\n\n  <app-button *ngIf=\"(cartItems$|async).length\" (click)=\"payByCash ()\">\n    {{ 'PAY_AT_RECEPTION' | translate }}<span>{{totalAmount$|async|number:'1.2'}} <sup>€</sup></span>\n  </app-button>\n</ion-content>\n");

/***/ }),

/***/ "ewK2":
/*!**********************************************************!*\
  !*** ./src/app/client1/client/screens/cart/cart.page.ts ***!
  \**********************************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.page.html */ "SIyE");
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.page.scss */ "yX5D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/client1/services/cart.service */ "Aj8l");
/* harmony import */ var src_app_client1_services_canal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/client1/services/canal.service */ "ib1Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_commandsToPrepare_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/commandsToPrepare.service */ "/24w");
/* harmony import */ var _services_status_command_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/status-command.service */ "jmJh");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stripe/stripe-js */ "v4r+");
/* harmony import */ var _services_command_client_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/command-client.service */ "NieQ");












let CartPage = class CartPage {
    constructor(cartService, statusCommandService, commandService, commandsToPrepareService, alertCtrl, router, toastCtrl, route, navCtrl, canalService) {
        this.cartService = cartService;
        this.statusCommandService = statusCommandService;
        this.commandService = commandService;
        this.commandsToPrepareService = commandsToPrepareService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.canalService = canalService;
        this.cart = [];
        this.myCommand = '';
        this.str = '';
        this.commandeStatus = 'En cours de préparation...';
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.cartItem = {
            id: 0,
            name: '',
            price: 0,
            quantity: 0,
            image: '',
        };
    }
    ngOnInit() {
        this.cartItems$ = this.cartService.getCart();
        this.totalAmount$ = this.cartService.getTotalAmount();
    }
    onIncrease(item) {
        this.cartService.changeQty(1, item.id);
    }
    removeAll() {
        console.log('remove all elements');
    }
    payByCard2() {
        window.alert('Cette fonctionalité ne existe pas encore ');
    }
    payByCard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cartService.getTotalAmount().subscribe(price => this.price = price);
            if (this.price <= 0) {
                console.error('Invalid amount.');
                return;
            }
            // eslint-disable-next-line max-len
            const stripe = yield Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_10__["loadStripe"])('pk_live_51MMIYlFkf97k2wLsDtra4wFXmnlfposxTOLkojEXhuQ9IbtQuhWU04IVYXU6DoVJeY9CrkYgezvddPCSc3VUmtoH00YMhePWri');
            const { error } = yield stripe.redirectToCheckout({
                lineItems: [{
                        price: 'price_1NhKh1Fkf97k2wLsrrvVG0PI',
                        quantity: 1,
                    }],
                mode: 'payment',
                successUrl: 'https://smarteasyorders.com',
                cancelUrl: 'https://your-website.com/cancel',
            });
            if (error) {
                console.error('Payment error:', error);
            }
        });
    }
    saveCommand2() {
        console.log('payment ok');
    }
    saveCommand() {
        this.cartService.getCart().subscribe(cart => this.cart = cart);
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < this.cart.length; i++) {
            this.myCommand += this.cart[i].quantity + ' ' + this.cart[i].name + ' / ' + '\n';
        }
        this.cartService.getTotalAmount().subscribe(price => this.price = price);
        //const now = new Date();
        // Obtenir l'heure actuelle
        const maintenant = new Date();
        const aujourdhui = new Date();
        // Formater la date au format "DD/MM/YYYY"
        this.dateAujourdhui = this.formaterDate(aujourdhui);
        // Formater l'heure au format "h:m:s"
        this.heureActuelle = this.formaterHeure(maintenant);
        console.log('heureActuelle ---------->', this.heureActuelle);
        const data = {
            contents: this.myCommand,
            date: this.dateAujourdhui,
            time: this.heureActuelle,
            table: this.canalService.getCanal(),
            price: this.price,
            user: {
                id: this.canalService.getUserId()
            }
        };
        let commandTtem = {
            id: 0,
            name: this.myCommand,
            price: this.price,
            status: this.commandeStatus,
        };
        console.log('this is the data: ', data);
        this.commandService.create(data)
            .subscribe(response => {
            console.log(response);
            window.alert('Votre commande est bien enregistré, nous vous severons dès que possible !');
            this.statusCommandService.addToCommand(commandTtem);
            //this.statusCommandService.clearCart();
            commandTtem = null;
        }, error => {
            console.log(error);
            console.log('Votre commande est pas enregistré');
        });
        this.commandsToPrepareService.create(data)
            .subscribe(response => {
            console.log(response);
            //window.location.reload();
            this.myCommand = '';
            console.log('commandsToPrepare saved');
            // this.presentToast();
            // window.alert('Votre commande est bien enregistré, nous vous severons dès que possible !');
            // window.location.reload();
            //this.router.navigate(['client1/client/listing']);
            //this.router.navigate(['client1/client/listing']);
        }, error => {
            console.log(error);
        });
        /*const commandTtem: StatusCommandItemModel = {
          id: 1,
          name: this.myCommand,
          price: this.price,
        };
    
        this.statusCommandService.addToCommand(commandTtem);*/
        // this.router.navigate(['/client1/client/listing']);
        this.cartService.clearCart();
        this.router.navigate(['/client/statuscommand']);
    }
    /*addItemToCommand() {
      const commandTtem = {
        id: 3,
        name: 'this.myCommanssss azaz  ssssssd  skjfjskjdf  sdfkjhusdf   sdfhsIDFHSUDI sdkfjzoeuriyzer qkuhrae_rize qzkeg',
        price: 1222,
        status : 'En cours de préparation...'
      };
      this.statusCommandService.addToCommand(commandTtem);
    }*/
    // Fonction pour formater la date au format "DD/MM/YYYY"
    formaterDate(date) {
        const jour = String(date.getDate()).padStart(2, '0');
        const mois = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0 dans JavaScript
        const annee = date.getFullYear();
        return `${jour}/${mois}/${annee}`;
    }
    // Fonction pour formater l'heure au format "h:m:s"
    formaterHeure(date) {
        const heures = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const secondes = String(date.getSeconds()).padStart(2, '0');
        return `${heures}:${minutes}:${secondes}`;
    }
    onDecrease(item) {
        if (item.quantity === 1) {
            this.removeFromCart(item);
        }
        else {
            this.cartService.changeQty(-1, item.id);
        }
    }
    removeFromCart(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Remove',
                message: 'Are you sure you want to remove ' + item.name + '?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => this.cartService.removeItem(item.id),
                    },
                    {
                        text: 'No',
                    },
                ],
            });
            alert.present();
        });
    }
    payByCash() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmation',
                message: 'Êtes-vous sûr de vouloir passer cette commande ?',
                buttons: [
                    {
                        text: 'Non',
                    },
                    {
                        text: 'Oui',
                        handler: () => this.saveCommand(),
                    },
                ],
            });
            alert.present();
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmation',
                message: 'Votre commande est bien enregistré, nous vous severons dès que possible !',
                buttons: [
                    {
                        text: 'Ok',
                    },
                ],
            });
            alert.present();
        });
    }
};
CartPage.ctorParameters = () => [
    { type: src_app_client1_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _services_status_command_service__WEBPACK_IMPORTED_MODULE_9__["StatusCommandService"] },
    { type: _services_command_client_service__WEBPACK_IMPORTED_MODULE_11__["CommandClientService"] },
    { type: _services_commandsToPrepare_service__WEBPACK_IMPORTED_MODULE_8__["CommandsToPrepareService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_client1_services_canal_service__WEBPACK_IMPORTED_MODULE_6__["CanalService"] }
];
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartPage);



/***/ }),

/***/ "gQvV":
/*!********************************************************************!*\
  !*** ./src/app/client1/client/screens/cart/cart-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "ewK2");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "roUB":
/*!******************************************************************************!*\
  !*** ./src/app/client1/client/components/cart-item/cart-item.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart-item {\n  background: #f3f3f3;\n  padding: 1.5rem 1rem;\n  border-radius: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  width: 95%;\n  margin-left: 5%;\n  position: relative;\n}\n.cart-item .image {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  margin-right: 1.2rem;\n  position: absolute;\n  left: -5%;\n  top: 50%;\n  transform: translateY(-50%);\n  box-shadow: 10px 10px 10px 0px #c5c5c5;\n}\n.cart-item .description {\n  flex: 1;\n  margin-left: 28%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.cart-item .description h3 {\n  font-weight: 600;\n  color: #1f1f1f;\n}\n.cart-item .description p {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #ffb800;\n  margin: 0.5rem 0;\n}\n.cart-item .description p sup {\n  font-size: 0.8rem;\n  margin-right: 2px;\n}\n.cart-item .description p h2 {\n  font-size: large;\n  margin-right: 2px;\n}\n.cart-item .actions {\n  border: 1px solid #c7c7c7;\n  border-radius: 2rem;\n}\n.cart-item .actions .counter {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #6b45bc;\n}\n.cart-item .actions ion-button {\n  --background: #fff;\n  --box-shadow: 0px 2px 10px grey;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  height: 35px;\n  width: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhcnQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QUFDSjtBQUVFO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQU47QUFHSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQURSO0FBR007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFNRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSk47QUFPSTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0FBTk4iLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtaXRlbSB7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmltYWdlIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNSU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDBweCAjYzVjNWM1O1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAyOCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzFmMWYxZjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjZmZiODAwO1xuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcblxuICAgICAgc3VwIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWN0aW9ucyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M3YzdjNztcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuXG4gICAgLmNvdW50ZXIge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICM2YjQ1YmM7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTBweCBncmV5O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "v4r+":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/*! exports provided: loadStripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStripe", function() { return loadStripe; });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.46.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "vCUy":
/*!*************************************************************************!*\
  !*** ./src/app/client1/client/components/cart-item/cart-item.module.ts ***!
  \*************************************************************************/
/*! exports provided: CartItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemModule", function() { return CartItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-item.component */ "L7wr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CartItemModule = class CartItemModule {
};
CartItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"]],
    })
], CartItemModule);



/***/ }),

/***/ "yX5D":
/*!************************************************************!*\
  !*** ./src/app/client1/client/screens/cart/cart.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 1.6rem;\n  --padding-end: 1.6rem;\n}\nion-content .title {\n  font-weight: 700;\n  color: #1f1f1f;\n  margin-bottom: 2rem;\n  padding-left: 1.6rem;\n  text-align: center;\n}\nion-content app-cart-item {\n  display: block;\n  width: 100%;\n  padding-left: 1.6rem;\n}\nion-content ion-item-sliding {\n  margin-bottom: 2rem;\n  overflow: hidden;\n}\nion-content ion-item-sliding ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-radius: 25px;\n}\nion-content ion-item-sliding ion-item-options {\n  border: 2px solid #f3f3f3;\n  border-radius: 25px;\n  overflow: hidden;\n  background: #fff;\n}\nion-content ion-item-sliding ion-item-options ion-item-option {\n  background: #fff;\n}\nion-content .empty-cart {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #c7c7c7;\n}\nion-content .empty-cart ion-icon {\n  font-size: 8rem;\n}\nion-content .empty-cart p {\n  font-size: 1.8rem;\n}\nion-content app-button {\n  display: block;\n  padding-left: 1.6rem;\n}\nion-content app-button span {\n  margin-left: 10px;\n  font-size: 1.5rem;\n}\nion-content app-button span sup {\n  font-weight: 400;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7QUFHSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUROO0FBSUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZOO0FBSU07RUFDRSxnQkFBQTtBQUZSO0FBT0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFMSjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBUUk7RUFDRSxpQkFBQTtBQU5OO0FBVUU7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFSSjtBQVVJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQVJOO0FBVU07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUlIiLCJmaWxlIjoiY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDEuNnJlbTtcbiAgLS1wYWRkaW5nLWVuZDogMS42cmVtO1xuXG4gIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzFmMWYxZjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS42cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGFwcC1jYXJ0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMS42cmVtO1xuICB9XG5cbiAgaW9uLWl0ZW0tc2xpZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0tb3B0aW9ucyB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgICBpb24taXRlbS1vcHRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lbXB0eS1jYXJ0IHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2M3YzdjNztcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cbiAgfVxuXG4gIGFwcC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogMS42cmVtO1xuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgICBzdXAge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=screens-cart-cart-module.js.map