questionAndAnswer.controller('DetailQuestionsController',
  function DetailQuestionsController($routeParams, Question) {

    this.question = Question.getById({ id: $routeParams.id });
  });
