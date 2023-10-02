(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-admin-listing-admin-listing-admin-module"],{

/***/ "1gqn":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "2ck9":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/listing-admin/listing-admin.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ListingAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingAdminPageModule", function() { return ListingAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _listing_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listing-admin-routing.module */ "BR1/");
/* harmony import */ var _listing_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing-admin.page */ "kkjX");
/* harmony import */ var src_app_client1_admin_components_admin_category_item_category_item_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/client1/admin/components-admin/category-item/category-item.module */ "O5Q8");
/* harmony import */ var src_app_client1_admin_components_admin_food_card_food_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/client1/admin/components-admin/food-card/food-card.module */ "SaBt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










let ListingAdminPageModule = class ListingAdminPageModule {
};
ListingAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listing_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListingPageRoutingModule"],
            src_app_client1_admin_components_admin_category_item_category_item_module__WEBPACK_IMPORTED_MODULE_7__["CategoryItemModule"],
            src_app_client1_admin_components_admin_food_card_food_card_module__WEBPACK_IMPORTED_MODULE_8__["FoodCardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
        ],
        declarations: [_listing_admin_page__WEBPACK_IMPORTED_MODULE_6__["ListingAdminPage"]],
    })
], ListingAdminPageModule);



/***/ }),

/***/ "BR1/":
/*!*******************************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/listing-admin/listing-admin-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageRoutingModule", function() { return ListingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _listing_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing-admin.page */ "kkjX");




const routes = [
    {
        path: '',
        component: _listing_admin_page__WEBPACK_IMPORTED_MODULE_3__["ListingAdminPage"]
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

/***/ "I06U":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/food-card/food-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FoodCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCardComponent", function() { return FoodCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_food_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./food-card.component.html */ "xdQh");
/* harmony import */ var _food_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-card.component.scss */ "fIy8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_food_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/food-admin.service */ "KJOm");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_sub_food_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/sub-food-admin.service */ "WGBS");








let FoodCardComponent = class FoodCardComponent {
    constructor(foodService, subFoodService, alertCtrl, router) {
        this.foodService = foodService;
        this.subFoodService = subFoodService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.foods = [];
    }
    ngOnInit() {
        //this.getMaxAndMin(this.item.id);
    }
    /*getMaxAndMin(foodValue: number) {
      this.subFoodService.getMaxPrice(foodValue).subscribe(data => {
        this.maxPrice = data;
      });
  
      this.subFoodService.getMinPrice(foodValue).subscribe(data => {
        this.minPrice = data;
      });
    }*/
    addSubItem(id) {
        //this.router.navigate(['/client1/admin/sub-detail-admin', id]);
        //this.router.navigate(['/client1/admin/sub-detail-admin', id]);
        this.router.navigate(['/admin/add-sub-food', id]);
    }
    editItem(id) {
        //this.router.navigate(['/client1/admin/detail-admin', id]);
        this.router.navigate(['/admin/edit', id]);
    }
    deleteItem() {
        console.log('item deleted');
    }
    removeFood(idFood) {
        this.foodService.delete(idFood)
            .subscribe(response => {
            console.log(response);
            console.log('Element deleted');
        }, error => {
            console.log(error);
            console.log('Element not deleted');
        });
    }
    removeFromListing(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Remove',
                message: 'Are you sure you want to remove this item ?',
                buttons: [
                    {
                        text: 'No',
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.removeFood(id);
                            this.supprimerDoublons(id);
                            window.location.reload();
                        }
                    },
                ],
            });
            alert.present();
        });
    }
    goToSubList(id) {
        console.log('clicked on', this.item.title, this.item.id);
        //this.router.navigate(['/client1/admin/list-sub-detail', id]);
        //this.router.navigate(['/client1/admin/detail-admin', id]);
        this.router.navigate(['/admin/list-sub-food', id]);
    }
    supprimerDoublons(foodValue) {
        this.subFoodService.deleteFoodsByFoodValue(foodValue).subscribe(() => {
            console.log('Suppression des de sous éléments effectuée avec succès !');
        }, (error) => {
            console.error('Erreur lors de la suppression des doublons :', error);
        });
    }
};
FoodCardComponent.ctorParameters = () => [
    { type: _services_food_admin_service__WEBPACK_IMPORTED_MODULE_4__["FoodAdminService"] },
    { type: _services_sub_food_admin_service__WEBPACK_IMPORTED_MODULE_7__["SubFoodAdminService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
FoodCardComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
FoodCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-food-card',
        template: _raw_loader_food_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_food_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FoodCardComponent);



/***/ }),

