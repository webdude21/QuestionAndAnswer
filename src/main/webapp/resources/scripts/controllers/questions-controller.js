questionAndAnswer.controller('QuestionsController',
    function QuestionsController($scope, $routeParams, QuestionResource) {

        var promiseResolver = function (questions) {
            $scope.questions = questions._embedded.questions
        };

        QuestionResource.getAll().$promise.then(promiseResolver);

    });