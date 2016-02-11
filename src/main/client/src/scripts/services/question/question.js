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
    getAnswerRelatedEntities: {
      method: 'GET',
      params: { id: '@id', reletedEntity: '@reletedEntity' }
    },
    query: {
      method: 'GET',
      isArray: false
    }
  });
});
