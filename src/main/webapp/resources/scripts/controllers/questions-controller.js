questionAndAnswer.controller('QuestionsController', function QuestionsController ($scope,
        QuestionResource){
	
	$scope.request = {
	    sort: 'title', page: 0, size: 5,
	};

	$scope.query = function (queryObject){
        if (queryObject.page < 0){
            queryObject.page = 0;
            return;
        }
		$scope.viewModel = QuestionResource.query($scope.request);
		console.log($scope.viewModel)
		
	};

	$scope.query($scope.request);
});