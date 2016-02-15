var questionAndAnswer = angular.module('QuestionAndAnswer');

questionAndAnswer.factory('CustomViews', function ($resource, serverRoutes) {
  return $resource(serverRoutes.customViews + '/:type/:id/:action', null, {
    getQuestionById: {
      method: 'GET',
      params: { id: '@id', type: 'question' }
    },
    upvoteAnswer: {
      method: 'PUT',
      params: { id: '@id', type: 'answer', action: 'upvote' }
    }
  });
});
