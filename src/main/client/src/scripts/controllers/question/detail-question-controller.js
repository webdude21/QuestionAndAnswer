questionAndAnswer.controller('DetailQuestionsController', function ($routeParams, CustomViews) {
  this.question = CustomViews.getQuestionById({ id: $routeParams.id });
  this.upvote = function (id) {
    CustomViews.upvoteAnswer({ id: id });
  }
});
