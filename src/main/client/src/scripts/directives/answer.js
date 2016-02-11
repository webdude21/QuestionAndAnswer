'use strict';
questionAndAnswer.directive('answer', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/answer.html',
    replace: true,
    scope: {
      answer: '='
    }
  }
});
