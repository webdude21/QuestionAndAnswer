var questionAndAnswer = angular.module('QuestionAndAnswer', ['ngResource', 'ngRoute', 'ngCookies', 'ngSanitize'])
    .config(function($routeProvider, $locationProvider) {
    	var TEMPLATE_HOME = 'resources/templates/';
    	
    	$locationProvider.html5Mode(true);	
    	
        $routeProvider
            .when('/', {
                templateUrl: TEMPLATE_HOME + 'home.html'
            })
            .otherwise({redirectTo: '/'});
    })
    .constant('author', 'Webdude')
    .constant('appName', 'Question & Answer')
    .constant('authorLink', 'http://webdude.eu')
    .constant('appTitle', 'Question & Answer');