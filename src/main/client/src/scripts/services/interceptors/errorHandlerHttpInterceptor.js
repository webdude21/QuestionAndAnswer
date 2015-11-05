questionAndAnswer.factory('errorHandlerHttpInterceptor', ['$q', 'errorHandler', function ($q, errorHandler) {
    return {
        responseError: function (serverError) {
            errorHandler.processError(serverError);
            return $q.reject(serverError);
        }
    }
}]);