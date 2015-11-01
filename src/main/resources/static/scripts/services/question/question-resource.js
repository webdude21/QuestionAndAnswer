questionAndAnswer.factory('QuestionResource', function QuestionResource ($resource) {
    return $resource('/api/questions', null, {
        getAll: {
            method: 'GET'
        },
        createNew: {
            method: 'POST'
        },
        query: {
            method: 'GET',
            isArray: false
        }
    });
});