questionAndAnswer.factory('QuestionResource', function QuestionResource ($resource) {
    return $resource('/api/questions', null, {
        getAll: {
            method: 'GET',
        },
        query: {
            method: 'GET',
            isArray: false
        }
    });
});