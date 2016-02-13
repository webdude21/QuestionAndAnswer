questionAndAnswer.controller('DetailQuestionsController', function ($routeParams, Question) {
  this.question = {};

  var questionId = { id: $routeParams.id };

  this.question.current = Question.getById(questionId);
  this.question.answers = Question.getQuestionsAnswers(questionId);
  this.question.user = Question.getQuestionUser(questionId)
});
