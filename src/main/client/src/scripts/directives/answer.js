'use strict';
questionAndAnswer.directive('answer', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/answer.html',
    replace: true,
    scope: {
      answer: '='
    },
    controller: function ($scope, CustomViews, notifier) {
      $scope.upvote = function (id) {
        CustomViews.upvoteAnswer({ id: id }).$promise.then(function (msg) {
          notifier.success(msg)
          $scope.answer.votesCount += 1;
        });
      }
    }
  }
});
