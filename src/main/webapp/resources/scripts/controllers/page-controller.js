questionAndAnswer.controller('PageController', function PageController ($scope, author, appTitle,
        authorLink){
	$scope.author = author;
	$scope.authorLink = authorLink;
	$scope.appTitle = appTitle;
});