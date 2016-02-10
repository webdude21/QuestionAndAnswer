'use strict';
questionAndAnswer.directive('question', function () {
  return {
    restrict: 'EA',
    templateUrl: 'templates/directives/question.html',
    replace: true,
    scope: {
      question: '@'
    }
  }
});
