questionAndAnswer.controller('LoginController', function ($location, notifier, auth, identity) {
  this.identity = identity;
  this.login = function (user) {
    auth.login(user).then(function (response) {
      if (response) {
        var __newVar__20160209185645538606 = 'Successful login!';
        notifier.success(__newVar__20160209185645538606);
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
