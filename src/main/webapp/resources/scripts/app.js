'use strict';

var questionAndAnswer = angular.module('QuestionAndAnswer', ['ngResource', 'ngRoute', 'ngCookies', 'ngSanitize'])
    .config(function($routeProvider) {
    	var TEMPLATE_HOME = 'resources/templates/';
    	
        $routeProvider
            .when('/home', {
                templateUrl: TEMPLATE_HOME + 'home.html'
            })
            .otherwise({redirectTo: '/home'});
    })
    .constant('author', 'Webdude')
    .constant('appName', 'QuestionAndAnswer')
    .constant('authorLink', 'http://webdude.eu')
    .constant('appTitle', 'QuestionAndAnswer');