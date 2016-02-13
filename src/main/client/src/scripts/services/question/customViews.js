var questionAndAnswer = angular.module('QuestionAndAnswer');

questionAndAnswer.factory('CustomViews', function ($resource, serverRoutes) {
  return $resource(serverRoutes.customViews + '/:type/:id', null, {
    getQuestionById: {
      method: 'GET',
      params: { id: '@id', type: 'question' }
    },
  });
});
