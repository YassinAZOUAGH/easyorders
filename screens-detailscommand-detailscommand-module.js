(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-detailscommand-detailscommand-module"],{

/***/ "2KVN":
/*!************************************************************************************!*\
  !*** ./src/app/client1/command/screens/detailscommand/detailscommand.component.ts ***!
  \************************************************************************************/
/*! exports provided: DetailscommandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailscommandComponent", function() { return DetailscommandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detailscommand_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detailscommand.component.html */ "kCAT");
/* harmony import */ var _detailscommand_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailscommand.component.scss */ "BJ6L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_command_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/command.service */ "mgZU");
/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdf-lib */ "4Zil");








let DetailscommandComponent = class DetailscommandComponent {
    constructor(modalController, activatedRoute, commandService) {
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.commandService = commandService;
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getCommandById(this.id);
    }
    getCommandById(id) {
        // @ts-ignore
        this.commandService.getCommandsById(this.id)
            .subscribe(data => {
            this.command = data;
            //console.log('parentCommand is: ', data);
        }, error => {
            console.log(error);
        });
    }
    generateAndDownloadPDF() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_7__["PDFDocument"].create();
            // Ajoutez une nouvelle page au document
            const page = pdfDoc.addPage([600, 400]);
            // Obtenez le contenu à définir dans le PDF (remplacez par vos propres informations)
            const content = 'Facture de la commande: ' + this.command.id + '\n' +
                'Contenu de la commande: ' + this.command.contents + '\n' +
                'Date de la commande: ' + this.command.date + '\n' +
                'Price de la commande: ' + this.command.time + '\n';
            // Dessinez le contenu sur la page PDF
            page.drawText(content, {
                x: 50,
                y: 350,
                size: 12,
                color: Object(pdf_lib__WEBPACK_IMPORTED_MODULE_7__["rgb"])(0, 0, 0),
            });
            // Téléchargez le PDF en tant que fichier
            const pdfBytes = yield pdfDoc.save();
            // Créez un objet Blob avec les données PDF
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            // Créez une URL pour le Blob
            const url = URL.createObjectURL(blob);
            // Créez un élément d'ancrage (lien) pour déclencher le téléchargement
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'facture' + this.command.id + '.pdf';
            anchor.click();
            // Libérez la mémoire
            URL.revokeObjectURL(url);
        });
    }
};
DetailscommandComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_command_service__WEBPACK_IMPORTED_MODULE_6__["CommandService"] }
];
DetailscommandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detailscommand',
        template: _raw_loader_detailscommand_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detailscommand_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailscommandComponent);



/***/ }),

