'use strict';
questionAndAnswer.directive('answer', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/answer.html',
		replace: true,
		scope: {
			answer: '='
		},
		controller: function ($scope, CustomViews, notifier) {
			$scope.upVote = function (id) {
				CustomViews.upvoteAnswer({ id: id })
					.$promise
					.then(function (msg) {
						notifier.success(msg);
						$scope.answer.votesCount += 1;
					});
			};

			$scope.unVote = function (id) {
				CustomViews.unVoteAnswer({ id: id })
					.$promise
					.then(function (msg) {
						notifier.success(msg);
						$scope.answer.votesCount -= 1;
					});
			};
			
		}
	}
});
