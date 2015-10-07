questionAndAnswer.factory('QuestionResource', function QuestionResource ($resource){
	return $resource('/api/questions/:id', null, {
	    getById: {
	        method: 'GET', params: {
		        id: '@id'
	        },
	    }, update: {
	        method: 'PUT', params: {
		        id: '@id'
	        }
	    }, deleteById: {
	        method: 'DELETE', params: {
		        id: '@id'
	        }
	    }, getAll: {
		    method: 'GET',
	    }, query: {
	        method: 'GET', isArray: false
	    }
	});
});