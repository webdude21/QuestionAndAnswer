questionAndAnswer.factory('auth', function ($http, $q, identity, UsersResource, serverRoutes) {
    return {
        signup: function (user) {
            var deferred = $q.defer();

            var user = new UsersResource(user);
            user.$save().then(function () {
                identity.currentUser = user;
                deferred.resolve();
            }, function (response) {
                deferred.reject(response);
            });

            return deferred.promise;
        },
        update: function (user) {
            var deferred = $q.defer();

            var updatedUser = new UsersResource(user);
            updatedUser._id = identity.currentUser._id;
            updatedUser.$update().then(function () {
                identity.currentUser.firstName = updatedUser.firstName;
                identity.currentUser.lastName = updatedUser.lastName;
                deferred.resolve();
            }, function (response) {
                deferred.reject(response);
            });

            return deferred.promise;
        },
        login: function (user) {
            var headers = user ? {
                authorization: "Basic " + btoa(user.username + ":" + user.password)
            } : {};

            var deferred = $q.defer();

            $http.get(serverRoutes.currentUser, {
                headers: headers
            }).then(function (response) {
                if (response.status === 200 && response.data.principal) {
                    var user = new UsersResource();
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
            var deferred = $q.defer();

            $http.post('/auth/logout').success(function () {
                identity.currentUser = undefined;
                deferred.resolve();
            });

            return deferred.promise;
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