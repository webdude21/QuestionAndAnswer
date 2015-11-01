questionAndAnswer.controller('AskQuestionsController', function AskQuestionsController (QuestionResource, notifier) {

    this.submit = function (question) {
        QuestionResource.createNew(question).then(function () {
            notifier.success("Success!");
        }, notifier.error);
    }
});