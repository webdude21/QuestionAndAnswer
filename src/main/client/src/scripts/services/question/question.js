var questionAndAnswer = angular.module('QuestionAndAnswer');

questionAndAnswer.factory('Question', function ($resource, serverRoutes) {
  return $resource(serverRoutes.questions + '/:id/:reletedEntity', null, {
    getAll: {
      method: 'GET'
    },
    getById: {
      method: 'GET',
      params: { id: '@id' }
    },
    getQuestionsAnswers: {
      method: 'GET',
      params: { id: '@id', reletedEntity: 'answers' }
    },
    getQuestionUser: {
      method: 'GET',
      params: { id: '@id', reletedEntity: 'user' }
    },
    query: {
      method: 'GET',
      isArray: false
    }
  });
});
