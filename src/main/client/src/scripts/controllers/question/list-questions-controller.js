questionAndAnswer.controller('QuestionsController', function (Question, $http, notifier) {

  this.getDetailLink = function (question) {
    return '/question/' + question._links.self.href.split("/").slice(-1);
  };

  this.request = {
    sort: 'title',
    page: 1,
    size: 5,
    sortDirection: 'asc',
    title: ''
  };

  this.delete = function (question) {
    $http.delete(question._links.self.href)
      .then(function () {
        notifier.success("Deleted!");
      }, notifier.error);
  };

  this.query = function (req) {
    if (req.page < 1) {
      req.page = 1;
      return;
    }

    if (req.size < 1) {
      req.size = 1;
      return;
    }

    this.list = Question.query({
      sort: [req.sort, req.sortDirection].join(','),
      page: req.page - 1,
      size: req.size
    })
  };

  this.query(this.request);
});
