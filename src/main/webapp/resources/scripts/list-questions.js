var QuestionsBox = React.createClass({displayName: 'QuestionsBox',
  render: function() {
    return (
      React.createElement('h4', {className: "questionsBox"},
        "Latest questions:"
      )
    );
  }
});
React.render(
  React.createElement(QuestionsBox, null),
  document.getElementById('content')
);