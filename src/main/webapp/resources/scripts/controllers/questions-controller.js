questionAndAnswer.controller('QuestionsController', function QuestionsController ($scope, $routeParams,
        QuestionResource){

	$scope.questions = QuestionResource.getAll().$promise.then(function(questions){
		$scope.questions = questions._embedded.questions
	});

//	$scope.query = function (queryObject){
//		if (queryObject.page <= 0) {
//			queryObject.page = 1;
//			return;
//		}
//
//		QuestionResource.query(queryObject).$promise.then(function (questions){
//			$scope.questions = questions_embedded.questions
//		});
//	};
//	$scope.questions = QuestionResource.query($scope.request);
});