(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Category.ts":
/*!*****************************!*\
  !*** ./src/app/Category.ts ***!
  \*****************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(id, name) {
        this.id = id;
        this.name = name;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/Member.ts":
/*!***************************!*\
  !*** ./src/app/Member.ts ***!
  \***************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
var Member = /** @class */ (function () {
    function Member(id, username, email, password, address, phone, firstName, lastName) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.address = address;
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Member;
}());



/***/ }),

/***/ "./src/app/Product.ts":
/*!****************************!*\
  !*** ./src/app/Product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, title, category, subCategory, status, seller, buyer, price, postDate, description, urlImage) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.subCategory = subCategory;
        this.status = status;
        this.seller = seller;
        this.buyer = buyer;
        this.price = price;
        this.postDate = postDate;
        this.description = description;
        this.urlImage = urlImage;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/Status.ts":
/*!***************************!*\
  !*** ./src/app/Status.ts ***!
  \***************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status = /** @class */ (function () {
    function Status(id, status) {
        this.id = id;
        this.status = status;
    }
    return Status;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: grid;\r\n  grid-template-columns: 50% auto;\r\n}\r\n.col {\r\n  padding: .4em 1.3em;\r\n}\r\n.color-dark {\r\n  background: #2885C4;\r\n}\r\n.color-light {\r\n  background: #57B3F1;\r\n}\r\ninput.txt {\r\n  border: 0;\r\n  padding: 1em;\r\n  width: 80%;\r\n  margin-bottom: 2em;\r\n}\r\ninput.btn {\r\n  border: 0;\r\n  display:block;\r\n  padding:1em 3em;\r\n  background:#A5F883;\r\n  color:#003A61;\r\n  margin-bottom:1em;\r\n  cursor:pointer;\r\n}\r\n.life-container {\r\n  background:#3FA0E1;\r\n  padding:.5em;\r\n  font-weight:bold;\r\n  cursor:pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7Q0FDakM7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIGF1dG87XHJcbn1cclxuLmNvbCB7XHJcbiAgcGFkZGluZzogLjRlbSAxLjNlbTtcclxufVxyXG4uY29sb3ItZGFyayB7XHJcbiAgYmFja2dyb3VuZDogIzI4ODVDNDtcclxufVxyXG4uY29sb3ItbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICM1N0IzRjE7XHJcbn1cclxuXHJcbmlucHV0LnR4dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5pbnB1dC5idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBhZGRpbmc6MWVtIDNlbTtcclxuICBiYWNrZ3JvdW5kOiNBNUY4ODM7XHJcbiAgY29sb3I6IzAwM0E2MTtcclxuICBtYXJnaW4tYm90dG9tOjFlbTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4ubGlmZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IzNGQTBFMTtcclxuICBwYWRkaW5nOi41ZW07XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container color-dark\">\r\n  <h2> About us </h2>\r\n  <br>\r\n</div>\r\n\r\n\r\n<div class=\"container color-light\">\r\n  <div class=\"col\">\r\n\r\n    <!-- stuff -->\r\n\r\n    <nav class=\"product-filter\">\r\n\r\n      <div class=\"sort\">\r\n        <div class=\"collection-sort\">\r\n          <label>Ebay University Inc. is an American multinational e-commerce corporation based in Tampa, Florida that facilitates consumer-to-consumer and business-to-consumer sales through its website. Ebay was founded by Joshua, Hernan, Mohammed, and Chuma in 2018, and became a notable success story of the dot-com bubble.</label>\r\n\r\n        </div>\r\n        <br>\r\n        <br>\r\n      </div>\r\n\r\n    </nav>\r\n  </div>\r\n</div>\r\n<button (click)=\"goBack()\">Back</button>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(location) {
        this.location = location;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.goBack = function () {
        this.location.back();
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _listing_detail_listing_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing-detail/listing-detail.component */ "./src/app/listing-detail/listing-detail.component.ts");
/* harmony import */ var _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frontpage/frontpage.component */ "./src/app/frontpage/frontpage.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'listings', component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__["ListingComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'listing/:id', component: _listing_detail_listing_detail_component__WEBPACK_IMPORTED_MODULE_4__["ListingDetailComponent"] },
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    { path: '', component: _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_5__["FrontpageComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'product/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'summary', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"] },
    { path: 'sell', component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_13__["SellComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxubmF2IGEge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gIGNvbG9yOiAjNjA3ZDhiO1xyXG59XHJcbm5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcbm5hdiBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMzliZTU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n</div>\r\n\r\n<!--<nav>-->\r\n  <!--<a routerLink=\"/listings\">View Listings</a>-->\r\n  <!--<a routerLink=\"/dashboard\">View Dashboard</a>-->\r\n<!--</nav>-->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(httpClient) {
        this.httpClient = httpClient;
        this.title = 'the your CAMPUS MARKETPLACE';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _listing_detail_listing_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listing-detail/listing-detail.component */ "./src/app/listing-detail/listing-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./frontpage/frontpage.component */ "./src/app/frontpage/frontpage.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_5__["ListingComponent"],
                _config_config_component__WEBPACK_IMPORTED_MODULE_7__["ConfigComponent"],
                _listing_detail_listing_detail_component__WEBPACK_IMPORTED_MODULE_8__["ListingDetailComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_10__["FrontpageComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_16__["SummaryComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"],
                _sell_sell_component__WEBPACK_IMPORTED_MODULE_20__["SellComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get('http://monster-marketplace-copy.cfapps.io/product-api/categories');
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/config/config.component.css":
/*!*********************************************!*\
  !*** ./src/app/config/config.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy9jb25maWcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  config works!\n</p>\n"

/***/ }),

/***/ "./src/app/config/config.component.ts":
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/config/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(configService) {
        this.configService = configService;
    }
    // showConfig
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/config/config.service.ts":
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.products = 'app/config.json';
    }
    ConfigService.prototype.getConfig = function () {
        return this.http.get(this.products);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #607d8b;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #eee;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBR0UsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxtQkFBbUIsQ0FBQyxpQkFBaUI7Q0FDdEM7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUU7Q0FDdEI7QUFDRDtFQUNFO0lBQ0UsVUFBVTtHQUNYO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5bY2xhc3MqPSdjb2wtJ10ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbmg0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmdyaWQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29sLTEtNCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG4ubW9kdWxlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2VlZTtcclxuICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi5tb2R1bGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjNjA3ZDhiO1xyXG59XHJcbi5ncmlkLXBhZCB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vZHVsZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLm1vZHVsZSB7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Popular Listings</h3>\r\n<div class=\"grid grid-pad\">\r\n  <a *ngFor=\"let listing of listings\" class=\"col-1-4\"\r\n      routerLink=\"/listing/{{listing.id}}\">\r\n    <div class=\"module hero\">\r\n      <h4>{{listing.name}}</h4>\r\n    </div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(listingService) {
        this.listingService = listingService;
        this.listings = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.listingService.getListings()
            .subscribe(function (Items) { return _this.listings = Items.slice(0, 3); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/frontpage/frontpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url('https://unpkg.com/purecss@1.0.0/build/pure-min.css');*/\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: rgb(9, 57, 85);\r\n}\r\n\r\nli {\r\n  float: left;\r\n  border-right:1px solid #bbb;\r\n}\r\n\r\nli:last-child {\r\n  border-right: none;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: rgb(7, 54, 92);\r\n}\r\n\r\n.active {\r\n  background-color: rgb(54, 99, 150);\r\n}\r\n\r\n.product-filter {\r\n  display: flex;\r\n}\r\n\r\n.product-filter h1 {\r\n  flex-grow: 1;\r\n}\r\n\r\n.sort {\r\n  display: block;\r\n}\r\n\r\n.collection-sort {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.products {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.product-card {\r\n  padding: 2%;\r\n  flex-grow: 1;\r\n  flex-basis: 16%;\r\n  display: block;\r\n\r\n//display: flex; /* so child elements can use flexbox stuff too! */\r\n}\r\n\r\n.product-image img {\r\n  max-width: 100%;\r\n}\r\n\r\n.product-info {\r\n  margin-top: auto;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 50% auto;\r\n}\r\n\r\n.col {\r\n  padding: .4em 1.3em;\r\n}\r\n\r\n.color-dark {\r\n  background: #2885C4;\r\n}\r\n\r\n.color-light {\r\n  background: #57B3F1;\r\n}\r\n\r\ninput.txt {\r\n  border: 0;\r\n  padding: 1em;\r\n  width: 80%;\r\n  margin-bottom: 2em;\r\n}\r\n\r\ninput.btn {\r\n  border: 0;\r\n  display:block;\r\n  padding:1em 3em;\r\n  background:#A5F883;\r\n  color:#003A61;\r\n  margin-bottom:1em;\r\n  cursor:pointer;\r\n}\r\n\r\n.life-container {\r\n  background:#3FA0E1;\r\n\r\n  padding:.5em;\r\n  font-weight:bold;\r\n  cursor:pointer;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRwYWdlL2Zyb250cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTs7QUFFdEU7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7O0FBR0Q7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlOztBQUVqQixnQkFBZ0IsQ0FBQyxrREFBa0Q7Q0FDbEU7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0NBQ2pDOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRwYWdlL2Zyb250cGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAaW1wb3J0IHVybCgnaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AxLjAuMC9idWlsZC9wdXJlLW1pbi5jc3MnKTsqL1xyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA1NywgODUpO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYmJiO1xyXG59XHJcblxyXG5saTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbmxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA1NCwgOTIpO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDk5LCAxNTApO1xyXG59XHJcblxyXG5cclxuLnByb2R1Y3QtZmlsdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1maWx0ZXIgaDEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnNvcnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY29sbGVjdGlvbi1zb3J0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWJhc2lzOiAxNiU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4vL2Rpc3BsYXk6IGZsZXg7IC8qIHNvIGNoaWxkIGVsZW1lbnRzIGNhbiB1c2UgZmxleGJveCBzdHVmZiB0b28hICovXHJcbn1cclxuXHJcbi5wcm9kdWN0LWltYWdlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIGF1dG87XHJcbn1cclxuLmNvbCB7XHJcbiAgcGFkZGluZzogLjRlbSAxLjNlbTtcclxufVxyXG4uY29sb3ItZGFyayB7XHJcbiAgYmFja2dyb3VuZDogIzI4ODVDNDtcclxufVxyXG4uY29sb3ItbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICM1N0IzRjE7XHJcbn1cclxuXHJcbmlucHV0LnR4dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5pbnB1dC5idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBhZGRpbmc6MWVtIDNlbTtcclxuICBiYWNrZ3JvdW5kOiNBNUY4ODM7XHJcbiAgY29sb3I6IzAwM0E2MTtcclxuICBtYXJnaW4tYm90dG9tOjFlbTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4ubGlmZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IzNGQTBFMTtcclxuXHJcbiAgcGFkZGluZzouNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/frontpage/frontpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li><a class=\"active\" routerLink=\"\">Home</a></li>\r\n  <li><a routerLink=\"/login\">Summary</a></li>\r\n  <li><a routerLink=\"/login\">My Account</a></li>\r\n  <li><a routerLink=\"/about\">About us</a></li>\r\n  <li style=\"float:right\"><a routerLink=\"/login\">Login</a></li>\r\n  <li style=\"float:right\"><a routerLink=\"/register\">Register</a></li>\r\n\r\n  <li style=\"float:right\"><a routerLink=\"/register\"></a></li>\r\n\r\n</ul>\r\n\r\n<br><br>\r\n\r\n\r\n<br><br>\r\n\r\n<div class=\"container color-dark\">\r\n  <h2>  Welcome! </h2>\r\n  <br>\r\n  <div class=\"col\">\r\n    <p>Shop by Category</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container color-light\">\r\n  <div class=\"col\">\r\n\r\n\r\n    <nav class=\"product-filter\">\r\n\r\n      <div class=\"sort\">\r\n        <div class=\"collection-sort\">\r\n          <!------------------------------->\r\n          <br>\r\n          <select (change)=\"selected($event.target.value)\" id=\"state\" >\r\n            <option value=\"\" selected disabled hidden>Select Category</option>\r\n            <option value=\"0\">All Categories</option>\r\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\r\n          </select>\r\n          <br>\r\n        </div>\r\n      </div>\r\n\r\n    </nav>\r\n\r\n\r\n    <section class=\"products\">\r\n\r\n      <div class=\"product-card \"*ngFor=\"let product of currentProducts\">\r\n        <div class=\"product-image\">\r\n          <img src=\"{{product.urlImage}}\" width=\"100\" height=\"100\" >\r\n        </div>\r\n        <div class=\"product-info\">\r\n          <a routerLink=\"/product/{{product.id}}\">\r\n          <h4>{{product.title}}</h4>\r\n            <h5>{{product.price | currency}}</h5>\r\n            <!--<h5>{{product.seller.email}}</h5>-->\r\n          </a>\r\n\r\n        </div>\r\n\r\n        <!--<a routerLink=\"/product/{{product.id}}\">-->\r\n        <!--<span class=\"badge\">ID: {{product.id}} </span>-->\r\n        <!--from {{product.seller.firstName}} & catID: {{product.urlImage}}-->\r\n        <!--</a>-->\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/frontpage/frontpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.ts ***!
  \**************************************************/
/*! exports provided: FrontpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontpageComponent", function() { return FrontpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FrontpageComponent = /** @class */ (function () {
    function FrontpageComponent(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
    }
    FrontpageComponent.prototype.selected = function (id) {
        if (id == 0) {
            this.getProducts();
            return;
        }
        this.getProductsByCategory(id);
        return;
    };
    FrontpageComponent.prototype.getProductsByCategory = function (id) {
        var _this = this;
        this.productService.getProductsByCategory(id)
            .subscribe(function (products) { return _this.currentProducts = products; });
    };
    FrontpageComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (listings) { return _this.currentProducts = listings; });
    };
    FrontpageComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    FrontpageComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.getCategories();
    };
    FrontpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frontpage',
            template: __webpack_require__(/*! ./frontpage.component.html */ "./src/app/frontpage/frontpage.component.html"),
            styles: [__webpack_require__(/*! ./frontpage.component.css */ "./src/app/frontpage/frontpage.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], FrontpageComponent);
    return FrontpageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-filter {\r\n  display: flex;\r\n}\r\n\r\n.product-filter h1 {\r\n  flex-grow: 1;\r\n}\r\n\r\n.sort {\r\n  display: block;\r\n}\r\n\r\n.collection-sort {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.products {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.product-card {\r\n  padding: 2%;\r\n  flex-grow: 1;\r\n  flex-basis: 16%;\r\n  display: block;\r\n\r\n//display: flex; /* so child elements can use flexbox stuff too! */\r\n}\r\n\r\n.product-image img {\r\n  max-width: 100%;\r\n}\r\n\r\n.product-info {\r\n  margin-top: auto;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 50% auto;\r\n}\r\n\r\n.col {\r\n  padding: .4em 1.3em;\r\n}\r\n\r\n.color-dark {\r\n  background: #2885C4;\r\n}\r\n\r\n.color-light {\r\n  background: #57B3F1;\r\n}\r\n\r\ninput.txt {\r\n  border: 0;\r\n  padding: 1em;\r\n  width: 80%;\r\n  margin-bottom: 2em;\r\n}\r\n\r\ninput.btn {\r\n  border: 0;\r\n  display:block;\r\n  padding:1em 3em;\r\n  background:#A5F883;\r\n  color:#003A61;\r\n  margin-bottom:1em;\r\n  cursor:pointer;\r\n}\r\n\r\n.life-container {\r\n  background:#3FA0E1;\r\n\r\n  padding:.5em;\r\n  font-weight:bold;\r\n  cursor:pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCLGdCQUFnQixDQUFDLGtEQUFrRDtDQUNsRTs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFJRDtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7Q0FDakM7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZmlsdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1maWx0ZXIgaDEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnNvcnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY29sbGVjdGlvbi1zb3J0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWJhc2lzOiAxNiU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4vL2Rpc3BsYXk6IGZsZXg7IC8qIHNvIGNoaWxkIGVsZW1lbnRzIGNhbiB1c2UgZmxleGJveCBzdHVmZiB0b28hICovXHJcbn1cclxuXHJcbi5wcm9kdWN0LWltYWdlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgYXV0bztcclxufVxyXG4uY29sIHtcclxuICBwYWRkaW5nOiAuNGVtIDEuM2VtO1xyXG59XHJcbi5jb2xvci1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiAjMjg4NUM0O1xyXG59XHJcbi5jb2xvci1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogIzU3QjNGMTtcclxufVxyXG5cclxuaW5wdXQudHh0IHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcbmlucHV0LmJ0biB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgcGFkZGluZzoxZW0gM2VtO1xyXG4gIGJhY2tncm91bmQ6I0E1Rjg4MztcclxuICBjb2xvcjojMDAzQTYxO1xyXG4gIG1hcmdpbi1ib3R0b206MWVtO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5saWZlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDojM0ZBMEUxO1xyXG5cclxuICBwYWRkaW5nOi41ZW07XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<br><br>\r\n\r\n<div class=\"container color-dark\">\r\n  <h2>  Welcome! </h2>\r\n  <br>\r\n  <div class=\"col\">\r\n    <p>Shop by Category</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container color-light\">\r\n  <div class=\"col\">\r\n\r\n\r\n    <nav class=\"product-filter\">\r\n\r\n      <div class=\"sort\">\r\n        <div class=\"collection-sort\">\r\n          <!------------------------------->\r\n          <br>\r\n          <select (change)=\"selected($event.target.value)\" id=\"state\" >\r\n            <option value=\"\" selected disabled hidden>Select Category</option>\r\n            <option value=\"0\">All Categories</option>\r\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\r\n          </select>\r\n          <br>\r\n        </div>\r\n      </div>\r\n\r\n    </nav>\r\n    <br>\r\n\r\n    <section class=\"products\">\r\n\r\n      <div class=\"product-card \"*ngFor=\"let product of currentProducts\">\r\n        <div class=\"product-image\">\r\n          <img src=\"{{product.urlImage}}\" width=\"100\" height=\"100\" >\r\n        </div>\r\n        <div class=\"product-info\">\r\n          <a routerLink=\"/product/{{product.id}}\">\r\n            <h4>{{product.title}}</h4>\r\n            <h5>{{product.price | currency}}</h5>\r\n            <h5>{{product.seller.email}}</h5>\r\n          </a>\r\n\r\n        </div>\r\n\r\n        <!--<a routerLink=\"/product/{{product.id}}\">-->\r\n        <!--<span class=\"badge\">ID: {{product.id}} </span>-->\r\n        <!--from {{product.seller.firstName}} & catID: {{product.urlImage}}-->\r\n        <!--</a>-->\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
    }
    HomepageComponent.prototype.selected = function (id) {
        if (id == 0) {
            this.getProducts();
            return;
        }
        this.getProductsByCategory(id);
        return;
    };
    HomepageComponent.prototype.getProductsByCategory = function (id) {
        var _this = this;
        this.productService.getProductsByCategory(id)
            .subscribe(function (products) { return _this.currentProducts = products; });
    };
    HomepageComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (listings) { return _this.currentProducts = listings; });
    };
    HomepageComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    HomepageComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.getCategories();
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/listing-detail/listing-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/listing-detail/listing-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZy1kZXRhaWwvbGlzdGluZy1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7QUFDOUM7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCLENBQUMsYUFBYTtDQUMvQjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2xpc3RpbmctZGV0YWlsL2xpc3RpbmctZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBtYXJnaW46IC41ZW0gMDtcclxuICBjb2xvcjogIzYwN0Q4QjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAuNGVtO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgY3Vyc29yOiBoYW5kO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/listing-detail/listing-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/listing-detail/listing-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Selected Listing</h2>\r\n\r\n<div *ngIf=\"listing\">\r\n  <div><span>id: </span>{{listing.id}}</div>\r\n  <div>\r\n    <label>item:\r\n      <input [(ngModel)] = \"listing.name\" placeholder=\"name\">\r\n    </label>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!listing\">\r\n  <p>Not a valid Listing ID</p>\r\n</div>\r\n\r\n<!--<button (click)=\"goBack()\">Back</button>-->\r\n<button class=\"pure-button pure-button-primary\" (click)=\"goBack()\">Back</button>\r\n"

/***/ }),

/***/ "./src/app/listing-detail/listing-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/listing-detail/listing-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ListingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailComponent", function() { return ListingDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing */ "./src/app/listing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListingDetailComponent = /** @class */ (function () {
    function ListingDetailComponent(route, listingService, location) {
        this.route = route;
        this.listingService = listingService;
        this.location = location;
    }
    ListingDetailComponent.prototype.ngOnInit = function () {
        this.getListing();
    };
    ListingDetailComponent.prototype.getListing = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        // retrieve the id from the url that called listing-detail
        this.listingService.getListing(id)
            .subscribe(function (item) {
            if (item == undefined) {
                console.log('IM UNDEFINED');
            }
            else {
                _this.listing = item;
            }
        });
    };
    ListingDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _listing__WEBPACK_IMPORTED_MODULE_1__["listing"])
    ], ListingDetailComponent.prototype, "listing", void 0);
    ListingDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing-detail',
            template: __webpack_require__(/*! ./listing-detail.component.html */ "./src/app/listing-detail/listing-detail.component.html"),
            styles: [__webpack_require__(/*! ./listing-detail.component.css */ "./src/app/listing-detail/listing-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _listing_service__WEBPACK_IMPORTED_MODULE_4__["ListingService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ListingDetailComponent);
    return ListingDetailComponent;
}());



