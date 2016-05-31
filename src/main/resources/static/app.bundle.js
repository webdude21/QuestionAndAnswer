webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(1);
	var platform_browser_dynamic_1 = __webpack_require__(160);
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(280);
	var router_deprecated_1 = __webpack_require__(301);
	var seed_app_1 = __webpack_require__(333);
	core_1.enableProdMode();
	platform_browser_dynamic_1.bootstrap(seed_app_1.SeedApp, [http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })])
	    .catch(function (err) { return console.error(err); });
	

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_deprecated_1 = __webpack_require__(301);
	var home_1 = __webpack_require__(334);
	var about_1 = __webpack_require__(335);
	var SeedApp = (function () {
	    function SeedApp() {
	    }
	    SeedApp = __decorate([
	        core_1.Component({
	            selector: 'seed-app',
	            providers: [],
	            pipes: [],
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
	            templateUrl: 'app/seed-app.html',
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: '/home', component: home_1.Home, name: 'Home', useAsDefault: true },
	            { path: '/about', component: about_1.About, name: 'About' },
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], SeedApp);
	    return SeedApp;
	}());
	exports.SeedApp = SeedApp;
	

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var Home = (function () {
	    function Home() {
	    }
	    Home.prototype.ngOnInit = function () { };
	    Home = __decorate([
	        core_1.Component({
	            selector: 'home',
	            templateUrl: 'app/components/home/home.html',
	            styleUrls: ['app/components/home/home.css'],
	            providers: [],
	            directives: [],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;
	

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(280);
	var About = (function () {
	    function About(http) {
	    }
	    About.prototype.ngOnInit = function () {
	    };
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            templateUrl: 'app/components/about/about.html',
	            styleUrls: ['app/components/about/about.css'],
	            providers: [],
	            directives: [],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], About);
	    return About;
	}());
	exports.About = About;
	

/***/ }

});
//# sourceMappingURL=app.map