/***/ "BJ6L":
/*!**************************************************************************************!*\
  !*** ./src/app/client1/command/screens/detailscommand/detailscommand.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-content {\n  --background: rgba(217, 213, 224, 0.52);\n  padding: 2rem;\n  position: relative;\n}\nion-content .header {\n  background: #6b45bc;\n  border-radius: 0rem 0rem 1rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  padding: 0rem 0.5rem;\n}\nion-content .header .title {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n  text-align: center;\n}\nion-content .header .ion-button {\n  height: 60px;\n  width: 60px;\n}\nion-content .header .ion-button .ion-icon {\n  font-size: 2rem;\n}\n/* Réinitialisation des styles par défaut des listes */\nul {\n  height: 90%;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n/* Style des éléments <li> dans la liste */\nul li {\n  background-color: rgba(231, 222, 222, 0.47);\n  font-size: 18px;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transition: background-color 0.3s ease;\n  display: flex;\n  /* Utilisation de Flexbox */\n  justify-content: center;\n  /* Centrer horizontalement */\n  align-items: center;\n  /* Centrer verticalement */\n  position: relative;\n  /* Permettre le positionnement absolu des éléments enfants */\n  height: 100%;\n}\n/* Style au survol d'un élément <li>\nul li:hover {\n  background-color: #ffbf80;\n  cursor: pointer;\n}\n*/\n/* Style des div dans les éléments <li> */\n.item {\n  padding: 8px;\n  border-radius: 5px;\n  margin: 5px;\n  color: #0d0d0d;\n  font-size: 14px;\n  flex: 0 0 32%;\n  /* Taille de chaque élément (ajustez selon vos besoins) */\n  position: absolute;\n  /* Positionnement absolu */\n}\n/* Styles spécifiques pour chaque div */\n.item-id {\n  top: 0%;\n  left: 0;\n}\n.item-price {\n  background-color: rgba(58, 241, 7, 0.76);\n  top: 0%;\n  right: 0;\n  box-shadow: 0 5px 9px rgba(58, 241, 7, 0.76);\n  font-weight: bold;\n}\n.item-contents {\n  top: 50%;\n  /* Au milieu verticalement */\n  left: 50%;\n  /* Au milieu horizontalement */\n  transform: translate(-50%, -50%);\n  /* Centrage précis au milieu */\n  width: 80%;\n  height: 80%;\n  text-align: center;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);\n}\n.item-table {\n  bottom: 0;\n  left: 0;\n  font-size: 100%;\n  font-weight: bold;\n}\n.item-date_time {\n  bottom: 0;\n  right: 0;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRldGFpbHNjb21tYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUY7QUFBRTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVOO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNOO0FBQ007RUFDRSxlQUFBO0FBQ1I7QUFNQSxzREFBQTtBQUNBO0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFKRjtBQU9BLDBDQUFBO0FBQ0E7RUFFRSwyQ0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQWUsMkJBQUE7RUFDZix1QkFBQTtFQUF5Qiw0QkFBQTtFQUN6QixtQkFBQTtFQUFxQiwwQkFBQTtFQUNyQixrQkFBQTtFQUFvQiw0REFBQTtFQUNwQixZQUFBO0FBRkY7QUFNQTs7Ozs7Q0FBQTtBQU9BLHlDQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQWUseURBQUE7RUFDZixrQkFBQTtFQUFvQiwwQkFBQTtBQUh0QjtBQU9BLHVDQUFBO0FBQ0E7RUFFRSxPQUFBO0VBQ0EsT0FBQTtBQUxGO0FBVUE7RUFDRSx3Q0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQVBGO0FBWUE7RUFFRSxRQUFBO0VBQVUsNEJBQUE7RUFDVixTQUFBO0VBQVcsOEJBQUE7RUFDWCxnQ0FBQTtFQUFrQyw4QkFBQTtFQUNsQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUFQRjtBQVVBO0VBRUUsU0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFSRjtBQWFBO0VBRUUsU0FBQTtFQUNBLFFBQUE7RUFFQSxpQkFBQTtBQVpGIiwiZmlsZSI6ImRldGFpbHNjb21tYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjE3LCAyMTMsIDIyNCwgMC41Mik7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICBib3JkZXItcmFkaXVzOiAwcmVtIDByZW0gMXJlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDByZW0gMC41cmVtO1xufVxuaW9uLWNvbnRlbnQgLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmI4MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIgLmlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuaW9uLWNvbnRlbnQgLmhlYWRlciAuaW9uLWJ1dHRvbiAuaW9uLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi8qIFLDqWluaXRpYWxpc2F0aW9uIGRlcyBzdHlsZXMgcGFyIGTDqWZhdXQgZGVzIGxpc3RlcyAqL1xudWwge1xuICBoZWlnaHQ6IDkwJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBTdHlsZSBkZXMgw6lsw6ltZW50cyA8bGk+IGRhbnMgbGEgbGlzdGUgKi9cbnVsIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDIyMiwgMjIyLCAwLjQ3KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBVdGlsaXNhdGlvbiBkZSBGbGV4Ym94ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBDZW50cmVyIGhvcml6b250YWxlbWVudCAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBDZW50cmVyIHZlcnRpY2FsZW1lbnQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBQZXJtZXR0cmUgbGUgcG9zaXRpb25uZW1lbnQgYWJzb2x1IGRlcyDDqWzDqW1lbnRzIGVuZmFudHMgKi9cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTdHlsZSBhdSBzdXJ2b2wgZCd1biDDqWzDqW1lbnQgPGxpPlxudWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjgwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4qL1xuLyogU3R5bGUgZGVzIGRpdiBkYW5zIGxlcyDDqWzDqW1lbnRzIDxsaT4gKi9cbi5pdGVtIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogIzBkMGQwZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4OiAwIDAgMzIlO1xuICAvKiBUYWlsbGUgZGUgY2hhcXVlIMOpbMOpbWVudCAoYWp1c3RleiBzZWxvbiB2b3MgYmVzb2lucykgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBQb3NpdGlvbm5lbWVudCBhYnNvbHUgKi9cbn1cblxuLyogU3R5bGVzIHNww6ljaWZpcXVlcyBwb3VyIGNoYXF1ZSBkaXYgKi9cbi5pdGVtLWlkIHtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMDtcbn1cblxuLml0ZW0tcHJpY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCAyNDEsIDcsIDAuNzYpO1xuICB0b3A6IDAlO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMCA1cHggOXB4IHJnYmEoNTgsIDI0MSwgNywgMC43Nik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaXRlbS1jb250ZW50cyB7XG4gIHRvcDogNTAlO1xuICAvKiBBdSBtaWxpZXUgdmVydGljYWxlbWVudCAqL1xuICBsZWZ0OiA1MCU7XG4gIC8qIEF1IG1pbGlldSBob3Jpem9udGFsZW1lbnQgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8qIENlbnRyYWdlIHByw6ljaXMgYXUgbWlsaWV1ICovXG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5pdGVtLXRhYmxlIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaXRlbS1kYXRlX3RpbWUge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "H//Q":
/*!*****************************************************************************************!*\
  !*** ./src/app/client1/command/screens/detailscommand/detailscommand-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DetailscommandRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailscommandRoutingModule", function() { return DetailscommandRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detailscommand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailscommand.component */ "2KVN");




const routes = [
    {
        path: '',
        component: _detailscommand_component__WEBPACK_IMPORTED_MODULE_3__["DetailscommandComponent"]
    }
];
let DetailscommandRoutingModule = class DetailscommandRoutingModule {
};
DetailscommandRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailscommandRoutingModule);



