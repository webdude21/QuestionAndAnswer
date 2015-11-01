questionAndAnswer.factory('identity', function () {
    return {
        isAuthenticated: function () {
            return !!this.currentUser;
        },
        isAuthorizedForRole: function (role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        },
        isAuthorizedForAnyOfTheFollowingRoles: function (roles) {
            return roles.any(this.isAuthorizedForRole);
        },
        authToken: function () {
            if (user) {
                return btoa(user.username + ":" + user.password)
            }
        }
    }
});