var questionAndAnswer = angular.module('QuestionAndAnswer',
        ['ngResource', 'ngRoute', 'ngCookies', 'ngSanitize', 'ngAnimate']).config(
        function ($routeProvider, $locationProvider, $httpProvider) {
            var getTemplatePath = function (routeName) {
                return 'templates/' + routeName + ".html";
            };

            $httpProvider.interceptors.push('errorHandlerHttpInterceptor');
 
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

            if (window.currentUser){
                $httpProvider.interceptors.push('authenticationInterceptor');
            }
            
            $locationProvider.html5Mode(true);

            $routeProvider.when('/questions', {
                templateUrl: getTemplatePath('questions')
            }).when('/', {
                templateUrl: getTemplatePath('home')
            }).when('/login', {
                templateUrl: getTemplatePath('account/login')
            }).otherwise({
                redirectTo: '/'
            })

        })
        .value('toastr', toastr)
        .constant('serverRoutes', {currentUser: 'api/currentUser'})
        .constant('author', 'Webdude')
        .constant('appName', 'Question & Answer')
        .constant('authorLink', 'http://webdude.eu')
        .constant('appTitle', 'Question & Answer');