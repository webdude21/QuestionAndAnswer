questionAndAnswer.factory('authenticationInterceptor', ['identity', function (identity) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if (identity.isAuthenticated()) {
                config.headers.Authorization = 'Basic ' + identity.authToken();
            }
            return config;
        }
    };
}]);