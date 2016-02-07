var questionAndAnswer = angular.module('QuestionAndAnswer');

questionAndAnswer.factory('QuestionResource', function QuestionResource($resource) {
  return $resource('/api/questions/:id', null, {
    getAll: {
      method: 'GET'
    },
    getById: {
      method: 'GET',
      params: { id: '@id' }
    },
    createNew: {
      method: 'POST'
    },
    query: {
      method: 'GET',
      isArray: false
    }
  });
});
