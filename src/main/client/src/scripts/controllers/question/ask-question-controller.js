questionAndAnswer.controller('AskQuestionsController', function AskQuestionsController(Question, notifier, identity) {

  this.submit = function (question) {
    question.user = "/api/users/" + identity.currentUser.id;
    Question.createNew(question);
  }
});
