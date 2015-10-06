questionAndAnswer.controller('QuestionsController', function QuestionsController ($scope,
        QuestionResource){

	// initial values for the request
	$scope.request = {
	    sort: 'title', page: 1, size: 5, sortDirection: 'asc'
	};

	$scope.query = function (req){
		if (req.page < 1) {
			req.page = 1;
			return;
		}

		$scope.viewModel = QuestionResource.query({
		    sort: [req.sort, req.sortDirection].join(','), page: req.page - 1, size: req.size
		});
	};

	$scope.query($scope.request);
});