/***/ "KKCa":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "MCLT":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "1gqn");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "KKCa");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "Nme6":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/screens-admin/listing-admin/listing-admin.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <div class=\"ion-page\" id=\"main-content\">\n    <ion-content class=\"ion-padding\">\n      <!-- HEADER -->\n      <div class=\"header\">\n        <h1>{{ 'MENU' | translate }}</h1>\n        <ion-item class=\"langueOption\">\n          <!--ion-label>Choisir votre langue</ion-label-->\n          <ion-select value=\"en\" (ionChange)=\"onLanguageChange($event)\">\n            <ion-select-option value=\"fr\">Fr</ion-select-option>\n            <ion-select-option value=\"en\">En</ion-select-option>\n            <ion-select-option value=\"es\">Es</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <ion-searchbar [(ngModel)]=\"title\" (ionChange)=\"searchTitle()\"></ion-searchbar>\n\n      <!-- CATEGORY -->\n      <div class=\"scrolling-wrapper\">\n        <div class=\"card\">\n          <ion-img src=\"assets\\images\\icons\\add.png\" (click)=\"addCategory()\"></ion-img>\n          <p class=\"categorie_name\">{{ 'ADD' | translate }}</p>\n        </div>\n\n        <div class=\"card\">\n          <ion-img src=\"assets\\images\\icons\\all.png\" (click)=\"searchAllByCategory()\"></ion-img>\n          <p class=\"categorie_name\">{{ 'ALL' | translate }}</p>\n        </div>\n        <div class=\"card\" *ngFor=\"let categorie of categories\">\n\n          <ion-img [src]=\"categorie.image\" (click)=\"searchByCategory(categorie.title)\"\n                   (dblclick)=\"deleteEditCategory(categorie.id, categorie.title)\"></ion-img>\n          <p>{{categorie.title}}</p>\n        </div>\n      </div>\n      <!-- PRODUCTS -->\n      <div class=\"flex-container\">\n        <div class=\"flex-item-category\">{{ 'LIST_HEADER' | translate }}</div>\n        <div class=\"flex-item-add\">\n          <ion-buttons routerLink=\"/admin/add\">\n            <ion-button>\n              <ion-icon class=\"animated-arrow\" name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </div>\n\n      </div>\n      <div class=\"food-list\">\n        <app-food-card *ngFor=\"let food of foods\" [item]=\"food\"></app-food-card>\n      </div>\n      <div *ngIf=\"!foods || foods.length === 0\">\n        Aucun aliment trouvé.\n      </div>\n    </ion-content>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "O5Q8":
/*!**************************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/category-item/category-item.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CategoryItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemModule", function() { return CategoryItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _category_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-item.component */ "v318");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CategoryItemModule = class CategoryItemModule {
};
CategoryItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_category_item_component__WEBPACK_IMPORTED_MODULE_3__["CategoryItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_category_item_component__WEBPACK_IMPORTED_MODULE_3__["CategoryItemComponent"]],
    })
], CategoryItemModule);



/***/ }),

/***/ "SaBt":
/*!******************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/food-card/food-card.module.ts ***!
  \******************************************************************************/
/*! exports provided: FoodCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCardModule", function() { return FoodCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _food_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-card.component */ "I06U");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






let FoodCardModule = class FoodCardModule {
};
FoodCardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_food_card_component__WEBPACK_IMPORTED_MODULE_3__["FoodCardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        exports: [_food_card_component__WEBPACK_IMPORTED_MODULE_3__["FoodCardComponent"]],
    })
], FoodCardModule);



/***/ }),