/***/ }),

/***/ "Ztkf":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/command/screens/detailscommand/detailscommand.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DetailscommandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailscommandModule", function() { return DetailscommandModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detailscommand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailscommand-routing.module */ "H//Q");
/* harmony import */ var _detailscommand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailscommand.component */ "2KVN");
/* harmony import */ var src_app_client1_admin_components_admin_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/admin/components-admin/badge/badge.module */ "ej3e");
/* harmony import */ var src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/admin/components-admin/button/button.module */ "Ihoe");









let DetailscommandModule = class DetailscommandModule {
};
DetailscommandModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detailscommand_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailscommandRoutingModule"],
            src_app_client1_admin_components_admin_badge_badge_module__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            src_app_client1_admin_components_admin_button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
        ],
        declarations: [_detailscommand_component__WEBPACK_IMPORTED_MODULE_6__["DetailscommandComponent"]],
    })
], DetailscommandModule);



/***/ }),

/***/ "kCAT":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/command/screens/detailscommand/detailscommand.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ionContent\">\n  <div class=\"header\">\n\n    <ion-buttons>\n      <ion-button routerLink=\"/command/history\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"title\">\n      <p>Détails de la commande: #{{id}}</p></div>\n    <ion-buttons>\n      <ion-button (click)=\"generateAndDownloadPDF()\">\n        <ion-icon slot=\"icon-only\" color='light' name=\"download\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <ul class=\"custom-list\">\n\n    <li class=\"flex-container\">\n      <div class=\"item item-id\">Numéro de la commande: #{{ command?.id }}</div>\n      <div class=\"item item-price\">Prix: {{ command?.price }} $</div>\n      <div class=\"item item-contents\"> Contenu de la commande:<br><br>   {{ command?.contents.length > 120 ? (command?.contents | slice:0:120) + '...' : command?.contents }}\n      </div>\n      <div class=\"item item-table\">{{ command?.table }}</div>\n      <div class=\"item item-date_time\">{{ command?.date }} {{ command?.time }}</div>\n      <br><br><br><br>\n    </li>\n\n  </ul>\n\n\n</ion-content>\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=screens-detailscommand-detailscommand-module.js.map