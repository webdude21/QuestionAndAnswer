var questionAnswerAppConfig = function ($routeProvider, $locationProvider, $httpProvider) {
	var getTemplatePath = function (routeName) {
			return 'templates/' + routeName + '.html';
		},
		routeUserChecks = {
			authenticated: {
				authenticate: function (auth) {
					return auth.isAuthenticated();
				}
			}
		};

	var CONTROLLER_VIEW_MODEL_NAME = 'vm';

	$httpProvider.interceptors.push('errorHandlerHttpInterceptor');
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: getTemplatePath('home'),
			controller: 'HomeController',
			controllerAs: CONTROLLER_VIEW_MODEL_NAME
		})
		.when('/question/list-questions', {
			templateUrl: getTemplatePath('question/list-questions'),
			controller: 'QuestionsController',
			controllerAs: CONTROLLER_VIEW_MODEL_NAME
		})
		.when('/register', {
			templateUrl: getTemplatePath('account/register'),
			controller: 'RegisterController',
			controllerAs: CONTROLLER_VIEW_MODEL_NAME
		})
		.when('/question/ask-question', {
			templateUrl: getTemplatePath('question/ask-question'),
			controller: 'AskQuestionsController',
			controllerAs: CONTROLLER_VIEW_MODEL_NAME,
			resolve: routeUserChecks.authenticated
		})
		.when('/question/:id', {
			templateUrl: getTemplatePath('question/detail'),
			controller: 'DetailQuestionsController',
			controllerAs: CONTROLLER_VIEW_MODEL_NAME
		})
		.when('/unauthorized', {
			templateUrl: getTemplatePath('unauthorized')
		})
		.otherwise({
			redirectTo: '/'
		});
};

angular.module('templates', []); // used for client-side template caching

var questionAndAnswer = angular.module('QuestionAndAnswer', ['ngResource', 'ngRoute', 'templates'])
	.config(questionAnswerAppConfig)
	.value('toastr', toastr)
	.constant('serverRoutes', {
		currentUser: 'api/authentication/currentuser',
		register: 'api/authentication/register',
		usersRoute: '/api/users/',
		questions: '/api/questions',
		customViews: '/api/customviews'
	})
	.constant('credits', {
		author: 'Webdude',
		appName: 'Question & Answer',
		authorLink: 'http://webdude.eu',
		appTitle: 'Question & Answer'
	});

questionAndAnswer.run(function ($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function (ev, current, previous, rejection) {
		if (rejection === 'not authorized') {
			$location.path('/unauthorized');
		}
	})
});
