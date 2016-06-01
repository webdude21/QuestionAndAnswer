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
	var questions_list_1 = __webpack_require__(336);
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
	            { path: '/questions-list', component: questions_list_1.QuestionsList, name: 'QuestionsList' }
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
	

/***/ },

/***/ 336:
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
	var question_1 = __webpack_require__(337);
	var QuestionsList = (function () {
	    function QuestionsList(questions) {
	        this.questions = questions;
	    }
	    QuestionsList.prototype.ngOnInit = function () {
	        this.questionsList = this.questions.getAll().map(function (i) { return i._embedded.questions; });
	    };
	    QuestionsList = __decorate([
	        core_1.Component({
	            selector: 'questions-list',
	            templateUrl: 'app/components/questions-list/questions-list.html',
	            styleUrls: ['app/components/questions-list/questions-list.css'],
	            providers: [question_1.QuestionServices],
	            directives: [],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [question_1.QuestionServices])
	    ], QuestionsList);
	    return QuestionsList;
	}());
	exports.QuestionsList = QuestionsList;
	

/***/ },

/***/ 337:
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
	var serverRoutes_1 = __webpack_require__(338);
	__webpack_require__(339);
	var EntityTypes;
	(function (EntityTypes) {
	    EntityTypes[EntityTypes["answers"] = 0] = "answers";
	    EntityTypes[EntityTypes["user"] = 1] = "user";
	})(EntityTypes || (EntityTypes = {}));
	var QuestionServices = (function () {
	    function QuestionServices(http) {
	        this.http = http;
	    }
	    QuestionServices.prototype.getAll = function () {
	        return this.http
	            .get("" + serverRoutes_1.ServerRoutes.QUESTIONS)
	            .map(function (res) { return res.json(); });
	    };
	    QuestionServices.prototype.getQuestionBy = function (id, entity) {
	        var url = serverRoutes_1.ServerRoutes.QUESTIONS + "/" + id;
	        if (entity) {
	            url += "/" + entity;
	        }
	        return this.http.get(url).map(function (res) { return res.json(); });
	    };
	    QuestionServices.prototype.getQuestionsAnswers = function (id) {
	        return this.getQuestionBy(id, EntityTypes.answers);
	    };
	    QuestionServices.prototype.getQuestionsUser = function (id) {
	        return this.getQuestionBy(id, EntityTypes.user);
	    };
	    QuestionServices = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], QuestionServices);
	    return QuestionServices;
	}());
	exports.QuestionServices = QuestionServices;
	

/***/ },

/***/ 338:
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
	var BASE_PATH = '/api';
	var ServerRoutes = (function () {
	    function ServerRoutes() {
	    }
	    ServerRoutes.CUSTOM_VIEWS = BASE_PATH + "/customviews";
	    ServerRoutes.QUESTIONS = BASE_PATH + "/questions";
	    ServerRoutes.USERS = BASE_PATH + "/users";
	    ServerRoutes.REGISTER = BASE_PATH + "/authentication/register";
	    ServerRoutes.CURRENT_USER = BASE_PATH + "/authentication/currentuser";
	    ServerRoutes = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ServerRoutes);
	    return ServerRoutes;
	}());
	exports.ServerRoutes = ServerRoutes;
	

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(38);
	var map_1 = __webpack_require__(340);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(43);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ }

});
//# sourceMappingURL=app.map