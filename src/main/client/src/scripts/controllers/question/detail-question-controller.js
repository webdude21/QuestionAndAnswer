questionAndAnswer.controller('DetailQuestionsController', function ($routeParams, CustomViews) {
  this.question = CustomViews.getQuestionById({ id: $routeParams.id });
});
