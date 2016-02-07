questionAndAnswer.controller('LoginController', function ($location, notifier, auth, identity) {
  this.identity = identity;
  this.login = function (user) {
    auth.login(user).then(function (response) {
      if (response) {
        notifier.success('Successful login!');
      } else {
        notifier.error('Login failed');
      }
    }, notifier.error);
  };

  this.logout = function () {
    auth.logout();
    notifier.success('Successful logout!');
    this.user = {};
    $location.path('/');
  };
});
