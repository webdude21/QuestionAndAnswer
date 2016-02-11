questionAndAnswer.controller('DetailQuestionsController',
  function DetailQuestionsController($routeParams, Question) {
    this.question = {};

    this.question.current = Question.getById({ id: $routeParams.id });
    this.question.answers = Question.getAnswerRelatedEntities({ id: $routeParams.id, reletedEntity: 'answers' });
  });
