var questionAndAnswer = angular.module('QuestionAndAnswer',
        ['ngResource', 'ngRoute', 'ngCookies', 'ngSanitize', 'ngAnimate']).config(
        function ($routeProvider, $locationProvider, $httpProvider) {
            var getTemplatePath = function (routeName) {
                return 'templates/' + routeName + ".html";
            };
            
            var CONTROLLER_VIEW_MODEL_NAME = 'vm';

            $httpProvider.interceptors.push('errorHandlerHttpInterceptor');
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

            $locationProvider.html5Mode(true);

            $routeProvider.when('/', {
                templateUrl: getTemplatePath('home'),
                controller: 'HomeController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            }).when('/question/list-questions', {
                templateUrl: getTemplatePath('question/list-questions'),
                controller: 'QuestionsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            }).when('/question/ask-question', {
                templateUrl: getTemplatePath('question/ask-question'),
                controller: 'AskQuestionsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            }).otherwise({
                redirectTo: '/'
            })

        }).value('toastr', toastr).constant('serverRoutes', {
    currentUser: 'api/currentUser'
}).constant('author', 'Webdude').constant('appName', 'Question & Answer').constant('authorLink', 'http://webdude.eu')
        .constant('appTitle', 'Question & Answer');