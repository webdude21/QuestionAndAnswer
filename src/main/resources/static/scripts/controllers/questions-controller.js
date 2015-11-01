questionAndAnswer.controller('QuestionsController', function QuestionsController ($scope, QuestionResource, $http, notifier){
        
        $scope.request = {
            sort: 'title', page: 1, size: 5, sortDirection: 'asc'
                };
        
        $scope.delete = function (question){
            $http.delete(question._links.self.href).then(function(){
                console.log("deleted");
            }, notifier.error);
        };

        $scope.query = function (req){
                if (req.page < 1){
                        req.page = 1;
                        return;
                }
                
                if (req.size < 1){
                        req.size = 1;
                        return;
                }

                $scope.viewModel = QuestionResource.query({
                    sort: [req.sort, req.sortDirection].join(','), page: req.page - 1, size: req.size
                });
        };

        $scope.query($scope.request);
});