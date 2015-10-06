questionAndAnswer.controller('QuestionsController', function QuestionsController ($scope,
        QuestionResource){
	
	$scope.request = {
	    sort: 'title', page: 0, size: 5, sortDirection: "asc"
	};

	$scope.query = function (queryObject){
        if (queryObject.page < 0){
            queryObject.page = 0;
            return;
        }
		$scope.viewModel = QuestionResource.query($scope.request);
	};

	$scope.query($scope.request);
});