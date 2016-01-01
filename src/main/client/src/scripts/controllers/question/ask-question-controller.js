questionAndAnswer.controller('AskQuestionsController', function AskQuestionsController(QuestionResource, notifier, identity) {

    this.submit = function (question) {
        question.user = "/api/users/" + identity.currentUser.id;
        QuestionResource.createNew(question);
    }
});