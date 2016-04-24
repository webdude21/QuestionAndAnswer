var questionAndAnswer = angular.module('QuestionAndAnswer');

questionAndAnswer.factory('Question', function ($resource, serverRoutes) {
	return $resource(serverRoutes.questions + '/:id/:relatedEntity', null, {
		getAll: {
			method: 'GET'
		},
		getById: {
			method: 'GET',
			params: { id: '@id' }
		},
		getQuestionsAnswers: {
			method: 'GET',
			params: { id: '@id', relatedEntity: 'answers' }
		},
		getQuestionUser: {
			method: 'GET',
			params: { id: '@id', relatedEntity: 'user' }
		},
		query: {
			method: 'GET',
			isArray: false
		}
	});
});
