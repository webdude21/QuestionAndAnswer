questionAndAnswer.controller('RegisterController', function (notifier, auth, $location) {
	this.register = function (user) {
		auth.register(user).then(function (response) {
			if (response) {
				notifier.success('Successfully registered!');
			}
			$location.path('/');
		});
	};
});
