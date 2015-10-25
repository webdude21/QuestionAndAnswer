questionAndAnswer.factory('UsersResource', function ($resource) {
    var AUTHORIZED_PUBLISHER_ROLES = ['admin', 'editor', 'author'];
    var UsersResource = $resource('/api/users/:id', {
    }, {
        update: {
            method: 'PUT',
            isArray: false
        }
    });

    UsersResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;
    };

    return UsersResource;
});