questionAndAnswer.controller('PageController', function PageController ($scope, author, appTitle, authorLink, auth,
        identity) {

    if (!identity.isAuthenticated()) { 
        auth.alredyLoggedIn();
    }

    $scope.viewModel = {
        author: author,
        authorLink: authorLink,
        appTitle: appTitle
    };
});