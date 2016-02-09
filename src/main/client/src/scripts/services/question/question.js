var questionAndAnswer = angular.module('QuestionAndAnswer');

questionAndAnswer.factory('Question', function ($resource) {
  return $resource('/api/questions/:id', null, {
    getAll: {
      method: 'GET'
    },
    getById: {
      method: 'GET',
      params: { id: '@id' }
    },
    query: {
      method: 'GET',
      isArray: false
    }
  });
});