/***/ "agfd":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/listing-admin/listing-admin.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-content {\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\nion-content .header h1 {\n  font-size: 3rem;\n  font-weight: 600;\n  color: #515151;\n  margin: 0;\n}\nion-content .header .avatar {\n  width: 55px;\n  height: 55px;\n  background-color: #6b45bc;\n  background-color: #f2f2f2;\n  border-radius: 50%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  overflow: hidden;\n}\nion-content .header .avatar ion-img {\n  width: 90%;\n  height: 90%;\n}\nion-content .categories {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1rem;\n}\nion-content .list-header {\n  font-weight: 700;\n  color: #515151;\n  font-size: 1.8rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  display: flex;\n}\nion-content .food-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n}\nion-slides {\n  height: 100px;\n  --bullet-background: rgb(var(--ion-color-primary-rgb), 0.9);\n  --bullet-background-active: var(--ion-color-primary);\n  --scroll-bar-background: var(--ion-color-light);\n}\n.image-card-categ {\n  width: 20%;\n  height: 20%;\n}\nion-searchbar {\n  --box-shadow: none;\n  --background: #f3f3f3;\n  --border-radius: 1.2rem;\n  --placeholder-font-weight: 600;\n  --placeholder-opacity: 0.2;\n  padding: 0;\n  margin-bottom: 0rem;\n}\n.scrolling-wrapper {\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.scrolling-wrapper .card {\n  display: inline-block;\n  padding: 0.99rem;\n  border-radius: 1.5rem;\n  margin-bottom: 0rem;\n  width: 30%;\n  height: 150px;\n  text-align: center;\n  font-weight: bold;\n}\n.scrolling-wrapper .card ion-img {\n  width: 90px;\n  height: 90px;\n}\n.scrolling-wrapper .card:active {\n  background-color: #9ec4e8;\n  /* Nouvelle couleur de fond lorsqu'il est cliqué */\n}\n.search {\n  display: flex;\n  justify-content: space-between;\n}\n.search_icon {\n  max-height: 60px;\n  max-width: 60px;\n}\n.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n.flex-item-category {\n  padding-right: 45%;\n  /* Espace entre les textes (ajustez selon vos besoins) */\n  font-weight: 700;\n  color: #515151;\n  font-size: 1.8rem;\n  margin-bottom: 1rem;\n  margin-top: 0.2rem;\n}\n.flex-item-add {\n  margin-right: 90px;\n  /* Espace entre les textes (ajustez selon vos besoins) */\n}\n.custom-icon {\n  font-size: 24px;\n  /* Custom size: 24 pixels */\n}\n.animated-arrow {\n  animation: colorChange 3s infinite;\n  /* Appliquer l'animation 'colorChange' avec une durée de 3 secondes en boucle */\n  font-size: 3rem;\n  /* Taille personnalisée pour l'icône */\n}\n@keyframes colorChange {\n  0% {\n    color: red;\n    /* Couleur au début de l'animation */\n  }\n  25% {\n    color: blue;\n    /* Couleur à 25% de l'animation */\n  }\n  50% {\n    color: green;\n    /* Couleur à 50% de l'animation */\n  }\n  75% {\n    color: orange;\n    /* Couleur à 75% de l'animation */\n  }\n  100% {\n    color: red;\n    /* Couleur à la fin de l'animation */\n  }\n}\n.versionPc {\n  margin: auto;\n  width: 500px;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3RpbmctYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBRU47QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNOO0FBQ007RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUNSO0FBSUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUpKO0FBVUE7RUFDRSxhQUFBO0VBRUEsMkRBQUE7RUFDQSxvREFBQTtFQUNBLCtDQUFBO0FBUkY7QUFXQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBUkY7QUFXQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFSRjtBQVdBO0VBQ0UsYUFBQTtFQUlBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVhGO0FBYUU7RUFDRSxxQkFBQTtFQUVBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVpKO0FBY0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVpOO0FBZ0JFO0VBQ0UseUJBQUE7RUFBMkIsa0RBQUE7QUFiL0I7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFkRjtBQWlCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQWRGO0FBbUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBaEJGO0FBbUJBO0VBQ0Usa0JBQUE7RUFBb0Isd0RBQUE7RUFDcEIsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBZkY7QUFrQkE7RUFDRSxrQkFBQTtFQUFvQix3REFBQTtBQWR0QjtBQWtCQTtFQUNFLGVBQUE7RUFBaUIsMkJBQUE7QUFkbkI7QUFpQkE7RUFDRSxrQ0FBQTtFQUFvQywrRUFBQTtFQUNwQyxlQUFBO0VBQWlCLHNDQUFBO0FBWm5CO0FBZUE7RUFDRTtJQUNFLFVBQUE7SUFBWSxvQ0FBQTtFQVhkO0VBYUE7SUFDRSxXQUFBO0lBQWEsaUNBQUE7RUFWZjtFQVlBO0lBQ0UsWUFBQTtJQUFjLGlDQUFBO0VBVGhCO0VBV0E7SUFDRSxhQUFBO0lBQWUsaUNBQUE7RUFSakI7RUFVQTtJQUNFLFVBQUE7SUFBWSxvQ0FBQTtFQVBkO0FBQ0Y7QUFXQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVRGIiwiZmlsZSI6Imxpc3RpbmctYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDFyZW07XG59XG5pb24tY29udGVudCAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgLmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1MTUxNTE7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjQ1YmM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1jb250ZW50IC5oZWFkZXIgLmF2YXRhciBpb24taW1nIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtZ2FwOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgLmxpc3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM1MTUxNTE7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW9uLWNvbnRlbnQgLmZvb2QtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDFyZW07XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMHB4O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiByZ2IodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC45KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5pbWFnZS1jYXJkLWNhdGVnIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogI2YzZjNmMztcbiAgLS1ib3JkZXItcmFkaXVzOiAxLjJyZW07XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG59XG5cbi5zY3JvbGxpbmctd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNjcm9sbGluZy13cmFwcGVyIC5jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjk5cmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2Nyb2xsaW5nLXdyYXBwZXIgLmNhcmQgaW9uLWltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uc2Nyb2xsaW5nLXdyYXBwZXIgLmNhcmQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYzRlODtcbiAgLyogTm91dmVsbGUgY291bGV1ciBkZSBmb25kIGxvcnNxdSdpbCBlc3QgY2xpcXXDqSAqL1xufVxuXG4uc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2VhcmNoX2ljb24ge1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICBtYXgtd2lkdGg6IDYwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmZsZXgtaXRlbS1jYXRlZ29yeSB7XG4gIHBhZGRpbmctcmlnaHQ6IDQ1JTtcbiAgLyogRXNwYWNlIGVudHJlIGxlcyB0ZXh0ZXMgKGFqdXN0ZXogc2Vsb24gdm9zIGJlc29pbnMpICovXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNTE1MTUxO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xufVxuXG4uZmxleC1pdGVtLWFkZCB7XG4gIG1hcmdpbi1yaWdodDogOTBweDtcbiAgLyogRXNwYWNlIGVudHJlIGxlcyB0ZXh0ZXMgKGFqdXN0ZXogc2Vsb24gdm9zIGJlc29pbnMpICovXG59XG5cbi5jdXN0b20taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgLyogQ3VzdG9tIHNpemU6IDI0IHBpeGVscyAqL1xufVxuXG4uYW5pbWF0ZWQtYXJyb3cge1xuICBhbmltYXRpb246IGNvbG9yQ2hhbmdlIDNzIGluZmluaXRlO1xuICAvKiBBcHBsaXF1ZXIgbCdhbmltYXRpb24gJ2NvbG9yQ2hhbmdlJyBhdmVjIHVuZSBkdXLDqWUgZGUgMyBzZWNvbmRlcyBlbiBib3VjbGUgKi9cbiAgZm9udC1zaXplOiAzcmVtO1xuICAvKiBUYWlsbGUgcGVyc29ubmFsaXPDqWUgcG91ciBsJ2ljw7RuZSAqL1xufVxuXG5Aa2V5ZnJhbWVzIGNvbG9yQ2hhbmdlIHtcbiAgMCUge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgLyogQ291bGV1ciBhdSBkw6lidXQgZGUgbCdhbmltYXRpb24gKi9cbiAgfVxuICAyNSUge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIC8qIENvdWxldXIgw6AgMjUlIGRlIGwnYW5pbWF0aW9uICovXG4gIH1cbiAgNTAlIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgLyogQ291bGV1ciDDoCA1MCUgZGUgbCdhbmltYXRpb24gKi9cbiAgfVxuICA3NSUge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgLyogQ291bGV1ciDDoCA3NSUgZGUgbCdhbmltYXRpb24gKi9cbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIC8qIENvdWxldXIgw6AgbGEgZmluIGRlIGwnYW5pbWF0aW9uICovXG4gIH1cbn1cbi52ZXJzaW9uUGMge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "fIy8":
/*!***********************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/food-card/food-card.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  padding: 1.6rem 1rem;\n  background: #f3f3f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 2.5rem;\n  margin-bottom: 1.5rem;\n  width: 100%;\n  height: 90%;\n}\n.card .card-content {\n  text-align: center;\n}\n.card .card-content .title {\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: 0.2rem;\n  color: #1d1d1d;\n}\n.card .card-content .subtitle {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #ffb800;\n  margin-top: 0;\n}\n.card .card-content .subtitle sup {\n  font-size: 1rem;\n  margin-right: 2px;\n  color: #ffb800;\n}\n.card .card-content ion-buttons {\n  position: absolute;\n  bottom: -1rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.card .card-content ion-buttons ion-button {\n  --background: #6b45bc;\n  font-weight: 700;\n  color: #fff;\n  width: 45px;\n  height: 45px;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZvb2QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0FBREo7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFETjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBRk47QUFJTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGUjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBSk47QUFNTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpSIiwiZmlsZSI6ImZvb2QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgLy93aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMS42cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuXG4gIC5jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gICAgICBjb2xvcjogIzFkMWQxZDtcbiAgICB9XG5cbiAgICAuc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNmZmI4MDA7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgICBzdXAge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICBjb2xvcjogI2ZmYjgwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tYnV0dG9ucyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0xcmVtO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "kkjX":
/*!*********************************************************************************!*\
  !*** ./src/app/client1/admin/screens-admin/listing-admin/listing-admin.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ListingAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingAdminPage", function() { return ListingAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listing_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listing-admin.page.html */ "Nme6");
/* harmony import */ var _listing_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing-admin.page.scss */ "agfd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_client1_services_food_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/client1/services/food-admin.service */ "KJOm");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_category_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/category-admin.service */ "5+VV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);










