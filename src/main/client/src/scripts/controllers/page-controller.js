questionAndAnswer.controller('PageController', function ($scope, credits, auth, identity) {

  if (!identity.isAuthenticated()) {
    auth.alredyLoggedIn();
  }

  $scope.viewModel = {
    author: credits.author,
    authorLink: credits.authorLink,
    appTitle: credits.appTitle
  };
});
