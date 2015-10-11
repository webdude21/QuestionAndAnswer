questionAndAnswer.controller('PageController', function PageController ($scope, author, appTitle, authorLink){
	
	$scope.viewModel = {
	    author: author, authorLink: authorLink, appTitle: appTitle
	};
});