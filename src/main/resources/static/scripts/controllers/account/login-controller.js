questionAndAnswer.controller('LoginController', function ($location, notifier, auth) {

    this.login = function (user) {
        auth.login(user).then(function (response) {
            if (response) {
                notifier.success('Successful login!');
            } else {
                notifier.error("Login failed");
            }
        }, notifier.error);
    };

    this.logout = function () {
        auth.logout().then(function () {
            notifier.success('Successful logout!');
            if (this.user) {
                this.user.username = '';
                this.user.password = '';
            }
            $location.path('/');
        }, function (error) {
            notifier.error(error.data.reason);
        });
    };
});