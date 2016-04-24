questionAndAnswer.controller('AskQuestionsController',
	function AskQuestionsController(Question, notifier, identity, $location, serverRoutes) {

		var onSuccessfulSave = function (savedQuestion, headers) {
			notifier.success('The question is successfully saved!');
			$location.path('/question/' + headers().location.split("/").slice(-1));
		};

		this.submit = function (question) {
			var resultQuestion;
			question.user = serverRoutes.usersRoute + identity.currentUser.id;
			resultQuestion = new Question(question);
			resultQuestion.$save(onSuccessfulSave);
		};
	});
