var questionAndAnswer = angular.module('QuestionAndAnswer');

questionAndAnswer.factory('Question', function Question($resource) {
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
