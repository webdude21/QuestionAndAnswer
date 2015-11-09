questionAndAnswer.controller('QuestionsController', function QuestionsController (QuestionResource, $http, notifier){
        
        this.request = { sort: 'title', page: 1, size: 5, sortDirection: 'asc', title: '' };
        
        this.delete = function (question){
            $http.delete(question._links.self.href).then(function(){
                notifier.success("Deleted!");
            }, notifier.error);
        };

        this.query = function (req){
            if (req.page < 1){
                    req.page = 1;
                    return;
            }
                
            if (req.size < 1){
                    req.size = 1;
                    return;
            }

            this.list = QuestionResource.query({
                sort: [req.sort, req.sortDirection].join(','), page: req.page - 1, size: req.size
            });
        };

        this.query(this.request);
});