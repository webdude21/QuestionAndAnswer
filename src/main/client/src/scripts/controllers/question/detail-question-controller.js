questionAndAnswer.controller('DetailQuestionsController',
  function DetailQuestionsController($routeParams, QuestionResource) {

    this.question = QuestionResource.getById({ id: $routeParams.id });
  });