let ListingAdminPage = class ListingAdminPage {
    constructor(foodService, categoryService, router, alertCtrl, translate, platform) {
        this.foodService = foodService;
        this.categoryService = categoryService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.platform = platform;
        this.categories = [];
        this.foods = [];
        this.title = '';
        this.selectedOption = '';
        translate.setDefaultLang('en');
        this.isMobile = this.platform.is('mobile');
    }
    ngOnInit() {
        this.getAllCategories();
        this.getAllFoodsUser();
    }
    getAllFoodsUser() {
        this.foodService.getAllFoodsUser()
            .subscribe(data => {
            this.foods = data;
            console.log('FoodUser founded', data);
        }, error => {
            console.log(error);
        });
    }
    getAllCategories() {
        this.categoryService.getAll()
            .subscribe(data => {
            this.categories = data;
            console.log('Category founded: ', data);
        }, error => {
            console.log(error);
        });
    }
    deleteEditCategory(id, category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Delete or Edit',
                // eslint-disable-next-line max-len
                message: `Please choose whether you want to <strong>delete</strong> or <strong>edit</strong> the category: <strong> ${category}</strong>`,
                buttons: [
                    {
                        text: 'Delete',
                        handler: () => this.categoryService.delete(id)
                            .subscribe(response => {
                            console.log(response);
                            window.location.reload();
                        }, error => {
                            console.log(error);
                        }),
                    },
                    {
                        text: 'Edit',
                        handler: () => Object(util__WEBPACK_IMPORTED_MODULE_9__["log"])('this item should be edited'),
                    },
                ],
            });
            alert.present();
        });
    }
    removeFromListing(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Remove',
                message: 'Are you sure you want to remove this one ?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => this.foodService.delete(item.id),
                    },
                    {
                        text: 'No',
                    },
                ],
            });
            alert.present();
        });
    }
    searchTitle() {
        this.foodService.findByTitle(this.title)
            .subscribe(data => {
            this.foods = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    addCategory() {
        this.router.navigate(['/admin/add-category']);
    }
    searchAllByCategory() {
        this.getAllFoodsUser();
    }
    searchByCategory(title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.foodService.findByTitle(title)
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
    doubleClickHandler(id) {
        console.log('Double-clic détecté !');
        // @ts-ignore
        window.alert('voulez vous supprimer ' + title);
        window.location.reload();
        // Votre code à exécuter lors du double-clic ici...
        this.categoryService.delete(id)
            .subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
};
ListingAdminPage.ctorParameters = () => [
    { type: src_app_client1_services_food_admin_service__WEBPACK_IMPORTED_MODULE_5__["FoodAdminService"] },
    { type: _services_category_admin_service__WEBPACK_IMPORTED_MODULE_7__["CategoryAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
ListingAdminPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListingAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listing',
        template: _raw_loader_listing_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listing_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListingAdminPage);



/***/ }),

/***/ "pxct":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/components-admin/category-item/category-item.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div class=\"wrapper\" [ngClass]=\"item.published ? 'active' : ''\">\n  <div class=\"image-card\">\n    <ion-img [src]=\"item.image\" (click)=\"addCategory()\"></ion-img>\n  </div>\n\n  <p class=\"ion-no-margin\">{{item.title}}</p>\n</div-->\n");

/***/ }),

/***/ "v318":
/*!*****************************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/category-item/category-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CategoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemComponent", function() { return CategoryItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category-item.component.html */ "pxct");
/* harmony import */ var _category_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-item.component.scss */ "v3Np");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_category_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category-admin.service */ "5+VV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CategoryItemComponent = class CategoryItemComponent {
    //gategory: Category;
    constructor(router, categoryService) {
        this.router = router;
        this.categoryService = categoryService;
        this.titleCategory = '';
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit() { }
    showCategory() {
        console.log(this.item.title);
    }
    addCategory() {
        this.titleCategory = this.item.title;
        console.log(this.titleCategory);
        if (this.item.title === 'add') {
            this.router.navigate(['/client1/admin/add-category']);
        }
        else {
            console.log(this.item.title);
        }
    }
};
CategoryItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_category_admin_service__WEBPACK_IMPORTED_MODULE_4__["CategoryAdminService"] }
];
CategoryItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
};
CategoryItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-category-item',
        template: _raw_loader_category_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryItemComponent);



