questionAndAnswer.factory('UsersResource', function ($resource, serverRoutes) {
    var UsersResource = $resource(serverRoutes.currentUser, {}, {
        update: {
            method: 'PUT',
            isArray: false
        }
    });
    return UsersResource;
});