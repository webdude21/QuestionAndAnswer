'use strict';
questionAndAnswer.directive('question', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/question.html',
    replace: true,
    scope: {
      question: '='
    }
  }
});
