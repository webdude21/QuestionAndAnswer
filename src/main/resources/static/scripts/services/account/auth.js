questionAndAnswer.factory('auth', function ($http, $q, identity, serverRoutes) {
    return {
        login: function (user) {
            var headers = user ? {
                authorization: "Basic " + btoa(user.username + ":" + user.password)
            } : {};

            var deferred = $q.defer();

            $http.get(serverRoutes.currentUser, {
                headers: headers
            }).then(function (response) {
                if (response.status === 200 && response.data.principal) {
                    var user = {};
                    angular.extend(user, response.data.principal);
                    identity.currentUser = user;
                    deferred.resolve(true);
                } else {
                    deferred.resolve(false);
                }
            }, function (response) {
                deferred.reject(response);
            })

            return deferred.promise;
        },
        logout: function () {
            identity.currentUser = undefined;
        },
        isAuthenticated: function () {
            if (identity.isAuthenticated()) {
                return true;
            } else {
                return $q.reject('not authorized');
            }
        },
        isAuthorizedForRole: function (role) {
            if (identity.isAuthorizedForRole(role)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }
        },
        isAuthorizedForAnyOfTheFollowingRoles: function (roles) {
            if (!(roles instanceof Array)) {
                throw new Error('The method expects an array');
            }

            if (identity.isAuthorizedForAnyOfTheFollowingRoles(roles)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }
        }

    }
})