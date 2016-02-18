questionAndAnswer.factory('auth', function ($http, $q, identity, serverRoutes) {
  var tryToLogin = function () {
    var user = {};
    $http.get(serverRoutes.currentUser).then(function (response) {
      if (response.status === 200 && response.data.principal) {
        angular.extend(user, response.data.principal);
        identity.currentUser = user;
      }
    });
  };

  return {
    alredyLoggedIn: function () {
      if (!this.haveCheckedLogin) {
        tryToLogin();
      }

      this.haveCheckedLogin = true;
    },
    register: function (user) {
      return $http.post(serverRoutes.register, user);
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
          var user = {};
          angular.extend(user, response.data.principal);
          identity.currentUser = user;
          deferred.resolve(true);
        } else {
          deferred.resolve(false);
        }
      }, function (response) {
        deferred.reject(response);
      });

      return deferred.promise;
    },
    logout: function () {
      /* a very dirty hack here */
      $http.get(serverRoutes.currentUser, {
        headers: {
          authorization: "Basic " + btoa('wrong:wrong')
        }
      }).then(function (response) {
        if (response.status === 401) {
          var user = {};
          identity.currentUser = user;
          deferred.resolve(true);
        } else {
          deferred.resolve(false);
        }
      }, function (response) {
        deferred.reject(response);
      });

      var deferred = $q.defer();

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
});