/***/ }),

/***/ "v3Np":
/*!*******************************************************************************************!*\
  !*** ./src/app/client1/admin/components-admin/category-item/category-item.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.wrapper .image-card {\n  background-color: #f3f3f3;\n  padding: 0.8rem;\n  border-radius: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.wrapper .image-card ion-img {\n  opacity: 0.8;\n}\n.wrapper p {\n  color: #c7c7c7;\n}\n.wrapper.active .image-card {\n  background-color: #6b45bc;\n}\n.wrapper.active p {\n  color: #1d1d1d;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhdGVnb3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBR0U7RUFDRSxjQUFBO0FBREo7QUFNRTtFQUNFLHlCQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUpKIiwiZmlsZSI6ImNhdGVnb3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuaW1hZ2UtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICAgIGlvbi1pbWcge1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjYzdjN2M3O1xuICB9XG59XG5cbi53cmFwcGVyLmFjdGl2ZSB7XG4gIC5pbWFnZS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI0NWJjO1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICMxZDFkMWQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "xdQh":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client1/admin/components-admin/food-card/food-card.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" (click)=\"clicked.emit()\">\n\n  <ion-img class=\"img\" [src]=\"item.image\" (click)=\"goToSubList(item.id)\"></ion-img>\n\n  <div class=\"card-content\">\n    <h3 class=\"title\">{{item.title}}</h3>\n\n    <h2 class=\"subtitle\">{{minPrice}}<sup>€</sup> - {{maxPrice}}<sup>€</sup> </h2>\n\n    <!--h2 class=\"subtitle\">{{item.price|number:'1.2'}} <sup>€</sup></h2>\n    <h2 class=\"subtitle\">{{maxPrice|number:'1.2'}} <sup>€</sup></h2>\n    <h2 class=\"subtitle\">Min {{ minPrice }}</h2-->\n    <ion-buttons slot=\"start\">\n      <!--ion-button  (click)=\"addSubItem(item.id)\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button-->\n\n      <ion-button (click)=\"removeFromListing(item.id)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n\n      <ion-button (click)=\"editItem(item.id)\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n\n\n    </ion-buttons>\n\n\n  </div>\n</div>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=screens-admin-listing-admin-listing-admin-module.js.map