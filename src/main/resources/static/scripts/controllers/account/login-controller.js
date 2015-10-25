questionAndAnswer.controller('loginController', function ($scope, $location, notifier, auth) {
   
    $scope.viewModel = {
            login: function (user) {
                auth.login(user).then(function (response) {
                    if (response) {
                        notifier.success('Successful login!');
                    } else {
                        notifier.error(response.data.message);
                    }
                }, function (error) {
                    notifier.error(error.data.message);
                });
            },
            logout: function () {
                auth.logout().then(function () {
                    notifier.success('Successful logout!');
                    if ($scope.user) {
                        $scope.user.username = '';
                        $scope.user.password = '';
                    }
                    $location.path('/');
                }, function (error) {
                    notifier.error(error.data.reason);
                });
            }
    }
});