(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./management/auth-guard.service */ "./src/app/management/auth-guard.service.ts");
/* harmony import */ var _management_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management/management.component */ "./src/app/management/management.component.ts");
/* harmony import */ var _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./management/management-login/management-login.component */ "./src/app/management/management-login/management-login.component.ts");
/* harmony import */ var _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./management/management-home/management-home.component */ "./src/app/management/management-home/management-home.component.ts");
/* harmony import */ var _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./management/management-register/management-register.component */ "./src/app/management/management-register/management-register.component.ts");
/* harmony import */ var _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./management/management-suppliers/management-suppliers.component */ "./src/app/management/management-suppliers/management-suppliers.component.ts");
/* harmony import */ var _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./management/management-distributors/management-distributors.component */ "./src/app/management/management-distributors/management-distributors.component.ts");
/* harmony import */ var _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./management/management-sales/management-sales.component */ "./src/app/management/management-sales/management-sales.component.ts");
/* harmony import */ var _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./management/management-products/management-products.component */ "./src/app/management/management-products/management-products.component.ts");
/* harmony import */ var _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./management/management-passwordchange/management-passwordchange.component */ "./src/app/management/management-passwordchange/management-passwordchange.component.ts");














const routes = [
    {
        path: 'management',
        component: _management_management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_4__["ManagementLoginComponent"] },
            { path: 'home', component: _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_5__["ManagementHomeComponent"], canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
            { path: 'register', component: _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_6__["ManagementRegisterComponent"], canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
            { path: 'suppliers', component: _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_7__["ManagementSuppliersComponent"], canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
            { path: 'distributors', component: _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_8__["ManagementDistributorsComponent"], canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
            { path: 'sales', component: _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_9__["ManagementSalesComponent"], canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
            { path: 'products', component: _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_10__["ManagementProductsComponent"], canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
            { path: 'passwordchange', component: _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_11__["ManagementPasswordchangeComponent"], canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'cutie-plushie';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@font-face {\r\n    font-family: poppins;\r\n    src: url('Poppins-Regular.ttf');\r\n  }\r\n\r\n@font-face {\r\n  font-family: poppins-bold;\r\n  src: url('Poppins-Bold.ttf');\r\n}\r\n\r\ndiv[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], input[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n    font-family: poppins;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiwrQkFBNkM7RUFDL0M7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTBDO0FBQzVDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XHJcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0Zik7XHJcbiAgfVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMtYm9sZDtcclxuICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvUG9wcGlucy1Cb2xkLnR0Zik7XHJcbn1cclxuXHJcbmRpdixoMSxoMixoMyxoNCxoNSxoNixpbnB1dCxsYWJlbCxwe1xyXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _management_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./management/management.component */ "./src/app/management/management.component.ts");
/* harmony import */ var _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./management/management-home/management-home.component */ "./src/app/management/management-home/management-home.component.ts");
/* harmony import */ var _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./management/management-register/management-register.component */ "./src/app/management/management-register/management-register.component.ts");
/* harmony import */ var _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./management/management-suppliers/management-suppliers.component */ "./src/app/management/management-suppliers/management-suppliers.component.ts");
/* harmony import */ var _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./management/management-distributors/management-distributors.component */ "./src/app/management/management-distributors/management-distributors.component.ts");
/* harmony import */ var _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./management/management-sales/management-sales.component */ "./src/app/management/management-sales/management-sales.component.ts");
/* harmony import */ var _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./management/management-products/management-products.component */ "./src/app/management/management-products/management-products.component.ts");
/* harmony import */ var _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./management/management-login/management-login.component */ "./src/app/management/management-login/management-login.component.ts");
/* harmony import */ var _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./management/management-passwordchange/management-passwordchange.component */ "./src/app/management/management-passwordchange/management-passwordchange.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _management_management_component__WEBPACK_IMPORTED_MODULE_6__["ManagementComponent"],
        _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_13__["ManagementLoginComponent"],
        _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_7__["ManagementHomeComponent"],
        _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_8__["ManagementRegisterComponent"],
        _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_9__["ManagementSuppliersComponent"],
        _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_10__["ManagementDistributorsComponent"],
        _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_11__["ManagementSalesComponent"],
        _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_12__["ManagementProductsComponent"],
        _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_14__["ManagementPasswordchangeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _management_management_component__WEBPACK_IMPORTED_MODULE_6__["ManagementComponent"],
                    _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_13__["ManagementLoginComponent"],
                    _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_7__["ManagementHomeComponent"],
                    _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_8__["ManagementRegisterComponent"],
                    _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_9__["ManagementSuppliersComponent"],
                    _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_10__["ManagementDistributorsComponent"],
                    _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_11__["ManagementSalesComponent"],
                    _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_12__["ManagementProductsComponent"],
                    _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_14__["ManagementPasswordchangeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/management/auth-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/management/auth-guard.service.ts ***!
  \**************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/management/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['management/login']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/management/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/management/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthService {
    constructor() {
    }
    isAuthenticated() {
        let token = localStorage.getItem('cutie-plushie-token');
        if (token != null && token != '') {
            return true;
        }
        return false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/management/management-distributors/management-distributors.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/management/management-distributors/management-distributors.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ManagementDistributorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementDistributorsComponent", function() { return ManagementDistributorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManagementDistributorsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ManagementDistributorsComponent.ɵfac = function ManagementDistributorsComponent_Factory(t) { return new (t || ManagementDistributorsComponent)(); };
ManagementDistributorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagementDistributorsComponent, selectors: [["app-management-distributors"]], decls: 2, vars: 0, template: function ManagementDistributorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-distributors works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LWRpc3RyaWJ1dG9ycy9tYW5hZ2VtZW50LWRpc3RyaWJ1dG9ycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementDistributorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-management-distributors',
                templateUrl: './management-distributors.component.html',
                styleUrls: ['./management-distributors.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/management/management-home/management-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/management/management-home/management-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManagementHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementHomeComponent", function() { return ManagementHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManagementHomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ManagementHomeComponent.ɵfac = function ManagementHomeComponent_Factory(t) { return new (t || ManagementHomeComponent)(); };
ManagementHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagementHomeComponent, selectors: [["app-management-home"]], decls: 2, vars: 0, template: function ManagementHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LWhvbWUvbWFuYWdlbWVudC1ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-management-home',
                templateUrl: './management-home.component.html',
                styleUrls: ['./management-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/management/management-login/management-login.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/management/management-login/management-login.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManagementLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementLoginComponent", function() { return ManagementLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ManagementLoginComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor ingrese una clave de usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementLoginComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Su clave de usuario debe tener 9 caracteres alfanum\u00E9ricos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementLoginComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Su clave de usuario debe tener 9 caracteres alfanum\u00E9ricos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementLoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementLoginComponent_div_10_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManagementLoginComponent_div_10_div_2_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManagementLoginComponent_div_10_div_3_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.submitted && ctx_r21.loginForm.controls.user.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.submitted && ctx_r21.loginForm.controls.user.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.submitted && ctx_r21.loginForm.controls.user.errors.minlength);
} }
function ManagementLoginComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor ingrese su contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementLoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementLoginComponent_div_15_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.submitted && ctx_r22.loginForm.controls.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ManagementLoginComponent {
    constructor(http, router, formBuilder) {
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        let token = localStorage.getItem('cutie-plushie-token');
        if (token != null) {
            this.router.navigate(['management/home']);
        }
        this.loginForm = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            // Stop here if form is invalid
            if (this.loginForm.invalid) {
                //alert("Por favor introduzca su usuario y contraseña para poder ingresar.");}
                return;
            }
            let res = yield this.validate(this.loginForm.controls.user.value, this.loginForm.controls.password.value);
            if (res.status == 200) {
                let body = res.body;
                let bodyJson = JSON.parse(JSON.stringify(body));
                let user = {
                    userKey: bodyJson.userKey,
                    userName: bodyJson.userName,
                    userLastName: bodyJson.userLastName,
                    userGroup: bodyJson.userGroup
                };
                let token = bodyJson.token;
                localStorage.setItem('cutie-plushie-token', token);
                localStorage.setItem('user-details', JSON.stringify(user));
                this.router.navigate(['management/home']);
            }
            else if (res.status == 401) {
                alert("Usuario y/o contraseña incorrectos.");
            }
        });
    }
    validate(key, password) {
        password = btoa(password);
        return this.http.post('/api/v1/management/login', { 'key': key, 'pwd': password }, { observe: 'response', responseType: 'json' }).toPromise().then(function (res) {
            return res;
        }).catch(function (err) {
            return err;
        });
    }
}
ManagementLoginComponent.ɵfac = function ManagementLoginComponent_Factory(t) { return new (t || ManagementLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
ManagementLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManagementLoginComponent, selectors: [["app-management-login"]], decls: 19, vars: 9, consts: [[1, "login-component"], [1, "form-container"], ["height", "120px", "alt", "Logo", "src", "assets/images/cutie_plushie_logo.png"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "user"], ["type", "text", "formControlName", "user", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn-login"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ManagementLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bienvenido a Cutie Plushie!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ManagementLoginComponent_Template_form_ngSubmit_5_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Clave de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManagementLoginComponent_div_10_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ManagementLoginComponent_div_15_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Iniciar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.loginForm.controls.user.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginForm.controls.user.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.loginForm.controls.password.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginForm.controls.password.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["button[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n} \r\n\r\n.btn-login[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  height:50px;\r\n  display:block;\r\n  position:relative;\r\n  z-index:1;\r\n  border-radius:25px;\r\n  overflow:hidden;\r\n  margin:0 auto;\r\n  display:-webkit-box;\r\n  display:flex;\r\n  flex-wrap:wrap;\r\n  -webkit-box-pack:center;\r\n          justify-content:center;\r\n  padding-top:13px;\r\n  font-family: poppins-bold;\r\n  font-size:15px;\r\n  font-style: bold;\r\n  line-height:1.2;\r\n  text-transform:uppercase;\r\n  -webkit-box-align:center;\r\n          align-items:center;\r\n  padding:0 20px;\r\n  background-color: #C4E6FF;\r\n} \r\n\r\n.form-container[_ngcontent-%COMP%]{\r\n  width:390px;\r\n  background:#fff;\r\n  border-radius:10px;\r\n  overflow:hidden;\r\n  padding:77px 55px 33px;\r\n  text-align: center;\r\n  box-shadow:0 5px 10px 0 rgba(0,0,0,.1);\r\n  margin-top: 5%;\r\n} \r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n  border-bottom:2px solid #adadad;\r\n  margin-bottom:10px;\r\n  font-size:20px;\r\n  color:#555;\r\n  line-height:1.2;\r\n  display:block;\r\n  width:100%;\r\n  height:45px;\r\n  background:0 0;\r\n  padding:0 5px\r\n} \r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n  margin-bottom:30px;\r\n} \r\n\r\n.invalid-feedback[_ngcontent-%COMP%]{\r\n  margin-bottom:10px;\r\n  color:#ff88ac;\r\n} \r\n\r\n.login-component[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 15px;\r\n  font-family: poppins;\r\n} \r\n\r\n.ng-invalid[_ngcontent-%COMP%]:not(form)  {\r\n  border-left: 5px solid #ff88ac; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtbG9naW4vbWFuYWdlbWVudC1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQVk7RUFBWixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsd0JBQWtCO1VBQWxCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDhCQUE4QixFQUFFLFFBQVE7QUFDMUMiLCJmaWxlIjoiYXBwL21hbmFnZW1lbnQvbWFuYWdlbWVudC1sb2dpbi9tYW5hZ2VtZW50LWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b246aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59IFxyXG5cclxuLmJ0bi1sb2dpbntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo1MHB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgei1pbmRleDoxO1xyXG4gIGJvcmRlci1yYWRpdXM6MjVweDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgbWFyZ2luOjAgYXV0bztcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDoxM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zLWJvbGQ7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgZm9udC1zdHlsZTogYm9sZDtcclxuICBsaW5lLWhlaWdodDoxLjI7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBwYWRkaW5nOjAgMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFNkZGO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgd2lkdGg6MzkwcHg7XHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgcGFkZGluZzo3N3B4IDU1cHggMzNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzowIDVweCAxMHB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2FkYWRhZDtcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbiAgY29sb3I6IzU1NTtcclxuICBsaW5lLWhlaWdodDoxLjI7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo0NXB4O1xyXG4gIGJhY2tncm91bmQ6MCAwO1xyXG4gIHBhZGRpbmc6MCA1cHhcclxufVxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3tcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgY29sb3I6I2ZmODhhYztcclxufVxyXG5cclxuLmxvZ2luLWNvbXBvbmVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZjg4YWM7IC8qIHJlZCAqL1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManagementLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-management-login',
                templateUrl: './management-login.component.html',
                styleUrls: ['./management-login.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/management/management-passwordchange/management-passwordchange.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/management/management-passwordchange/management-passwordchange.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ManagementPasswordchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementPasswordchangeComponent", function() { return ManagementPasswordchangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ManagementPasswordchangeComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor ingrese su contrase\u00F1a anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementPasswordchangeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementPasswordchangeComponent_div_9_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r44.submitted && ctx_r44.passwordChangeForm.controls.oldPassword.errors.required);
} }
function ManagementPasswordchangeComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor ingrese su nueva contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementPasswordchangeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementPasswordchangeComponent_div_14_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r45.submitted && ctx_r45.passwordChangeForm.controls.newPassword.errors.required);
} }
function ManagementPasswordchangeComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor confirme su nueva contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementPasswordchangeComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a no coincide con su nueva contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementPasswordchangeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementPasswordchangeComponent_div_19_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManagementPasswordchangeComponent_div_19_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.submitted && ctx_r46.passwordChangeForm.controls.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.submitted && ctx_r46.passwordChangeForm.controls.confirmPassword.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ManagementPasswordchangeComponent {
    constructor(http, router, formBuilder) {
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.passwordChangeForm = this.formBuilder.group({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^$")
            ])
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            let value = this.passwordChangeForm.controls.confirmPassword.value;
            this.passwordChangeForm.removeControl("confirmPassword");
            this.passwordChangeForm.addControl("confirmPassword", new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](value, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^" + this.passwordChangeForm.controls.newPassword.value + "$")
            ]));
            // Stop here if form is invalid
            if (this.passwordChangeForm.invalid) {
                return;
            }
            let res = yield this.changePassword(this.passwordChangeForm.controls.oldPassword.value, this.passwordChangeForm.controls.newPassword.value);
            if (res.status == 200) {
                let body = res.body;
                let bodyJson = JSON.parse(JSON.stringify(body));
                let token = bodyJson.token;
                localStorage.setItem('cutie-plushie-token', token);
                alert('Su contraseña se ha cambiado con éxito!');
                this.router.navigate(['management/home']);
            }
            else if (res.status == 401) {
                alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
                localStorage.removeItem('cutie-plushie-token');
                localStorage.removeItem('user-details');
                this.router.navigate(['management/login']);
            }
            else if (res.status == 403) {
                alert("Su contraseña anterior no coincide con los registros. Por favor intente de nuevo.");
            }
        });
    }
    changePassword(pwdOld, pwdNew) {
        let user = JSON.parse(localStorage.getItem('user-details')).userKey;
        let token = localStorage.getItem('cutie-plushie-token');
        pwdOld = btoa(pwdOld);
        pwdNew = btoa(pwdNew);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Authorization", "Bearer " + token);
        return this.http.put('/api/v1/management/users/' + user, { 'pwdOld': pwdOld, 'pwdNew': pwdNew }, { headers: headers, observe: 'response', responseType: 'json' }).toPromise().then(function (res) {
            return res;
        }).catch(function (err) {
            return err;
        });
    }
}
ManagementPasswordchangeComponent.ɵfac = function ManagementPasswordchangeComponent_Factory(t) { return new (t || ManagementPasswordchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
ManagementPasswordchangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManagementPasswordchangeComponent, selectors: [["app-management-passwordchange"]], decls: 23, vars: 13, consts: [[1, "passwordchange-component"], [1, "form-container"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "oldPassword"], ["type", "password", "formControlName", "oldPassword", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "newPassword"], ["type", "password", "formControlName", "newPassword", 1, "form-control", 3, "ngClass"], ["for", "confirmPassword"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "btn-passwordchange"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ManagementPasswordchangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Cambiar contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ManagementPasswordchangeComponent_Template_form_ngSubmit_4_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Contrase\u00F1a anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ManagementPasswordchangeComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Contrase\u00F1a nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ManagementPasswordchangeComponent_div_14_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Confirmar contrase\u00F1a nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ManagementPasswordchangeComponent_div_19_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Cambiar mi contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.passwordChangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.passwordChangeForm.controls.oldPassword.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.passwordChangeForm.controls.oldPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.passwordChangeForm.controls.newPassword.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.passwordChangeForm.controls.newPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.passwordChangeForm.controls.confirmPassword.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.passwordChangeForm.controls.confirmPassword.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    margin-bottom: 5%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    width: 250px;\r\n    margin: 20px;\r\n}\r\n\r\n.btn-passwordchange[_ngcontent-%COMP%]{\r\n    width:25%;\r\n    height:50px;\r\n    display:block;\r\n    position:relative;\r\n    z-index:1;\r\n    border-radius:25px;\r\n    overflow:hidden;\r\n    margin:0 15%;\r\n    display:-webkit-box;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n    padding-top:13px;\r\n    font-family: poppins-bold;\r\n    font-size:15px;\r\n    font-style: bold;\r\n    line-height:1.2;\r\n    text-transform:uppercase;\r\n    -webkit-box-align:center;\r\n            align-items:center;\r\n    background-color: #C4E6FF;\r\n  }\r\n\r\n.form-container[_ngcontent-%COMP%]{\r\n    width:70%;\r\n    background:#fff;\r\n    border-radius:10px;\r\n    overflow:hidden;\r\n    padding:20px 45px;\r\n    text-align: left;\r\n    margin-top: 2%;\r\n    margin-left: 20%;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n    border-bottom:2px solid #adadad;\r\n    margin-bottom:10px;\r\n    font-size:20px;\r\n    color:#555;\r\n    width:30%;\r\n    height:35px;\r\n    background:0 0;\r\n    padding: 5px;\r\n    align-self: flex-end;\r\n    align-content: flex-end;\r\n  }\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n    height: 80px;\r\n    padding-left: 5%;\r\n    margin: 25px;\r\n    vertical-align: middle;\r\n    display: -webkit-box;\r\n    display: flex; \r\n    -webkit-box-align: center; \r\n            align-items: center;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%]{\r\n    margin-left:10px;\r\n    color:#ff88ac;\r\n  }\r\n\r\n.ng-invalid[_ngcontent-%COMP%]:not(form)  {\r\n    border-left: 5px solid #ff88ac; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtcGFzc3dvcmRjaGFuZ2UvbWFuYWdlbWVudC1wYXNzd29yZGNoYW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBWTtJQUFaLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qix3QkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7QUFFRjtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBR0Y7SUFDSSw4QkFBOEIsRUFBRSxRQUFRO0FBQzVDIiwiZmlsZSI6ImFwcC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtcGFzc3dvcmRjaGFuZ2UvbWFuYWdlbWVudC1wYXNzd29yZGNoYW5nZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmJ0bi1wYXNzd29yZGNoYW5nZXtcclxuICAgIHdpZHRoOjI1JTtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyNXB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgbWFyZ2luOjAgMTUlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6MTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zLWJvbGQ7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDoxLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFNkZGO1xyXG4gIH1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHBhZGRpbmc6MjBweCA0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGNvbG9yOiM1NTU7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuICAgIGJhY2tncm91bmQ6MCAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3tcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICBjb2xvcjojZmY4OGFjO1xyXG4gIH1cclxuICBcclxuXHJcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmY4OGFjOyAvKiByZWQgKi9cclxufVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManagementPasswordchangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-management-passwordchange',
                templateUrl: './management-passwordchange.component.html',
                styleUrls: ['./management-passwordchange.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/management/management-products/management-products.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/management/management-products/management-products.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ManagementProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementProductsComponent", function() { return ManagementProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManagementProductsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ManagementProductsComponent.ɵfac = function ManagementProductsComponent_Factory(t) { return new (t || ManagementProductsComponent)(); };
ManagementProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagementProductsComponent, selectors: [["app-management-products"]], decls: 2, vars: 0, template: function ManagementProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LXByb2R1Y3RzL21hbmFnZW1lbnQtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-management-products',
                templateUrl: './management-products.component.html',
                styleUrls: ['./management-products.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/management/management-register/management-register.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/management/management-register/management-register.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ManagementRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementRegisterComponent", function() { return ManagementRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ManagementRegisterComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor ingrese la clave del usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementRegisterComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "La clave de usuario debe tener 9 caracteres alfanum\u00E9ricos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementRegisterComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "La clave de usuario debe tener 9 caracteres alfanum\u00E9ricos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementRegisterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementRegisterComponent_div_11_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManagementRegisterComponent_div_11_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManagementRegisterComponent_div_11_div_3_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.submitted && ctx_r27.registerForm.controls.user.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.submitted && ctx_r27.registerForm.controls.user.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.submitted && ctx_r27.registerForm.controls.user.errors.minlength);
} }
function ManagementRegisterComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor ingrese el nombre o nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementRegisterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementRegisterComponent_div_16_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.submitted && ctx_r28.registerForm.controls.name.errors.required);
} }
function ManagementRegisterComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor ingrese los apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementRegisterComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementRegisterComponent_div_21_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.submitted && ctx_r29.registerForm.controls.lastName.errors.required);
} }
function ManagementRegisterComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor ingrese la contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementRegisterComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementRegisterComponent_div_26_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.submitted && ctx_r30.registerForm.controls.password.errors.required);
} }
function ManagementRegisterComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor confirme la nueva contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementRegisterComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a no coincide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementRegisterComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementRegisterComponent_div_31_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManagementRegisterComponent_div_31_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.submitted && ctx_r31.registerForm.controls.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.submitted && ctx_r31.registerForm.controls.confirmPassword.errors.pattern);
} }
function ManagementRegisterComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r42 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", permission_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r32.permissionsDictionary[permission_r42]);
} }
function ManagementRegisterComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor seleccione una opci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagementRegisterComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementRegisterComponent_div_39_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.submitted && ctx_r33.registerForm.controls.userGroup.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ManagementRegisterComponent {
    constructor(http, router, formBuilder) {
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.permissionsDictionary = {
            "CR": "Relaciones con el cliente",
            "ADMIN": "Administrador"
        };
        this.permissions = [];
        let userGroup = JSON.parse(localStorage.getItem('user-details')).userGroup;
        if (userGroup != "ADMIN") {
            alert('Acceso denegado. Usted no cuenta con permisos suficientes para efectuar la operación solicitada.');
            this.router.navigate(['management/home']);
        }
        for (let permission in this.permissionsDictionary) {
            this.permissions.push(permission);
        }
        this.registerForm = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(9)
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^$")
            ]),
            userGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            let value = this.registerForm.controls.confirmPassword.value;
            this.registerForm.removeControl("confirmPassword");
            this.registerForm.addControl("confirmPassword", new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](value, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^" + this.registerForm.controls.password.value + "$")
            ]));
            // Stop here if form is invalid
            if (this.registerForm.invalid) {
                return;
            }
            let controls = this.registerForm.controls;
            let userId = controls.user.value;
            let userName = controls.name.value;
            let userLastName = controls.lastName.value;
            let userGroup = controls.userGroup.value;
            let pwd = controls.password.value;
            let res = yield this.createNewUser(userId, userName, userLastName, userGroup, pwd);
            if (res.status == 200) {
                alert('El usuario se ha creado con éxito!');
                this.router.navigate(['management/home']);
            }
            else if (res.status == 401) {
                alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
                localStorage.removeItem('cutie-plushie-token');
                localStorage.removeItem('user-details');
                this.router.navigate(['management/login']);
            }
            else if (res.status == 403) {
                alert("INTENTO DE INTRUSIÓN.");
            }
        });
    }
    createNewUser(userId, userName, userLastName, userGroup, password) {
        let token = localStorage.getItem('cutie-plushie-token');
        let pwd = btoa(password);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Authorization", "Bearer " + token);
        return this.http.post('/api/v1/management/users/' + userId, {
            'userName': userName,
            'userLastName': userLastName,
            'userGroup': userGroup,
            'pwd': pwd
        }, { headers: headers, observe: 'response', responseType: 'json' }).toPromise().then(function (res) {
            return res;
        }).catch(function (err) {
            return err;
        });
    }
}
ManagementRegisterComponent.ɵfac = function ManagementRegisterComponent_Factory(t) { return new (t || ManagementRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
ManagementRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManagementRegisterComponent, selectors: [["app-management-register"]], decls: 43, vars: 23, consts: [[1, "register-component"], [1, "form-container"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "user"], ["type", "text", "formControlName", "user", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "name"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "confirmPassword"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], ["for", "userGroup"], ["formControlName", "userGroup", 1, "form-control"], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "btn-register"], [1, "invalid-feedback"], [4, "ngIf"], [3, "ngValue"]], template: function ManagementRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Registrar nuevo usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Por favor \u00FAsese responsablemente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ManagementRegisterComponent_Template_form_ngSubmit_6_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Clave de usuario*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ManagementRegisterComponent_div_11_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Nombre(s)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ManagementRegisterComponent_div_16_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Apellidos*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ManagementRegisterComponent_div_21_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Contrase\u00F1a*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ManagementRegisterComponent_div_26_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Confirmar contrase\u00F1a nueva*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ManagementRegisterComponent_div_31_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Grupo de permisos*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Seleccione una opci\u00F3n...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ManagementRegisterComponent_option_38_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ManagementRegisterComponent_div_39_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Crear nuevo usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.registerForm.controls.user.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.registerForm.controls.user.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.registerForm.controls.name.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.registerForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.registerForm.controls.lastName.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.registerForm.controls.lastName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.registerForm.controls.password.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.registerForm.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.registerForm.controls.confirmPassword.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.registerForm.controls.confirmPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.registerForm.controls.userGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["h3[_ngcontent-%COMP%]{\r\n    margin-bottom: 2.5%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    width: 250px;\r\n    margin: 20px;\r\n}\r\n\r\n.btn-register[_ngcontent-%COMP%]{\r\n    width:25%;\r\n    height:50px;\r\n    display:block;\r\n    position:relative;\r\n    z-index:1;\r\n    border-radius:25px;\r\n    overflow:hidden;\r\n    margin:0 15%;\r\n    display:-webkit-box;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n    padding-top:13px;\r\n    font-family: poppins-bold;\r\n    font-size:15px;\r\n    font-style: bold;\r\n    line-height:1.2;\r\n    text-transform:uppercase;\r\n    -webkit-box-align:center;\r\n            align-items:center;\r\n    background-color: #C4E6FF;\r\n  }\r\n\r\n.form-container[_ngcontent-%COMP%]{\r\n    width:70%;\r\n    background:#fff;\r\n    border-radius:10px;\r\n    overflow:hidden;\r\n    padding:20px 45px;\r\n    text-align: left;\r\n    margin-left: 20%;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n    border-bottom:2px solid #adadad;\r\n    margin-bottom:15px;\r\n    font-size:20px;\r\n    color:#555;\r\n    width:30%;\r\n    height:35px;\r\n    background:0 0;\r\n    padding: 5px;\r\n    align-self: flex-end;\r\n    align-content: flex-end;\r\n  }\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n    height: 80px;\r\n    padding-left: 5%;\r\n    margin: 15px;\r\n    vertical-align: middle;\r\n    display: -webkit-box;\r\n    display: flex; \r\n    -webkit-box-align: center; \r\n            align-items: center;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%]{\r\n    margin-left:10px;\r\n    color:#ff88ac;\r\n  }\r\n\r\n.ng-invalid[_ngcontent-%COMP%]:not(form)  {\r\n    border-left: 5px solid #ff88ac; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtcmVnaXN0ZXIvbWFuYWdlbWVudC1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBWTtJQUFaLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qix3QkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7QUFFRjtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7QUFHRjtJQUNJLDhCQUE4QixFQUFFLFFBQVE7QUFDNUMiLCJmaWxlIjoiYXBwL21hbmFnZW1lbnQvbWFuYWdlbWVudC1yZWdpc3Rlci9tYW5hZ2VtZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNSU7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tcmVnaXN0ZXJ7XHJcbiAgICB3aWR0aDoyNSU7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjVweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIG1hcmdpbjowIDE1JTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOjEzcHg7XHJcbiAgICBmb250LWZhbWlseTogcG9wcGlucy1ib2xkO1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6MS4yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M0RTZGRjtcclxuICB9XHJcblxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBwYWRkaW5nOjIwcHggNDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2FkYWRhZDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgY29sb3I6IzU1NTtcclxuICAgIHdpZHRoOjMwJTtcclxuICAgIGhlaWdodDozNXB4O1xyXG4gICAgYmFja2dyb3VuZDowIDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNre1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIGNvbG9yOiNmZjg4YWM7XHJcbiAgfVxyXG4gIFxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZjg4YWM7IC8qIHJlZCAqL1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManagementRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-management-register',
                templateUrl: './management-register.component.html',
                styleUrls: ['./management-register.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/management/management-sales/management-sales.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/management/management-sales/management-sales.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManagementSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementSalesComponent", function() { return ManagementSalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManagementSalesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ManagementSalesComponent.ɵfac = function ManagementSalesComponent_Factory(t) { return new (t || ManagementSalesComponent)(); };
ManagementSalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagementSalesComponent, selectors: [["app-management-sales"]], decls: 2, vars: 0, template: function ManagementSalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-sales works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LXNhbGVzL21hbmFnZW1lbnQtc2FsZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementSalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-management-sales',
                templateUrl: './management-sales.component.html',
                styleUrls: ['./management-sales.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/management/management-suppliers/management-suppliers.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/management/management-suppliers/management-suppliers.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ManagementSuppliersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementSuppliersComponent", function() { return ManagementSuppliersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManagementSuppliersComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ManagementSuppliersComponent.ɵfac = function ManagementSuppliersComponent_Factory(t) { return new (t || ManagementSuppliersComponent)(); };
ManagementSuppliersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagementSuppliersComponent, selectors: [["app-management-suppliers"]], decls: 2, vars: 0, template: function ManagementSuppliersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-suppliers works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LXN1cHBsaWVycy9tYW5hZ2VtZW50LXN1cHBsaWVycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementSuppliersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-management-suppliers',
                templateUrl: './management-suppliers.component.html',
                styleUrls: ['./management-suppliers.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/management/management.component.ts":
/*!****************************************************!*\
  !*** ./src/app/management/management.component.ts ***!
  \****************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ManagementComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.goTo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ventas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagementComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_3_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.goTo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Productos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagementComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_4_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goTo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Proveedores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagementComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_5_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.goTo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Distribuidores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagementComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_6_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.goTo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Registro de usuario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagementComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_7_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.goTo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cambiar contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagementComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_8_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cerrar sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManagementComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goHome() {
        this.router.navigate(['management']);
    }
    goTo(event) {
        let target = event.target.className;
        target = target.replace('toolbar-options ', '');
        this.router.navigate(['management/' + target]);
    }
    logout() {
        localStorage.removeItem('cutie-plushie-token');
        localStorage.removeItem('user-details');
        this.router.navigate(['management/login']);
    }
    userIsLoggedIn() {
        return localStorage.getItem('cutie-plushie-token') != null;
    }
    userIsAdmin() {
        let details = localStorage.getItem('user-details');
        if (details != null) {
            let user = JSON.parse(details);
            if (user.userGroup == "ADMIN") {
                return true;
            }
            return false;
        }
        return false;
    }
}
ManagementComponent.ɵfac = function ManagementComponent_Factory(t) { return new (t || ManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagementComponent, selectors: [["app-management"]], decls: 10, vars: 7, consts: [["role", "banner", 1, "toolbar"], ["height", "60px", "alt", "Logo", "src", "assets/images/cutie_plushie_logo_header.png", 3, "click"], ["class", "toolbar-options sales", 3, "click", 4, "ngIf"], ["class", "toolbar-options products", 3, "click", 4, "ngIf"], ["class", "toolbar-options suppliers", 3, "click", 4, "ngIf"], ["class", "toolbar-options distributors", 3, "click", 4, "ngIf"], ["class", "toolbar-options register", 3, "click", 4, "ngIf"], ["class", "toolbar-options passwordchange", 3, "click", 4, "ngIf"], ["class", "toolbar-options logout", 3, "click", 4, "ngIf"], [1, "toolbar-options", "sales", 3, "click"], [1, "sales"], [1, "toolbar-options", "products", 3, "click"], [1, "products"], [1, "toolbar-options", "suppliers", 3, "click"], [1, "suppliers"], [1, "toolbar-options", "distributors", 3, "click"], [1, "distributors"], [1, "toolbar-options", "register", 3, "click"], [1, "register"], [1, "toolbar-options", "passwordchange", 3, "click"], [1, "passwordchange"], [1, "toolbar-options", "logout", 3, "click"], [1, "logout"]], template: function ManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_Template_img_click_1_listener($event) { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagementComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagementComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManagementComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManagementComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManagementComponent_div_6_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManagementComponent_div_7_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManagementComponent_div_8_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn() && ctx.userIsAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn() && ctx.userIsAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn() && ctx.userIsAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".toolbar[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    margin: -8px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background-color: white;\r\n    color: rgb(0, 0, 0);\r\n    font-weight: 600;\r\n    font-family: poppins;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n    margin-top: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n.toolbar-options[_ngcontent-%COMP%]{\r\n    margin: 1%;\r\n    margin-top: 2%;\r\n    background-color: inherit;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    width: 160px;\r\n    height: 80px;\r\n    text-align: center;\r\n    font-size: large;    \r\n    display: -webkit-box;    \r\n    display: flex; \r\n    -webkit-box-align: center; \r\n            align-items: center;\r\n}\r\n\r\n.toolbar-options[_ngcontent-%COMP%]:hover{\r\n    background-color: #ddd;\r\n}\r\n\r\n.toolbar-options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    margin: auto; \r\n    vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VtZW50L21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogLThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b29sYmFyLW9wdGlvbnN7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9vbGJhci1vcHRpb25zOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLnRvb2xiYXItb3B0aW9ucyBkaXZ7XHJcbiAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-management',
                templateUrl: './management.component.html',
                styleUrls: ['./management.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\UVM\8vo Semestre\PlushieWorld\workspace\cutie-plushie\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map