/***/ }),

/***/ "./src/app/listing.service.ts":
/*!************************************!*\
  !*** ./src/app/listing.service.ts ***!
  \************************************/
/*! exports provided: ListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.getListings = function () {
        return this.http.get('http://monster-marketplace-copy.cfapps.io/product-api/allListings');
    };
    ListingService.prototype.addListing = function (item) {
        // return this.http.post(url, item);
    };
    ListingService.prototype.getListing = function (id) {
        console.log("fetched listing id = " + id);
        // return of(Listings.find(listing => listing.id === id) );
        return this.http.get("http://monster-marketplace-copy.cfapps.io/product-api/listing/" + id);
    };
    ListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListingService);
    return ListingService;
}());



/***/ }),

/***/ "./src/app/listing.ts":
/*!****************************!*\
  !*** ./src/app/listing.ts ***!
  \****************************/
/*! exports provided: listing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listing", function() { return listing; });
var listing = /** @class */ (function () {
    function listing() {
    }
    return listing;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n.listItem {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 30em;\r\n}\r\n.listItem li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.listItem li.selected:hover {\r\n  background-color: #BBD8DC !important;\r\n  color: white;\r\n}\r\n.listItem li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.listItem .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.listItem .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZy9saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7Q0FDZDtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwyQkFBMkI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nL2xpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmxpc3RJdGVtIHtcclxuICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMzBlbTtcclxufVxyXG4ubGlzdEl0ZW0gbGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIG1hcmdpbjogLjVlbTtcclxuICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgaGVpZ2h0OiAxLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmxpc3RJdGVtIGxpLnNlbGVjdGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5saXN0SXRlbSBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICBsZWZ0OiAuMWVtO1xyXG59XHJcbi5saXN0SXRlbSAudGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTNweDtcclxufVxyXG4ubGlzdEl0ZW0gLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGhlaWdodDogMS44ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"getProduct()\">Get this Product!</button>\r\n<div>\r\n  <input type=\"text\" placeholder=\"product id\" (keyup)=\"onNameKeyUp($event)\">\r\n</div>\r\n\r\n<h2>Available Listings</h2>\r\n<div>\r\n  <ul class = \"listItem\">\r\n    <li *ngFor=\"let listing of currentListings\">\r\n      <a routerLink=\"/listing/{{listing.id}}\">\r\n      <span class=\"badge\">ID: {{listing.id}} </span>{{listing.name}}\r\n      {{listing.price | currency}} from {{listing.seller}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <!--<label>Listing:-->\r\n    <!--<input [(ngModel)] = \"item.name\" placeholder=\"name\">-->\r\n  <!--</label>-->\r\n  <!--id: {{item.id}}-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingComponent = /** @class */ (function () {
    function ListingComponent(listingService) {
        this.listingService = listingService;
        this.name = '';
    }
    ListingComponent.prototype.getListings = function () {
        var _this = this;
        this.listingService.getListings()
            .subscribe(function (listings) { return _this.currentListings = listings; });
    };
    ListingComponent.prototype.ngOnInit = function () {
        this.getListings();
    };
    ListingComponent.prototype.onNameKeyUp = function (event) {
        this.name = event.target.value;
    };
    ListingComponent.prototype.getProduct = function () {
        console.log(this.name);
        // this.httpClient.get('localhost:8080/product-api')
        //   .subscribe(
        //     (data) =>
        //   )
    };
    ListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <h1>Login </h1>\r\n    <form>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username:</label>\r\n        <input type=\"username\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"username\">\r\n      </div>\r\n\r\n      <br>\r\n      <div class=\"form-group\">\r\n        <label for=\"pwd\">Password:</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"passowrd\" [(ngModel)]=\"password\">\r\n      </div>\r\n\r\n      <br>\r\n      <button class=\"pure-button pure-button-primary\" (click)=\"loginCheck()\">Login</button>\r\n      <br>\r\n      <button (click)=\"goBack()\">Back</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(location, router) {
        this.location = location;
        this.router = router;
    }
    LoginComponent.prototype.loginCheck = function () {
        if (this.username == 'mlopez' && this.password == 'password') {
            this.router.navigate(['summary']);
        }
        else {
            alert("Invalid credentials. Please try again.");
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.goBack = function () {
        this.location.back();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/member.service.ts":
/*!***********************************!*\
  !*** ./src/app/member.service.ts ***!
  \***********************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberService = /** @class */ (function () {
    function MemberService(http) {
        this.http = http;
    }
    MemberService.prototype.getMemberById = function (id) {
        return this.http.get('https://monster-marketplace-copy.cfapps.io/product-api/member/' + id);
    };
    MemberService.prototype.registerMember = function (member) {
        return this.http.post('https://monster-marketplace-copy.cfapps.io/product-api/member/', member);
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: rgb(9, 57, 85);\r\n}\r\n\r\nli {\r\n  float: left;\r\n  border-right:1px solid #bbb;\r\n}\r\n\r\nli:last-child {\r\n  border-right: none;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: rgb(7, 54, 92);\r\n}\r\n\r\n.active {\r\n  background-color: rgb(54, 99, 150);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLG1DQUFtQztDQUNwQyIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDU3LCA4NSk7XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiYmI7XHJcbn1cclxuXHJcbmxpOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDU0LCA5Mik7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgOTksIDE1MCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li><a routerLink=\"/home\">Home</a></li>\r\n  <li><a routerLink=\"/summary\">Summary</a></li>\r\n  <li><a routerLink=\"/user\">My Account</a></li>\r\n  <li><a routerLink=\"/sell\">Sell</a></li>\r\n  <li><a routerLink=\"/about\">About us</a></li>\r\n  <li style=\"float:right\"><a routerLink=\"\">Logout</a></li>\r\n</ul>\r\n<br><br>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: rgb(9, 57, 85);\r\n}\r\n\r\nli {\r\n  float: left;\r\n  border-right:1px solid #bbb;\r\n}\r\n\r\nli:last-child {\r\n  border-right: none;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: rgb(7, 54, 92);\r\n}\r\n\r\n.active {\r\n  background-color: rgb(54, 99, 150);\r\n}\r\n\r\n.product-filter {\r\n  display: flex;\r\n}\r\n\r\n.product-filter h1 {\r\n  flex-grow: 1;\r\n}\r\n\r\n.sort {\r\n  display: block;\r\n}\r\n\r\n.collection-sort {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.products {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.product-card {\r\n  padding: 2%;\r\n  flex-grow: 1;\r\n  flex-basis: 16%;\r\n  display: block;\r\n\r\n//display: flex; /* so child elements can use flexbox stuff too! */\r\n}\r\n\r\n.product-image img {\r\n  max-width: 100%;\r\n}\r\n\r\n.product-info {\r\n  margin-top: auto;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 50% auto;\r\n}\r\n\r\n.col {\r\n  padding: .4em 1.3em;\r\n}\r\n\r\n.color-dark {\r\n  background: #2885C4;\r\n}\r\n\r\n.color-light {\r\n  background: #57B3F1;\r\n}\r\n\r\ninput.txt {\r\n  border: 0;\r\n  padding: 1em;\r\n  width: 80%;\r\n  margin-bottom: 2em;\r\n}\r\n\r\ninput.btn {\r\n  border: 0;\r\n  display:block;\r\n  padding:1em 3em;\r\n  background:#A5F883;\r\n  color:#003A61;\r\n  margin-bottom:1em;\r\n  cursor:pointer;\r\n}\r\n\r\n.life-container {\r\n  background:#3FA0E1;\r\n\r\n  padding:.5em;\r\n  font-weight:bold;\r\n  cursor:pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLG1DQUFtQztDQUNwQzs7QUFHRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCLGdCQUFnQixDQUFDLGtEQUFrRDtDQUNsRTs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7Q0FDakM7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA1NywgODUpO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYmJiO1xyXG59XHJcblxyXG5saTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbmxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA1NCwgOTIpO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDk5LCAxNTApO1xyXG59XHJcblxyXG5cclxuLnByb2R1Y3QtZmlsdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1maWx0ZXIgaDEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnNvcnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY29sbGVjdGlvbi1zb3J0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWJhc2lzOiAxNiU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4vL2Rpc3BsYXk6IGZsZXg7IC8qIHNvIGNoaWxkIGVsZW1lbnRzIGNhbiB1c2UgZmxleGJveCBzdHVmZiB0b28hICovXHJcbn1cclxuXHJcbi5wcm9kdWN0LWltYWdlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIGF1dG87XHJcbn1cclxuLmNvbCB7XHJcbiAgcGFkZGluZzogLjRlbSAxLjNlbTtcclxufVxyXG4uY29sb3ItZGFyayB7XHJcbiAgYmFja2dyb3VuZDogIzI4ODVDNDtcclxufVxyXG4uY29sb3ItbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICM1N0IzRjE7XHJcbn1cclxuXHJcbmlucHV0LnR4dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5pbnB1dC5idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBhZGRpbmc6MWVtIDNlbTtcclxuICBiYWNrZ3JvdW5kOiNBNUY4ODM7XHJcbiAgY29sb3I6IzAwM0E2MTtcclxuICBtYXJnaW4tYm90dG9tOjFlbTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4ubGlmZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IzNGQTBFMTtcclxuXHJcbiAgcGFkZGluZzouNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Selected Product</h2>\r\n\r\n\r\n<div class=\"container color-light\">\r\n  <div class=\"col\">\r\n\r\n<div *ngIf=\"product\">\r\n  <!--<div><span>Product ID: </span>{{product.id}}</div>-->\r\n  <!--<div><span>Category:  </span>{{product.category.name}}</div>-->\r\n  <!--<div><span>Seller: </span>{{product.seller.username}}</div>-->\r\n  <!--<div><span>Item:  </span>{{product.title}}</div>-->\r\n  <!--<div><span>Price: </span>{{product.price | currency}}</div>-->\r\n  <!--<div><span>Product Description: </span>{{product.description}}</div>-->\r\n  <!--<div><span>Image URL:  </span>{{product.urlImage}}</div>-->\r\n\r\n\r\n  <section class=\"products\">\r\n\r\n    <div class=\"product-card\" >\r\n      <div class=\"product-image\">\r\n        <img src=\"{{product.urlImage}}\" width=\"100\" height=\"100\" >\r\n      </div>\r\n      <div class=\"product-info\">\r\n        <a routerLink=\"/product/{{product.id}}\">\r\n          <h4>{{product.title}}</h4>\r\n          <h5>{{product.price | currency}}</h5>\r\n          <h5>{{product.description}}</h5>\r\n          <h5>seller: {{product.seller.username}}</h5>\r\n        </a>\r\n\r\n      </div>\r\n\r\n      <!--<a routerLink=\"/product/{{product.id}}\">-->\r\n      <!--<span class=\"badge\">ID: {{product.id}} </span>-->\r\n      <!--from {{product.seller.firstName}} & catID: {{product.urlImage}}-->\r\n      <!--</a>-->\r\n    </div>\r\n  </section>\r\n  <!--<div>-->\r\n    <!--<label>item:-->\r\n      <!--<input [(ngModel)] = \"product.title\" placeholder=\"title\">-->\r\n    <!--</label>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n\r\n\r\n  <div *ngIf=\"!product\">\r\n    <p>Not a valid Listing ID</p>\r\n  </div>\r\n\r\n  <!--<button (click)=\"goBack()\">Back</button>-->\r\n  <button class=\"pure-button pure-button-primary\" (click)=\"goBack()\">Back</button>\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Product */ "./src/app/Product.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService, location) {
        this.route = route;
        this.productService = productService;
        this.location = location;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getProduct();
    };
    ProductDetailComponent.prototype.getProduct = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        // retrieve the id from the url that called listing-detail
        this.productService.getProductById(id)
            .subscribe(function (item) {
            if (item == undefined) {
                console.log('IM UNDEFINED');
            }
            else {
                _this.product = item;
            }
        });
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductDetailComponent.prototype, "product", void 0);
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get('https://monster-marketplace-copy.cfapps.io/product-api/');
    };
    ProductService.prototype.getProductById = function (id) {
        return this.http.get('https://monster-marketplace-copy.cfapps.io/product-api/product/' + id);
    };
    ProductService.prototype.getProductsByMember = function (id) {
        return this.http.get('https://monster-marketplace-copy.cfapps.io/product-api/product/seller/' + id);
    };
    ProductService.prototype.addProduct = function (item) {
        return this.http.post('https://monster-marketplace-copy.cfapps.io/product-api/product', item);
    };
    ProductService.prototype.getProductsByCategory = function (id) {
        return this.http.get('https://monster-marketplace-copy.cfapps.io/product-api/product/category/' + id);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  product works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <h1>Register </h1>\r\n    <form (ngSumbit)=\"registerMember()\" #newMemberForm=\"ngForm\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"firstname\">Firstname:</label>\r\n        <br>\r\n        <input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" [(ngModel)]=\"newMember.firstName\" #firstName=\"ngModel\">\r\n      </div>\r\n      <br>\r\n      <div class=\"form-group\">\r\n        <label for=\"lastname\">Lastname:</label>\r\n        <br>\r\n        <input type=\"text\" class=\"form-control\" id=\"lastname\" name=\"lastname\" [(ngModel)]=\"newMember.lastName\" #lastName=\"ngModel\">\r\n      </div>\r\n      <br>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email:</label>\r\n        <br>\r\n        <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"newMember.email\" #email=\"ngModel\">\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Create a Username:</label>\r\n        <br>\r\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"newMember.username\" #username=\"ngModel\">\r\n      </div>\r\n\r\n      <br>\r\n      <div class=\"form-group\">\r\n        <label for=\"pwd\">Create a Password:</label>\r\n        <br>\r\n        <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" [(ngModel)]=\"newMember.password\" #password=\"ngModel\">\r\n      </div>\r\n\r\n      <br>\r\n      <button type=\"submit\" class=\"pure-button pure-button-primary\" (click)=\"registerMember()\">Register</button>\r\n\r\n    </form>\r\n\r\n    <button (click)=\"goBack()\">Cancel</button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Member */ "./src/app/Member.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../member.service */ "./src/app/member.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(location, memberService) {
        this.location = location;
        this.memberService = memberService;
        this.newMember = new _Member__WEBPACK_IMPORTED_MODULE_1__["Member"](0, '', '', '', '', '', '', '');
    }
    RegisterComponent.prototype.registerMember = function () {
        console.log(this.newMember);
        this.memberService.registerMember(this.newMember).subscribe();
        // this.
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.goBack = function () {
        this.location.back();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sell/sell.component.css":
/*!*****************************************!*\
  !*** ./src/app/sell/sell.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://unpkg.com/purecss@1.0.0/build/pure-min.css');\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: rgb(9, 57, 85);\r\n}\r\n\r\nli {\r\n  float: left;\r\n  border-right:1px solid #bbb;\r\n}\r\n\r\nli:last-child {\r\n  border-right: none;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: rgb(7, 54, 92);\r\n}\r\n\r\n.active {\r\n  background-color: rgb(54, 99, 150);\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 50% auto;\r\n}\r\n\r\n.col {\r\n  padding: .4em 1.3em;\r\n}\r\n\r\n.color-dark {\r\n  background: #2885C4;\r\n}\r\n\r\n.color-light {\r\n  background: #57B3F1;\r\n}\r\n\r\ninput.txt {\r\n  border: 0;\r\n  padding: 1em;\r\n  width: 80%;\r\n  margin-bottom: 2em;\r\n}\r\n\r\ninput.btn {\r\n  border: 0;\r\n  display:block;\r\n  padding:1em 3em;\r\n  background:#A5F883;\r\n  color:#003A61;\r\n  margin-bottom:1em;\r\n  cursor:pointer;\r\n}\r\n\r\n.life-container {\r\n  background: #57B3F1;\r\n  padding:.5em;\r\n  font-weight:bold;\r\n  color:rgb(255, 255, 255);\r\n  cursor:pointer;\r\n}\r\n\r\n#itemdescription {\r\n  height:200px;\r\n  font-size:14pt;\r\n}\r\n\r\n#itemname,#price,#itemdescription,#imageURL{\r\n  color:rgb(0, 0, 0);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbC9zZWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFOztBQUVsRTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLG1DQUFtQztDQUNwQzs7QUFHRDtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7Q0FDakM7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCOztBQUdEO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NlbGwvc2VsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMS4wLjAvYnVpbGQvcHVyZS1taW4uY3NzJyk7XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDU3LCA4NSk7XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiYmI7XHJcbn1cclxuXHJcbmxpOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDU0LCA5Mik7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgOTksIDE1MCk7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIGF1dG87XHJcbn1cclxuLmNvbCB7XHJcbiAgcGFkZGluZzogLjRlbSAxLjNlbTtcclxufVxyXG4uY29sb3ItZGFyayB7XHJcbiAgYmFja2dyb3VuZDogIzI4ODVDNDtcclxufVxyXG4uY29sb3ItbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICM1N0IzRjE7XHJcbn1cclxuXHJcbmlucHV0LnR4dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5pbnB1dC5idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBhZGRpbmc6MWVtIDNlbTtcclxuICBiYWNrZ3JvdW5kOiNBNUY4ODM7XHJcbiAgY29sb3I6IzAwM0E2MTtcclxuICBtYXJnaW4tYm90dG9tOjFlbTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5saWZlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogIzU3QjNGMTtcclxuICBwYWRkaW5nOi41ZW07XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbiNpdGVtZGVzY3JpcHRpb24ge1xyXG4gIGhlaWdodDoyMDBweDtcclxuICBmb250LXNpemU6MTRwdDtcclxufVxyXG5cclxuI2l0ZW1uYW1lLCNwcmljZSwjaXRlbWRlc2NyaXB0aW9uLCNpbWFnZVVSTHtcclxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sell/sell.component.html":
/*!******************************************!*\
  !*** ./src/app/sell/sell.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n\r\n<div class=\"container color-dark\">\r\n  <h2> Sell an Item </h2>\r\n\r\n  <br>\r\n</div>\r\n\r\n\r\n<div class=\"container color-light\">\r\n  <div class=\"col\">\r\n\r\n  </div>\r\n\r\n  <!-- stuff -->\r\n\r\n  <nav class=\"product-filter\">\r\n\r\n    <div class=\"sort\">\r\n      <div class=\"collection-sort\">\r\n      </div>\r\n\r\n\r\n      <br>\r\n      <br>\r\n\r\n    </div>\r\n  </nav>\r\n\r\n  <form>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"itemname\">Item Name:</label>\r\n      <br>\r\n      <input type=\"itemname\" class=\"form-control\" id=\"itemname\" name=\"itemname\" [(ngModel)]=\"newProduct.title\" #title=\"ngModel\">\r\n    </div>\r\n    <br>\r\n    <div class=\"form-group\">\r\n      <label for=\"price\">Price:</label>\r\n      <br>\r\n      <input type=\"price\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"newProduct.price\" #price=\"ngModel\">\r\n    </div>\r\n    <br>\r\n    <div class=\"form-group\">\r\n      <label for=\"itemdescription\">Item Description:</label>\r\n      <br>\r\n      <textarea type=\"itemdescription\" class=\"form-control\" id=\"itemdescription\" name=\"itemdescription\" [(ngModel)]=\"newProduct.description\" #description=\"ngModel\"> Insert description here. </textarea>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"imageURL\">Image URL:</label>\r\n      <br>\r\n      <input type=\"imageURL\" class=\"form-control\" id=\"imageURL\" name=\"imageURL\" [(ngModel)]=\"newProduct.urlImage\" #urlImage=\"ngModel\">\r\n    </div>\r\n    <br>\r\n\r\n\r\n    <br>\r\n    <button type=\"submit\" class=\"pure-button pure-button-primary\" (click)=\"postListing()\">Submit Listing</button>\r\n    <br>\r\n    <br>\r\n\r\n    <button class=\"pure-button pure-button-primary\" (click)=\"goBack()\">Back</button>\r\n    <br><br>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/*!****************************************!*\
  !*** ./src/app/sell/sell.component.ts ***!
  \****************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Product */ "./src/app/Product.ts");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Category */ "./src/app/Category.ts");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Status */ "./src/app/Status.ts");
/* harmony import */ var _Member__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Member */ "./src/app/Member.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SellComponent = /** @class */ (function () {
    function SellComponent(location, productService) {
        this.location = location;
        this.productService = productService;
        this.newProduct = new _Product__WEBPACK_IMPORTED_MODULE_2__["Product"](0, '', new _Category__WEBPACK_IMPORTED_MODULE_3__["Category"](1, ''), null, new _Status__WEBPACK_IMPORTED_MODULE_4__["Status"](1, ''), new _Member__WEBPACK_IMPORTED_MODULE_5__["Member"](1, '', '', '', '', '', '', ''), null, 0, '11/15/2018', '', '');
    }
    SellComponent.prototype.postListing = function () {
        console.log(this.newProduct);
        this.productService.addProduct(this.newProduct).subscribe();
    };
    SellComponent.prototype.ngOnInit = function () {
    };
    SellComponent.prototype.goBack = function () {
        this.location.back();
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.css */ "./src/app/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: rgb(9, 57, 85);\r\n}\r\n\r\nli {\r\n  float: left;\r\n  border-right:1px solid #bbb;\r\n}\r\n\r\nli:last-child {\r\n  border-right: none;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: rgb(7, 54, 92);\r\n}\r\n\r\n.active {\r\n  background-color: rgb(54, 99, 150);\r\n}\r\n\r\n.product-filter {\r\n  display: flex;\r\n}\r\n\r\n.product-filter h1 {\r\n  flex-grow: 1;\r\n}\r\n\r\n.sort {\r\n  display: block;\r\n}\r\n\r\n.collection-sort {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.products {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.product-card {\r\n  padding: 2%;\r\n  flex-grow: 1;\r\n  flex-basis: 16%;\r\n  display: block;\r\n\r\n//display: flex; /* so child elements can use flexbox stuff too! */\r\n}\r\n\r\n.product-image img {\r\n  max-width: 100%;\r\n}\r\n\r\n.product-info {\r\n  margin-top: auto;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 50% auto;\r\n}\r\n\r\n.col {\r\n  padding: .4em 1.3em;\r\n}\r\n\r\n.color-dark {\r\n  background: #2885C4;\r\n}\r\n\r\n.color-light {\r\n  background: #57B3F1;\r\n}\r\n\r\ninput.txt {\r\n  border: 0;\r\n  padding: 1em;\r\n  width: 80%;\r\n  margin-bottom: 2em;\r\n}\r\n\r\ninput.btn {\r\n  border: 0;\r\n  display:block;\r\n  padding:1em 3em;\r\n  background:#A5F883;\r\n  color:#003A61;\r\n  margin-bottom:1em;\r\n  cursor:pointer;\r\n}\r\n\r\n.life-container {\r\n  background:#3FA0E1;\r\n\r\n  padding:.5em;\r\n  font-weight:bold;\r\n  cursor:pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7O0FBR0Q7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlOztBQUVqQixnQkFBZ0IsQ0FBQyxrREFBa0Q7Q0FDbEU7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0NBQ2pDOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDU3LCA4NSk7XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiYmI7XHJcbn1cclxuXHJcbmxpOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDU0LCA5Mik7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgOTksIDE1MCk7XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdC1maWx0ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWZpbHRlciBoMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uc29ydCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jb2xsZWN0aW9uLXNvcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnByb2R1Y3RzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZCB7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGZsZXgtYmFzaXM6IDE2JTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbi8vZGlzcGxheTogZmxleDsgLyogc28gY2hpbGQgZWxlbWVudHMgY2FuIHVzZSBmbGV4Ym94IHN0dWZmIHRvbyEgKi9cclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2UgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm8ge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgYXV0bztcclxufVxyXG4uY29sIHtcclxuICBwYWRkaW5nOiAuNGVtIDEuM2VtO1xyXG59XHJcbi5jb2xvci1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiAjMjg4NUM0O1xyXG59XHJcbi5jb2xvci1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogIzU3QjNGMTtcclxufVxyXG5cclxuaW5wdXQudHh0IHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcbmlucHV0LmJ0biB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgcGFkZGluZzoxZW0gM2VtO1xyXG4gIGJhY2tncm91bmQ6I0E1Rjg4MztcclxuICBjb2xvcjojMDAzQTYxO1xyXG4gIG1hcmdpbi1ib3R0b206MWVtO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5saWZlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDojM0ZBMEUxO1xyXG5cclxuICBwYWRkaW5nOi41ZW07XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n\r\n<div class=\"container color-dark\">\r\n  <h2>  Your Listings </h2>\r\n  <br>\r\n\r\n</div>\r\n\r\n<div class=\"container color-light\">\r\n  <div class=\"col\">\r\n    <section class=\"products\">\r\n\r\n      <div class=\"product-card \"*ngFor=\"let product of currentProducts\">\r\n        <div class=\"product-image\">\r\n          <img src=\"{{product.urlImage}}\" width=\"100\" height=\"100\" >\r\n        </div>\r\n        <div class=\"product-info\">\r\n          <a routerLink=\"/product/{{product.id}}\">\r\n            <h4>{{product.title}}</h4>\r\n            <h5>{{product.price | currency}}</h5>\r\n          </a>\r\n\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n<div>\r\n\r\n</div>\r\n\r\n    <button class=\"pure-button pure-button-primary\" (click)=\"goBack()\">Back</button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(productService, location) {
        this.productService = productService;
        this.location = location;
    }
    SummaryComponent.prototype.getProductsByMember = function () {
        var _this = this;
        this.productService.getProductsByMember(1)
            .subscribe(function (products) { return _this.currentProducts = products; });
    };
    SummaryComponent.prototype.ngOnInit = function () {
        this.getProductsByMember();
    };
    SummaryComponent.prototype.goBack = function () {
        this.location.back();
    };
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://unpkg.com/purecss@1.0.0/build/pure-min.css');\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: rgb(9, 57, 85);\r\n}\r\n\r\nli {\r\n  float: left;\r\n  border-right:1px solid #bbb;\r\n}\r\n\r\nli:last-child {\r\n  border-right: none;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: rgb(7, 54, 92);\r\n}\r\n\r\n.active {\r\n  background-color: rgb(54, 99, 150);\r\n}\r\n\r\n.product-filter {\r\n  display: flex;\r\n}\r\n\r\n.product-filter h1 {\r\n  flex-grow: 1;\r\n}\r\n\r\n.sort {\r\n  display: block;\r\n}\r\n\r\n.collection-sort {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.products {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.product-card {\r\n  padding: 2%;\r\n  flex-grow: 1;\r\n  flex-basis: 16%;\r\n  display: block;\r\n\r\n//display: flex; /* so child elements can use flexbox stuff too! */\r\n}\r\n\r\n.product-image img {\r\n  max-width: 100%;\r\n}\r\n\r\n.product-info {\r\n  margin-top: auto;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 50% auto;\r\n}\r\n\r\n.col {\r\n  padding: .4em 1.3em;\r\n}\r\n\r\n.color-dark {\r\n  background: #2885C4;\r\n}\r\n\r\n.color-light {\r\n  background: #57B3F1;\r\n}\r\n\r\ninput.txt {\r\n  border: 0;\r\n  padding: 1em;\r\n  width: 80%;\r\n  margin-bottom: 2em;\r\n}\r\n\r\ninput.btn {\r\n  border: 0;\r\n  display:block;\r\n  padding:1em 3em;\r\n  background:#A5F883;\r\n  color:#003A61;\r\n  margin-bottom:1em;\r\n  cursor:pointer;\r\n}\r\n\r\n.life-container {\r\n  background:#3FA0E1;\r\n\r\n  padding:.5em;\r\n  font-weight:bold;\r\n  cursor:pointer;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFOztBQUVsRTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLG1DQUFtQztDQUNwQzs7QUFHRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCLGdCQUFnQixDQUFDLGtEQUFrRDtDQUNsRTs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7Q0FDakM7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDEuMC4wL2J1aWxkL3B1cmUtbWluLmNzcycpO1xyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA1NywgODUpO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYmJiO1xyXG59XHJcblxyXG5saTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbmxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA1NCwgOTIpO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDk5LCAxNTApO1xyXG59XHJcblxyXG5cclxuLnByb2R1Y3QtZmlsdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1maWx0ZXIgaDEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnNvcnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY29sbGVjdGlvbi1zb3J0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWJhc2lzOiAxNiU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4vL2Rpc3BsYXk6IGZsZXg7IC8qIHNvIGNoaWxkIGVsZW1lbnRzIGNhbiB1c2UgZmxleGJveCBzdHVmZiB0b28hICovXHJcbn1cclxuXHJcbi5wcm9kdWN0LWltYWdlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIGF1dG87XHJcbn1cclxuLmNvbCB7XHJcbiAgcGFkZGluZzogLjRlbSAxLjNlbTtcclxufVxyXG4uY29sb3ItZGFyayB7XHJcbiAgYmFja2dyb3VuZDogIzI4ODVDNDtcclxufVxyXG4uY29sb3ItbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICM1N0IzRjE7XHJcbn1cclxuXHJcbmlucHV0LnR4dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5pbnB1dC5idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBhZGRpbmc6MWVtIDNlbTtcclxuICBiYWNrZ3JvdW5kOiNBNUY4ODM7XHJcbiAgY29sb3I6IzAwM0E2MTtcclxuICBtYXJnaW4tYm90dG9tOjFlbTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4ubGlmZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IzNGQTBFMTtcclxuXHJcbiAgcGFkZGluZzouNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<section>\r\n  <div *ngIf=\"currentMember\">\r\n      <span class=\"badge\">ID: {{currentMember.id}} </span>\r\n    <br>\r\n    First Name: {{currentMember.firstName}}\r\n    <br>\r\n    Last Name: {{currentMember.lastName}}\r\n    <br>\r\n    Email: {{currentMember.email}}\r\n      <!--{{product.price | currency}} from {{product.seller.firstName}} & catID: {{product.urlImage}}-->\r\n  </div>\r\n</section>\r\n\r\n<button class=\"pure-button pure-button-primary\" (click)=\"goBack()\">Back</button>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Member */ "./src/app/Member.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../member.service */ "./src/app/member.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(route, memberService, location) {
        this.route = route;
        this.memberService = memberService;
        this.location = location;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getMember();
    };
    UserComponent.prototype.getMember = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        // retrieve the id from the url that called listing-detail
        this.memberService.getMemberById(1)
            .subscribe(function (member) {
            if (member == undefined) {
                console.log('IM UNDEFINED');
            }
            else {
                _this.currentMember = member;
            }
        });
    };
    UserComponent.prototype.registerMember = function (member) {
        this.memberService.registerMember(member);
    };
    UserComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Member__WEBPACK_IMPORTED_MODULE_1__["Member"])
    ], UserComponent.prototype, "currentMember", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UserComponent);
    return UserComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Herna\Desktop\git_lab_repo\monster-marketplace-copy\market\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map